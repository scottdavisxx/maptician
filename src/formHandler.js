import { v4 as uuidv4 } from 'uuid';

export function formHandler() {
  document.getElementById('addReservationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const uniqueId = uuidv4();
    const userUuid = uuidv4();

    const start = new Date().toISOString();
    const end = new Date().setHours(end.getHours() + 1);

    const formData = {
      id: uniqueId,
      userName: document.getElementById('name').value,
      userId: userUuid,
      locationAddress: document.getElementById('locationAddress').value,
      locationName: document.getElementById('locationName').value,
      floorName: `Floor ${document.getElementById('floorName').value}`,
      seatName: `Seat ${document.getElementById('seatName').value}`,
      start: start,
      end: end,
      isPresent: true,
      isPrivate: document.getElementById('isPrivate').checked,
    };
  });
}
