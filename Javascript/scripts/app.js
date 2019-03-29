//Date: 3/28/19
/*
 Multiplication Table
*/

let getResults = $("#multiplicationTable button");
let displayResults = $("#results");

getResults.on("click", function (e) {
    e.preventDefault();

    let starting = $("#starting").val();
    let ending = $("#ending").val();
    let startingFactor = $("#startingFactor").val();
    let endingFactor = $("#endingFactor").val();

    console.log(starting, ending, startingFactor, endingFactor);

    displayResults.empty();

    if (starting <= ending && startingFactor <= endingFactor) {
        multiplicationTable(starting, ending, startingFactor, endingFactor);
    } else {
        displayResults.append(`<p style="color: red;">Your inputs were incorrect.</p>`)
    }

});


function multiplicationTable(starting, ending, startingFactor, endingFactor) {
    if (startingFactor < endingFactor) {
        factorHandler(starting, ending, startingFactor, endingFactor);
    }
    for (starting; starting <= ending; starting++) {
        let product = starting * startingFactor;
        displayResults.append(`<p>${starting} * ${startingFactor} = ${product}</p>`);
    }
}

function factorHandler(starting, ending, startingFactor, endingFactor) {
    startingFactor++;
    console.log(startingFactor);
    multiplicationTable(starting, ending, startingFactor, endingFactor);
}

// for (starting; starting <= ending; starting++) {
//     let product = starting * startingFactor;
//     displayResults.append(`<p>${starting} * ${startingFactor} = ${product}</p>`);
// }


