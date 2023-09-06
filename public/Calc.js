const Calc = document.addEventListener("DOMContentLoaded", function () {
    let Prices = document.getElementById("product");
    let Quantity = document.getElementById("quantity");
    let tprice = document.getElementById("price");

    // Add an event listener to handle changes in the select and input fields
    Prices.addEventListener("change", calculateTotalPrice);
    Quantity.addEventListener("input", calculateTotalPrice);

    // Function to calculate the total price
    function calculateTotalPrice() {
        let selectedOption = Prices.value;
        let quantity = Quantity.value;
        let total = 0;

        if (selectedOption === "Yema Tart with ube" || selectedOption === "Yema Tart with peanut") {
            total = quantity * 15;
        } else if (selectedOption === "Mammon") {
            total = quantity * 25;
        }
        // Corrected: Set the value of the "price" input element
        tprice.value = total;
    }
});


