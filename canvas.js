console.log("start");

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var X = canvas.width;
var Y = canvas.height;
var a = canvas.height-400;
var sprungstatus = 0;
var rechts = false;
var links = false;
var img1 = new Image();     img1.src = 'figur2.png';
var img2 = new Image();     img2.src = 'figur3.png';
var img3 = new Image();     img3.src = 'figur4.png';
var gallerie1 = new Image();     gallerie1.src = 'gallerie1.jpg';
var gallerie2 = new Image();     gallerie2.src = 'gallerie2.png';
var buch = new Image();     buch.src = 'buch.png';
var trisor = new Image();     trisor.src = 'trisor.png';
var fahrstuhl = new Image();     fahrstuhl.src = 'fahrstuhl.png';
var fahrstuhl2 = new Image();     fahrstuhl2.src = 'fahrstuhl2.png';
var doors = new Image();     doors.src = 'doors.png';
var ture = new Image();     ture.src = 'ture.png';
var Jetpack2 = new Image();     Jetpack2.src = 'Jetpack2.png';
var Jetpack3 = new Image();     Jetpack3.src = 'Jetpack3.png';
var skyline = new Image();     skyline.src = 'skyline.png';
var windmill = new Image();     windmill.src = 'windmill.png';
var c = 0;
let options = "";
var geschoss = 1;
var j = false;
var jetpack = false;



function clearScreen(){
    if(geschoss==1){
    ctx.fillStyle = 'darkgray';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(X + 6800, 0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    ctx.fillRect(0, +800, canvas.width, canvas.height);}
    if(geschoss==2){
        ctx.fillStyle = '#8A4B08';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(X + 6800, -2000, canvas.width, canvas.height);
        ctx.drawImage(skyline, X+6800, 0, 1200*2, 600*2);
        ctx.fillStyle = "gray";
        ctx.fillRect(0, +800, canvas.width, canvas.height);}
    }


function animate(){
    clearScreen();
    willkommen();
    drawGallerie();
    drawBook();
    artikel();
    drawDoors()
    drawFigur();
    setTimeout(animate, 25);
    
}
function willkommen(){
    ctx.fillStyle = "white";
    ctx.font = "100px Verdana";
    ctx.fillText("Willkommen auf", X-1800, Y-600);           //erst x dann y         oben links 0 0      unten rechts 1920 955
    ctx.fillText("Henni´s Webseite", X-1800, Y-500 );
    ctx.font = "40px Verdana";
    ctx.fillText("drücke -> um zu laufen", X-1800, Y-800);
}
function drawFigur(){
    
    if(sprungstatus >= 1){
        if(sprungstatus < 2*3){a-=10*2;}
        else if(sprungstatus < 4*3){a-=6*2;}
        else if(sprungstatus < 5*3){a-=0;}
        else if(sprungstatus < 7*3){a+=6*2;}
        else if(sprungstatus < 9*3-1){a+=10*2;}
        sprungstatus++;}
        if(sprungstatus>=9*3-1){sprungstatus = 0;}
        
        //ctx.fillRect(100, a, 50, 50);
        //ctx.drawImage(img1, 100, a, 108*2, 192*2);
        if(jetpack==true){
            nach_rechts_fliegen();
        }
        else{
        nach_rechts_gehen();
        }
function nach_rechts_fliegen(){

    if (c<10){
        ctx.drawImage(Jetpack2,100,a, 1000/3, 1000/3);
        c++;}
    else if(c>=10 && c<20){
        ctx.drawImage(Jetpack3,100,a, 1000/3, 1000/3);
        c++;}
    else if(c>=20){
        ctx.drawImage(Jetpack3,100,a, 1000/3, 1000/3);
        c=0;}
    if(rechts==true && X>-5800){X-=40;}
    if(rechts==true && geschoss==2){X-=40;}
    if(links==true&& X<2300){X+=50;}
    if(links==true && rechts==true){links=false;rechts=false;}
}
    }
    function nach_rechts_gehen(){

        if(rechts == false){
            ctx.drawImage(img1,100,a, 1000/3, 1000/3);}


            else if(c<30 && rechts){
                ctx.drawImage(img2,100,a, 1000/3, 1000/3);c++;}
                else if(c<60 && rechts){
                    ctx.drawImage(img3,100,a, 1000/3, 1000/3);c++;}
                    else if (c>=60 && rechts){
                        ctx.drawImage(img1,100,a, 1000/3, 1000/3);
                        c=0;}
                        if(rechts==true && X>-5800){X-=10;}
                        else if(rechts==true && geschoss==2){X-=10;}
                        if(links==true&& X<2300){X+=10;}
                        if(links==true && rechts==true){links=false;rechts=false;}
                    }
                    // function nach_links_gehen(){                                                   // in Arbeit...
                    //     if(rechts == false){
                    //         ctx.drawImage(img1,100,a, 1000/3, 1000/3);}
                    //         else if(c<30 && rechts){
                    //             ctx.drawImage(img2,100,a, 1000/3, 1000/3);c++;}
                    //             else if(c<60 && rechts){
                    //                 ctx.drawImage(img3,100,a, 1000/3, 1000/3);c++;}
                    //                 else if (c>=60 && rechts){
                    //     ctx.drawImage(img1,100,a, 1000/3, 1000/3);
                    //     c=0;}
                    //     if(rechts==true){X-=4;}
                    //     if(links==true){X+=4;}
                    //     if(links==true && rechts==true){links=false;rechts=false;}
                    // }                                                                              //______
                    function drawGallerie(){
                        ctx.fillText("drücke _ um aus dem Fenster zu schauen...", X-200, Y-900);
                        ctx.drawImage(gallerie2,X-200, Y-800, 1200, 600);
                        //ctx.drawImage(gallerie1,X+1400, Y-750, 4608/8, 3456/8 );
                        ctx.fillText("Drücke E um mit dingen zu interagieren", X+2800, Y-800);
                        ctx.drawImage(windmill, X+4500, Y-720, 1000/3, 1000/3);
                    }
                    function artikel(){
                        ctx.fillStyle = "white";
                        ctx.font = "70px Verdana";
    ctx.fillText("Mein Beitrag", X+1200, Y-800);
    ctx.fillText("Dieser Beitrag ist ein sinnloser Beitrag,", X+1200, Y-700 );
    ctx.fillText("ich habe wirklich keine Ahnung was dieser", X+1200, Y-600 );
    ctx.fillText("Beitrag aussagen könnte.", X+1200, Y-500 );
                    }
function drawBook(){
    if(X<-2300 && X>-3000){
        ctx.fillStyle = "black";
        ctx.font = "50px Verdana";
        ctx.fillText("oh, ein Buch", X+2800, Y-600);
        ctx.fillStyle = "white";
        ctx.drawImage(buch, X+3000, Y-300, 700/4, 578/4);
}}
function drawDoors(){
    if(X<-3700 && X>-4200){
        ctx.fillStyle = "black";
        ctx.font = "100px Verdana";
        //ctx.fillText("E", X+4200, Y-600);
    }
    ctx.drawImage(fahrstuhl, X+4000, Y-720, 1000/1.5, 1000/1.5);
    ctx.drawImage(trisor, X+6000, Y-820, 1000/1.5, 1000/1.5);

    ctx.drawImage(ture, X+5000, Y+1450, 1000/2.5, 1000/2.5);
    ctx.drawImage(doors, X+5900, Y+1450, 1000/2.5, 1000/2.5);

    ctx.drawImage(fahrstuhl2, X+4000, Y+1280, 1000/1.5, 1000/1.5);
}








function keyDown(event){
    if(event.keyCode==74){
        j=true;
    }
    if(j==true){
        if(event.keyCode==80){
            if(jetpack==true){
                jetpack = false;
                a = canvas.height-400;
            }
            else{
            jetpack=true;
            a = canvas.height-600;
        }}
    }
    if(event.keyCode==39){
        rechts=true;}
        else if(event.keyCode==32){rechts=false;}

        if(event.keyCode==37){
            links=true;}
            else if(event.keyCode==32){links=false;}
            
            if(sprungstatus<1){
                if(event.keyCode==38){
                    sprungstatus = 1;
                }}
                console.log("Y"+Y);
                console.log("X"+X);
                
                if(event.keyCode==69 && X<-2300 && X>-3000){
                    ctx.fillText("mein Beitrag", X+1200, Y-800);
                    let ref = window.open('gaestebuch/index.php', '_blank', options); 
                }
                if(event.keyCode==69 && X<-3700 && X>-4200 && Y > 0){
                    Y=Y-2000;
                    geschoss=2;
                    return;
                }
                if(event.keyCode==69 && X<-3700 && X>-4200 && Y < 0){
                    Y=Y+2000;
                    geschoss=1;
                }
                if(event.keyCode==69 && X<-5500 && X>-6000 && Y < 0){
                    let ref = window.open('picolo2/index.html', '_blank', options); 
                }
            }
            
            window.addEventListener('keydown', keyDown);
            animate();


//das ist das sogenannte Ende des scripts ab hier kannst du keine code mehr erwarten, jeder der hier etwas hinunter schreibt sollte sich schämen!