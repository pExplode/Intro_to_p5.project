function preload(){

}

function setup(){
    canvas = createCanvas(480,360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(320,240);
    video.hide();
    
}

function draw(){
    image(video,50,50,320,240);
    
    fill(250,30,70);
    rect(18,50,25,236)
    fill(250,30,70);
    rect(30,20,350,25);
    fill(250,30,70);
    rect(377,20,25,280);
    fill(250,30,70);
    rect(30,295,350,25);
    fill(20,250,150);
    circle(30,30,50);
    fill(20,250,150);
    circle(30,310,50);
    fill(20,250,150);
    circle(390,30,50);
    fill(20,250,150);
    circle(390,310,50);
}

function take_snapshot(){
    save('pFimagePs.png');
}