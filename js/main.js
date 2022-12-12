// 4. Запросить у пользователя информацию для регистрации(логин, пароль, подтверждение пароля), проверить пароли на совпадение, если не совпадают вывести сообщение типа: Пароли не совпадают; также длинна пароля должна быть не менее 6ти символов и не может состоять из пробелов, сохранить данные в объект(подтверждение пароля не нужно сохранять), также по умолчанию добавить объекту ключ isAuth: false; после регистрации предложить пользователю авторизацию на сайте, если согласен, то запросить у него логин и пароль, сверить их с данными из объекта, если все совпадает, то необходимо поменять значение ключа isAuth на true;

let login = prompt('Enter name')
let password = prompt('Enter pass');
let con = prompt('Enter password');

let obj;

if (password == con && password.trim().length >= 6 && password.trim()) {
    obj = {
        login,
        password,
        isAuth: false
    }
} else {
    console.log('Пароли не совпадают');
}

let auth = confirm('Хотите Авторизоваться')

if (auth) {
    let login2 = prompt('Enter name')
    let password2 = prompt('Enter pass');
    if (obj.login === login2 && obj.password === password2) {
        obj.isAuth = true;
        console.log(obj)
    }
} else {
    console.log('Пароли не совпадают');
}


// 1. Написать программу, которая будет имитировать счет в банке, сначала пользователю предлагается внести сумму на депозит(сумма должна быть положительной), затем необходимо спросить у пользователя, хочет ли он пойти за покупками, если нет, вывести сообщение типа: До встречи! Если он выберет вариант покупок, тогда необходимо запросить ифнормацию о том, какой продукт он хочет купить и сколько он стоит(макс 3 продукта), продукты сохранить в отдельный объект в формате(название продукта: цена), также необходимо отнять стоимость продуктов от счета в банке, необходимо проверить достаточно ли средств, если средств недостаточно вывести ошибку. В конце работы программа должна распечатать объект с покупками и оставшуюся сумму на счете
// let sum = +prompt('Внесите $');
// let bank = sum;

// let obj;
// if (sum >= 0) {
//     let con = confirm('Хотите сделать покупку')
//     if (con == false) {
//         alert('До встречи')
//     }
//     let product = prompt('milk: price ?')
//     let product1 = prompt('aplle: price?')
//     let product2 = prompt('potato: price?')
//     obj = {
//         product: product,
//         product1: product1,
//         product2: product2
//     }
//     console.log(obj)
//     let ostatok = bank- (+obj.product) - (+obj.product1) - +obj.product2
//     if (bank < (+obj.product) + (+obj.product1) + (+obj.product2)) {
//         console.log('Недостаточно средств');
//     } else {
//         console.log(bank- (+obj.product) - (+obj.product1) - (+obj.product2));
//     }
//     alert(`Ваши покупки milk ${+obj.product}, aplle${+obj.product1}, potato ${+obj.product2} ${ostatok}`)
// }

// 3. Запросить у пользователя имя, возраст, профессию, хобби, сохранить данные в объект, распечатать результат, данные необходимо заросить одним промптом

// let data = prompt('Введите, ваше, имя, профессию, возраст, хобби');
// let obj = data.split(' ');
// let obj2 = {}

// obj2.name = obj[0]
// obj2.age = obj[1]
// obj2.profession = obj[2]
// obj2.hobby = obj[3]

// console.log(obj);



// 5. Дан объект:
// {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }, запросить у пользователя информацию о том, какой ключ он хочет изменить и значение на которое нужно менять данные под этим ключом, учесть, что есть вложенный объект
// let obj = {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//         type: 'Cat',
//         name: 'Barsik',
//         color: 'White',
//         age: 3
//     }
// }
// let key = prompt('Enter key')

// switch (auth) {
//     case 'username':
//         let username = prompt()
//         obj.username = us;
//         break;
//     case 'age':
//         let age = prompt()
//         obj.age = us;
//         break;
//     case 'work':
//         let work = prompt()
//         obj.work = us;
//         break;
//     case 'type':
//         let type = prompt()
//         obj.pet.type = us;
//         break;
//     case 'name':
//         let name = prompt()
//         obj.pet.name = us;
//         break;
//     case 'color':
//         let color = prompt()
//         obj.pet.color = us;
//         break;
//     case `pet age` :
//         let age2 = prompt()
//         obj.pet.age = age2;
//         break;
// }


// let obj = {
//     username: 'Tom',
//     age: 35,
//     work: 'IT',
//     pet: {
//     type: 'Cat',
//     name: 'Barsik',
//     color: 'White',
//     age: 3
//     }
// }
// let auth = prompt();
// switch(auth){
// case 'username':
//     let username = prompt();
//     obj.username = username;
//     break;
// case 'age':
//     let age = prompt();
//     obj.age = age;
//     break;
// case 'work':
//     let work = prompt();
//     obj.work = work;
//     break;
// case 'type':
//     let type = prompt();
//     obj.pet.type = type;
//     break;
// case 'name':
//     let namepet = prompt();
//     obj.pet.type = namepet;
//     break;
// case 'color':
//     let color = prompt();
//     obj.pet.color = color;
//     break;
// case `pet age`:
//     let age2 = prompt();
//     obj.pet.age = age2;
// }
// console.log(obj);
// 6. Дан объект с продуктами:
// запросить у пользователя одним промптом какие продукты он хочет приобрести, затем вывести сообщение с конечной суммой заказа

// let products = {
//     'Milk': 100,
//     'Sugar': 70,
//     'Butter': 50,
//     'Bread': 20,
//     'Water': 30,
//     'Salt': 10
//     }

//     let order = prompt('Введите названия продуктов, которые вы хотите приобрести, через запятую:');
//     let orderArr = order.split(',');

//     let total = 0;

//     if (products.hasOwnProperty(orderArr[0])) {
//     total += products[orderArr[0]];
//     }
//     if (products.hasOwnProperty(orderArr[1])) {
//     total += products[orderArr[1]];
//     }
//     if (products.hasOwnProperty(orderArr[2])) {
//     total += products[orderArr[2]];
//     }
//     if (products.hasOwnProperty(orderArr[3])) {
//     total += products[orderArr[3]];
//     }
//     if (products.hasOwnProperty(orderArr[4])) {
//     total += products[orderArr[4]];
//     }
//     if (products.hasOwnProperty(orderArr[5])) {
//     total += products[orderArr[5]];
//     }

//     console.log(`Сумма заказа составит ${total}`);