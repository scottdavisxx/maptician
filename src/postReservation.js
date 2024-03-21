import { prependReservationToDom } from './prependReservationToDom';

export function postReservation(formData) {
  fetch('/api/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Only parse the JSON if the response was successful
      } else {
        // Handle HTTP errors
        throw new Error('Failed to save reservation');
      }
    })
    .then((data) => {
      // Append the new entry to the DOM here
      // Assuming you have a function like appendReservationToDOM(data)
      prependReservationToDom(data);

      // Optionally: Clear the form
      document.getElementById('addReservationForm').reset();
      // Optionally: Display a success message
      alert('Reservation added successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      // Display error feedback
      alert(error.message);
    });
}
