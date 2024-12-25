async function loadDishes() {
    fetch(`https://edu.std-900.ist.mospolytech.ru/labs/api/dishes`)
        .then(response => response.json())
        .then(data => {dishes = data; printDishes()})
    
};
loadDishes()


// обращаемся к API fetch или XMLHttpRequest.
// получаем ответ с блюдами
// на основе ответа строим карточки

// должны отработать json который получаем



// Функция для загрузки блюд с сервера
// async function loadDishes() {
//     fetch('https://edu.std-900.ist.mospolytech.ru/labs/api/dishes')
//         .then(response => response.json())
//         .then(data => {
//             dishes = data;
//             displayDishes('soup', dishesContainers.soup);
//             displayDishes('main-course', dishesContainers.mainCourse);
//             displayDishes('salad', dishesContainers.salads);
//             displayDishes('drink', dishesContainers.beverage);
//             displayDishes('dessert', dishesContainers.dessert);
//             updateSelectedDishes();
//         })
//         .catch(error => console.error('Ошибка загрузки данных:', error));
// }

// Загрузка блюд при загрузке страницы


