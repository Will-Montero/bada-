const products = [
    {
        name: 'Product 1',
        price: '$100',
        image: 'product1.jpg'
    },
    {
        name: 'Product 2',
        price: '$150',
        image: 'product2.jpg'
    },
    {
        name: 'Product 3',
        price: '$200',
        image: 'product3.jpg'
    }
];

let currentIndex = 0;

const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productImage = document.getElementById('product-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateProductDisplay() {
    productName.textContent = products[currentIndex].name;
    productPrice.textContent = products[currentIndex].price;
    productImage.src = products[currentIndex].image;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : products.length - 1;
    updateProductDisplay();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < products.length - 1) ? currentIndex + 1 : 0;
    updateProductDisplay();
});

// Initialize display
updateProductDisplay();
