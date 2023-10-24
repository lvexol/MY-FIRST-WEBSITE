function showInfo(productId) {
    const infoElement = document.getElementById(`productInfo${productId}`);
    infoElement.style.display = "block";
}

function hideInfo(productId) {
    const infoElement = document.getElementById(`productInfo${productId}`);
    infoElement.style.display = "none";
}

function showPrice(productId) {
    const priceElement = document.getElementById(`productPrice${productId}`);
    priceElement.style.display = "block";
}
function openImage(imageSrc) {
    const modalId = imageSrc === 'image1.jpg' ? 'imageModal1' : 'imageModal2';
    const modal = document.getElementById(modalId);
    const modalImage = modal.querySelector('.modal-content');
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeImage(imageNumber) {
    const modalId = `imageModal${imageNumber}`;
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function calculateTotal() {
    const product1Count = parseInt(document.getElementById('product1Count').value);
    const product2Count = parseInt(document.getElementById('product2Count').value);

    if (!isNaN(product1Count) && !isNaN(product2Count)) {
        const taxPercentage = (Math.random() * (10 - 2) + 2).toFixed(2);

        document.getElementById('totalCounts').textContent = `Total Product 1 Count: ${product1Count}\nTotal Product 2 Count: ${product2Count}\nTax Percentage: ${taxPercentage}%`;
    } else {
        document.getElementById('totalCounts').textContent = 'Please enter valid values.';
    }
}
function calculateTotal() {
    const product1Quantity = parseInt(document.getElementById('product1').value);
    const product2Quantity = parseInt(document.getElementById('product2').value);
    const country = document.getElementById('country').value;

    const product1Price = 10; 
    const product2Price = 15; 

    let deliveryCharge = 0;

    if (country === 'usa') {
        deliveryCharge = 10;
    } else if (country === 'canada') {
        deliveryCharge = 15;
    } else if (country === 'uk') {
        deliveryCharge = 20;
    }

    const totalBill = product1Quantity * product1Price + product2Quantity * product2Price + deliveryCharge;

    document.getElementById('total').textContent = totalBill;
}
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const product1 = document.getElementById('product1').value;
    const product2 = document.getElementById('product2').value;
    const location = document.getElementById('location').value;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phonePattern = /^\d{10}$/;

    if (name === "") {
        alert("Name cannot be empty.");
        return false;
    }
    
    if (!email.match(emailPattern)) {
        alert("Invalid email format.");
        return false;
    }

    if (!phone.match(phonePattern)) {
        alert("Invalid phone number. Use 10 digits only.");
        return false;
    }

    if (product1 < 0 || product2 < 0) {
        alert("Product count must be non-negative.");
        return false;
    }

    if (location === 'default') {
        alert("Please select a delivery location.");
        return false;
    }

    alert("Order submitted successfully!");
    return true;
}
 function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

const captchaText = generateCaptcha();
document.getElementById('captchaText').textContent = captchaText;

function checkCaptcha() {
    const userInput = document.getElementById('userInput').value;
    if (userInput === captchaText) {
        document.getElementById('captchacorrect').textContent = 'CAPTCHA verification successful!';
    } else {
        document.getElementById('captchaResult').textContent = 'CAPTCHA verification failed. Please try again.';
    }
}

function validateForm() {
    const userInput = document.getElementById('userInput').value;
    if (userInput !== captchaText) {
        alert('CAPTCHA verification failed. Please enter the correct CAPTCHA text.');
        return false;
    }

    return true;
}
function honeypot(){
    
}
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userInput = document.getElementById('userInput').value;

    if (username === "user1" && password === "password" && userInput === captchaText) {
        window.location.href = "home.html";
    } else {
        document.getElementById('error').textContent = "Login failed. Please check your credentials and CAPTCHA.";
    }
}