
const Back_Main = document.querySelector('.back-index');
Back_Main.onclick = () => {
    location.href='./index.html';
}

document.getElementById("don").onclick = function () {
    document.getElementById("don1").style.display = "block";
    document.getElementById("none1").style.display = "block";
    document.getElementById("hoso").style.display = "none";
}

document.getElementById("none0").onclick = function () {
    document.getElementById("don1").style.display = "none";
    document.getElementById("none1").style.display = "block";
    document.getElementById("hoso").style.display = "none";
}

document.getElementById("none").onclick = function () {
    document.getElementById("don1").style.display = "none";
    document.getElementById("none1").style.display = "block";
    document.getElementById("hoso").style.display = "none";
}

document.getElementById("profile").onclick = function () {
    document.getElementById("don1").style.display = "none";
    document.getElementById("none1").style.display = "none";
    document.getElementById("hoso").style.display = "block";
}

document.getElementById("edit").onclick = function () {
    document.getElementById("don1").style.display = "none";
    document.getElementById("none1").style.display = "none";
    document.getElementById("hoso").style.display = "block";
}