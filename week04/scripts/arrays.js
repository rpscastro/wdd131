const array = ["one", "two","three"];
const grades = ['A', 'B', 'C']

// const new_array = array.map((number)=>`<li>${number}<\li>`);


const new_array = array.map(function (number) {
    return `<li>${number}</li>`;
  });

document.getElementById('myList').innerHTML = new_array.join();


let esomeprazole = {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'};

let dose = amount

console.log(dose);