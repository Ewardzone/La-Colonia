const downArrow = document.getElementById("downArrow");
const verticalMenu = document.getElementById("verticalMenu");

downArrow.addEventListener('click', function(){
    if(verticalMenu.classList.contains('showVerticalMenu')){
        verticalMenu.classList.remove('showVerticalMenu')
    } else {
        verticalMenu.classList.add('showVerticalMenu')
    }
    
})