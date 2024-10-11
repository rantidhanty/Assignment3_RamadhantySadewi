# Restful API CRUD Manajemen Inventory

## Description
This project is a Node.js application using Express.js and Sequelize ORM. It provides a RESTful API for CRUD management of inventory, allowing you to create, read, update, and delete inventory items. The application is designed to work with Navicat for database management and Postman for API testing.
## Project Structure
```bash
assignment_3/
├── assets/                  # Static assets and resources
├── config/                  # Database configuration
│   └── config.json
├── controller/              # Controllers for handling requests
│   ├── cart.js
│   └── file.js
├── files/                   # Directory for file uploads or storage
├── middleware/              # Custom middleware functions
│   └── upload.js
├── migrations/              # Sequelize migration files
│   └── 20241010053117-product.js
├── models/                  # Sequelize models
│   ├── index.js
│   └── product.js
├── routes/                  # Route definitions for the API
│   ├── cart.js
│   └── file.js
├── seeders/                 # Sequelize seed files
│   └── 20241010064623-product.js
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Node.js dependencies and scripts
├── package-lock.json        # Lock file for npm dependencies
└── server.js                # Main server file
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/rantidhanty/Assignment3_RamadhantySadewi
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    DATABASE_URL=<your-database-url>
    ```

4. Configure the database:
    Update the `config/config.json` file with your database configuration.

## Usage

1. Run database migrations:
    ```sh
    npx sequelize-cli db:migrate
    ```

2. Seed the database:
    ```sh
    npx sequelize-cli db:seed:all
    ```

3. Start the server:
    ```sh
    npm start
    ```

4. The server will be running on `http://localhost:5000`.

## Endpoints

### Cart
- `GET /cart` - Get all items in the cart
- `POST /cart` - Add an item to the cart
- `DELETE /cart/:id` - Remove an item from the cart

### File
- `GET /image` - Get all files
- `POST /image` - Upload a file

## Technologies Used
Node.js
Express.js
Sequelize ORM
MySQL (via Navicat)
Postman (for API testing)
