function printDishes() {
    const dishesByCategory = {
        soup: [],
        main_food: [],
        drink: []
    };

    dishes.forEach(dish => {
        if (dishesByCategory[dish.category]) {
            dishesByCategory[dish.category].push(dish);
        }
    });

    for (let category in dishesByCategory) {
        dishesByCategory[category].sort((a, b) => a.name.localeCompare(b.name));
    }

    const containers = document.querySelectorAll(".menu");

    Object.keys(dishesByCategory).forEach((category, index) => {
        const dishesCurrentCategory = dishesByCategory[category]

        dishesCurrentCategory.forEach(dish =>  {
            const card = document.createElement("div");
            card.className = "menu-element";
            card.dataset.dish = dish.keyword;

            card.innerHTML = `
                <div class="dish-img">
                    <img src="${dish.image}" alt="${dish.name}">
                </div>
                <p class="price">${dish.price}&#x20bd;</p>
                <p class="name_element">${dish.name}</p>
                <p class="ves">${dish.count}</p>
                <button class="btn">Добавить</button>
            `;

            if (containers[index]) {
                containers[index].appendChild(card);
            }
        })
    }
    );

    clickButtons();

}

printDishes();
