var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

//mouseenter and mouseleave - also can be used for a particular part
main.addEventListener("mousemove",function(okay)
{
    console.log(okay.x + " " + okay.y)
    crsr.style.left = okay.x + "px"
    crsr.style.top = okay.y + "px"
})