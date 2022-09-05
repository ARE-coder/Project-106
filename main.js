song = "";
LwristX = 0
LwristY = 0
RwristX = 0
RwristY = 0

function preload()
{
    song = loadSund("Music.mp3");
}
function setup()
{
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function modelLoaded()
{
    console.log("PoseNet has been intiallized\n You can now use it")
}
function draw()
{
    image(video,0,0,600,500);
}
function play()
{
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results)
        LwristX = results[0].pose.leftWrist.x 
        LwristY = results[0].pose.rightWrist.y 

        RwristX = results[0].pose.rightWrist.x 
        RwristY = results[0].pose.rightWrist.y 

        console.log("Left wirst's x co-ordinates is " + LwristX + "Left wirst's y co-ordinates is " + LwristY)

        console.log("Right wirst's x co-ordinates is " + RwristX + "Right wirst's y co-ordinates is " + RwristY)


    }
}