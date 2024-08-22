---

# Note-Taking App (MERN Stack)

## Overview

This project is a full-stack note-taking application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create, view, update, and delete notes. The backend is powered by Node.js and Express, with MongoDB for data storage. The frontend is developed using React.

## Features

- **Create Notes**: Add new notes with a title and content.
- **View Notes**: View all saved notes.
- **Edit Notes**: Update existing notes.
- **Delete Notes**: Remove notes that are no longer needed.

## Technologies Used

- **Backend**: Node.js, Express.js, Mongoose
- **Frontend**: React.js, Axios
- **Database**: MongoDB (MongoDB Atlas)

## Project Structure

```
note-taking-app/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteList.js
│   │   │   ├── NoteForm.js
│   │   │   ├── NoteItem.js
│   │   ├── App.js
│   ├── package.json
├── server.js
├── models/
│   ├── Note.js
├── routes/
│   ├── notes.js
├── .env
├── package.json
```

## Backend Setup

### 1. Install Dependencies

In the root directory, run:

```bash
npm install
```

This will install the following dependencies:

- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling tool
- `cors`: Middleware for enabling Cross-Origin Resource Sharing
- `dotenv`: Module for loading environment variables

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string:

```
MONGO_URI=your_mongodb_connection_string
```

### 3. Run the Backend Server

Start the server using `nodemon`:

```bash
npm run server
```

The server will run on `http://localhost:5000`.

### 4. API Endpoints

- **GET /notes**: Retrieve all notes
- **POST /notes**: Create a new note
- **GET /notes/:id**: Retrieve a single note by ID
- **PUT /notes/:id**: Update a note by ID
- **DELETE /notes/:id**: Delete a note by ID

## Frontend Setup

### 1. Install Dependencies

Navigate to the `client` directory and run:

```bash
npm install
```

This will install the following dependencies:

- `axios`: Promise-based HTTP client for making API requests

### 2. Run the Frontend Development Server

Start the React development server:

```bash
npm start
```

The application will run on `http://localhost:3000`.

### 3. Key Components

- **`NoteList.js`**: Fetches and displays all notes.
- **`NoteForm.js`**: Form for creating and updating notes.
- **`NoteItem.js`**: Displays individual notes.

### 4. Changes in `App.js`

Ensure that `App.js` imports the components correctly:

```javascript
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
    const [selectedNote, setSelectedNote] = useState(null);

    const handleSave = (newNote) => {
        setSelectedNote(null);
    };

    return (
        <div>
            <h1>Note Taking App</h1>
            <NoteForm note={selectedNote} onSave={handleSave} />
            <NoteList />
        </div>
    );
};

export default App;
```

## Build and Deployment

### 1. Build the Application

To create a production-ready build of the frontend, run the following command inside the `client` directory:

```bash
npm run build
```

This will generate a `build` folder containing static files for the React app.

### 2. Deploying the Application

To deploy the application, you can serve the built files using a static server or deploy them on platforms like Heroku, Vercel, or Netlify.

### 3. Serve the Build Files with Express

You can configure your Express server to serve the static files. In `server.js`, add the following:

```javascript
const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
```

Now, when you deploy your app, the Express server will serve the React frontend.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

---
