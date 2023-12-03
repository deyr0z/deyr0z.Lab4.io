
function delImg(){
    document.getElementById("img_1").style.display="none";
}

function increaseIMG(){
    var x = document.getElementById("img_1")
    x.style.width = "1000px";  // Змінюємо ширину на більше значення (наприклад, 1000px)
    x.style.height = "auto";  // Автоматично обчислюємо висоту, щоб зберегти співвідношення сторін
}

function decreaseIMG(){
    var y = document.querySelector("hobbyID");
    var x = document.getElementById("img_1");
    x.style.width = "200px";  // Змінюємо ширину на більше значення (наприклад, 200px)
    x.style.height = "auto";  // Автоматично обчислюємо висоту, щоб зберегти співвідношення сторін
}

function addIMG() {
    var y = document.getElementById("list1");
    y.style.backgroundColor = "red";
    y.style.color="yellow"
    var x = document.createElement("IMG");
    x.setAttribute("src", "Lviv.jpg");
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
}

