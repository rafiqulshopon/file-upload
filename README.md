# Image Upload Backend

This repository contains the backend code for an Image upload service built with Express.js, MongoDB, Multer, and Cloudinary. It supports multiple file uploads, stores images in Cloudinary, and references tasks in a MongoDB database.

## Features

- Upload multiple images with reference to specific tasks.
- Store images in Cloudinary.
- Fetch images based on task ID.
- Manage tasks and view image count per task.
- RESTful API endpoints.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB
- Cloudinary account

### Installing

1. **Clone the repository**

   ```bash
   git clone https://github.com/rafiqulshopon/file-upload.git
   ```

2. **Navigate to the repository folder**

   ```bash
   cd file-upload
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory with the following content:

   ```env
   MONGO_URI=<Your MongoDB URI>
   PORT=<Port number, e.g., 3000>
   CLOUDINARY_CLOUD_NAME=<Your Cloudinary Cloud Name>
   CLOUDINARY_API_KEY=<Your Cloudinary API Key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API Secret>
   ```

5. **Start the server**

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:<PORT>`.

## Usage

### API Endpoints

- **POST /task** - Create a new task.
- **GET /task** - Retrieve all tasks.
- **POST /image** - Upload images for a specific task.
- **GET /image/:taskId** - Retrieve images for a specific task.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
