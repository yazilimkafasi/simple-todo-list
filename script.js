var buttonElt = document.querySelector("#button"),
    inputElt = document.querySelector("#inp"),
    bottomElt = document.querySelector("#bottom"),
    count = -1;

buttonElt.addEventListener("click", function(e) {
    e.preventDefault();
    var inputVal = inputElt.value;
    if (inputVal.length > 0) {
        bottomElt.insertAdjacentHTML("beforeEnd", "<p class='elt'>" + inputVal + "<span class='del' title='Delete element'>x</span></p>");
        inputElt.value = "";
        count++;

        document.querySelectorAll(".elt")[count].addEventListener("click", function() {
            this.classList.toggle("crossed");
        });

        document.querySelectorAll(".del")[count].addEventListener("click", function() {
            var currentElt = this.parentNode;
            currentElt.style.display = "none";
            currentElt.parentNode.removeChild(currentElt);
            count--;
        });
    }
});