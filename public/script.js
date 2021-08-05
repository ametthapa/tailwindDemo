var menu = document.getElementById('menu');
var menu_icon = document.getElementById('menu-icon');

menu_icon.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
})