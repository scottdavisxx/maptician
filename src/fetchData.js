export function fetchData() {
  const container = document.getElementById("data-container");

  fetch("attendanceData.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((entry) => {
        // console.log(entry);
        const entryElement = document.createElement("div");
        entryElement.classList.add(
          "border",
          "rounded-lg",
          "border-blue-600",
          "p-3",
          "mb-4",
          "w-[30%]"
        );
        entryElement.innerHTML = `
          <p>Name: ${entry.userName}</p>
          <p>Location Name: ${entry.locationName}</p>
          <p>Location Address: ${entry.locationAddress}</p>
          <p>Floor: ${entry.floorName}</p>
          <p>Seat: ${entry.seatName}</p>
        `;

        container.appendChild(entryElement);
      });
    })
    .catch((error) => console.error("Failed to load JSON data: :", error));
}
