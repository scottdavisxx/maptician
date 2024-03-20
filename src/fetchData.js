export function fetchData() {
  const container = document.getElementById("data-container");

  fetch("attendanceData.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((entry) => {
        console.log(entry);
        const entryElement = document.createElement("div");
        entryElement.classList.add(
          "bg-white",
          "rounded-lg",
          "p-3",
          "mb-4",
          "max-w-[400px]",
          "min-w-60",
          "grow",
          "shadow-md"
        );
        entryElement.innerHTML = `
          <p class="font-medium">${entry.userName}</p>
          <p>${entry.locationName}</p>
          <p>${entry.locationAddress}</p>
          <p>${entry.floorName}</p>
          <p>${entry.seatName}</p>
        `;

        container.appendChild(entryElement);
      });
    })
    .catch((error) => console.error("Failed to load JSON data: :", error));
}
