window.onload = function() {

  const initHeader = () => {
    console.log('inited');
    const hamburger = document.querySelector(".icon-bottles-hamburger");
    const hiddenNav = document.querySelector(".header__navigation");
    const closeBtn = document.querySelector(".icon-close");
    const menuItems = document.querySelectorAll(".header__navigation li");



    hamburger.addEventListener('click', () => {      
      hiddenNav.classList.add('open')
      hamburger.style.display = "none"
      closeBtn.style.display = "block"

      menuItems.forEach(function (el, index) {
        setTimeout(function () {
          el.classList.add('animate-in')
        }, index * 200);
      });
    });

    closeBtn.addEventListener('click', () => {      
      hiddenNav.classList.remove('open')
      hamburger.style.display = "block"
      closeBtn.style.display = "none"

      menuItems.forEach(function (el, index) {
        el.classList.remove('animate-in')     
      });
    });




  }




  initHeader()
}



