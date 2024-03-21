export function deleteReservation(entryId) {
  fetch(`/api/reservations/${entryId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        // If delete was successful, remove the element from the DOM
        document.getElementById(entryId).remove();
      } else {
        console.error('Failed to delete reservation');
      }
    })
    .catch((error) => {
      console.error('Failed to delete reservation:', error);
    });
}
