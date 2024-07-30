function switchStyle(style){
    document.getElementById("stylesheet").href = style;
}

const menuButton = document.querySelector('.menu');
const screenMenu= document.querySelector('.screen-menu');

menuButton.addEventListener('click', () =>{
    menuButton.classList.toggle('active');
    screenMenu.classList.toggle('active');
});

function toggleMenu()
{
    menuButton.classList.toggle('active');
    screenMenu.classList.toggle('active');
}