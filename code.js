var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var game_estate="inicial";

var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";
createEdgeSprites();
var paddle=createSprite(200,390,100,20);
var ball=createSprite(200,250,20,20);
var score=0;
function draw() {
  background("white");
  textSize(15);
  stroke("purple");
  text("pontuação: "+score,300,20);
if (game_estate==="inicial") {
  textSize(16);
  text ("aperte ENTER para começar :D jogo muito silencioso",5,200);
    if (keyDown("Enter")) {
    ball.velocityX=2;
    ball.velocityY=3;
    game_estate="midgamestate";
  }
}
if (game_estate==="midgamestate") {
  if (keyDown("D")) {
  paddle.x=paddle.x+5;
}
 if (keyDown("A")) {
  paddle.x=paddle.x-5;
 } 
if (ball.isTouching(bottomEdge)|| score===16) {
  game_estate="acabou";
   
 }
 if (game_estate==="acabou") {
   ball.velocityX=0;
   ball.velocityY=0
   textSize(25);
   text("perdemo ;-----;",140,200);
 }
 
 ball.bounceOff(paddle);
 ball.bounceOff(topEdge);
 ball.bounceOff(leftEdge);
 ball.bounceOff(rightEdge);
 if (ball.isTouching(box1)){
box1.destroy();
 score=score+1;
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box2)){
    score=score+1;
box2.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box3)){
    score=score+1;
box3.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box4)){
    score=score+1;
box4.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box5)){
    score=score+1;
box5.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box6)){
    score=score+1;
box6.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box7)){
    score=score+1;
box7.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box8)){
    score=score+1;
box8.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box9)){
    score=score+1;
box9.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box10)){
    score=score+1;
box10.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box11)){
    score=score+1;
box11.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box12)){
    score=score+1;
box12.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box13)){
    score=score+1;
box13.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box14)){
    score=score+1;
box14.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box15)){
    score=score+1;
box15.destroy();
playSound("assets/ultrakaboooom.mp3");
 }
 if (ball.isTouching(box16)){
   score=score+1;
box16.destroy ();
playSound("assets/ultrakaboooom.mp3");
 }

}
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
