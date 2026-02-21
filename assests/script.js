//sign-up button 
const signUp_button = document.getElementById('Signup-Button');
signUp_button.addEventListener('click', () => {
    alert("Please sign up to process the invoice details");
});

//add logic
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

//Calculation logic
const updateGrandTotals = () => {
    let subTotal = 0;
    let totalSGST = 0;
    let totalCGST = 0;
    let totalCess = 0;
    const rows = document.querySelectorAll('.product-row');
    rows.forEach(row => {
        const rowTotal = parseFloat(row.querySelector('.productTotal').value) || 0;
        const rowSGST = parseFloat(row.querySelector('.rowSGST')?.value) || 0; 
        const rowCGST = parseFloat(row.querySelector('.rowCGST')?.value) || 0;
        const rowCess = parseFloat(row.querySelector('.rowCess')?.value) || 0;
        subTotal += rowTotal;
        totalSGST += rowSGST;
        totalCGST += rowCGST;
        totalCess += rowCess;
    });
    document.querySelector('.subTotal').value = subTotal.toFixed(2);
    document.querySelector('.totalSGSTDisplay').value = totalSGST.toFixed(2);
    document.querySelector('.totalCGSTDisplay').value = totalCGST.toFixed(2);
    document.querySelector('.totalCessDisplay').value = totalCess.toFixed(2);
    //final amount
    const finalAmount = subTotal + totalSGST + totalCGST + totalCess;
    document.querySelector('.fullTotal').value = finalAmount.toFixed(2);
};

productList.addEventListener('input', (e) => {
    const row = e.target.closest('.product-row');
    if (e.target.classList.contains('productQuantity') || e.target.classList.contains('productRate')) {
        const qty = parseFloat(row.querySelector('.productQuantity').value) || 0;
        const rate = parseFloat(row.querySelector('.productRate').value) || 0;
        row.querySelector('.productTotal').value = (qty * rate).toFixed(2);
    }
    updateGrandTotals();
});








