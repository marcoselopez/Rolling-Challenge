const toggle = document.querySelector('#navProfileMenu')
const items = document.querySelectorAll('#navItem')

// NOTE TOGGLE MENU WHEN CLICK ON MENU
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
  var timer = setTimeout(function(){
    items.forEach(item => item.classList.remove("active"))
    toggle.innerHTML = "menu"
    return timer;
  }, 400)
}

//NOTE EVENT LISTENERS
toggle.addEventListener('click', toggleMenu, false);
items.forEach(item => {
  item.addEventListener('click', toggleMenuDelayed, false);
})

