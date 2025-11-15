const year = new Date();
const date = new Date();

// Current Year
const currentYear = year.getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

// Last Modified
const lastModified = date.toLocaleString();
document.getElementById("lastmodified").innerHTML = `Last Modification: ${lastModified}`