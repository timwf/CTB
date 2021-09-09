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
        }, index * 120);
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

  const initLogin = () => {
    const forgotPW = document.querySelector(".login__forgot");
    const backToSignIn = document.querySelector(".login__cancel");
    const sigInHeader = document.querySelector(".login-wrap__inner h1");
    const sigInCopy = document.querySelector(".login-wrap__inner h4");

    if (window.location.href.indexOf("#recover") > -1) {
      sigInCopy.style.display = "none"
      sigInHeader.style.display = "none"
    }

    forgotPW.addEventListener('click', () => {  
      sigInCopy.style.display = "none"
      sigInHeader.style.display = "none"
      setTimeout(function(){ 
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
       }, 50);
    })  

    backToSignIn.addEventListener('click', () => {  
      sigInCopy.style.display = "block"
      sigInHeader.style.display = "block"
      setTimeout(function(){ 
        window.scroll({top: 0, left: 0, behavior: 'smooth'});
       }, 50);
    })  
  }




  initHeader()
  initLogin()
}



