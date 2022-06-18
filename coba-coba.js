var text = "Belajar Js";

function greeting() {
    var text = "hello";
    console.log(text);
}
greeting(); // hello!
console.log(text) //belajar js


var text = "Belajar JS";

function greeting() {
    text = "Hello!"; // tanpa menggunakan var maka akan menimpa variabel text sehingga tidak akan 
    //menghasilkan belajar js                        

    console.log(text);
}
greeting(); // Hello!console.log(text); // Hello!


var text = "Belajar JS";

function greeting() {
    var text = "Hello!";

    console.log(text);
}
greeting(); // Hello!console.log(text); // Hello!
console.log(text);