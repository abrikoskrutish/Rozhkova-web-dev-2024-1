const dishes = [
    {
        keyword: "gazpacho",
        name: "Гаспачо",
        price: 195,
        category: "soup",
        count: "350 г",
        image: "images/gazpacho.jpg",
        kind: "veg"
    },
    {
        keyword: "mushroom_soup",
        name: "Грибной суп-пюре",
        price: 185,
        category: "soup",
        count: "330 г",
        image: "images/mushroom_soup.jpg",
        kind: "veg"
    },
    {
        keyword: "norwegian_soup",
        name: "Норвежский суп",
        price: 270,
        category: "soup",
        count: "330 г",
        image: "images/norwegian_soup.jpg",
        kind: "fish"
    },
    {
        keyword: "ramen",
        name: "Рамен",
        price: 385,
        category: "soup",
        count: "425 г",
        image: "images/ramen.jpg",
        kind: "meat"
    },
    {
        keyword: "tomyum",
        name: "Том ям с креветками",
        price: 650,
        category: "soup",
        count: "500 г",
        image: "images/tomyum.jpg",
        kind: "fish"
    },
    {
        keyword: "chicken",
        name: "Куриный суп",
        price: 330,
        category: "soup",
        count: "350 г",
        image: "images/chicken.jpg",
        kind: "meat"
    },

    {
        keyword: "fried_potatoes_with_mushrooms",
        name: "Жареная картошка с грибами",
        price: 150,
        category: "main_food",
        count: "250 г",
        image: "images/friedpotato.jpg",
        kind: "veg"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main_food",
        count: "310 г",
        image: "images/lasagna.jpg",
        kind: "meat"
    },
    {
        keyword: "chicken_cutlets_and_mashed_potatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main_food",
        count: "280 г",
        image: "images/chickencut.jpg",
        kind: "meat"
    },
    {
        keyword: "fishrice",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main_food",
        count: "270 г",
        image: "images/fishrice.jpg",
        kind: "fish"
    },
    {
        keyword: "pizza",
        name: "Пицца Маргарита",
        price: 450,
        category: "main_food",
        count: "470 г",
        image: "images/pizza.jpg",
        kind: "veg"
    },
    {
        keyword: "shrimppasta",
        name: "Паста с креветками",
        price: 340,
        category: "main_food",
        count: "280 г",
        image: "images/shrimppasta.jpg",
        kind: "fish"
    },

    {
        keyword: "saladwithegg",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salads_starters",
        count: "250 г",
        image: "images/saladwithegg.jpg",
        kind: "veg"
    },
    {
        keyword: "caesar",
        name: "Цезарь с цыпленком",
        price: 370,
        category: "salads_starters",
        count: "220 г",
        image: "images/caesar.jpg",
        kind: "meat"
    },
    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salads_starters",
        count: "235 г",
        image: "images/caprese.jpg",
        kind: "veg"
    },
    {
        keyword: "tunasalad",
        name: "Салат с тунцом",
        price: 480,
        category: "salads_starters",
        count: "250 г",
        image: "images/tunasalad.jpg",
        kind: "fish"
    },
    {
        keyword: "frenchfries1",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salads_starters",
        count: "235 г",
        image: "images/frenchfries1.jpg",
        kind: "veg"
    },
    {
        keyword: "frenchfries2",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salads_starters",
        count: "235 г",
        image: "images/frenchfries2.jpg",
        kind: "veg"
    },

    {
        keyword: "orange_juice",
        name: "Апельсиновый сок",
        price: 120,
        category: "drink",
        count: "300 мл",
        image: "images/orangejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "apple_juice",
        name: "Яблочный сок",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "images/applejuice.jpg",
        kind: "cold"
    },
    {
        keyword: "carrot_juice",
        name: "Морковный сок",
        price: 110,
        category: "drink",
        count: "300 мл",
        image: "images/carrotjuice.jpg",
        kind: "cold"
    },
    {
        keyword: "cappuccino",
        name: "Капучино",
        price: 180,
        category: "drink",
        count: "300 мл",
        image: "images/cappuccino.jpg",
        kind: "hot"
    },
    {
        keyword: "greentea",
        name: "Зеленый чай",
        price: 100,
        category: "drink",
        count: "300 мл",
        image: "images/greentea.jpg",
        kind: "hot"
    },
    {
        keyword: "tea",
        name: "Черный чай",
        price: 90,
        category: "drink",
        count: "300 мл",
        image: "images/tea.jpg",
        kind: "hot"
    },

    {
        keyword: "baklava",
        name: "Пахлава",
        price: 220,
        category: "desserts",
        count: "300 гр",
        image: "images/baklava.jpg",
        kind: "medium"
    },
    {
        keyword: "checheesecake",
        name: "Чизкейк",
        price: 240,
        category: "desserts",
        count: "125 гр",
        image: "images/checheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "desserts",
        count: "125 гр",
        image: "images/chocolatecheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecake",
        name: "Шоколадный торт",
        price: 270,
        category: "desserts",
        count: "140 гр",
        image: "images/chocolatecake.jpg",
        kind: "small"
    },
    {
        keyword: "donuts2",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "desserts",
        count: "350 гр",
        image: "images/donuts2.jpg",
        kind: "medium"
    },
    {
        keyword: "donuts",
        name: "Пончики (6 штуки)",
        price: 650,
        category: "desserts",
        count: "700 гр",
        image: "images/donuts.jpg",
        kind: "large"
    },
];
