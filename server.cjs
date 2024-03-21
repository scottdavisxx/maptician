const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');

// Middleware to parse JSON bodies
app.use(express.json());

// Conditional middleware for production
// if (process.env.NODE_ENV === 'production') {
//   // Serve static files from 'dist' directory
//   app.use(express.static('dist'));

//   // Handle SPA fallback - serves index.html on any route that doesn't match an API route
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
//   });
// }

// Serve your static files (HTML, CSS, JS)
app.use(express.static('./dist'));

// GET endpoint to retrieve all records
app.get('/api/records', (req, res) => {
  fs.readFile('./dist/attendanceData.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(500).send('An unexpected error occurred');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// POST endpoint to add a record
app.post('/api/records', (req, res) => {
  // Implement logic to add a new record to your JSON file
});

// DELETE endpoint to delete a record by ID
app.delete('/api/records/:id', (req, res) => {
  // Implement logic to delete a record from your JSON file
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
