const menuBar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');

menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('active');
    menu.classList.toggle('open-menu')
});


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

function showTemples(temps) {
  // container.innerHTML = "";
  temps.forEach(temple => {
    const templeCard = document.createElement('figure');
    const info = document.createElement('div');

    const name = document.createElement('h3');
    name.textContent = temple.templeName;
    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;
    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    const size = document.createElement('p');
    size.textContent = `Size: ${temple.area} sq ft`;
    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Image`;
    image.loading = 'lazy';

    info.appendChild(name);
    info.appendChild(location);
    info.appendChild(dedicated);
    info.appendChild(size);

    templeCard.appendChild(info);
    templeCard.appendChild(image);
    container.appendChild(templeCard);
  })
}

showTemples(temples);

let home = document.getElementById("home");
let old = document.getElementById("old");
let newTemple = document.getElementById("new");
let large = document.getElementById("large");
let small = document.getElementById("small");

function getDedicatedYear(dedicated) {
  const dedicated = parseInt(temples.split(',') [0]);
}

home.addEventListener('click', () => {
  showTemples(temples);
})

old.addEventListener('click', () => {
  const oldTemples = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
  showTemples(oldTemples);
})
