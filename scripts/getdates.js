const date = new Date();

// Current Year
const currentYear = document.getElementById("currentyear").innerHTML = date.getFullYear();

// Last Modified
const lastModified = document.getElementById("lastmodified").innerText = `Last Modified: ${document.lastModified}`; //The lastModified property returns the date and time on which the current document was last modified