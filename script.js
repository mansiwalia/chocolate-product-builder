// Sample data of available chocolates
const chocolates = [
    { name: "Milk Chocolate", price: 100, image: "images/amul.jpg", description: "Smooth and creamy milk chocolate." },
    { name: "Dark Chocolate", price: 125, image: "images/dark.jpg", description: "Rich and intense dark chocolate." },
    { name: "White Chocolate", price: 150, image: "images/Caramel Chocolate.jpg", description: "Sweet and indulgent white chocolate." },
    { name: "Hazelnut Chocolate", price: 137.50, image: "images/haze.jpg", description: "Delicious hazelnut-infused chocolate." },
    { name: "Caramel Chocolate", price: 162.50, image: "images/Caramel Chocolate.jpg", description: "Smooth caramel blended with rich chocolate." },
    { name: "Almond Chocolate", price: 175, image: "images/almond.jpg", description: "Crunchy almonds mixed with creamy chocolate." },
    { name: "Mint Chocolate", price: 150, image: "images/mint.jpg", description: "Refreshing mint combined with smooth chocolate." },
    { name: "Orange Chocolate", price: 187.50, image: "images/orange.jpg", description: "Zesty orange flavor in decadent chocolate." },
    { name: "Raspberry Chocolate", price: 162.50, image: "images/Raspberry Chocolate.jpg", description: "Sweet raspberries paired with rich chocolate." },
    { name: "Coconut Chocolate", price: 175, image: "images/coco.jpg", description: "Exotic coconut flavor in creamy chocolate." }
    // Add more chocolates as needed
];

// Function to create chocolate options dynamically
function createChocolateOptions() {
    const customBoxesDiv = document.getElementById('customBoxes');
    chocolates.forEach(chocolate => {
        const div = document.createElement('div');
        div.classList.add('custom-box');
        div.innerHTML = `
            <label>
                <input type="checkbox" value="${chocolate.price}">
                <img src="${chocolate.image}" alt="${chocolate.name}" class="chocolate-img">
                <p>${chocolate.name}</p>
                <p>₹${chocolate.price.toFixed(2)}</p>
                <p>${chocolate.description}</p>
            </label>
        `;
        customBoxesDiv.appendChild(div);
    });
}

// Function to update total price based on selected chocolates
function updateTotalPrice() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let totalPrice = 0;
    let selectedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            totalPrice += parseFloat(checkbox.value);
            selectedCount++;
        }
    });
    if (selectedCount <= 8) {
        document.getElementById('totalPrice').textContent = `₹${totalPrice.toFixed(2)}`;
        document.getElementById('message').textContent = "";
    } else {
        document.getElementById('message').textContent = "You can select maximum 8 chocolates.";
        checkboxes.forEach(checkbox => {
            if (checkbox.checked && selectedCount > 8) {
                checkbox.checked = false;
                selectedCount--;
            }
        });
    }
}

// Event listener for checkbox change
document.addEventListener('DOMContentLoaded', function () {
    createChocolateOptions();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateTotalPrice);
    });
});
