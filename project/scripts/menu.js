const pizzas = [
    {
        pizzaName: "Brazilian Pepperoni (Calabresa)",
        pizzaKind: "savory",
        saleWeekday: "Friday",
        price: 15.00,
        pizzaDescription: "Pepperoni, onion and olives.",
        imagePath:
            "images/calabresa_4x3.webp"
    },
    {
        pizzaName: "Mozzarella",
        pizzaKind: "savory",
        saleWeekday: "Thursday",
        price: 15.00,
        pizzaDescription: "Mozzarella, tomato and oregano.",
        imagePath:
            "images/mussarela_4x3.webp"
    },
    {
        pizzaName: "Chicken with Catupiry",
        pizzaKind: "savory",
        saleWeekday: "Saturday",
        price: 18.00,
        pizzaDescription: "Chicken and catupiry (Brazilian cream cheese).",
        imagePath:
            "images/frango_catupiry_4x3.webp"
    },
    {
        pizzaName: "Chocolate with Strawberry",
        pizzaKind: "sweet",
        saleWeekday: "Monday",
        price: 20.00,
        pizzaDescription: "Chocolate and strawberries.",
        imagePath:
            "images/chocolate_morango_4x3.webp"
    },
    {
        pizzaName: "Brigadeiro",
        pizzaKind: "sweet",
        saleWeekday: "Tuesday",
        price: 19.00,
        pizzaDescription: "Brigadeiro.",
        imagePath:
            "images/brigadeiro_4x3.webp"
    },
    {
        pizzaName: "Banana with cinnamon",
        pizzaKind: "sweet",
        saleWeekday: "Wednesday",
        price: 17.00,
        pizzaDescription: "Banana, sugar caramel and cinnamon..",
        imagePath:
            "images/banana_canela_4x3.webp"
    },
    {
        pizzaName: "Beijinho",
        pizzaKind: "sweet",
        saleWeekday: "Friday",
        price: 20.00,
        pizzaDescription: "Condensed milk dessert with coconut.",
        imagePath:
            "images/beijinho_4x3.webp"
    },
    {
        pizzaName: "Portuguese",
        pizzaKind: "savory",
        saleWeekday: "Monday",
        price: 19.00,
        pizzaDescription: "Mozzarella cheese, eggs, onion, ham, peas and olives.",
        imagePath:
            "images/portuguesa_4x3.webp"
    },
    {
        pizzaName: "Baiana",
        pizzaKind: "savory",
        saleWeekday: "Tuesday",
        price: 16.00,
        pizzaDescription: "Pepperoni, onion, tomato and pepper.",
        imagePath:
            "images/baiana_4x3.webp"
    },
    {
        pizzaName: "Tuna fish",
        pizzaKind: "savory",
        saleWeekday: "Wednesday",
        price: 20.00,
        pizzaDescription: "Tuna fish, onion, tomato and olives.",
        imagePath:
            "images/atum_4x3.webp"
    },
    {
        pizzaName: "Paulista",
        pizzaKind: "savory",
        saleWeekday: "Thursday",
        price: 17.00,
        pizzaDescription: "Pepperoni, mozzarella cheese and onion.",
        imagePath:
            "images/paulista_4x3.webp"
    },
    {
        pizzaName: "Endive",
        pizzaKind: "savory",
        saleWeekday: "Friday",
        price: 16.00,
        pizzaDescription: "Endive and turkey breast.",
        imagePath:
            "images/escarola_4x3.webp"
    },
];


// create a new Date object
const now = new Date();

// get the current day of the week
const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const dayOfWeek = daysOfWeek[now.getDay()];



/*Change the pizza price according with the weekday of sale*/ 

function updateSalesPrice(pizzas) {

    pizzas.forEach(pizza => {

        if (pizza.saleWeekday === dayOfWeek) {
            pizza.price = 10.00
        };

    });
}



function renderMenu(pizzas) {
    const html = pizzas.map(
        (pizza) => `<div class="card">
                        <picture class="menu">
                            <img  src=${pizza.imagePath} alt=${pizza.pizzaName} loading="lazy" width="400" height="300">
                        </picture>  
                        <h2 class="title">${pizza.pizzaName}</h2>
                        <p class="ingredients"><span >Filling ingredients:</span> ${pizza.pizzaDescription}</p>
                        <p class="price"><span>Price:</span> USD$ ${pizza.price.toFixed(2)}</p>
                    </div>`
    );
    document.querySelector("#pizzaList").innerHTML = html.join("");
}


//All - displays all pizzas.
document.querySelector("#all").addEventListener("click", function () {
    renderMenu(pizzas);

});

//Savory - displays savory pizzas.
document.querySelector("#savory").addEventListener("click", function () {
    const savoryPizzas = pizzas.filter((pizza) =>
        pizza.pizzaKind === "savory"
    );
    console.log(savoryPizzas);
    renderMenu(savoryPizzas);
 
});

//Sweet - displays sweet pizzas.
document.querySelector("#sweet").addEventListener("click", function () {
    const sweetPizzas = pizzas.filter((pizza) =>
        pizza.pizzaKind === "sweet"
    );
    renderMenu(sweetPizzas);
 
});

//Sale - displays pizzas on Sale.
document.querySelector("#sale").addEventListener("click", function () {

    const salePizzas = pizzas.filter((pizza) =>
        pizza.saleWeekday === dayOfWeek
    );
    renderMenu(salePizzas);
});


updateSalesPrice(pizzas);
renderMenu(pizzas);



