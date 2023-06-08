const dima = document.querySelector(".squareDima");
const dorin = document.querySelector(".squareDorin");

dima.style.width = '300px';
dima.style.height = '300px';
dima.style.backgroundColor = 'red';

dima.addEventListener("click", (e) => {
    dorin.style.width = '300px';
    dorin.style.height = '300px';
    dorin.style.backgroundColor = 'blue';

}
)




