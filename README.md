# ChatWise UK Limited - Backend Assignment

This repository contains the backend implementation for a social media platform. The project is structured into various folders, each serving a specific purpose.

## Folder Structure

### 1. Config Folder
The `config` folder contains functions used for connecting to the MongoDB database.

- `dbConnect.js`: Function to establish and manage the connection to MongoDB.

### 2. Controllers Folder
The `controllers` folder includes two main files:

- `userController.js`: Contains functions for:
  - Registering a user
  - Creating a post
  - Creating a comment
  - Accessing the feed of a user's friends

### 3. Models Folder
The `models` folder contains Mongoose schemas for various entities:

- `user.schema.js`: Schema for user details.
- `comment.schema.js`: Schema for comments on posts.
- `post.schema.js`: Schema for posts.
- `friendRequest.schema.js`: Schema for friend requests.

### 4. Routes Folder
The `routes` folder contains routes/endpoints related to different user actions and friend requests:

- `register.routes.js`: Routes for user registration.
- `friendreq.routes.js`: Routes for handling friend requests.

