//make a button that increments a counter and displays the value
//make a button that decrements the counter and displays the value
//make a button that resets the counter to zero and displays the value
//make a button that adds a value to the counter and displays the value
//make a button that subtracts a value from the counter and displays the value

var counter = 0;

function addOne() {
    counter++;
    $("#counter").text(counter);
}

function minusOne() {
    counter--;
    $("#counter").text(counter);
}

function reset() {
    counter = 0;
    $("#counter").text(counter);
}

function addValue() {
    var value = prompt("Enter a number to add to the counter");
    counter = counter + value;
    $("#counter").text(counter);
}

function subtractValue() {
    var value = prompt("Enter a number to subtract from the counter");
    counter = counter - value;
    $("#counter").text(counter);
}

//add click event listeners to the buttons
$("#addOne").on("click", addOne);
$("#minusOne").on("click", minusOne);
$("#reset").on("click", reset);
$("#addValue").on("click", addValue);
