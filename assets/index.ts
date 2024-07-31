/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function newsDropdown() {
    document.getElementById("news").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('dropdownbtn')) {
      var dropdowns = document.getElementById("news-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }