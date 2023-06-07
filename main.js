canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")

var mouseevent="empty"
var startx,starty

colour="black"
width=5

canvas.addEventListener("mousedown",mymousedown)

function mymousedown(e)
{
    mouseevent="mousedown"

}

canvas.addEventListener("mouseup",mymouseup)

function mymouseup(e)
{
    mouseevent="mouseup"

}

canvas.addEventListener("mouseleave",mymouseleave)

function mymouseleave(e)
{
    mouseevent="mouseleave"

}  


canvas.addEventListener("mousemove",mymousemove)

function mymousemove(e)
{
    currentx=e.clientX-canvas.offsetLeft
    currenty=e.clientY-canvas.offsetTop

       if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=width

        ctx.arc(currentx,currenty,20,0,2*Math.PI)
        ctx.stroke()
       }
   
       startx=currentx
       starty=currenty   
}
