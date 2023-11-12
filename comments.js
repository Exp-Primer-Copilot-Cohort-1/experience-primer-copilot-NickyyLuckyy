// Create web server
// 1. npm init -y
// 2. npm install express
// 3. npm install body-parser
// 4. node comments.js
// 5. Open browser and type http://localhost:3000

// Import express module
const express = require('express');

// Create express server
const server = express();

// Import body-parser module
const bodyParser = require('body-parser');

// Configure body-parser for express
server.use(bodyParser.urlencoded({ extended: true }));

// Create a comments array
const comments = [
  {
    name: 'John',
    comment: 'Hello World!',
    timestamp: new Date()
  },
  {
    name: 'Jane',
    comment: 'Hi, John!',
    timestamp: new Date()
  }
];

// Create a route for GET /comments
server.get('/comments', (req, res) => {
  // Send comments as JSON response
  res.json(comments);
});

// Create a route for POST /comments
server.post('/comments', (req, res) => {
  // Get name and comment from request body
  const name = req.body.name;
  const comment = req.body.comment;

  // Add name, comment and timestamp to comments array
  comments.push({
    name,
    comment,
    timestamp: new Date()
  });

  // Redirect to /comments
  res.redirect('/comments');
});

// Start server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 7. Open browser and type http://localhost:3000/comments
// 8. Open browser and type http://localhost:3000/comments
// 9. Open browser and type http://localhost:3000/comments
// 10. Open browser and type http://localhost:3000/comments
// 11. Open browser and type http://localhost:3000/comments
// 12. Open browser and type http://localhost:3000/comments
// 13. Open browser and type http://localhost:3000/comments
// 14. Open browser and type http://localhost:3000/comments
// 15. Open browser and type http://localhost:3000/comments
// 16. Open browser and type http://localhost:3000/comments
// 17. Open browser and type http://localhost:3000/comments
// 18. Open browser and type http://localhost:3000/comments
// 19. Open browser and type http://localhost:3000/comments
// 20. Open browser and type http://localhost:3000/comments
// 21. Open browser and type http://localhost:3000/comments
// 22. Open browser and type http://localhost:3000/comments
// 23. Open browser and type http://localhost:3000/comments
// 24. Open browser and type http://localhost:3000/comments
// 25. Open browser and type http://localhost:3000/comments
// 26. Open browser and type http://localhost:3000/comments
// 27. Open browser and type http://localhost:3000/comments
// 28. Open browser and type http://localhost:3000/comments
// 29. Open browser and type http://localhost:3000/comments
// 30. Open browser and type http://localhost:3000/comments
// 31. Open browser and type http://localhost:3000/comments
// 32. Open browser and type http://localhost:3000/comments
// 33. Open browser and type http://localhost:3000/comments
// 34. Open browser and type http://localhost:3000/comments
// 35. Open browser and type http://localhost:3000/comments
// 36. Open browser and type http://localhost:3000/comments
// 37. Open browser and type http://localhost:3000/comments
// 38

