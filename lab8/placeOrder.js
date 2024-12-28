function clickAddButton() {
    let buttonAdd = document.querySelectorAll(".btn");
    buttonAdd.forEach(button => {
        button.addEventListener("click", () => {
            let dish = getDishFromKeyword(button.parentNode.dataset.dish);
            let currentCategory = button.closest(".category");
            let currentlySelected = currentCategory.querySelector(".menu-element.selected");

            if (currentlySelected) {
                currentlySelected.classList.remove("selected");
            }

            if (button.parentNode.classList.contains("selected")) {
                button.parentNode.classList.remove("selected");
                window.localStorage.removeItem(dish.category);
            } else {
                button.parentNode.classList.add("selected");
                window.localStorage.setItem(dish.category, dish.id);
            }

            totalCostCombo();
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
        document.body.insertBefore(totalCostFixed, document.querySelector("footer"));
    }

    totalCostFixed.innerHTML = `
        <p>Итого: ${total}&#x20bd;</p>
        <a href="placeOrder.html" class="place-order-button">Перейти к оформлению</a>
    `;
}


let link = 'https://edu.std-900.ist.mospolytech.ru';
let api_key = '12fe1881-5f53-4b3b-83a6-1fd9222bdb19';


async function loadDishData(dishId) {
    console.log(`Loading data for dish ID: ${dishId}`);
    try {
        const response = await fetch(`${link}/labs/api/dishes/${dishId}?api_key=${api_key}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Data loaded for dish ID: ${dishId}`, data);
        return data;
    } catch (error) {
        console.error(`Failed to load data for dish ID: ${dishId}`, error);
    }
}

async function loadSelectedDishes() {
    console.log('loadSelectedDishes called');
    const selectedIds = [
        localStorage.getItem('soup'),
        localStorage.getItem('main-course'),
        localStorage.getItem('salad'),
        localStorage.getItem('drink'),
        localStorage.getItem('dessert')
    ].filter(id => id !== null);

    console.log('Selected IDs:', selectedIds);

    const orderItemsContainer = document.querySelector('.order-selected-dishes');
    if (!orderItemsContainer) {
        console.error('order-selected-dishes container not found');
        return;
    }
    orderItemsContainer.innerHTML = ''; 

    for (const id of selectedIds) {
        const dish = await loadDishData(id);
        if (dish) {
            const card = document.createElement('div');
            card.className = 'menu-element';
            card.dataset.dish = dish.keyword;

            card.innerHTML = `
                <div class="dish-img">
                    <img src="${dish.image}" alt="${dish.name}">
                </div>
                <p class="price">${dish.price}&#x20bd;</p>
                <p class="name_element">${dish.name}</p>
                <p class="ves">${dish.count}</p>
                <button class="btn btn-delete">Удалить</button>
            `;

            console.log('Appending card:', card);
            orderItemsContainer.appendChild(card);
        }
    }

    document.querySelectorAll(".btn-delete").forEach(button => {
        button.addEventListener("click", (event) => {
            const dishElement = event.target.closest('.menu-element');
            const dishKeyword = dishElement.dataset.dish;
            const dish = getDishFromKeyword(dishKeyword);

            if (!dish) {
                console.error(`Dish not found for keyword: ${dishKeyword}`);
                return;
            }

            // Remove from localStorage
            localStorage.removeItem(dish.category);

            // Remove element from DOM
            dishElement.remove();

            // Update total cost
            totalCostForm();
        });
    });

    totalCostForm();
}

function totalCostForm() {
    console.log('totalCostForm called');
    const selectedDishes = document.querySelectorAll(".menu-element");
    let total = Array.from(selectedDishes).reduce((sum, dish_element) => {
        const dish = getDishFromKeyword(dish_element.dataset.dish);
        return sum + (dish ? dish.price : 0);
    }, 0);

    const orderCost = document.querySelector(".order-coast");
    if (!orderCost) {
        console.error('order-coast container not found');
        return;
    }
    orderCost.innerHTML = `
        <p><b>Стоимость заказа</b></p>
        <p class="coast">${total}&#x20bd;</p>
    `;
}

const categoryMap = {
    soup: "Суп",
    "main-course": "Главное блюдо",
    salad: "Салат или стартер",
    drink: "Напиток",
    dessert: "Десерт"
};

async function addSelectedDishesInForm() {
    const categories = ['soup', 'main-course', 'salad', 'drink', 'dessert'];
    for (const category of categories) {
        const dishId = localStorage.getItem(category);
        if (dishId) {
            const dish = await loadDishData(dishId);
            if (dish) {
                const categoryElement = document.querySelector(`.order-item-${category}`);
                if (categoryElement) {
                    categoryElement.innerHTML = `
                        <p><b>${categoryMap[category]}</b></p>
                        <p>${dish.name} ${dish.price}&#x20bd;</p>
                    `;
                    const inputElement = document.getElementById(`input-${category}`);
                    if (inputElement) {
                        inputElement.value = dish.name;
                    }
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired');
    addSelectedDishesInForm();
    loadSelectedDishes();
});

