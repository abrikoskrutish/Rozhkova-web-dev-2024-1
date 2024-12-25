let dishes = []
let dishesJSON = [
    {
        "category": "soup",
        "count": "350 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 1,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/gazpacho",
        "keyword": "gaspacho",
        "kind": "veg",
        "name": "Гаспачо",
        "price": 195
    },
    {
        "category": "soup",
        "count": "330 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 2,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/mushroom_soup",
        "keyword": "gribnoy",
        "kind": "veg",
        "name": "Грибной суп-пюре",
        "price": 185
    },
    {
        "category": "soup",
        "count": "330 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 3,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/norwegian_soup",
        "keyword": "norvezhskiy",
        "kind": "fish",
        "name": "Норвежский суп",
        "price": 270
    },
    {
        "category": "soup",
        "count": "425 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 4,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/ramen",
        "keyword": "ramen",
        "kind": "meat",
        "name": "Рамен",
        "price": 375
    },
    {
        "category": "soup",
        "count": "500 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 5,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/tomyum",
        "keyword": "tomyum",
        "kind": "fish",
        "name": "Том ям с креветками",
        "price": 650
    },
    {
        "category": "soup",
        "count": "350 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 6,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/soups/chicken",
        "keyword": "chicken",
        "kind": "meat",
        "name": "Куриный суп",
        "price": 330
    },
    {
        "category": "main-course",
        "count": "250 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 7,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main-course/friedpotatoeswithmushrooms1",
        "keyword": "zharenaya-kartoshka",
        "kind": "veg",
        "name": "Жареная картошка с грибами",
        "price": 150
    },
    {
        "category": "main-course",
        "count": "310 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 8,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main-course/lasagna",
        "keyword": "lazanya",
        "kind": "meat",
        "name": "Лазанья",
        "price": 385
    },
    {
        "category": "main-course",
        "count": "280 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 9,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main-course/chickencutletsandmashedpotatoes",
        "keyword": "kotlety-s-pyure",
        "kind": "meat",
        "name": "Котлеты из курицы с картофельным пюре",
        "price": 225
    },
    {
        "category": "main-course",
        "count": "270 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 10,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main-course/fishrice",
        "keyword": "fishrice",
        "kind": "fish",
        "name": "Рыбная котлета с рисом и спаржей",
        "price": 320
    },
    {
        "category": "main-course",
        "count": "470 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 11,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main-course/pizza",
        "keyword": "pizza",
        "kind": "veg",
        "name": "Пицца Маргарита",
        "price": 450
    },
    {
        "category": "main-course",
        "count": "280 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 12,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/main-course/shrimppasta",
        "keyword": "shrimppasta",
        "kind": "fish",
        "name": "Паста с креветками",
        "price": 340
    },
    {
        "category": "salad",
        "count": "250 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 13,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salad/saladwithegg",
        "keyword": "saladwithegg",
        "kind": "veg",
        "name": "Корейский салат с овощами и яйцом",
        "price": 330
    },
    {
        "category": "salad",
        "count": "220 г",
        "created_at": "2024-11-18T19:11:51",
        "id": 14,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salad/caesar",
        "keyword": "caesar",
        "kind": "meat",
        "name": "Цезарь с цыпленком",
        "price": 370
    },
    {
        "category": "salad",
        "count": "235 г",
        "created_at": "2024-11-18T19:11:52",
        "id": 15,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salad/caprese",
        "keyword": "caprese",
        "kind": "veg",
        "name": "Капрезе с моцареллой",
        "price": 350
    },
    {
        "category": "salad",
        "count": "250 г",
        "created_at": "2024-11-18T19:11:52",
        "id": 16,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salad/tunasalad",
        "keyword": "tunasalad",
        "kind": "fish",
        "name": "Салат с тунцом",
        "price": 480
    },
    {
        "category": "salad",
        "count": "235 г",
        "created_at": "2024-11-18T19:11:52",
        "id": 17,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salad/frenchfries1",
        "keyword": "frenchfries1",
        "kind": "veg",
        "name": "Картофель фри с соусом Цезарь",
        "price": 280
    },
    {
        "category": "salad",
        "count": "235 г",
        "created_at": "2024-11-18T19:11:52",
        "id": 18,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/salad/frenchfries2",
        "keyword": "frenchfries2",
        "kind": "veg",
        "name": "Картофель фри с кетчупом",
        "price": 260
    },
    {
        "category": "drink",
        "count": "300 мл",
        "created_at": "2024-11-18T19:11:52",
        "id": 19,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/orangejuice",
        "keyword": "apelsinoviy",
        "kind": "cold",
        "name": "Апельсиновый сок",
        "price": 120
    },
    {
        "category": "drink",
        "count": "300 мл",
        "created_at": "2024-11-18T19:11:52",
        "id": 20,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/applejuice",
        "keyword": "yablochniy",
        "kind": "cold",
        "name": "Яблочный сок",
        "price": 90
    },
    {
        "category": "drink",
        "count": "300 мл",
        "created_at": "2024-11-18T19:11:52",
        "id": 21,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/carrotjuice",
        "keyword": "morkovniy",
        "kind": "cold",
        "name": "Морковный сок",
        "price": 110
    },
    {
        "category": "drink",
        "count": "300 мл",
        "created_at": "2024-11-18T19:11:52",
        "id": 22,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/cappuccino",
        "keyword": "cappuccino",
        "kind": "hot",
        "name": "Капучино",
        "price": 180
    },
    {
        "category": "drink",
        "count": "300 мл",
        "created_at": "2024-11-18T19:11:52",
        "id": 23,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/greentea",
        "keyword": "greentea",
        "kind": "hot",
        "name": "Зеленый чай",
        "price": 100
    },
    {
        "category": "drink",
        "count": "300 мл",
        "created_at": "2024-11-18T19:11:52",
        "id": 24,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/beverages/tea",
        "keyword": "tea",
        "kind": "hot",
        "name": "Черный чай",
        "price": 90
    },
    {
        "category": "dessert",
        "count": "300 гр",
        "created_at": "2024-11-18T19:11:52",
        "id": 25,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/dessert/baklava",
        "keyword": "baklava",
        "kind": "medium",
        "name": "Пахлава",
        "price": 220
    },
    {
        "category": "dessert",
        "count": "125 гр",
        "created_at": "2024-11-18T19:11:52",
        "id": 26,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/dessert/checheesecake",
        "keyword": "checheesecake",
        "kind": "small",
        "name": "Чизкейк",
        "price": 240
    },
    {
        "category": "dessert",
        "count": "125 гр",
        "created_at": "2024-11-18T19:11:52",
        "id": 27,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/dessert/chocolatecheesecake",
        "keyword": "chocolatecheesecake",
        "kind": "small",
        "name": "Шоколадный чизкейк",
        "price": 260
    },
    {
        "category": "dessert",
        "count": "140 гр",
        "created_at": "2024-11-18T19:11:52",
        "id": 28,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/dessert/chocolatecake",
        "keyword": "chocolatecake",
        "kind": "small",
        "name": "Шоколадный торт",
        "price": 270
    },
    {
        "category": "dessert",
        "count": "350 гр",
        "created_at": "2024-11-18T19:11:52",
        "id": 29,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/dessert/donuts2",
        "keyword": "donuts2",
        "kind": "medium",
        "name": "Пончики (3 штуки)",
        "price": 410
    },
    {
        "category": "dessert",
        "count": "700 гр",
        "created_at": "2024-11-18T19:11:52",
        "id": 30,
        "image": "https://edu.std-900.ist.mospolytech.ru/labs/api/images/dessert/donuts",
        "keyword": "donuts",
        "kind": "large",
        "name": "Пончики (6 штук)",
        "price": 650
    }
]
let dishesOld = [
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
        category: "main-course",
        count: "250 г",
        image: "images/friedpotato.jpg",
        kind: "veg"
    },
    {
        keyword: "lasagna",
        name: "Лазанья",
        price: 385,
        category: "main-course",
        count: "310 г",
        image: "images/lasagna.jpg",
        kind: "meat"
    },
    {
        keyword: "chicken_cutlets_and_mashed_potatoes",
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: "main-course",
        count: "280 г",
        image: "images/chickencut.jpg",
        kind: "meat"
    },
    {
        keyword: "fishrice",
        name: "Рыбная котлета с рисом и спаржей",
        price: 320,
        category: "main-course",
        count: "270 г",
        image: "images/fishrice.jpg",
        kind: "fish"
    },
    {
        keyword: "pizza",
        name: "Пицца Маргарита",
        price: 450,
        category: "main-course",
        count: "470 г",
        image: "images/pizza.jpg",
        kind: "veg"
    },
    {
        keyword: "shrimppasta",
        name: "Паста с креветками",
        price: 340,
        category: "main-course",
        count: "280 г",
        image: "images/shrimppasta.jpg",
        kind: "fish"
    },

    {
        keyword: "saladwithegg",
        name: "Корейский салат с овощами и яйцом",
        price: 330,
        category: "salad",
        count: "250 г",
        image: "images/saladwithegg.jpg",
        kind: "veg"
    },
    {
        keyword: "caesar",
        name: "Цезарь с цыпленком",
        price: 370,
        category: "salad",
        count: "220 г",
        image: "images/caesar.jpg",
        kind: "meat"
    },
    {
        keyword: "caprese",
        name: "Капрезе с моцареллой",
        price: 350,
        category: "salad",
        count: "235 г",
        image: "images/caprese.jpg",
        kind: "veg"
    },
    {
        keyword: "tunasalad",
        name: "Салат с тунцом",
        price: 480,
        category: "salad",
        count: "250 г",
        image: "images/tunasalad.jpg",
        kind: "fish"
    },
    {
        keyword: "frenchfries1",
        name: "Картофель фри с соусом Цезарь",
        price: 280,
        category: "salad",
        count: "235 г",
        image: "images/frenchfries1.jpg",
        kind: "veg"
    },
    {
        keyword: "frenchfries2",
        name: "Картофель фри с кетчупом",
        price: 260,
        category: "salad",
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
        category: "dessert",
        count: "300 гр",
        image: "images/baklava.jpg",
        kind: "medium"
    },
    {
        keyword: "checheesecake",
        name: "Чизкейк",
        price: 240,
        category: "dessert",
        count: "125 гр",
        image: "images/checheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecheesecake",
        name: "Шоколадный чизкейк",
        price: 260,
        category: "dessert",
        count: "125 гр",
        image: "images/chocolatecheesecake.jpg",
        kind: "small"
    },
    {
        keyword: "chocolatecake",
        name: "Шоколадный торт",
        price: 270,
        category: "dessert",
        count: "140 гр",
        image: "images/chocolatecake.jpg",
        kind: "small"
    },
    {
        keyword: "donuts2",
        name: "Пончики (3 штуки)",
        price: 410,
        category: "dessert",
        count: "350 гр",
        image: "images/donuts2.jpg",
        kind: "medium"
    },
    {
        keyword: "donuts",
        name: "Пончики (6 штуки)",
        price: 650,
        category: "dessert",
        count: "700 гр",
        image: "images/donuts.jpg",
        kind: "large"
    },
];
