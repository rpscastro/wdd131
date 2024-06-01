const pizzas = [
    {
        pizzaName: "Brazilian Pepperoni (Calabresa)",
        pizzaId: "bra_pepperoni",

    },
    {
        pizzaName: "Mozzarella",
        pizzaId: "mozzarella",

    },
    {
        pizzaName: "Chicken with Catupiry",
        pizzaId: "catupiry",

    },
    {
        pizzaName: "Chocolate with Strawberry",
        pizzaId: "choco_strawberry",

    },
    {
        pizzaName: "Brigadeiro",
        pizzaId: "brigadeiro",

    },
    {
        pizzaName: "Banana with cinnamon",
        pizzaId: "banana",

    },
    {
        pizzaName: "Beijinho",
        pizzaId: "beijinho",

    },
    {
        pizzaName: "Portuguese",
        pizzaId: "portuguese",

    },
    {
        pizzaName: "Baiana",
        pizzaId: "baiana",

    },
    {
        pizzaName: "Tuna fish",
        pizzaId: "tuna",

    },
    {
        pizzaName: "Paulista",
        pizzaId: "paulista",

    },
    {
        pizzaName: "Endive",
        pizzaId: "endive",

    },
];




function renderPizzas(pizzas) {
    const html = pizzas.map(
        (pizza) => `<option value=${pizza.pizzaId}>${pizza.pizzaName}</option>`
    );
    html.unshift("<option disabled selected value=''>Choose a pizza...</option>");
    document.querySelector("#select").innerHTML = html.join("");
}

renderPizzas(pizzas);


function registerNumberOfReviews() {


    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    numReviews++;

    localStorage.setItem("numReviews-ls", numReviews);


};


document.querySelector("#postReview").addEventListener("click", registerNumberOfReviews());