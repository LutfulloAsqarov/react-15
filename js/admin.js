const form = document.querySelector(".form");
const inputName = document.querySelector(".input__name");
const inputAge = document.querySelector(".input__age");
const collection = document.querySelector(".collection");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!inputName.value.trim()) {
        return alert("to'liq kiriting");
    }

    if (password1 !== password2) {
        return alert();
    }
    const item = document.createElement("div");
    item.className = "item";

    item.innerHTML = `
        <div class="image"></div>
        <h3>${inputName.value}</h3>
        <p>${inputAge.value}</p
    `;
    collection.appendChild(item);

    inputName.value = "";
    inputAge.value = "";
});
