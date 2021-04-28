noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(400,400);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
background("#800080");
fill ("#e75480");
stroke("#0000FF");
document.getElementById("square_side").innerHTML="width and heigth of the square="+difference+"px";
square(noseX,noseY,diffference);
}
function modelLoaded(){
console.log("modelLoaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(noseX,noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.leftWrist.x;
    console.log(rightWristX,leftWristX);
    difference=floor(leftWristX-rightWristX)
}
}