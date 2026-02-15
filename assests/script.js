//sign-up button 
const signUp_button = document.getElementById('Signup-Button');
signUp_button.addEventListener('click', () => {
    alert("Please sign up to process the invoice details");
});

//add new row to the invoice
document.getElementById('add-row-btn').addEventListener('click', function () {
    const productList = document.getElementById('product-list');
    const newRowHTML = `
    <div class="product-row grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_0.5fr] gap-2 mt-2 sm:grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1fr_0.5fr] items-center">
      <div class="flex flex-col gap-3">
        <textarea class="border border-gray-400 w-full p-2 text-sm h-10" placeholder="Product Details"></textarea>
        <input type="text" class="border border-gray-300 p-1" placeholder="HSN/SAC">
      </div>
      <input type="number" class="border border-gray-300 w-full text-center h-10" placeholder="0" />
      <input type="number" class="border border-gray-300 w-full text-center h-10" placeholder="0.00" />
      <input type="number" class="border border-gray-300 w-full text-center h-10" placeholder="0" />
      <input type="number" class="border border-gray-300 w-full text-center h-10" placeholder="0" />
      <input type="number" class="border border-gray-300 w-full text-center h-10" placeholder="0" />
      <input readonly class="border border-gray-300 w-full text-center h-10 bg-gray-100" placeholder="0" />
      <button type="button" class="remove-btn text-red-500 hover:text-red-700 font-bold text-xl">✕</button>
    </div>`;
    productList.insertAdjacentHTML('beforeend', newRowHTML);
});

const productList = document.getElementById('product-list');
productList.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        const row = e.target.closest('.product-row');
        row.remove();
        console.log("Row deleted instantly!");
    }
})
