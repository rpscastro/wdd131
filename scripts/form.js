const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];




function renderProducts(products) {
    const html = products.map(
        (product) => `<option value=${product.id}>${product.name}</option>`
    );
    html.unshift("<option disabled selected value=''>Choose a product...</option>");
    document.querySelector("#select").innerHTML = html.join("");
}

renderProducts(products);


function registerNumberOfReviews() {


    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

    numReviews++;

    localStorage.setItem("numReviews-ls", numReviews);


};


document.querySelector("#postReview").addEventListener("click", registerNumberOfReviews());