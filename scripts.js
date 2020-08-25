// footer  1
var mbappe = document.querySelector("footer");
mbappe.addEventListener('click',function(){
    console.log("click " + "numéro " + count);
})
// footer  2
var count = 1;
mbappe.onclick = function() {
  count += 1;
  console.log("Click " + "numéro " + count);
};


//navbar
var loulou = document.getElementsByTagName("span")[0];

loulou.addEventListener('click',Mymy);

function Mymy(){
    var vasco = document.getElementById("navbarHeader");
    vasco.classList.toggle("collapse");
}
//edit
var sarace = document.getElementsByClassName("card mb-4 box-shadow")[0];

var sa = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

sa.addEventListener('click', function(){
    sarace.style = "color: red";
});

//edit 2
var sarice = document.getElementsByClassName("card mb-4 box-shadow")[1];

var sau = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

sau.addEventListener('click', function(){
    if (sarice.style.color === 'green') {
        sarice.style = "color: ";
    }
    else {
        sarice.style = "color: green";
    }
});