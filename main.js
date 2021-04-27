canvas = document.getElementById("my_canvas");
cntx = canvas.getContext("2d");

colour = "blue";
cntx.beginPath();
cntx.strokeStyle = colour;
cntx.lineWidth = 5;
cntx.arc(300, 300, 40, 0, Math.PI * 2);
cntx.stroke();


colour = "yellow";
cntx.beginPath();
cntx.strokeStyle = colour;
cntx.lineWidth = 5;
cntx.arc(350, 350, 40, 0, Math.PI * 2);
cntx.stroke();


colour = "black";
cntx.beginPath();
cntx.strokeStyle = colour;
cntx.lineWidth = 5;
cntx.arc(400, 300, 40, 0, Math.PI * 2);
cntx.stroke();


colour = "green";
cntx.beginPath();
cntx.strokeStyle = colour;
cntx.lineWidth = 5;
cntx.arc(450, 350, 40, 0, Math.PI * 2);
cntx.stroke();


colour = "red";
cntx.beginPath();
cntx.strokeStyle = colour;
cntx.lineWidth = 5;
cntx.arc(500, 300, 40, 0, Math.PI * 2);
cntx.stroke();