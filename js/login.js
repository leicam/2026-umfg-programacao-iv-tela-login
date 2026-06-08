var body = document.querySelector("body")
var singInButton = document.querySelector("#singIn")
var singUpButton = document.querySelector("#singUp")

body.onload = function()
{
    body.className = "on-load"
}

singInButton.addEventListener("click", function()
{
    body.className = "sing-in"
});

singUpButton.addEventListener("click", function(){
    body.className = "sing-up"
})