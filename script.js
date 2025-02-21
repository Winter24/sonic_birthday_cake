document.addEventListener("DOMContentLoaded", () => {
    const flame = document.querySelector(".flame");
    if (flame) {
        flame.addEventListener("click", () => {
            if (flame.style.opacity === "0") {
                flame.style.opacity = "1";
                flame.style.animation = "flicker 1s ease-in-out alternate infinite";
            } else {
                flame.style.opacity = "0";
                flame.style.animation = "none";
            }
        });
    }
    
    const sonicContainer = document.querySelector(".sonic-container");
    for (let i = 0; i < 5; i++) {
        let sonic = document.createElement("div");
        sonic.classList.add("sonic");
        sonic.style.left = `${Math.random() * 90}vw`; // Ensure full screen width coverage
        sonic.style.animationDuration = `${Math.random() * 3 + 3}s`;
        sonicContainer.appendChild(sonic);
    }
});