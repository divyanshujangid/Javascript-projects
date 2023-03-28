// Get the clock element
const clock = document.getElementById("clock");

// Update the clock every second
setInterval(() => {
    // Get the current time
    const now = new Date();

    // Format the time as HH:MM:SS
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Update the clock element
    clock.value = timeString;
}, 1000);
