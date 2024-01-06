# Routes of this project.

## User Routes: 

### User Sign Up: 
**Description:** User signup <br />
**Route:** /POST /api/users/register <br />
**Access:** PUBLIC <br />

### User Log In: 
**Description:** User login <br />
**Route:** POST /api/users/login <br />
**Access:** PUBLIC <br />

### Edit the Individual User details
**Description:** Update individual user details <br />
**Route:** PATCH /api/users/:id <br />
**Access:** ADMIN, USER to which this entry belongs. <br />

### Get the Individual User details
**Description:** Get individual user details <br />
**Route:** GET /api/users/:id <br />
**Access:** PUBLIC <br />

### Get the details of the all Users
**Description:** Get all user details <br />
**Route:** GET /api/users <br />
**Access:** ADMIN <br />

### Delete the user from the system.
**Description:** delete individual user details <br />
**Route:** DELETE /api/users/:id <br />
**Access:** ADMIN, USER to which this entry belongs. <br />


## Contact Us Routes

### Send a message to the Admin
**Description:** Send a message to the admin <br />
**Route:** POST /api/messages <br />
**Access:** PUBLIC <br />

### View all the messages sent to the Admin
**Description:** Get all messages details <br />
**Route:** GET /api/messages <br />
**Access:** ADMIN & EDITOR <br />
**Filter:** search by: name || email || id , sort by: lastest || oldest <br />

### Delete a message sent to the Admin.
**Description:** delete a message <br />
**Route:** DELETE /api/messages/:id <br />
**Access:** ADMIN <br />


## Blogs related Routes

### View all the blogs on the website
**Description:** Get all blogs <br />
**Route:** GET /api/blogs <br />
**Access:** public <br />
**Filter:** search by: authorName || category || tags, sort by: lastest || oldest || popularity <br />

### View Individual blog details.
**Description:** Get individual blogs <br />
**Route:** GET /api/blogs/:id <br />
**Access:** public <br />

### Add a blog to the website.
**Description:** Upload a blog <br />
**Route:** POST /api/blogs <br />
**Access:** ADMIN & EDITOR <br />

### Delete the blog from our website
**Description:** delete individual blog details <br />
**Route:** DELETE /api/blogs/:id <br />
**Access:** ADMIN, EDITOR <br />

### Update the already present blog on our website
**Description:** Update individual blog details <br />
**Route:** PATCH /api/blogs/:id <br />
**Access:** ADMIN, EDITOR <br />


## Comments of the Blogs Routes

### Add a comment to a blog
**Description:** Post a Comment to the blog <br />
**Route:** POST /api/comments/:blogId <br />
**Access:** USER <br />

### View all the comments on the blog
**Description:** Get all Comments of the blog <br />
**Route:** GET /api/comments/:blogId <br />
**Access:** PUBLIC <br />

### Delete the comments
**Description:** Delete a comment from the blog <br />
**Route:** DELETE /api/comments/:blogId/:commentId/:userId <br />
**Access:** ADMIN, EDITOR, USER to which this comment belongs <br />


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

