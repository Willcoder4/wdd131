// Navigation Menu
const menuBar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    menu.classList.toggle('open-menu');
});

body.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBar.contains(e.target)) {
        menuBar.classList.remove('active');
        menu.classList.remove('open-menu');
    };
});

// Temple List
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Cedar City Utah",
    location: "Cedar City, Utah, United States",
    dedicated: "2003, May, 18",
    area: 65000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cedar-city-utah-temple/cedar-city-utah-temple-33347-icon.jpg"  
  },

  {
    templeName: "Concepcion Chile",
    location: "Concepcion, Chile",
    dedicated: "2018, March, 10",
    area: 9600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/concepcion-chile-temple/concepcion-chile-temple-273-main.jpg"
  },

  {
    templeName: "Barranquilla Colombia",
    location: "Barranquilla, Colombia",
    dedicated: "2018, December, 9",
    area: 9600,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"

  }
];

const container = document.getElementById("temple-container");

// Show/Render Temples Function
function showTemples(temps) {
  container.innerHTML = "";
  temps.forEach(temple => {
    const templeCard = document.createElement('figure');
    const info = document.createElement('div');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;
    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;
    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} sq ft`;
    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Image`;
    image.loading = 'lazy';
    image.width = '400'

    info.appendChild(name);
    info.appendChild(location);
    info.appendChild(dedicated);
    info.appendChild(area);

    templeCard.appendChild(info);
    templeCard.appendChild(image);
    container.appendChild(templeCard);
  })
}

showTemples(temples); // Show all temples by default

// Filter Temples Based by Dedicated Year and Area
let home = document.getElementById("home"); 
let old = document.getElementById("old");
let newTemple = document.getElementById("new");
let large = document.getElementById("large");
let small = document.getElementById("small");

//// Get Dedicated Year
function getDedicatedYear(dedicated) {
  const dedicatedYear = parseInt(dedicated.split(',') [0]);
  return dedicatedYear;
};

home.addEventListener('click', () => {
  showTemples(temples); // Show all temples
});

old.addEventListener('click', () => {
  const oldTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
  showTemples(oldTemples); // Show old temples
});

newTemple.addEventListener('click', () => {
  const newTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) > 2000);
  showTemples(newTemples); // Show new temples
});

large.addEventListener('click', () => {
  const largeTemples = temples.filter(temple => temple.area > 90000);
  showTemples(largeTemples); // Show large temples
});

small.addEventListener('click', () => {
  const smallTemples = temples.filter(temple => temple.area < 10000);
  showTemples(smallTemples); // Show small temples
});