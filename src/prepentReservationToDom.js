import { deleteReservation } from './deleteReservation.js';

export function prependReservationToDom(reservation) {
  const container = document.getElementById('data-container');
  const entryElement = document.createElement('div');
  entryElement.setAttribute('id', reservation.id);
  entryElement.classList.add('bg-white', 'rounded-lg', 'p-3', 'mb-4', 'max-w-[400px]', 'min-w-60', 'grow', 'shadow-md', 'relative');
  entryElement.innerHTML = `
    <p class="font-medium">${reservation.userName}</p>
    <p>${reservation.locationName}</p>
    <p>${reservation.locationAddress}</p>
    <p>${reservation.floorName}</p>
    <p>${reservation.seatName}</p>
    <button class="delete-button bg-accent w-32 py-1 rounded-md mt-6 text-white absolute bottom-2 right-2 hover:bg-secondary transition-all ease-in-out duration-200">
      Delete
    </button>
  `;
  const deleteButton = entryElement.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    deleteReservation(reservation.id);
  });
  // Append the new element to the container
  container.prepend(entryElement);
}
