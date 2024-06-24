
const myInput = document.querySelector("input")

let info

myInput.addEventListener("keypress", function () {

    clearInterval(info)

    info = setTimeout(function () {
        console.log("Request Sent To The Server");
    }, 3000)



})