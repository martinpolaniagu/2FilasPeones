let canvas = document.querySelector("#Peones2")
let ctx = canvas.getContext("2d")

//peones

function peones(x,y,t,color)
{
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x,y,2.5*t,t);
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x+0.5*t,y-0.5*t,1.5*t,0.5*t);
ctx.fillStyle = color
ctx.strokeStyle = color
ctx.beginPath();
ctx.arc(x+1.25*t, y-1.8*t, t, -Math.PI, Math.PI)
ctx.stroke()
ctx.fill()
ctx.fillStyle = color
ctx.strokeStyle = "black"
ctx.fillRect(x+0.75*t,y-t,t,0.5*t);
}

peones(42,115,8,"red")
peones(92,115,10,"red")
peones(142,115,8,"red")
peones(192,115,12,"red")
peones(242,115,12,"red")
peones(292,115,8,"red")
peones(342,115,10,"red")
peones(392,115,8,"red")

peones(42,365,12,"black")
peones(92,365,10,"black")
peones(142,365,12,"black")
peones(192,365,8,"black")
peones(242,365,8,"black")
peones(292,365,12,"black")
peones(342,365,10,"black")
peones(392,365,12,"black")
