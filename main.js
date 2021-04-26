canvas = document.getElementById("my_canvas");
cntx = canvas.getContext("2d");

colour = "blue";
cntx.beginPath();
cntx.strokeStyle = colour;
cntx.lineWidth = 2;
cntx.arc(200, 200, 40, 0, Math.PI * 2);
cntx.stroke();