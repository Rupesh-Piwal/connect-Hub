         //*****CREATE-POST*****//

// Controller function to create a new post
// Destructure 'text' property from request body
// Destructure 'img' property from request body
// Get the ID of the current user making the request
// Find the user by their ID in the database
// Return 404 if user not found
// Validate post content (must have text or image)
// Upload image to Cloudinary if provided
// Upload image to Cloudinary
// Get secure URL of uploaded image
// Create a new post object
// Set user ID for the post
// Set text content for the post
// Set image URL for the post (if provided)
// Save the new post in the database
// Return the new post as JSON response with status 201 (Created)
// Handle errors
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format
  

         //*****DELETE-POST*****//

// Controller function to delete a post
// Find the post by its ID from the request parameters
// Return 404 if post not found
// Check if the current user is authorized to delete the post
// Return 401 if user is not authorized
// Delete associated image from Cloudinary (if exists)
// Extract image ID from the URL
// Delete image from Cloudinary
// Delete the post from the database
// Return success message with status 200
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format


         //*****COMMENT-ON-POST*****//

// Controller function to add a comment on a post
// Destructure 'text' property from request body
// Get the ID of the post from request parameters
// Get the ID of the current user making the request
// Validate presence of 'text' in the request body
// Return 400 if 'text' is not provided
// Find the post by its ID in the database
// Check if the post exists
// Return 404 if post not found
// Create a new comment object with user ID and text
// Push the new comment object into the 'comments' array of the post
// Save the updated post in the database
// Return the updated post as JSON response with status 200
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format
    

         //*****LIKE-UNLIKE-POST*****//

// Controller function to like or unlike a post
// Get the ID of the current authenticated user
// Destructure the post ID from request parameters
// Find the post by its ID in the database
// Check if the post exists
// Return 404 if post not found
// Check if the user has already liked the post
// Unlike post
// Remove user from 'likes' array of the post
// Remove post from 'likedPosts' array of the user
// Filter out the unliked user ID
// Return updated 'likes' array as JSON response
// Like post
// Add user ID to the 'likes' array of the post
// Add post ID to 'likedPosts' array of the user
// Save the updated post with the new like
// Create a new notification for the liked post
// Save the notification in the database
// Get the updated 'likes' array
// Return updated 'likes' array as JSON response
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format
    

         //*****GET-ALL-POST*****//

// Controller function to fetch all posts with user and comment details
// Fetch all posts from the database
// Sort posts by descending order of creation time
// Populate 'user' field and exclude 'password' from the returned user object
// Populate 'comments.user' field and exclude 'password' from the returned user object
// Return an empty array if no posts are found
// Return posts with populated user and comment details as JSON response
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format
 

         //*****GET-LIKED-POST*****//

// Controller function to fetch posts liked by a specific user
// Extract user ID from request parameters
// Find the user by their ID
// Return 404 (Not Found) if user is not found
// Find posts with IDs in the user's 'likedPosts' array
// Populate 'user' field of each post and exclude 'password' from the returned user object
// Populate 'comments.user' field (nested) of each post and exclude 'password' from the returned user object
// Return fetched liked posts as JSON response
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format


         //*****GET-FOLLOWING-POST*****//

// Controller function to fetch posts from users followed by the authenticated user
// Extract authenticated user's ID from request
// Find the authenticated user in the database
// Return 404 (Not Found) if user is not found
// Retrieve the list of users followed by the authenticated user
// Find posts created by users in the 'following' list
// Sort posts by 'createdAt' field in descending order (latest first)
// Populate 'user' field of each post and exclude 'password' from the returned user object
// Populate 'comments.user' field (nested) of each post and exclude 'password' from the returned user object
// Return fetched feed posts as JSON response
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format


         //*****GET-USER-POST*****//

// Controller function to fetch posts created by a specific user
// Extract the username parameter from the request parameters
// Find the user in the database based on the extracted username
// Return 404 (Not Found) if user is not found
// Find posts created by the found user
// Sort posts by 'createdAt' field in descending order (latest first)
// Populate 'user' field of each post and exclude 'password' from the returned user object
// Populate 'comments.user' field (nested) of each post and exclude 'password' from the returned user object
// Return fetched user posts as JSON response
// Log error message to console
// Return 500 (Internal Server Error) with error message in JSON format


