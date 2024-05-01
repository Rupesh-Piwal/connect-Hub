export const getUserProfile = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username }).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in getUserProfile: ", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const followUnfollowUser = async (req, res) => {
	try {
		const { id } = req.params;
		const userToModify = await User.findById(id);
		const currentUser = await User.findById(req.user._id);

		if (id === req.user._id.toString()) {
			return res.status(400).json({ error: "You can't follow/unfollow yourself" });
		}

		if (!userToModify || !currentUser) return res.status(400).json({ error: "User not found" });

		const isFollowing = currentUser.following.includes(id);

		if (isFollowing) {
			
			await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
			await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });

			res.status(200).json({ message: "User unfollowed successfully" });
		} else {
			
			await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
			await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
			
			const newNotification = new Notification({
				type: "follow",
				from: req.user._id,
				to: userToModify._id,
			});

			await newNotification.save();

			res.status(200).json({ message: "User followed successfully" });
		}
	} catch (error) {
		console.log("Error in followUnfollowUser: ", error.message);
		res.status(500).json({ error: error.message });
	}
}



//****getSuggestedUsers****//

// Controller function to retrieve suggested users for the current user
// Get the ID of the current user making the request
// Retrieve the list of users followed by the current user
// Use aggregation to find users who are not the current user and randomly sample 10 users
// Exclude the current user's ID
// Randomly select 10 users
// Filter out users who are already followed by the current user
// Get the first 4 suggested users from the filtered list
// Remove password field from each suggested user (for security reasons)
// Return the suggested users as a JSON response with HTTP status 200 (OK)
// Handle errors

//****updateUser****//

// Controller function to update user profile information
// Destructure request body properties
// Destructure and initialize profileImg and coverImg from req.body
// Get the ID of the current user making the request
// Find the user by their ID in the database
// Return 404 if user not found
// Validate password inputs
// Check and update password if provided
// Compare currentPassword with hashed password
// Return error if passwords do not match
// Generate salt for hashing
// Hash and update the password
// Handle profile image upload and update
// Delete existing profile image from cloudinary
// Upload new profile image to cloudinary
// Get secure URL of uploaded image
// Handle cover image upload and update
// Delete existing cover image from cloudinary
// Upload new cover image to cloudinary
// Get secure URL of uploaded image
// Update user's profile information based on provided inputs or retain existing values
// Save updated user profile
// Remove password field from the user object before sending response
// Return updated user profile information as JSON response with status 200 (OK)
// Handle errors
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format
