/*
Задание 1
<form action=""> 
<input placeholder="Name" type="text">
<input placeholder="Surname" type="text">
<input placeholder="Email" type="text">
<input placeholder="Number" type="text">
</form>
Создайте HTML-форму и при нажатии на кнопку проверяйте заполненность всех полей.
Если останутся незаполненные поля — выводите предупреждение в span.
*/
function buttonForm() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const warning = document.getElementById("warning");

  if (name === "" || surname === "" || email === "" || number === "") {
    warning.textContent = "Ошибка...";
  } else {
    warning.textContent = "";
  }
}
/*Задание 2
<div id="square" style="background-color: blue;width: 100px;height: 100px;"></div> 
<button id="left">Left</button>
<button id="right">Right</button>
Создайте обработчик события, который при нажатии кнопок направлений (влево, вправо)
анимированно сдвигает div влево или вправо на 100px.
*/
document.getElementById("left").addEventListener("click", function () {
  moveSquare("left");
});

document.getElementById("right").addEventListener("click", function () {
  moveSquare("right");
});

function moveSquare(e) {
  const square = document.getElementById("square");
  const squarePosition = square.getBoundingClientRect().left;

  if (e === "left") {
    square.style.transform = "translateX(" + (squarePosition - 100) + "px)";
  } else if (e === "right") {
    square.style.transform = "translateX(" + (squarePosition + 100) + "px)";
  }
}
/*
Задание 3
Навесьте на событие движения мыши обработчик, который будет выводить 
в консоль координаты движения.
Например:
мышка на позиции 100, 360

Вывод:
"100 360"

Событие надо «повесить» на document body
*/

// document.body.addEventListener("mousemove", function (e) {
//   const x = e.clientX;
//   const y = e.clientY;
//   console.log(x, y);
// });

/*
Задание 4
Создайте две кнопки в HTML - "увеличить" с id 'plus' и "уменьшить" с id 'minus'.
В JS файле создайте глобальную переменную counter. Навесьте на ваши кнопки 
обработчики событий, которые увеличивают, либо уменьшают ваш counter на одну 
единицу при нажатии на соответствующую кнопку.
В теге p должно отображаться текущее значение counter.
<button id = "plus">+1</button>
<p>0</p>
<button id = "minus">-1</button>
*/
let num = 0;

function plusMinus(e) {
  num += e;
  document.getElementById("zero").innerText = num;
}

/*Задание 5
Создайте в HTML параграф с текстом. В JS файле напишите обработчик события,
который при нажатии на текст, выводит количество букв и пробелов в вашем тексте.
Например:
<p>He found rain fascinating yet unpleasant</p>
Вывод:

"Буквы: 35, пробелы: 5"
*/

document.getElementById("p").addEventListener("click", function () {
  const text = this.textContent;
  const letters = text.replace(/ /g, "").length;
  const spaces = text.split(" ").length - 1;
  alert("Буквы: " + letters + ", пробелы: " + spaces);
});

// const named = "khamza ";
// const surname = "saparbekov";
// const res = named + surname;

// console.log(res.replace(/kh/g, "fa"));

/* Задание 6
Создайте кнопку и нумерованный список с 6 li элементами в HTML. 
Навесьте на кнопку обработчик события, который при нажатии проходится 
циклом по элементам списка и меняет их цвет на зеленый.
*/

function color() {
  document.querySelectorAll("#list li").forEach((item) => {
    if (item.style.color === "green") {
      item.style.color = "";
    } else {
      item.style.color = "green";
    }
  });
}
