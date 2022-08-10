var elOpenModalBtn = document.querySelector(".js-open-modal");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".js-close-modal");
var elBodyModal = document.querySelector("body")
elOpenModalBtn.addEventListener("click", function () {
    elModal.classList.add("modal-open");
    elBodyModal.classList.add("body-stop");
});

elCloseModalBtn.addEventListener("click", function () {
    elModal.classList.remove("modal-open");
    elBodyModal.classList.remove("body-stop");
})
var alertlBtn = document.querySelector(".js-open-alert");
var alert = document.querySelector(".modal-window");
var alertcloselBtn = document.querySelector(".js-close-alert");

alertlBtn.addEventListener("click", function(){
    alert.classList.add("alert-open");
})
