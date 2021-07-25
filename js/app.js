const toggle = document.querySelector('#navProfileMenu')
const items = document.querySelectorAll('#navItem')
const projectTopItem = document.styleSheets[3].cssRules[45].style
const projectBottomItem = document.styleSheets[3].cssRules[46].style
const projectbox1 = document.querySelector('#projectBox1')
console.log(projectTopItem)

//NOTE TOGGLE MENU WHEN CLICK ON MENU
function toggleMenu(){
  let checkItem;
  items.forEach(item => {
    if(item.className.indexOf("active") > -1){
      checkItem = true;
    } else {
      checkItem = false;
    }
  })
  
  if(checkItem){    
    items.forEach(item => item.classList.remove("active"))
    toggle.innerHTML = "menu"
  } else {
    items.forEach(item => item.classList.add("active"));
    toggle.innerHTML = "close"
  }
}

//NOTE CLOSE MENU WHEN CLICK ON LINK
function toggleMenuDelayed(){
  let timer = setTimeout(function(){
    items.forEach(item => item.classList.remove("active"))
    toggle.innerHTML = "menu"
    return timer;
  }, 400)
}

//NOTE CONTENT APPEARS AND DISSAPPEARS WHEN HOVER
function hoverToggleOn(){
  projectTopItem.removeProperty('display')
  projectTopItem.setProperty('display', 'flex')
  projectBottomItem.removeProperty('display')
  projectBottomItem.setProperty('display', 'flex')  
}
function hoverToggleOff(){
  projectTopItem.removeProperty('display')
  projectTopItem.setProperty('display', 'none')
  projectBottomItem.removeProperty('display')
  projectBottomItem.setProperty('display', 'none')  
}

//NOTE EVENT LISTENERS
toggle.addEventListener('click', toggleMenu, false);
items.forEach(item => {
  item.addEventListener('click', toggleMenuDelayed, false);
})
projectBox1.addEventListener('mouseenter', hoverToggleOn, false)
projectbox1.addEventListener('mouseleave', hoverToggleOff, false)