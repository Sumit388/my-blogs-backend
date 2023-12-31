**User Routes:** 

- User Sign Up: 
//@desc User signup
//@route POST /api/users/register
//@access PUBLIC

- User Log In: 
//@desc User login
//@route POST /api/users/login
//@access PUBLIC

- Edit the Individual User details
//@desc Update individual user details
//@route PATCH /api/users/:id
//@access ADMIN, USER to which this entry belongs.

- Get the Individual User details
//@desc Get individual user details
//@route GET /api/users/:id
//@access PUBLIC

- Get the details of the all Users
//@desc Get all user details
//@route GET /api/users
//@access ADMIN

- Delete the user from the system.
//@desc delete individual user details
//@route DELETE /api/users/:id
//@access ADMIN, USER to which this entry belongs.


**Contact Us Routes**

- Send a message to the Admin
//@desc Send a message to the admin
//@route POST /api/messages
//@access PUBLIC

- View all the messages sent to the Admin
//@desc Get all messages details
//@route GET /api/messages
//@access ADMIN & EDITOR
//@filters search by: name || email || id , 
           sort by: lastest || oldest

- Delete a message sent to the Admin.
//@desc delete a message
//@route DELETE /api/messages/:id
//@access ADMIN


**Blogs related Routes**

- View all the blogs on the website
//@desc Get all blogs
//@route GET /api/blogs
//@access public
//@filters search by: authorName || category || tags ,
//          sort by: lastest || oldest || popularity

- View Individual blog details.
//@desc Get individual blogs
//@route GET /api/blogs/:id
//@access public

- Add a blog to the website.
//@desc Upload a blog
//@route POST /api/blogs
//@access ADMIN & EDITOR

- Delete the blog from our website
//@desc delete individual blog details
//@route DELETE /api/blogs/:id
//@access ADMIN, EDITOR

- Update the already present blog on our website
//@desc Update individual blog details
//@route PATCH /api/blogs/:id
//@access ADMIN, EDITOR


**Comments of the Blogs Routes**

- Add a comment to a blog
//@desc Post a Comment to the blog
//@route POST /api/comments/:blogId
//@access USER

- View all the comments on the blog
//@desc Get all Comments of the blog
//@route GET /api/comments/:blogId
//@access PUBLIC

- Delete the comments
//@desc Delete a comment from the blog
//@route DELETE /api/comments/:blogId/:commentId/:userId
//@access ADMIN, EDITOR, USER to which this comment belongs


**Permissions:** 

- PUBLIC: 
User Sign Up, 
User Log In,
View any users details,
Send a message to the Admin
View all the blogs on the website
View Individual blog details.
View all the comments on the blog

- USER: 
(*Everything with PUBLIC Access*)
Edit the Own User details,
Delete the Own User details/ account.
Add a comment to a blog
Delete the posted comment.

- EDITOR:
(*Everything with USER Access*)
Add a blog to the website.
Delete the blog from our website.
Update the already present blog on our website.
Delete the comments of any user.

- ADMIN: 
(*Everything with EDITOR Access*)
Can edit any user details,
View the details of all registered Users.
Can delete any users details/account.
View all the messages sent to the Admin.
Delete a message sent to the Admin.

