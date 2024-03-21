// TODO Rename to getReservations.js
import { deleteReservation } from './deleteReservation';

export function fetchReservations() {
  const container = document.getElementById('data-container');

  fetch('/api/reservations')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((entry) => {
        // console.log(entry);
        const entryElement = document.createElement('div');
        entryElement.setAttribute('id', entry.id);
        entryElement.classList.add('bg-white', 'rounded-lg', 'p-3', 'mb-4', 'max-w-[400px]', 'w-60', 'grow', 'shadow-md', 'relative');
        entryElement.innerHTML = `
          <p class="font-medium">${entry.userName}</p>
          <p>${entry.locationName}</p>
          <p>${entry.locationAddress}</p>
          <p>${entry.floorName}</p>
          <p>${entry.seatName}</p>
          <button class="delete-button bg-accent w-32 py-1 rounded-md mt-6 text-white absolute bottom-2 right-2 hover:bg-red-600 transition-all ease-in-out duration-200">
            Delete
          </button>
        `;
        const deleteButton = entryElement.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
          // In a production environment this would be a custom dialog.
          const userConfirmed = confirm('Are you sure you want to delete this reservation?');
          if (userConfirmed) {
            deleteReservation(entry.id);
          }
        });
        container.appendChild(entryElement);
      });
    })
    .catch((error) => console.error('Failed to load JSON data: :', error));
}
