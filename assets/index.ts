/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function newsDropdown(): void {
    document.getElementById("news")!.classList.toggle("show");
}

window.onclick = function(event: MouseEvent): void {
    if (!(event.target as Element).matches('dropdownbtn')) {
        var dropdowns = document.querySelectorAll(".news-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i] as HTMLElement;
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}