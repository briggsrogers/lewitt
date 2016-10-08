function init(){

  global = {};
  global.numOfSquares = 24;
  setLinesArray();

  var html = "";

  //Create Squares with Two Strokes in each
  for(var i = 0; i < global.numOfSquares; i++){

    html +=  "<div class='square' id='" + i + "'>";
    html +=  makePattern();
    html +=  "</div>";

    $('.squares-container').append(html);

    html = "";
  }

  initInteractions();

}

function initInteractions(){

  $('.square').click(function(e){
    $(e.target).html( makePattern() );
    $(e.target).addClass( "SinkAndPop" );

    setTimeout(function(){
      $(e.target).removeClass( "SinkAndPop" );
    },600)


  });

}

function makePattern(){

  shuffle(global.lines);

  var firstPattern = global.lines.pop();
  var secondPattern = global.lines.pop();

  var string = "<div class='layer " + firstPattern + "'></div> <div class='layer " + secondPattern + "'></div>";

  setLinesArray();

  return string;
}


//Helper Functions

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function setLinesArray(){
  global.lines = [
    "BrokenStraightHor",
    "BrokenStraightVert",
    "Diag1",
    "Diag2",
    "LargeArc1",
    "LargeArc2",
    "LargeArc3",
    "LargeArc4",
    "NotStraightHor_A",
    "NotStraightVert_B",
    "SmallArc1",
    "SmallArc2",
    "SmallArc3",
    "SmallArc4",
    "StraightHor",
    "StraightVert"
  ];
}

$(document).ready(function(){
  init();
});
