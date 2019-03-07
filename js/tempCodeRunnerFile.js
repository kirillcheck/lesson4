let soldier = {
    health: 400,
    armor: 100
};

let John = {
    health: 100
}

John.__proto__ = soldier;
console.log(John);
console.log(John.armor);