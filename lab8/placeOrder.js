function clickAddButton() {
    let buttonAdd = document.querySelectorAll(".btn");
    buttonAdd.forEach(button => {
        button.addEventListener("click", () => {
            let dish = getDishFromKeyword(button.parentNode.dataset.dish);
            console.log(dish);
            let currentCategory = button.closest(".category");
            let currentlySelected = currentCategory.querySelector(".menu-element.selected");

            if (currentlySelected) {
                currentlySelected.classList.remove("selected");
            }

            if (button.parentNode.classList.contains("selected")) {
                button.parentNode.classList.remove("selected");
            } else {
                button.parentNode.classList.add("selected");
                window.localStorage.setItem(dish.category, dish.keyword);
            };

            totalCostCombo()
        });
    });

}



function totalCostCombo() {
    const selectedDishes = document.querySelectorAll(".menu-element.selected");
    let total = Array.from(selectedDishes).reduce((sum, dish_element) => {
        const dish = getDishFromKeyword(dish_element.dataset.dish);
        return sum + (dish ? dish.price : 0);
    }, 0);

    let totalCostFixed = document.querySelector(".sum");
    if (!totalCostFixed) {
        totalCostFixed = document.createElement("div");
        totalCostFixed.className = "sum";
        document.body.appendChild(totalCostFixed);
    }

    totalCostFixed.innerHTML = `
        <p>Итого: ${total}&#x20bd;</p>
    `;
}

