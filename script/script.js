const LOGOS = document.querySelectorAll('.logo');

// Перезагрузка страницы
function reloadPage(){
    window.location.reload();
}
LOGOS.forEach(item => item.addEventListener('click', reloadPage));

// Создание позиции в каталоге
var req = new XMLHttpRequest();
req.open("GET", "products.json", true);
console.log(JSON.parse(req));

req.onreadystatechange = myCode;
req.send(null);

function myCode() {
    if (req.readyState == 4) {
        var doc = eval('(' + req.responseText + ')');
    }
}






// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
//   console.log(student);
//   console.log('------------------------------------------');
//   console.log(JSON.stringify(student));



// var data = {
//     product1:{
//         title: "Филадельфия с кунжутом",
//         weight: "270г",
//         calorie: "230ккал",
//         composition: "Лосось, авокадо, икра тобико, крем-сыр, огурец",
//         price: "140 &#8372;"
//     },
//     product2:{
//         title: "Филадельфия с кунжутом",
//         weight: "270г",
//         calorie: "230ккал",
//         composition: "Лосось, авокадо, икра тобико, крем-сыр, огурец",
//         price: "140 &#8372;"
//     }
// }

// var string = JSON.stringify(data);

//   console.log(data);
//   console.log('------------------------------------------');
//   console.log(string);
//   console.log('------------------------------------------');
//   console.log(JSON.parse(string));