//sideBar Action
let sideMenu = document.querySelectorAll('.SideMenu')[0];
let navBar = document.querySelectorAll('.navList')[0];
console.log(navBar)

sideMenu.addEventListener("click", function () {
  if (sideMenu.firstElementChild.classList.contains('bi-list')) {
    sideMenu.firstElementChild.classList.replace('bi-list', 'bi-x');
    sideMenu.style.color = 'red'
    navBar.classList.remove("active")
  } else {
    sideMenu.firstElementChild.classList.replace('bi-x', 'bi-list');
    sideMenu.style.color = 'inherit'
    navBar.classList.add("active")
  }
})

//navItem Action
let nabItem = document.querySelectorAll('.navItem');
nabItem.forEach((item)=> {
  item.addEventListener("click",function(){
    item.classList.add("active");
    item.forEach(()=>{
      item.classList.remove("active");
    })
  })
  console.log(item)
})

//add year 
const year = new Date().getFullYear();
document.getElementById("currentYear").innerText = year;