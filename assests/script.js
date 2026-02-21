//sign-up button 
const signUp_button = document.getElementById('Signup-Button');
signUp_button.addEventListener('click', () => {
    alert("Please sign up to process the invoice details");
});

//addlogic
const productList = document.getElementById('product-list');
const addRowBtn = document.getElementById('add-row-btn');
addRowBtn.addEventListener('click', function () {
    const originalRow = document.querySelector('.product-row');
    const newRow = originalRow.cloneNode(true);
    const allInputs = newRow.querySelectorAll('input, textarea');
    allInputs.forEach(input => {
        input.value = ""; 
    });
    productList.appendChild(newRow);
});

//remove logic
productList.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        const rows = document.querySelectorAll('.product-row');
        if (rows.length > 1) {
            e.target.closest('.product-row').remove();
        } else {
            alert("Atleast one field should be present");
        }
    }
});

