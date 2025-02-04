function openMenu(evt, menuName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();


const nav = document.getElementById("nav");
console.log(nav)

window.onscroll = function() {myFunction()};
let height = screen.height;

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("nav").className = "test";
    document.getElementById("logo").style.display="none"
    document.getElementById("dark-logo").style.display="block"
    nav.style.position="fixed"
  } else {
    document.getElementById("nav").className = "";
    document.getElementById("logo").style.display="block"
    document.getElementById("dark-logo").style.display="none"
  }
}