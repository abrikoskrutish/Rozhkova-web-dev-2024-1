function getDishFromKeyword(keyword) {
    return dishes.find(dish => dish.keyword === keyword);
}

function totalCost() {
    const selectesDish = document.querySelectorAll(".menu-element.selected");
    let total = Array.from(selectesDish).reduce((sum, dish_element) => {
        const dish = getDishFromKeyword(dish_element.dataset.dish);
        return sum + (dish ? dish.price : 0)
    }, 0);

    const orderCost = document.querySelector(".order-coast");
    orderCost.innerHTML = `
        <p><b>Стоимость заказа</b></p>
        <p class="coast">${total}&#x20bd;</p>
    `;
}


function infoAfterAddDishes(dish) {
    const koctul = document.querySelector(".order-items-not");
    const info =  document.querySelector(".order-items");
    koctul.style.display = "none";

    const categoryMap= {
        soup: { selector: ".order-item-soup", label: "Суп", inputId: "input-soup" },
        main_food: { selector: ".order-item-main-food", label: "Главное блюдо", inputId: "input-main-food" },
        drink: { selector: ".order-item-drink", label: "Напиток", inputId: "input-drink" }
    };

    const categoryInfo = categoryMap[dish.category];
    if (categoryInfo) {
        const categoryElement = document.querySelector(categoryInfo.selector);
        categoryElement.innerHTML = `
            <p><b>${categoryInfo.label}</b></p>
            <p>${dish.name} ${dish.price}₽</p>
        `;
        const inputElement = document.getElementById(categoryInfo.inputId);
        inputElement.value = dish.keyword;
    }

    document.querySelectorAll(".menu-element").forEach(item => {
        const currentDish = getDishFromKeyword(item.dataset.dish);
        if (currentDish && currentDish.category === dish.category) {
            item.classList.remove("selected");
        }

    });

    const selectedDish = document.querySelector(`[data-dish="${dish.keyword}"]`);
    if (selectedDish) {
        selectedDish.classList.add("selected");
    }

    totalCost();

}

function clickButtons() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            const menuItem = event.target.closest(".menu-element");
            const dish = getDishFromKeyword(menuItem.dataset.dish);
            if (dish) {
                infoAfterAddDishes(dish);
            }
        });
    });
}