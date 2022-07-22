const btn = document.getElementById("empty");
const btn1 = document.getElementById("empty-empty");
var img = document.createElement("img");
var myImg = new Array("Images/img/an1.jpeg", "Images/img/an2.jpeg", "Images/img/an3.jpeg", "Images/img/an4.jpeg", "Images/img/an5.jpeg");

function choosePic(){
    var randomNum = Math.floor(Math.random() * myImg.length);
    img.src = myImg[randomNum];
}
choosePic();
// img.src = "Images/img/an5.jpeg";
img.style.height = "635px"
img.style.width = "960px";
img.style.marginLeft = "auto";
img.style.marginRight = "auto";
img.style.display = "block";

btn1.onmousedown = function(){
    btn.style.backgroundColor = 'ghostwhite';
}

btn1.onmouseup = function(){
    btn.style.backgroundColor = 'rgba(195, 195, 180)';
    btn.appendChild(img);
}

