// const date = new Date();

// // Current Year
// const year = document.getElementById("currentyear").innerHTML = date.getFullYear();

// // Last Modified
// const lastModified = document.getElementById("lastmodified").innerText = `Last Modified: ${date.toLocaleString()}`


const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

/* for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
} */

/* let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
} */

/* studentReport.forEach(studentReports => {
    if (studentReports < LIMIT) {
        console.log(studentReports);
    }
}); */

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);   
    }
}