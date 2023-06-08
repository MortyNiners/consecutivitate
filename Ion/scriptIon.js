const squareEduard = document.querySelector(".squareEduard");


squareEduard.addEventListener("mouseover", () => {
    const squareIon = document.createElement("div");
    const name = document.createElement("h1");
    name.textContent = "Ion Gadarenco";
    squareEduard.append(squareIon);
    squareIon.append(name);
});