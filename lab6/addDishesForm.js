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
        salads_starters: { selector: ".order-item-salads-starters", label: "Салат или стартер", inputId: "input-salads-starters"},
        drink: { selector: ".order-item-drink", label: "Напиток", inputId: "input-drink" },
        desserts: { selector: ".order-item-desserts", label: "Десерт", inputId: "input-desserts" }
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


function filterButtons() {
    const kindButtons = document.querySelectorAll('.kind-buttons button');

    kindButtons.forEach(button => {
        button.addEventListener('click', () => {

            const category = button.closest('.kind-buttons').parentNode.id;
            const kind = button.dataset.kind;
            const menuContainer = document.querySelector(`#${category} .menu`);
            const allCards = menuContainer.querySelectorAll('.menu-element');


            if (button.classList.contains('active')) {
                button.classList.remove('active');
                allCards.forEach(card => {
                    card.style.display = '';
                });
            } 
            else {

                const buttonsInCategory = button.parentNode.querySelectorAll('button');
                buttonsInCategory.forEach(btn => btn.classList.remove('active'));

                button.classList.add('active');
                allCards.forEach(card => {
                    if (card.dataset.kind === kind) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
}

// создания уведомления
function showNotification(message) {
    // убираем старые уведомления
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
        existingNotification.remove();
    }

    // создаем уведомление
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerHTML = `
        <p>${message}</p>
        <button class="close-notification">Окей 👌</button>
    `;

    // закрытие уведомления
    notification.querySelector(".close-notification").addEventListener("click", () => {
        notification.remove();
    });

    document.body.appendChild(notification);
}


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const categories = ["soup", "main_food", "salads_starters", "drink", "desserts"];
    const selectedCategories = new Set(); // set коллекция уникальных значений


    document.querySelectorAll(".menu-element.selected").forEach(item => {
        const dishCategory = item.parentNode.parentNode.id;
        selectedCategories.add(dishCategory); 
    });

    // невыбранные категории
    // если true - категории добавляется
    const missingCategories = categories.filter(category => !selectedCategories.has(category));

    let notificationText = "";

    if (selectedCategories.size === 0) {
        notificationText = "Ничего не выбрано. Выберите блюда для заказа.";
    } else if (missingCategories.includes("drink") && missingCategories.length <= 3) {
        notificationText = "Выберите напиток.";
    } else if (
        ((missingCategories.includes("main_food") || missingCategories.includes("salads_starters")) &&
        !missingCategories.includes("soup")) && (missingCategories.length >=3)
    ) {
        notificationText = "Выберите главное блюдо/салат/стартер.";
    } else if (
        (missingCategories.includes("soup") || missingCategories.includes("main_food")) &&
        !missingCategories.includes("salads_starters") && (missingCategories.length >=3)
    ) {
        notificationText = "Выберите суп или главное блюдо.";
    } else if (missingCategories.includes("main_food") && (!missingCategories.includes("drink") || !missingCategories.includes("desserts")) && (missingCategories.length >=3)) {
        notificationText = "Выберите главное блюдо.";
    }

    if (notificationText) {
        showNotification(notificationText);
    } else {
        this.submit();
    }
});

