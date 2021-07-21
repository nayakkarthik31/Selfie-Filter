function preload(){
    img = loadImage('https://cliparting.com/wp-content/uploads/2018/03/cool-pictures-2018-2.jpg')
}
function setup(){
    canvas=createCanvas(640,480)
    canvas.position(110,300)
    video=createCapture(VIDEO)
    video.hide()
    tint_color=""
}
function draw(){
    image(video,0,0,640,480)
    tint(tint_color)
}
function take_snapshot(){
    save('image.png')
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value
}