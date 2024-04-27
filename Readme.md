1) In this Project The Route Goes ton Below Format.
  Index.js ==> routes ==> Controller ==>Database
  (i) In Index.js file, we have created routes for each functionality like users,posts,comments,Auth.
  (ii) From Routes folder we have 4 diffrent Route Files. In each Route folder it is pointing each meathod in Controllers as per the functionality of each route.
  (iii) I have created a config folder with dbconfig.js file which contains Database configurations of MYSQL from code.
2) As For User I have created Four Routes allowing them to perform Login,GetUserById,CreateUser,GetAllUsers. Below are the request and reponse of each
   
==============Creating New User===================
POST  : http://localhost:3000/users/NewUser
Request :
{
    "username": "new_user2",
    "password": "new_password2"
}
Response:
{
    "message": "User created successfully"
}
==================================================
==========To list all users=======================
GET : http://localhost:3000/users/
Request : 
[
    {
        "id": 1,
        "username": "new_user",
        "password": "$2b$10$JQGaw3BIOAnNq5sFH36Q..6A5sH8JoFKaMsM5rCQhnyiKtjreHvh6"
    },
    {
        "id": 2,
        "username": "new_user2",
        "password": "$2b$10$i3lMFdN2kpYinQ8ijrnpjeHypCL2/AzY1BDKb7/N95UeJTasr/3zi"
    }
]
====================================================
=========== USER Login==============================
POST : http://localhost:3000/login/login
Request :
{
    "username": "new_user2",
    "password": "new_password2"
}
Response : 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoibmV3X3VzZXIyIiwiaWF0IjoxNzE0MTcxMjQ1LCJleHAiOjE3MTQxNzQ4NDV9.TH2naQ7xHULMR3GIZEUdXb7qOupWcBulsm7nlatzhEA"
}
3) For Post I have Created GetAllPosts, CreatePost,DeletePost, UpdatePost,GetPostById
==========Create new Posts ============================
POST : http://localhost:3000/posts

Request : 
{
  "title": "New Post",
  "content": "This is the content of the new post",
  "sender": "JohnDoe"
}

Response :
{
    "message": "Post created successfully",
    "postId": 1
}
====================================================
========== Get Post By Id ==========================
GET : http://localhost:3000/posts/1
Response :
{
    "id": 1,
    "title": "New Post",
    "content": "This is the content of the new post",
    "sender": "JohnDoe",
    "created_at": "2024-04-26T22:45:54.000Z"
}
=====================================================
========= Get All Posts==============================
Get : http://localhost:3000/posts
Response :
[
    {
        "id": 1,
        "title": "New Post",
        "content": "This is the content of the new post",
        "sender": "JohnDoe",
        "created_at": "2024-04-26T22:45:54.000Z"
    },
    {
        "id": 2,
        "title": "New Post2",
        "content": "pemek",
        "sender": "JohnDoeRaj",
        "created_at": "2024-04-26T22:52:00.000Z"
    }
]
====================================================
============ Update post based on Id ================
PATCH : http://localhost:3000/posts/2
Request : 
{
  "title": "Updated Post Title",
  "content": "Updated content of the post"
}

Response :
{
    "message": "Post updated successfully"
}
====================================================
4) For Comments I have Created Delete Comment based on Id, CreateComment,CommentByPostId, UpdateComment
============Add new Comments =======================
POST : http://localhost:3000/posts/comments/2
Request :
{
    "content": "This is a new comment on the post",
    "commenter":"Raj"
}
Response :
{
    "message": "Comment added successfully",
    "commentId": 2
}
====================================================
=============Update Comment=========================
PATCH : http://localhost:3000/posts/comments/2
Request :
{
    "content": "This is a new comment on the post",
    "commentId":2
}

Response :
{
    "message": "Comment updated successfully"
}
=========================================================
============ comments for a post based on postId =========
GET : http://localhost:3000/posts/comments/2
Response:
[
    {
        "id": 1,
        "content": "This is a new comment on the post",
        "commenter": "Raj",
        "post_id": 2,
        "created_at": "2024-04-26T23:47:56.000Z"
    },
    {
        "id": 2,
        "content": "This is a new comment on the post",
        "commenter": "Raj",
        "post_id": 2,
        "created_at": "2024-04-26T23:47:57.000Z"
    }
]
==========================================================
===============Delete a comment===========================
DELETE : http://localhost:3000/posts/comments/2
Response:
{
    "message": "Comment deleted successfully"
}

5) To Run Code Set Path to 'Final Project' and write below command in terminal
    Command :: node index.js
   To run Test Set Path to 'Final Project/Tests' and run below Commands
   For UnitTest : 'npx mocha UserTest.js'
   For E2E Test : 'npx mocha E2E.js'
