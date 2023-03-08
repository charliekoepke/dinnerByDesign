// Source: https://codepen.io/z-/pen/MQRGOe
// Source: https://codepen.io/tuannvbg/pen/ZBrrjr

console.clear();

// JSON Parsing

const soycuredegg = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Gather your ingredients.", "time": 0},
       {"line": "Peel ginger with a small spoon.", "time": 4150},
       {"line": "Grate ginger into a small bowl with a microplane.", "time": 19060},
       {"line": "Add 6 tbsp of soy sauce to the bowl.", "time": 40160},
       {"line": "Gently roll your limeto release the juices, and cut in half.", "time": 60220},
       {"line": "Thinly slice the thai chili and add to the bowl.", "time": 73200},
       {"line": "Squeeze lime into the bowl.", "time": 113210},
       {"line": "Stir to combine.", "time": 144160},
       {"line": "Separate egg yolk from white and place gently into a small bowl.", "time": 148130},
       {"line": "Gently pour sauce over egg yolks.", "time": 188240},
       {"line": "Cover yolks with a paper towel and fold the edges over the top. This will pull liquid over the top of the yolks since they float.", "time": 197140},
       {"line": "Refrigerate for at least 1 hour.", "time": 205150}
   ]
}`);

const mushroomprep = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Gather your ingredients.", "time": 0},
       {"line": "Remove the stems from your mushrooms.", "time": 6100},
       {"line": "Slice your mushrooms into ¼ inch slices.", "time": 29030},
       {"line": "Finely chop your garlic.", "time": 55210}
   ]
}`);

const mushroomcook = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Put a nonstick pan on high heat and allow it to get hot. Once it is hot, add your mushrooms to the dry pan.", "time": 0},
       {"line": "Stir and move the mushrooms semi frequently. You should hear them squeaking against the pan. Allow them to shrink down about 10% and the edges will turn golden brown. ", "time": 3240},
       {"line": "Once the edges are browned, add in your butter and garlic.", "time": 43050},
       {"line": "Cook the mushrooms, butter and garlic until the garlic is golden brown.", "time": 50030}
   ]
}`);

const riceprep = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Measure out 1 1/2 cups of medium grain rice and add to a rice cooker.", "time": 0},
       {"line": "Rinse the rice thoroughly until the water is clear.", "time": 3170},
       {"line": "Add 2 cups of water to the rice cooker.", "time": 102090},
       {"line": "Allow the rice to soak for 15 minutes, then press 'Cook' on the rice cooker.", "time": 114080}
   ]
}`);

const steakprep = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Gather your ingredients - your steak should be at room temperature.", "time": 0},
       {"line": "Prep your shallot by cutting off both ends, cutting in half, removing the peels, then cutting each half in half.", "time": 3180},
       {"line": "Generously season both sides of your steak with salt and pepper from about 10 inches away.", "time": 63140},
       {"line": "Prepare your garnish - pick cilantro off of stems & thinly slice your scallion.", "time": 150160}
   ]
}`);

const steakcook = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Add a drizzle of olive oil to a carbon steel pan and turn the heat to high.", "time": 0},
       {"line": "Once the pan is hot, add in your steaks.", "time": 5080},
       {"line": "After about 90 seconds, flip your steaks.", "time": 38140},
       {"line": "After 30 seconds, add in your butter, garlic, and shallots and baste the steaks. Allow them to continue cooking while basting for an additional 90 seconds. **Timing will vary based on cook preference & thickness of steaks**", "time": 53040},
       {"line": "Remove steaks from the pan and allow to rest for 5 minutes.", "time": 147160},
       {"line": "Meanwhile put the pan with the garlic and shallots back on to medium - high heat and allow to cook until shallots are translucent and garlic is golden brown.", "time": 158180},
       {"line": "Place the cooked garlic and shallots on a cutting board, and pour the butter into the rice.", "time": 199010},
       {"line": "Add a drizzle of sesame oil to the rice and gently fluff the rice to combine.", "time": 215080},
       {"line": "Mince the cooked shallot and garlic and add to the rice gently folding to combine.", "time": 226090}
   ]
}`);

var _data;

// Parsing from file?

document.getElementById("soycuredegg").addEventListener("click", function changeVid() {
   document.getElementById("change").src = "video/SoyCuredEgg.mp4";
   _data = soycuredegg;
   generate();
});

document.getElementById("mushroomprep").addEventListener("click", function changeVid() {
   document.getElementById("change").src = "video/MushroomPrep.mp4";
   _data = mushroomprep;
   generate();
});

document.getElementById("mushroomcook").addEventListener("click", function changeVid() {
   document.getElementById("change").src = "video/MushroomCook.mp4";
   _data = mushroomcook;
   generate();
});

document.getElementById("riceprep").addEventListener("click", function changeVid() {
   document.getElementById("change").src = "video/RicePrep.mp4";
   _data = riceprep;
   generate();
});

document.getElementById("steakprep").addEventListener("click", function changeVid() {
   document.getElementById("change").src = "video/SteakPrep.mp4";
   _data = steakprep;
   generate();
});

document.getElementById("steakcook").addEventListener("click", function changeVid() {
   document.getElementById("change").src = "video/SteakCook.mp4";
   _data = steakcook;
   generate();
})

var currentLine = "";

// function align() {
//    var a = $(".highlighted").height();
//    var c = $(".content").height();
//    var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
//    var e = d + (a/2) - (c/2);
//    $(".content").animate(
//        {scrollTop: e + "px"}, {easing: "swing", duration: 250}
//    );
// }

// var recipeHeight = $(".recipevideo").height();
// $(window).on("resize", function() {
//    if ($(".recipevideo").height() != recipeHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
//       recipeHeight = $(".recipevideo").height();
//       align();
//    }
// });


// loop , time reset at each video, if press button, reset, if not, then reset time and then go to next video
$(document).ready(function() {
   // Make an if for the window that the recipe is on to determine the i
   // for (var i = 0; i < )
   $("video").on('timeupdate', function(e) {
      var time = this.currentTime*1000;
      var past = _data["recipe"].filter(function (item) {
         return item.time < time;
      });
      if (_data["recipe"][past.length] != currentLine) {
         currentLine = _data["recipe"][past.length];
         $(".recipevideo div").removeClass("highlighted");
         $(`.recipevideo div:nth-child(${past.length})`).addClass("highlighted"); //Text might take up more lines, do before realigning
         // align();
      }
   });
});

generate();

function generate() {
   var html = "";
   for(var i = 0; i < _data["recipe"].length; i++) {
      html += "<div";
      if(i == 0) {
         // html+=` class="highlighted"`;
         currentLine = 0;
      }
      if(_data["recipe"][i]["note"]) {
         html += ` note="${_data["recipe"][i]["note"]}"`;
      }
      html += ">";
      // html += _data["recipe"][i]["step"] == "" ? "•" : _data["recipe"][i]["line"];
      html += "</div>"
   }
   $(".recipe").html(html);
   // align();
}