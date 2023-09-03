document.addEventListener("DOMContentLoaded", function () {
  const windowWidth = window.innerWidth;
  const dropdownItems = document.querySelectorAll(".navbar-nav .nav-item.dropdown");

  if (windowWidth >= 991) {
    dropdownItems.forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        this.querySelector(".dropdown-menu").classList.add("show");
      });

      item.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").classList.remove("show");
      });
    });
  } else {
    dropdownItems.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        const dropdownMenu = this.querySelector(".dropdown-menu");
        if (!dropdownMenu.classList.contains("show")) {
          dropdownMenu.classList.add("show");
          this.addEventListener("mouseleave", function () {
            dropdownMenu.classList.remove("show");
          }, { once: true });
        } else {
          dropdownMenu.classList.remove("show");
        }
      });
    });
  }
});

$(window).ready(function() {
  $(window).on('load', function(){
    setTimeout(removeLoader, 2000);
  });
  function removeLoader(){
      $( "#loading" ).fadeOut(500, function() {
        $( "#loading" ).remove(); 
    });  
  }
});