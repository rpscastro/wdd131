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
        templeName: "São Paulo Brazil Temple",
        location: "São Paulo, São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59246,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    {
        templeName: "Belém Brazil Temple",
        location: "Belém, Pará, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg"
    },
    {
        templeName: "Campinas Brazil Temple",
        location: "Campinas, São Paulo, Brazil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/campinas-brazil/400x250/campinas-brazil-temple-1030031-wallpaper.jpg"
    },
];


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#ham');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

function renderTemples(temples) {
    const html = temples.map(
      (temple) => `<div class="card">
      <h2 id="title">${temple.templeName}</h2>
      <p><span class="label">LOCATION:</span> ${temple.location}</p>
      <p><span class="label">DEDICATED:</span> ${temple.dedicated}</p>
      <p><span class="label">SIZE:</span> ${temple.area} sq ft</p>
      <picture>
        <img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy" width="400" height="250">
      </picture>
      </div>`
    );
    document.querySelector("#templeList").innerHTML = html.join("");
}

let page = document.querySelector("#page");
//Home - displays all the temples stored in the array.
document.querySelector("#home").addEventListener("click", function () {
        renderTemples(temples);
        page.textContent = "Home";
});

//Old - temples built before 1900
document.querySelector("#old").addEventListener("click", function () {
    const oldTemples = temples.filter((temple) =>
        temple.dedicated.split(",")[0] < 1900
    );
    renderTemples(oldTemples);
    page.textContent = "Old";
});

//New - temples built after 2000
document.querySelector("#new").addEventListener("click", function () {
    const newTemples = temples.filter((temple) =>
        temple.dedicated.split(",")[0] > 2000
    );
    renderTemples(newTemples);
    page.textContent = "New";
});

//Large - temples larger than 90000 square feet
document.querySelector("#large").addEventListener("click", function () {
    const largeTemples = temples.filter((temple) =>
        temple.area > 90000
    );
    renderTemples(largeTemples);
    page.textContent = "Large";
});

//Small - temples smaller than 10000 square feet
document.querySelector("#small").addEventListener("click", function () {
    const smallTemples = temples.filter((temple) =>
        temple.area < 10000
    );
    renderTemples(smallTemples);
    page.textContent = "Small";
});

renderTemples(temples);
page.textContent = "Home";
