const menuDiv = document.getElementById('menumobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
  menuDiv.classList.toggle('abrir')
  btnAnimar.classList.toggle('ativo')
}