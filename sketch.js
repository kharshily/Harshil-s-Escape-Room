var bg;
var input;
var enter, enterImg;
var violinImg;
var waterImg;
var covidImg;
var romeoImg;
var flagImg;
var volleyImg;
var violaImg;
var cricketImg;
var WWIIImg;
var oxyImg;
var markImg;
var haitiImg;
var ukeleleImg;
var curlImg;
var logImg;
var condoImg;
var squareImg;
var flightImg;
var nobelImg;
var hintImg;


var input2;
var input2val;

var input3;
var input3val;

var input4;
var input4val;

var input5;
var input5val;

var input6;
var input6val;

var input7;
var input7val;

var input8;
var input8val;

var input9;
var input9val;

var input10;
var input10val;

var input11;
var input11val;

var input12;
var input12val;

var input13;
var input13val;

var input14;
var input14val;

var input15;
var input15val;

var input16;
var input16val;

var input17;
var input17val;

var input18;
var input18val;

var input19;
var input19val;

var input20;
var input20val;

var input21;
var input21val;

var input22;
var input22val;

var cont, cont2, contImg;

var TRY, tryImg;

var play, playImg;

var hint;

var START = 0;
var PLAY1 = 1;
var PLAY2 = 2;
var PLAY3 = 3;
var PLAY4 = 4;
var PLAY5 = 5;
var PLAY6 = 6;
var PLAY7 = 7;
var PLAY8 = 8;
var PLAY10 = 10;
var PLAY11 = 11;
var PLAY12 = 11;
var PLAY12 = 12;
var PLAY13 = 13;
var PLAY14 = 14;
var PLAY15 = 15;
var PLAY16 = 16;
var PLAY17 = 17;
var PLAY18 = 18;
var PLAY19 = 19;
var PLAY20 = 20;
var PLAY21 = 21;
var PLAY22 = 22;
var PLAY23 = 23;
var PLAY24 = 24;
var PLAY25 = 25;
var PLAY26 = 26;
var END = 27;

var gameState = START;

var flag = 0;
var flag2 = 0;
var flag3 = 0;
var flag4 = 0;
var flag5 = 0;
var flag6 = 0;
var flag7 = 0;
var flag10 = 0;
var flag11 = 0;
var flag12 = 0;
var flag13 = 0;
var flag14 = 0;
var flag15 = 0;
var flag16 = 0;
var flag17 = 0;
var flag18 = 0;
var flag19 = 0;
var flag20 = 0;
var flag21 = 0;
var flag22 = 0;
var flag23 = 0;
var flag24 = 0;

var timer = 270;

function preload() {
  enterImg = loadImage("images/enter.png");
  bg = loadImage("images/bg.png");
  violinImg = loadImage("images/violin.png");
  waterImg = loadImage("images/water3.jpg");
  covidImg = loadImage("images/covid.jpg");
  romeoImg = loadImage("images/romeo.jpg");
  flagImg = loadImage("images/flag.jpg");
  volleyImg = loadImage("images/volley.png");
  contImg = loadImage("images/continue.png");
  violaImg = loadImage("images/viola.png");
  cricketImg = loadImage("images/cricket.png");
  WWIIImg = loadImage("images/WWII.jpg");
  oxyImg = loadImage("images/table.png");
  markImg = loadImage("images/mark.jpg");
  haitiImg = loadImage("images/haiti.jpg");
  ukeleleImg = loadImage("images/ukelele.png");
  curlImg = loadImage("images/curling.png");
  logImg = loadImage("images/log.png");
  condoImg = loadImage("images/condo.jpg");
  squareImg = loadImage("images/square.png");
  flightImg = loadImage("images/93.jpg");
  nobelImg = loadImage("images/nobel.png");
  hintImg = loadImage("images/hint.png");
  tryImg = loadImage("images/TRY.png");
  playImg = loadImage("images/play.png")
}

function setup() {
  createCanvas(650,650);

  input = createInput();
  enter = createSprite(400,150);
  enter.addImage(enterImg);
  enter.scale = 1/8;

  input2 = createInput();
  input2.hide();

  input3 = createInput();
  input3.hide();

  input4 = createInput();
  input4.hide();

  input5 = createInput();
  input5.hide();

  input6 = createInput();
  input6.hide();

  input7 = createInput();
  input7.hide();

  input8 = createInput();
  input8.hide();

  input9 = createInput();
  input9.hide();

  input10 = createInput();
  input10.hide();

  input11 = createInput();
  input11.hide();

  input12 = createInput();
  input12.hide();

  input13 = createInput();
  input13.hide();

  input14 = createInput();
  input14.hide();

  input15 = createInput();
  input15.hide();
  
  input16 = createInput();
  input16.hide();

  input17 = createInput();
  input17.hide();

  input18 = createInput();
  input18.hide();

  input19 = createInput();
  input19.hide();

  input20 = createInput();
  input20.hide();

  input21 = createInput();
  input21.hide();

  cont = createSprite(300,400);
  cont.addImage(contImg);
  cont.scale = 1/3;
  cont.visible = false;

  input22 = createInput();
  input22.hide();

  cont2 = createSprite(375,400);
  cont2.addImage(contImg);
  cont2.scale = 1/4;
  cont2.visible = false;

  hint = createSprite(580,25);
  hint.addImage(hintImg);
  hint.scale = 1/4;
  hint.visible = false;

  TRY = createSprite(350,400)
  TRY.addImage(tryImg);
  TRY.scale = 0.5;
  TRY.visible = false;

  play = createSprite(325,350)
  play.addImage(playImg);
  play.scale = 0.3;
  play.visible = false;
}

function draw() {
  background(bg); 

  textSize(25);
  fill("red");
  text(timer, 25,25);
  text("seconds", 75,25);

  if (gameState === END) {
    hint.visible = false;
    enter.visible = false;
    input.hide();
    input2.hide();
    input3.hide();
    input4.hide();
    input5.hide();
    input6.hide();
    input7.hide();
    input8.hide();
    input9.hide();
    input10.hide();
    input11.hide();
    input12.hide();
    input13.hide();
    input14.hide();
    input15.hide();
    input16.hide();
    input17.hide();
    input18.hide();
    input19.hide();
    input20.hide();
    input21.hide();
    input22.hide();
    textSize(80);
    fill("blue");
    text("GAME OVER",100,250);
    textSize(70);
    text("Try Again!",170,350);
    TRY.visible = true;

    if(mousePressedOver(TRY)) {
      location.reload();
    }
  
  }

  if (gameState === START) {
    textSize(20);
    fill("blue");
    text("Welcome to Harshil's Escape Room", 170,50);
    text("Please Enter Your Name: ",120,100);
    input.position(350,80);

    if (mousePressedOver(enter)) {
      gameState = PLAY1;
    }
 }
  if (gameState === PLAY1) {
    time();
    hint.visible = true;
    input.hide();
    enter.destroy();
    textSize(30);
    fill("blue");
    text("Question 1.",250,200);
    text("What is 358+211?", 200,275); 
    input.position(350,80);
    input2.position(250,325);
    input2.show();
    input2val = input2.value(); 

    if(mousePressedOver(hint)) {
      flag = 1;
    }

    if (flag === 1) {
      textSize(20);
      fill("blue");
      text("The last 2 digits are 6 and 9.",400,75);
    }

    if(input2val === "569") {
      gameState = PLAY2;
      flag = 0;
    } 
    
  }

  if (gameState === PLAY2) {
    time();
    hint.visible = true;
    input2.hide();
    image(waterImg, 200,400,250,200);
    textSize(30);
    fill("blue");
    text("Question 2.", 250, 200);
    text("What is the chemical formula for water?",90,275);
    input3.position(250,325);
    input3.show();

    input3val = input3.value();

    if(mousePressedOver(hint)) {
      flag2 = 1;
    }

    if(flag2 === 1) {
      textSize(20);
      fill("blue");
      text("Water is made up of 2 hydrogens and 1 oxygen.",220,75);
    }

    if(input3val === "H2O" || input3val === "h2o") {
      gameState = PLAY3;
      flag2 = 0;
    } 
  }

  if (gameState === PLAY3) {
    time();
    hint.visible = true;
    input3.hide();
    image(covidImg, 200,400,250,200);
    textSize(30);
    fill("blue");
    text("Question 3.", 250,200);
    textSize(25);
    text("In which city of China was COVID-19 first identified?", 25,275);
    input4.position(250,325);
    input4.show();

    input4val = input4.value();

    if(mousePressedOver(hint)) {
      flag3 = 1;
    }

    if (flag3 === 1) {
      textSize(20);
      fill("blue");
      text("The first 2 letters are Wu.",420,75);
    }

    if (input4val === "Wuhan" || input4val === "wuhan") {
      gameState = PLAY4;
      flag3 = 0;
    }
  }

  if (gameState === PLAY4) {
    time();
    hint.visible = true;
    input4.hide();
    image(romeoImg, 220,380,200,250);
    textSize(30);
    fill("blue");
    text("Question 4.", 250, 200);
    textSize(25);
    text("Which English Playright wrote Romeo and Juliet?", 60,275);
    input5.position(250,325);
    input5.show();

    input5val = input5.value();

    if(mousePressedOver(hint)) {
      flag4 = 1;
    }

    if (flag4 === 1) {
      textSize(20);
      fill("blue");
      text("This person also wrote Hamlet and Macabeth.",235,75);
    }

    if (input5val === "Shakespeare" || input5val === "shakespeare") {
      gameState = PLAY5;
      flag4 = 0;
    }
  }

  if (gameState === PLAY5) {
    time();
    hint.visible = true;
    input5.hide();
    image(flagImg, 220,380,250,200);
    textSize(30);
    fill("blue");
    text("Question 5.",250,200);
    textSize(25);
    text("When is Independence Day for the United States?", 60,275);
    input6.position(250,325);
    input6.show();

    input6val = input6.value();

    if(mousePressedOver(hint)) {
      flag5 = 1;
    }

    if(flag5 === 1) {
      textSize(20);
      fill("blue");
      text("Independence Day is the day when the Declaration of Independece was",5,75);
      text("published.",300,95);
    }

    if (input6val === "July 4" || input6val === "july 4") {
      gameState = PLAY6;
      flag5 = 0;
    }
  }

  if (gameState === PLAY6) {
    time();
    hint.visible = true;
    input6.hide();
    image(violinImg, 270,100,150,150);
    textSize(30);
    fill("blue");
    text("Question 6.",265,275);
    textSize(25);
    text("What instrument is shown above?", 140,350);
    input7.position(265,400);
    input7.show();

    input7val = input7.value();

    if(mousePressedOver(hint)) {
      flag6 = 1;
    }

    if (flag6 === 1) {
      textSize(20);
      fill("blue");
      text("This instrument starts with a V.",370,75);
    }

    if (input7val === "Violin" || input7val === "violin") {
      gameState = PLAY7;
      flag6 = 0;
    }
  }

  if (gameState === PLAY7) {
    time();
    input7.hide();
    image(volleyImg, 270,100,120,120);
    textSize(30);
    fill("blue");
    text("Question 7.",265,275);
    textSize(25);
    text("What sport does the picture above represent?", 100,350);
    input8.position(265,400);
    input8.show();

    input8val = input8.value();

    if(mousePressedOver(hint)) {
      flag7 = 1;
    }

    if (flag7 === 1) {
      textSize(20);
      fill("blue");
      text("This sport can be played on a beach.",320,75);
    }

    if (input8val === "Volleyball" || input8val === "volleyball") {
      gameState = PLAY8;
      flag7 = 0;
    }
  }

  if (gameState === PLAY8) {
    hint.visible = false;
    input8.hide();
    textSize(30);
    fill("blue");
    text("Congratulations!", 200,200);
    text("You have completed the Easy Escape Room!",25,250);
    text("Press Continue to move onto Escape Room 2",25,300);
    cont.visible = true;

    if(mousePressedOver(cont)) {
      gameState = PLAY10;
    }
  }

  if (gameState === PLAY10) {
    time();
    hint.visible = true;
    cont.visible = false;
    textSize(30);
    fill("blue");
    text("Question 1.",265,275);
    textSize(25);
    text("What is 27 * 23?",250,325);
    input9.position(265,400);
    input9.show();

    input9val = input9.value();

    if(mousePressedOver(hint)) {
      flag10 = 1;
    }

    if (flag10 === 1) {
      textSize(20);
      fill("blue");
      text("The answer is 4 less than 5 to the fourth.",280,75);
    }

    if (input9val === "621") {
      gameState = PLAY11;
      flag10 = 0;
    }
  }

  if (gameState === PLAY11) {
    time();
    hint.visible = true;
    image(violaImg,270,100,150,150);
    textSize(30);
    fill("blue");
    text("Question 2.",265,275);
    textSize(25);
    text("What instrument is shown above?",150,325);
    input10.position(265,400);
    input10.show();

    input10val = input10.value();

    if(mousePressedOver(hint)) {
      flag11 = 1;
    }

    if (flag11 === 1) {
      textSize(20);
      fill("blue");
      text("The instrument has the first 4 letters of violin and is a 5 letter word.",50,75);
    }

    if (input10val === "viola" || input10val === "Viola") {
      hint.visible = true;
      gameState = PLAY12;
      flag11 = 0;
    }
  }

  if (gameState === PLAY12) {
    time();
    hint.visible = true;
    image(cricketImg,270,80,150,150);
    textSize(30);
    fill("blue");
    text("Question 3.",265,275);
    textSize(25);
    text("What sport does the picture above represent?",100,325);
    input11.position(265,400);
    input11.show();

    input11val = input11.value();

    if(mousePressedOver(hint)) {
      flag12 = 1;
    }

    if (flag12 === 1) {
      textSize(20);
      fill("blue");
      text("India dominates this sport.",400,75);
    }

    if (input11val === "cricket" || input11val === "Cricket") {
      gameState = PLAY13;
      flag12 = 0;
    }
  }

  if (gameState === PLAY13) {
    time();
    hint.visible = true;
    image(WWIIImg,270,80,160,160);
    textSize(30);
    fill("blue");
    text("Question 4.",265,275);
    textSize(25);
    text("In what year did World War II begin?",150,325);
    input12.position(265,400);
    input12.show();

    input12val = input12.value();

    if (mousePressedOver(hint)) {
      flag13 = 1;
    }

    if (flag13 === 1) {
      textSize(20);
      fill("blue");
      text("The war started 2 years before the bombing of Pearl Harbor.",70,75);
    }

    if (input12val === "1939") {
      gameState = PLAY14;
      flag13 = 0;
    }
  }

  if (gameState === PLAY14) {
    time();
    hint.visible = true;
    image(oxyImg,240,40,200,200);
    textSize(30);
    fill("blue");
    text("Question 5.",265,275);
    textSize(25);
    text("How many protons are there in Oxygen?",100,325);
    input13.position(265,400);
    input13.show();

    input13val = input13.value();

    if (mousePressedOver(hint)) {
      flag14 = 1;
    }

    if (flag14 === 1) {
      textSize(20);
      fill("blue");
      text("The # of protons in Oxygen is equal to its atomic number.",5,50);
    }

    if (input13val === "8") {
      gameState = PLAY15;
      flag14 = 0;
    }
  }

  if (gameState === PLAY15) {
    time();
    hint.visible = true;
    image(markImg,260,80,170,170);
    textSize(30);
    fill("blue");
    text("Question 6.",265,300);
    textSize(25);
    text("What was Samuel Longhorne Clemens' pseudonym?",40,350);
    input14.position(265,400);
    input14.show();

    input14val = input14.value();

    if (mousePressedOver(hint)) {
      flag15 = 1;
    }

    if (flag15 === 1) {
      textSize(20);
      fill("blue");
      text("This person wrote Huck Finn and Tom Sawyer.",220,70);
    }

    if (input14val === "Mark Twain" || input14val === "mark twain") {
      gameState = PLAY16;
      flag15 = 0;
    }
  }

  if (gameState === PLAY16) {
    time();
    hint.visible = true;
    image(haitiImg,260,75,180,160);
    textSize(30);
    fill("blue");
    text("Question 7.",265,300);
    textSize(25);
    text("What country's president was recently assassinated?",25,350);
    
    input15.position(265,400);
    input15.show();

    input15val = input15.value();

    if (mousePressedOver(hint)) {
      flag16 = 1;
    }

    if (flag16 === 1) {
      textSize(20);
      fill("blue");
      text("This country starts with an H and is located in the Caribbean.",100,70);
    }

    if (input15val === "Haiti" || input15val === "haiti") {
      gameState = PLAY17;
      flag16 = 0;
    }
  }

  if (gameState === PLAY17) {
    enter.visible = false;
    hint.visible = false;
    input.hide();
    input2.hide();
    input3.hide();
    input4.hide();
    input5.hide();
    input6.hide();
    input7.hide();
    input8.hide();
    input9.hide();
    input10.hide();
    input11.hide();
    input12.hide();
    input13.hide();
    input14.hide();
    input15.hide();
    textSize(30);
    fill("blue");
    text("Congratulations!", 200,200);
    text("You have completed the Escape Room 2!",25,250);
    text("Press Continue to move onto Escape Room 3",25,300);
    cont.visible = true;

    if(mousePressedOver(cont)) {
      gameState = PLAY18;
    }
  }

  if (gameState === PLAY18) {
    time();
    hint.visible = true;
    cont.visible = false;
    image(ukeleleImg,235,75,180,160);
    textSize(30);
    fill("blue");
    text("Question 1.",265,275);
    textSize(25);
    text("What instrument is shown above?",150,325);
    
    input16.position(265,400);
    input16.show();

    input16val = input16.value();

    if (mousePressedOver(hint)) {
      flag18 = 1;
    }

    if (flag18 === 1) {
      textSize(20);
      fill("blue");
      text("This instrument is commonly associated with music from Hawaii.",50,70);
    }

    if (input16val === "Ukulele" || input16val === "ukulele") {
      gameState = PLAY19;
      flag18 = 0;
    }
  }

  if (gameState === PLAY19) {
    time();
    hint.visible = true;
    image(curlImg,250,125,180,160);
    textSize(30);
    fill("blue");
    text("Question 2.",265,325);
    textSize(25);
    text("What sport does the picture above represent?",100,375);

    input17.position(265,400);
    input17.show();

    input17val = input17.value();

    if (mousePressedOver(hint)) {
      flag19 = 1;
    }

    if (flag19 === 1) {
      textSize(20);
      fill("blue");
      text("In this sport, players slide stones on ice towards a target area.",45,70);
    }


    if (input17val === "Curling" || input17val === "curling") {
      gameState = PLAY20;
      flag19 = 0;
    }
  }

  if (gameState === PLAY20) {
    time();
    hint.visible = true;
    image(logImg,230,100,240,160);
    textSize(30);
    fill("blue");
    text("Question 3.",265,300);
    textSize(25);
    text("Solve for x in the equation above.",160,350);
    
    input18.position(265,400);
    input18.show();

    input18val = input18.value();
   
    if (mousePressedOver(hint)) {
      flag20 = 1;
    }

    if (flag20 === 1) {
      textSize(18.5);
      fill("blue");
      text("The answer, is the value of x in the equation, 3 to the power of x is equal to 9.",5,70);
    }

    if (input18val === "2" || input18val === "x=2" || input18val === "x = 2") {
      gameState = PLAY21;
      flag20 = 0;
    }
  }

  if (gameState === PLAY21) {
    time();
    hint.visible = true;
    image(condoImg,230,100,240,160);
    textSize(30);
    fill("blue");
    text("Question 4.",265,300);
    textSize(25);
    text("What town in Flordia had a condo that recently collapsed?",5,350);
    
    input19.position(265,400);
    input19.show();

    input19val = input19.value();

    if (mousePressedOver(hint)) {
      flag21 = 1;
    }

    if (flag21 === 1) {
      textSize(20);
      fill("blue");
      text("The first four letters of the town are Surf.",160,70);
    }

    if (input19val === "Surfside" || input19val === "surfside") {
      gameState = PLAY22;
      flag21 = 0;
    }
  }

  if (gameState === PLAY22) {
    time();
    hint.visible = true;
    image(squareImg,260,100,160,160);
    textSize(30);
    fill("blue");
    text("Question 5.",265,300);
    textSize(25);
    text("How many phenotypes are in this Punnet Square?",50,350);
    input20.position(265,400);
    input20.show();

    input20val = input20.value();

    if (mousePressedOver(hint)) {
      flag22 = 1;
    }

    if (flag22 === 1) {
      textSize(17);
      fill("blue");
      text("The number of phenotypes in this Punnet Square is equal to the number of genotypes.",0.5,70);
    }

    if (input20val === "3") {
      gameState = PLAY23;
      flag22 = 0;
    }
  }

  if (gameState === PLAY23) {
    time();
    hint.visible = true;
    image(flightImg,260,100,160,160);
    textSize(30);
    fill("blue");
    text("Question 6.",265,300);
    textSize(19);
    text("What was the number of the flight that was hijacked during the 9/11 attacks?",1,350);
    input21.position(265,400);
    input21.show();

    input21val = input21.value();

    if (mousePressedOver(hint)) {
      flag23 = 1;
    }

    if (flag23 === 1) {
      textSize(20);
      fill("blue");
      text("The number is equal to 169 - 76.",195,70);
    }

    if (input21val === "93") {
      gameState = PLAY24;
      flag23 = 0;
    }
  }

  if (gameState === PLAY24) {
    time();
    hint.visible = true;
    image(nobelImg,260,100,160,160);
    textSize(30);
    fill("blue");
    text("Question 7.",265,300);
    textSize(25);
    text("Who won the Nobel Prize in Literature in 1962?",50,350);
    input22.position(265,400);
    input22.show();

    input22val = input22.value();

    if (mousePressedOver(hint)) {
      flag24 = 1;
    }

    if (flag24 === 1) {
      textSize(20);
      fill("blue");
      text("This person wrote Of Mice and Men.",195,70);
    }

    if (input22val === "John Steinbeck" || input22val === "john steinbeck") {
      gameState = PLAY25;
      flag24 = 0;
    }
  }

  if (gameState === PLAY25) {
    hint.visible = false;
    input.hide();
    input2.hide();
    input3.hide();
    input4.hide();
    input5.hide();
    input6.hide();
    input7.hide();
    input8.hide();
    input9.hide();
    input10.hide();
    input11.hide();
    input12.hide();
    input13.hide();
    input14.hide();
    input15.hide();
    input16.hide();
    input17.hide();
    input18.hide();
    input19.hide();
    input20.hide();
    input21.hide();
    input22.hide();
    textSize(30);
    fill("blue");
    text("Congratulations!", 200,200);
    text("You have completed Harshil's Escape Room!",25,250);
    text("Press Continue to see your prize.",100,300);
    cont.visible = true;
    
    if(mousePressedOver(cont)) {
      gameState = PLAY26;
    }
  }

  if (gameState === PLAY26) {
    cont.visible = false;
    play.visible = true;
    textSize(30);
    fill("blue");
    text("Prize: More Knowledge!",170,250);
    text("Play again to exceed your current time!",70,300);

    if (mousePressedOver(play)) {
      location.reload();
    }
  }

  drawSprites();
}

function time() {
  if (frameCount % 30 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    gameState = END;
  }
}