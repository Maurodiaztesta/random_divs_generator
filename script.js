const tablero$$ = document.querySelector(".tablero");
const h1$$ = document.querySelector(".h1");

contador = 0;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateDiv() {
    const div$$ = document.createElement("div");
    const tablero$$ = document.querySelector(".tablero")
    div$$.classList.add("div");
    const contador$$ = document.querySelector(".contador");
  
    const size = Math.floor(Math.random() * 200) + 50;
    const x = Math.floor(Math.random() * (window.innerWidth - size));
    const y = Math.floor(Math.random() * (window.innerHeight - size));
    const color = getRandomColor();
    const opacity = Math.random();
  
    div$$.style.width = `${size}px`;
    div$$.style.height = `${size}px`;
    div$$.style.left = `${x}px`;
    div$$.style.top = `${y}px`;
    div$$.style.backgroundColor = color;
    div$$.style.opacity = opacity;
  
    tablero$$.appendChild(div$$);

    contador++;
    h1$$.textContent = contador;

    tablero$$.style.backgroundColor = getRandomColor();
}

setInterval(generateDiv, 100);