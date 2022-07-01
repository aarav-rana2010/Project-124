function setup(){
    canvas=createCanvas(300,350);
    canvas.position(600,150);
    video=createCapture(VIDEO);
    video.size(300,350);
    Posenet=ml5.poseNet(video,modelLoaded);
    Posenet.on("pose",gotPoses);
}
function preload() {
}
function draw() {
    background("#7ff5d9");
}
function modelLoaded() {
    console.log("Posenet is initialised");
}
function gotPoses(results) {
    if(results.length>0) {
    console.log(results);
    }
}