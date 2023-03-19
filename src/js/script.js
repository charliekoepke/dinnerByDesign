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

document.getElementById("ingredients").style.display = "block";
document.getElementById("tab-ingredients").style.color = "#FF561B";

function changetab(toggletab) {
   if (toggletab == "Ingredients") {
      document.getElementById("ingredients").style.display = "block";
      document.getElementById("tab-ingredients").style.color = "#FF561B";
      document.getElementById("equipment").style.display = "none";
      document.getElementById("tab-equipment").style.color = "black";
   }
   else if (toggletab == "Equipment") {
      document.getElementById("equipment").style.display = "block";
      document.getElementById("tab-equipment").style.color = "#FF561B";
      document.getElementById("ingredients").style.display = "none";
      document.getElementById("tab-ingredients").style.color = "black";
   }
}

// ytplayer code: https://developers.google.com/youtube/player_parameters#IFrame_Player_API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
   player = new YT.Player('ytplayer', {
   height: '500',
   width: '980',
   videoId: 'xlnvkOemQI4',
   playerVars: {
      'showinfo': 0,
      'rel': 0,
      'loop': 1
   },
   events: {
      'onStateChange': onStateChange
   }
   });
}

// Keep loop
function onStateChange(event) {
   if (event.data == YT.PlayerState.ENDED) {
      player.playVideo();
   }
}

function changevideo(newsrc) {
   player = new YT.Player('ytplayer', {
      height: '500',
      width: '980',
      videoId: newsrc,
      playerVars: {
         'showinfo': 0,
         'rel': 0,
         'loop': 1
      },
      events: {
         'onStateChange': onStateChange
      }
      });
}