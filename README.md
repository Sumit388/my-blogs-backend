# Routes of this project.

## User Routes: 

### User Sign Up: 
**Description:** User signup
**Route:** /POST /api/users/register
**Access:** PUBLIC

### User Log In: 
**Description:** User login
**Route:** POST /api/users/login
**Access:** PUBLIC

### Edit the Individual User details
**Description:** Update individual user details
**Route:** PATCH /api/users/:id
**Access:** ADMIN, USER to which this entry belongs.

### Get the Individual User details
**Description:** Get individual user details
**Route:** GET /api/users/:id
**Access:** PUBLIC

### Get the details of the all Users
**Description:** Get all user details
**Route:** GET /api/users
**Access:** ADMIN

### Delete the user from the system.
**Description:** delete individual user details
**Route:** DELETE /api/users/:id
**Access:** ADMIN, USER to which this entry belongs.


## Contact Us Routes

### Send a message to the Admin
**Description:** Send a message to the admin
**Route:** POST /api/messages
**Access:** PUBLIC

### View all the messages sent to the Admin
**Description:** Get all messages details
**Route:** GET /api/messages
**Access:** ADMIN & EDITOR
**Filter:** search by: name || email || id , sort by: lastest || oldest

### Delete a message sent to the Admin.
**Description:** delete a message
**Route:** DELETE /api/messages/:id
**Access:** ADMIN


## Blogs related Routes

### View all the blogs on the website
**Description:** Get all blogs
**Route:** GET /api/blogs
**Access:** public
**Filter:** search by: authorName || category || tags, sort by: lastest || oldest || popularity

### View Individual blog details.
**Description:** Get individual blogs
**Route:** GET /api/blogs/:id
**Access:** public

### Add a blog to the website.
**Description:** Upload a blog
**Route:** POST /api/blogs
**Access:** ADMIN & EDITOR

### Delete the blog from our website
**Description:** delete individual blog details
**Route:** DELETE /api/blogs/:id
**Access:** ADMIN, EDITOR

### Update the already present blog on our website
**Description:** Update individual blog details
**Route:** PATCH /api/blogs/:id
**Access:** ADMIN, EDITOR


## Comments of the Blogs Routes

### Add a comment to a blog
**Description:** Post a Comment to the blog
**Route:** POST /api/comments/:blogId
**Access:** USER

### View all the comments on the blog
**Description:** Get all Comments of the blog
**Route:** GET /api/comments/:blogId
**Access:** PUBLIC

### Delete the comments
**Description:** Delete a comment from the blog
**Route:** DELETE /api/comments/:blogId/:commentId/:userId
**Access:** ADMIN, EDITOR, USER to which this comment belongs


# Permissions

## PUBLIC Permissions: 
* User Sign Up, 
* User Log In,
* View any users details,
* Send a message to the Admin
* View all the blogs on the website
* View Individual blog details.
* View all the comments on the blog

## USER Permissions: 
* (Everything with PUBLIC Access)
* Edit the Own User details,
* Delete the Own User details/ account.
* Add a comment to a blog
* Delete the posted comment.

## EDITOR Permissions:
* (Everything with USER Access)
* Add a blog to the website.
* Delete the blog from our website.
* Update the already present blog on our website.
* Delete the comments of any user.

## ADMIN Permissions: 
* (Everything with EDITOR Access)
* Can edit any user details,
* View the details of all registered Users.
* Can delete any users details/account.
* View all the messages sent to the Admin.
* Delete a message sent to the Admin.

