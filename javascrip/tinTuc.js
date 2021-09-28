const Back_Main = document.querySelector('.back-index');
Back_Main.onclick = () => {
    location.href='./index.html';
}

document.getElementById("down").onclick = function () {
    document.getElementById("contend1").style.display="block";
    document.getElementById("down").style.display="none";
}

document.getElementById("up").onclick = function () {
    document.getElementById("contend1").style.display="none";
    document.getElementById("down").style.display="block";
}