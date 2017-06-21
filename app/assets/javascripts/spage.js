






var cc = document.getElementById("cc");
var sc = document.getElementById("sc");




var ctx = cc.getContext("2d");
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="rgba(255,255,255,0.7)";
ctx.arc(150, 75, 50, -Math.PI/2, Math.PI/2);
ctx.stroke();
ctx.strokeStyle = 'white';
ctx.font = '18px Arial';
ctx.strokeText('50%', 130, 80);


var ctx = sc.getContext("2d");
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle="rgba(255,255,255,0.7)";
ctx.arc(150, 75, 50, 0, 2*Math.PI);
ctx.stroke();
ctx.strokeStyle = 'white';
ctx.font = '18px Arial';
ctx.strokeText('100%', 130, 80);













