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
app.get('/api/reservations', (req, res) => {
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
app.post('/api/reservations', (req, res) => {
  const newRecord = req.body; // Get the new record from the request body

  fs.readFile('./dist/attendanceData.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file on add:', err);
      return res.status(500).send('An unexpected error occurred');
    }
    const records = JSON.parse(data);
    records.push(newRecord); // Add the new record to the array

    fs.writeFile('./dist/attendanceData.json', JSON.stringify(records, null, 2), (err) => {
      if (err) {
        console.error('Error writing file after add:', err);
        return res.status(500).send('An unexpected error occurred');
      }
      res.status(201).json(newRecord); // Respond with the new record
    });
  });
});

// DELETE endpoint to delete a record by ID
app.delete('/api/reservations/:id', (req, res) => {
  const { id } = req.params; // Extract the ID from the request URL

  // Read the current records from the file
  fs.readFile('./dist/attendanceData.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file on delete:', err);
      return res.status(500).send('An unexpected error occurred');
    }

    // Parse the data to JSON
    const records = JSON.parse(data);

    // Find the index of the record to delete
    const index = records.findIndex((record) => record.id === id);

    // If the record exists, remove it
    if (index !== -1) {
      records.splice(index, 1); // Remove the record with the matching ID

      // Write the updated records back to the file
      fs.writeFile('./dist/attendanceData.json', JSON.stringify(records, null, 2), (err) => {
        if (err) {
          console.error('Error writing file after delete:', err);
          return res.status(500).send('An unexpected error occurred');
        }
        // Respond to the request indicating the record was successfully deleted
        res.status(204).send(); // 204 No Content
      });
    } else {
      // If the record wasn't found, send a 404 response
      res.status(404).send('Record not found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
