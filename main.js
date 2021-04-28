function preload()
{

}

function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color=""
}
function draw()
{
    image(video,230,150,220,200);
    tint(tint_color);

    fill (0,128,0);
    stroke (0,128,0);
    rect (90,40,460,20);

    rect (90,420,460,20);
}
function take_snapshot()
{
   save('class_113.png');

}
function background_color()
{
    tint_color=document.getElementById("color_name").value;
}