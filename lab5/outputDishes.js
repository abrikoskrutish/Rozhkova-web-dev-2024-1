function printDishes() {
    const dishesByCategory = {
        soup: [],
        main_food: [],
        salads_starters: [],
        drink: [],
        desserts: []
    };

    const kinds = {
        soup: ['meat', 'fish', 'veg'],
        "main_food": ['meat', 'fish', 'veg'],
        "salads_starters": ['meat', 'fish', 'veg'],
        drink: ['hot', 'cold'],
        desserts: ['small', 'medium', 'large']
    };

    const kindTranslations = {
        "veg": "вегетарианский",
        "meat": "мясной",
        "fish": "рыбный",
        "hot": "горячий",
        "cold": "холодный",
        "small": "маленькая порция",
        "medium": "средняя порция",
        "large": "большая порция"
    };

    dishes.forEach(dish => {
        if (dishesByCategory[dish.category]) {
            dishesByCategory[dish.category].push(dish);
        }
    });

    for (let category in dishesByCategory) {
        dishesByCategory[category].sort((a, b) => a.name.localeCompare(b.name));
    }

    Object.keys(dishesByCategory).forEach((category) => {
        const dishesCurrentCategory = dishesByCategory[category];
        const kindButtons = document.createElement('div');
        kindButtons.className = 'kind-buttons';
        kinds[category].forEach(kind => {
            let button = document.createElement('button');
            button.dataset.kind = kind;
            button.textContent = kindTranslations[kind];
            kindButtons.appendChild(button);
        });

        const sect = document.getElementById(category);
        const heading = sect.querySelector('h2');
        heading.insertAdjacentElement('afterend', kindButtons);

        const menuContainer = sect.querySelector('.menu');
        if (menuContainer) {
            dishesCurrentCategory.forEach(dish => {
                const card = document.createElement("div");
                card.className = "menu-element";
                card.dataset.dish = dish.keyword;
                card.dataset.kind = dish.kind;

                card.innerHTML = `
                    <div class="dish-img">
                        <img src="${dish.image}" alt="${dish.name}">
                    </div>
                    <p class="price">${dish.price}&#x20bd;</p>
                    <p class="name_element">${dish.name}</p>
                    <p class="ves">${dish.count}</p>
                    <button class="btn">Добавить</button>
                `;

                menuContainer.appendChild(card);
            });
        } else {
            console.error(`Menu container not found in section: ${category}`);
        }
    });

    clickButtons();
    initializeFilterButtons();
}

printDishes();