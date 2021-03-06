const toggle = document.querySelector('#navProfileMenu')
const items = document.querySelectorAll('#navItem')
//NOTE PROJECT ITEMS 1
const projectTopItem1 = document.styleSheets[3].cssRules[59].style
const projectBottomItem1 = document.styleSheets[3].cssRules[60].style
const projectbox1 = document.querySelector('#projectBox1')
//NOTE PROJECT ITEMS 2
const projectTopItem2 = document.styleSheets[3].cssRules[61].style
const projectBottomItem2 = document.styleSheets[3].cssRules[62].style
const projectbox2 = document.querySelector('#projectBox2')
//NOTE PROJECT ITEMS 3
const projectTopItem3 = document.styleSheets[3].cssRules[63].style
const projectBottomItem3 = document.styleSheets[3].cssRules[64].style
const projectbox3 = document.querySelector('#projectBox3')
//NOTE FLOATING MENU
const toggleFloat = document.querySelector('#floatingMenu')
const itemsFloat = document.querySelectorAll('#navItemFloat')

console.log(document.styleSheets[3].cssRules)


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

//NOTE TOGGLE FLOATING MENU WHEN CLICK
function toggleMenuFloat(){
  let checkItem;
  itemsFloat.forEach(item => {
    if(item.className.indexOf("active") > -1){
      checkItem = true;
    } else {
      checkItem = false;
    }
  })
  
  if(checkItem){    
    itemsFloat.forEach(item => item.classList.remove("active"))
    toggleFloat.innerHTML = "menu"
  } else {
    itemsFloat.forEach(item => item.classList.add("active"));
    toggleFloat.innerHTML = "close"
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

function toggleMenuDelayedFloat(){
  let timer = setTimeout(function(){
    itemsFloat.forEach(item => item.classList.remove("active"))
    toggleFloat.innerHTML = "menu"
    return timer;
  }, 400)
}

//NOTE CONTENT APPEARS AND DISSAPPEARS WHEN HOVER - PROJECT BOX 1
function hoverToggleOn1(){
  projectTopItem1.removeProperty('display')
  projectTopItem1.setProperty('display', 'flex')
  projectBottomItem1.removeProperty('display')
  projectBottomItem1.setProperty('display', 'flex')  
}
function hoverToggleOff1(){
  projectTopItem1.removeProperty('display')
  projectTopItem1.setProperty('display', 'none')
  projectBottomItem1.removeProperty('display')
  projectBottomItem1.setProperty('display', 'none')  
}

//NOTE CONTENT APPEARS AND DISSAPPEARS WHEN HOVER - PROJECT BOX 2
function hoverToggleOn2(){
  projectTopItem2.removeProperty('display')
  projectTopItem2.setProperty('display', 'flex')
  projectBottomItem2.removeProperty('display')
  projectBottomItem2.setProperty('display', 'flex')  
}
function hoverToggleOff2(){
  projectTopItem2.removeProperty('display')
  projectTopItem2.setProperty('display', 'none')
  projectBottomItem2.removeProperty('display')
  projectBottomItem2.setProperty('display', 'none')  
}

//NOTE CONTENT APPEARS AND DISSAPPEARS WHEN HOVER - PROJECT BOX 3
function hoverToggleOn3(){
  projectTopItem3.removeProperty('display')
  projectTopItem3.setProperty('display', 'flex')
  projectBottomItem3.removeProperty('display')
  projectBottomItem3.setProperty('display', 'flex')  
}
function hoverToggleOff3(){
  projectTopItem3.removeProperty('display')
  projectTopItem3.setProperty('display', 'none')
  projectBottomItem3.removeProperty('display')
  projectBottomItem3.setProperty('display', 'none')  
}

//NOTE EVENT LISTENERS
toggle.addEventListener('click', toggleMenu, false);
toggleFloat.addEventListener('click', toggleMenuFloat, false);
items.forEach(item => {
  item.addEventListener('click', toggleMenuDelayed, false);
})
itemsFloat.forEach(item => {
  item.addEventListener('click', toggleMenuDelayedFloat, false);
})
projectBox1.addEventListener('mouseenter', hoverToggleOn1, false)
projectbox1.addEventListener('mouseleave', hoverToggleOff1, false)
projectBox2.addEventListener('mouseenter', hoverToggleOn2, false)
projectbox2.addEventListener('mouseleave', hoverToggleOff2, false)
projectBox3.addEventListener('mouseenter', hoverToggleOn3, false)
projectbox3.addEventListener('mouseleave', hoverToggleOff3, false)