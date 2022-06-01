noseX = 0;
noseY = 0;

function preload() {
    mousdache = loadImage('https://i.postimg.cc/50Q6Jf30/ms.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 320, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(mousdache, noseX - 40, noseY - 10, 100, 75);
}

function take_snapshot() {
    save('myFilterImage.png')
}