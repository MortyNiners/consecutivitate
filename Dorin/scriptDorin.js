const dima = document.querySelector(".squareDima");
const dorin = document.querySelector(".squareDorin");

dima.style.width = '300px';
dima.style.height = '300px';
dima.style.backgroundColor = 'red';

dima.addEventListener("keypress", (e) => {
    if (e.shiftKey) {
        dima.addEventListener("keypress", (e) => {
            if (e.code === 9) {
                dima.addEventListener("keypress", (e) => {
                    if (e.code === 13) {
                        dorin.style.width = '300px';
                        dorin.style.height = '300px';
                        dorin.style.backgroundColor = 'blue';

                    }
                })
            }
        })

    }
})