let money = 0;
document.querySelector('.plus').onclick = function() {
    money += 100;
    document.querySelector('.money').innerHTML = money;
}
document.querySelector('.minus').onclick = function(){
     money -= 100;
     document.querySelector('.money').innerHTML = money;
}