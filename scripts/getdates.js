const date = new Date();

// Current Year
const year = document.getElementById("currentyear").innerHTML = date.getFullYear();

// Last Modified
const lastModified = document.getElementById("lastmodified").innerText = `Last Modified: ${date.toLocaleString()}`
