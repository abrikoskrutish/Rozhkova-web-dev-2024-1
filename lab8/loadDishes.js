async function loadDishes() {
    fetch(`https://edu.std-900.ist.mospolytech.ru/labs/api/dishes`)
        .then(response => response.json())
        .then(data => {dishes = data; printDishes()})
    
};
loadDishes()



