function getRandomBorderRadius() {
    let rand = Array.from({ length: 4 }, () => Math.random());

    return `
        ${rand[0] * 50 + 50}% 
        ${rand[1] * 40 + 60}% 
        ${rand[2] * 30 + 70}% 
        ${rand[3] * 50 + 50}% / 
        ${rand[0] * 40 + 60}% 
        ${rand[1] * 30 + 70}% 
        ${rand[2] * 50 + 50}% 
        ${rand[3] * 20 + 80}%
    `;
}

const numBlobs = 3;
const container = document.body;

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createBlob(index) {
    const blob = document.createElement("div");
    blob.classList.add("blob");
    blob.style.top = `${random(10, 90)}%`;
    blob.style.left = `${random(10, 90)}%`;
    blob.style.borderRadius = `${random(40, 80)}% ${random(40, 80)}% ${random(40, 80)}% ${random(40, 80)}% / ${random(40, 80)}% ${random(40, 80)}% ${random(40, 80)}% ${random(40, 80)}%`;

    const duration = 50; // Losowa długość animacji
    const animationName = `fly${index}`;

    const randomVar1 = random(10, 30);
    const randomVar2 = random(40, 60);
    const randomVar3 = random(70, 90);
    
    // Generowanie dynamicznej animacji
    const keyframes = `
        @keyframes ${animationName} {
            0% { top: ${random(10, 90)}%; left: ${random(10, 90)}%;}
            ${randomVar1}% { top: ${random(10, 90)}%; left: ${random(10, 90)}%;}
            ${randomVar2}% { top: ${random(10, 90)}%; left: ${random(10, 90)}%;}
            ${randomVar3}% { top: ${random(10, 90)}%; left: ${random(10, 90)}%;}
            100% { top: ${random(10, 90)}%; left: ${random(10, 90)}%;}
        }
    `;

    // Dodanie animacji do stylu strony
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    blob.style.animation = `${animationName} ${duration}s infinite ease-in-out alternate`;

    container.appendChild(blob);
}

// Tworzenie blobów
for (let i = 0; i < numBlobs; i++) {
    createBlob(i);
}

const blobs = document.querySelectorAll('.blob');

function changeBorderRadius() {
    blobs.forEach(b => {
        b.style.borderRadius = getRandomBorderRadius();
    })
}

setInterval(changeBorderRadius, 1000);