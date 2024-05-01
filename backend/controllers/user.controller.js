//****getUserProfile****//

// Import necessary modules
// Import your User model (adjust the path as needed)
// Controller function to get user profile by username
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

// Extract the 'username' parameter from request URL
// Find the user in the database by username and exclude the 'password' field
// Check if user is found
// If user is not found, return a 404 Not Found response
// If user is found, return the user profile as a JSON response
// If an error occurs during database operation, handle it here
// Return a 500 Internal Server Error response with the error message

//****followUnfollowUser****//

// Import necessary modules
// Import your User model (adjust the path as needed)
// Import your Notification model (adjust the path as needed)
// Controller function to handle follow/unfollow actions
// Destructure the 'id' parameter from the request URL params
// Find the user to modify by their ID in the database
// Find the current user making the request by their ID
// Check if the user is trying to follow/unfollow themselves
// Return a 400 Bad Request response with an error message
// Check if either the user to modify or the current user is not found
// Return a 400 Bad Request response with an error message
// Check if the current user is already following the user to modify
// Unfollow the user by removing follower and following relationships
// Return a 200 OK response with a success message
// Follow the user by establishing follower and following relationships
// Create a new notification for the followed user
// Save the new notification to the database
// Return a 200 OK response with a success message
// Handle errors
// Return a 500 Internal Server Error response with the error message

if (isFollowing) {
  // Unfollow the user
  await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
  await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });

  res.status(200).json({ message: "User unfollowed successfully" });
} else {
  // Follow the user
  await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
  await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
  // Send notification to the user
  const newNotification = new Notification({
    type: "follow",
    from: req.user._id,
    to: userToModify._id,
  });
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
