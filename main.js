var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var bg_array=["mars_1.jpg","mars_2.jpg","mars_3.jpg","mars_4.jpg"];
var random_number=Math.floor(Math.random()*4);
bg_img=bg_array[random_number];
rover_img="rover.png";

var rover_x=10;
var rover_y=10;
var rover_width=100;
var rover_height=90;

function add(){
    bg_imgtag=new Image()
    bg_imgtag.onload=uploadBg
    bg_imgtag.src=bg_img

    rover_imgtag= new Image()
    rover_imgtag.onload=uploadrover
    rover_imgtag.src=rover_img
}

function  uploadBg(){
    ctx.drawImage(bg_imgtag,0,0,canvas.width,canvas.height);

}

function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);

}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    
    if (keypressed=="37"){
        left();
        console.log("left")

    }

    if (keypressed=="38"){
        up();
        console.log("up")
    }

    if (keypressed=="39"){
        right();
        console.log("right")
    }

    if(keypressed=="40"){
        down();
        console.log("down")
    }

}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("position of rover is x= "+ rover_x+"y= "+ rover_y);
        uploadBg();
        uploadrover();

    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("position of rover is x= "+ rover_x+"y= "+ rover_y);
        uploadBg();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("position of rover is x= "+ rover_x+"y= "+ rover_y);
        uploadBg();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("position of rover is x= "+ rover_x+"y= "+ rover_y);
        uploadBg();
        uploadrover();
    }
}


