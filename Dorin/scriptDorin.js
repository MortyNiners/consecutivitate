const dima = document.querySelector(".squareDima");
const dorin = document.querySelector(".squareDorin");

dima.style.width = '300px';
dima.style.height = '300px';
dima.style.backgroundColor = 'red';

dima.addEventListener("keypress", (e) => {
    if (e.key === 'shift') {
        dima.addEventListener("keypress", (e) => {
            if (e.key === "tab") {
                dima.addEventListener("keypress", (e) => {
                    if (e.key === "enter") {
                        dorin.style.width = '300px';
                        dorin.style.height = '300px';
                        dorin.style.backgroundColor = 'blue';

                    }
                })
            }
        })

    }
})