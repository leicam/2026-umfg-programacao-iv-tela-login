var body = document.querySelector("body")
var singInButton = document.querySelector("#singIn")

body.onload = function()
{
    body.className = "on-load"
}

singInButton.addEventListener("click", function()
{
    body.className = "sing-in"
});