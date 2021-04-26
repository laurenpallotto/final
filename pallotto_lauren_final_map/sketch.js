const key = 'pk.eyJ1IjoicmVuLXBhbGxvdHRvIiwiYSI6ImNrbTl3c3ozMTFtMnEyd3FsamFxMXUwZngifQ.5tvDYM0KmqhS9KUSfQREUg';

const options = {
  lat: 51.5137,
  lng: 0.0655,
  zoom: 14,
  style: 'mapbox://styles/ren-pallotto/cknnqqe2u0o1d17ohcmdlgtg9',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  meteorites = loadTable('Meteorite_Landings.csv', 'csv', 'header');

}


function draw() {
  clear();
  //noFill();
  stroke(0);
  strokeWeight(5);
  const zoom = myMap.zoom();
  //establish lat and long for each victim
  const nichols = myMap.latLngToPixel(51.5200,0.0605);
  const stride = myMap.latLngToPixel(51.5137, 0.06917);
  const chapman = myMap.latLngToPixel(51.52000, 0.0655);
  const eddowes = myMap.latLngToPixel(51.5138,0.078);
  const kelly = myMap.latLngToPixel(51.518656, 0.075131);
  
  //map ellipse for each victim
  ellipse(nichols.x, nichols.y, 2 * zoom, 2 *zoom);
  ellipse(stride.x, stride.y, 2 * zoom, 2 * zoom);
  ellipse(chapman.x, chapman.y, 2 * zoom, 2 * zoom);
  ellipse(eddowes.x, eddowes.y, 2 * zoom, 2 * zoom);
  ellipse(kelly.x, kelly.y, 2 * zoom, 2 * zoom);
  



  //rollover for each victim
  if (dist(stride.x, stride.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    strokeWeight(2);

    text("Elizabeth Stride", stride.x, stride.y);
    textAlign(CENTER);
  
  } else if (dist(chapman.x, chapman.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(32);
    noFill();
    strokeWeight(2);

    text("Annie Chapman", chapman.x, chapman.y);
    textAlign(CENTER);
 

  }else {
      fill(255, 100);
    }
  if (dist(nichols.x, nichols.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    strokeWeight(2);

    text("Mary Ann Nichols", nichols.x, nichols.y);
    textAlign(CENTER);

  }
   if (dist(eddowes.x, eddowes.y, mouseX, mouseY) < (zoom * 10) / 2) {

    textSize(32);
    noFill();
    strokeWeight(2);

    text(" Catherine Eddowes", eddowes.x, eddowes.y);
    textAlign(CENTER);
  
  }
  else if (dist(kelly.x, kelly.y, mouseX, mouseY) < (zoom * 10) / 2) {
    
    textSize(32);
    noFill();
    strokeWeight(2);

    text("Mary Jane Kelly", kelly.x, kelly.y);
    textAlign(CENTER);
 

  }


  }

  $(window).bind('resize', function(e) {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function() {
      this.location.reload(false); /* false to get page from cache */
    }, 200);
  });