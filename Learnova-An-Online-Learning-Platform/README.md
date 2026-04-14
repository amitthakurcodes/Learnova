1. Project Description

Learnova is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

Learnova aims to provide:

• A seamless and interactive learning experience for students
• More accessible and engaging education
• A platform for instructors to showcase expertise
• A way to connect learners across the globe

2. Project Overview

In this project we cover:

• System Architecture
• Front-end
• Back-end
• Database
• API Design
• Deployment (future scope)
• Testing (future scope)
• Future Enhancements

3. System Architecture

The Learnova platform consists of three main components:

• Front-end (Client side)
• Back-end (Server side)
• Database

It follows a client-server architecture where frontend communicates with backend using APIs.

4. Front-end

Built using ReactJS.

Features:

• Dynamic UI
• Responsive design
• Interactive learning experience

Communication:

• REST API integration with backend

5. Back-end

Built using Node.js and Express.js.

Responsibilities:

• User authentication
• Course management
• Data processing
• API handling

6. Database

MongoDB is used.

Features:

• NoSQL database
• Flexible structure
• Scalable storage

Stores:

• User data
• Course data
• Platform data

7. Front-end Pages

For Students:

• Homepage
• Course List
• Wishlist
• Cart Checkout
• Course Content
• User Profile

For Instructors:

• Dashboard
• Insights
• Course Management
• Profile Management

For Admin (future):

• Admin Dashboard
• User Management
• Course Management

8. Tech Stack

• ReactJS
• TailwindCSS
• Redux
• Node.js
• Express.js
• MongoDB



9. API Design

The Learnova platform API is designed using REST architecture. It uses Node.js and Express.js for backend and JSON for data exchange.

9.1 API Principles

• RESTful architecture
• JSON-based data exchange
• Stateless requests
• Secure authentication using JWT
• Standard HTTP methods (GET, POST, PUT, DELETE)

9.2 Authentication APIs

• POST /api/auth/signup → Create new user account
• POST /api/auth/login → Login user and generate JWT token
• POST /api/auth/verify-otp → Verify OTP sent to email
• POST /api/auth/forgot-password → Send password reset link

9.3 Course APIs

• GET /api/courses → Get all courses
• GET /api/courses/:id → Get course by ID
• POST /api/courses → Create new course
• PUT /api/courses/:id → Update course by ID
• DELETE /api/courses/:id → Delete course by ID
• POST /api/courses/:id/rate → Add rating to course

9.4 Sample API Requests & Responses

• Get All Courses

GET /api/courses

Response:

{
  "success": true,
  "data": []
}


• Get Course by ID

GET /api/courses/:id

Response:

{
  "success": true,
  "course": {}
}


• Create Course

POST /api/courses

Request:

{
  "title": "MERN Stack",
  "description": "Full stack course"
}

Response:

{
  "success": true,
  "message": "Course created successfully"
}


• Update Course

PUT /api/courses/:id

Response:

{
  "success": true,
  "message": "Course updated successfully"
}


• Delete Course

DELETE /api/courses/:id

Response:

{
  "success": true,
  "message": "Course deleted successfully"
}