var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";


try {//indicator of status localStorage's
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {//open modal form and config focus on input
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(evt) {//click x to close popup
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {//record value of login to localStorage if user inputed it
    if (!login.value || !password.value) {
        evt.preventDefault();
        console.log("Вы не ввели логин и пароль");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {//press Esc to cloes popup
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
        }
    }
});