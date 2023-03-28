// Get the current date
const currentDate = new Date();

// Get the date components
const year = currentDate.getFullYear();
const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero if needed
const day = ("0" + currentDate.getDate()).slice(-2); // Add leading zero if needed

// Format the date in different ways
const mmddyyyy = `${month}-${day}-${year}`;
const mmddyyyy_slash = `${month}/${day}/${year}`;
const ddmmyyyy = `${day}-${month}-${year}`;
const ddmmyyyy_slash = `${day}/${month}/${year}`;

// Update the HTML with the formatted dates
document.getElementById("mm-dd-yyyy").textContent = mmddyyyy;
document.getElementById("mm/dd/yyyy").textContent = mmddyyyy_slash;
document.getElementById("dd-mm-yyyy").textContent = ddmmyyyy;
document.getElementById("dd/mm/yyyy").textContent = ddmmyyyy_slash;
