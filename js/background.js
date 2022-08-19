const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const todaysImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/0.jpg)`;//${todaysImage}