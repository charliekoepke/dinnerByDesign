// VIDEO ID: xlnvkOemQI4
const steakprep = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Gather your ingredients - your steak should be at room temperature.", "time": 0},
       {"line": "Prep your shallot by cutting off both ends, cutting in half, removing the peels, then cutting each half in half.", "time": 3180},
       {"line": "Generously season both sides of your steak with salt and pepper from about 10 inches away.", "time": 63140},
       {"line": "Prepare your garnish - pick cilantro off of stems & thinly slice your scallion.", "time": 150160}
   ]
}`);

// VIDEO ID: R_QLdbfLGZ0
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

// VIDEO ID: Gqay2XoYqcY
const soycuredegg = JSON.parse(`{
   "recipe": [
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

// VIDEO ID: XeRD00WTsQ8
const mushroomprep = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Gather your ingredients.", "time": 0},
       {"line": "Remove the stems from your mushrooms.", "time": 6100},
       {"line": "Slice your mushrooms into ¼ inch slices.", "time": 29030},
       {"line": "Finely chop your garlic.", "time": 55210}
   ]
}`);

// VIDEO ID: bNdiE0umUZc
const mushroomcook = JSON.parse(`{
   "recipe": [
       {"line": "", "time": -1},
       {"line": "Put a nonstick pan on high heat and allow it to get hot. Once it is hot, add your mushrooms to the dry pan.", "time": 0},
       {"line": "Stir and move the mushrooms semi frequently. You should hear them squeaking against the pan. Allow them to shrink down about 10% and the edges will turn golden brown. ", "time": 3240},
       {"line": "Once the edges are browned, add in your butter and garlic.", "time": 43050},
       {"line": "Cook the mushrooms, butter and garlic until the garlic is golden brown.", "time": 50030}
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
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let videoId = document.getElementsByTagName("main")[0].id;
let player;
function onYouTubePlayerAPIReady() {
   // Soy Cured Egg
   if (videoId == "soy-cured-egg") {
      player = new YT.Player('ytplayer', {
         height: '500',
         width: '980',
         videoId: 'Gqay2XoYqcY',
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
   // Seared Sirloin
   else if (videoId == "seared-sirloin") {
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
   else if (videoId == "shiitake-mushrooms") {
      player = new YT.Player('ytplayer', {
         height: '500',
         width: '980',
         videoId: 'XeRD00WTsQ8',
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
}

// Autoloop through STEPS not video (use youtube API)

let i = 0;
function interactiveCaptions() {
   if (videoId == "soy-cured-egg") {
      if ((player.getCurrentTime() * 1000) >= parseInt(soycuredegg["recipe"][i]["time"])) {
         document.getElementById("captions").innerHTML = soycuredegg["recipe"][i]["line"];
         i++;
      }
   }
   if (videoId == "seared-sirloin") {
      if (player.getVideoUrl() == "https://www.youtube.com/watch?v=xlnvkOemQI4") {
         if ((player.getCurrentTime() * 1000) >= parseInt(steakprep["recipe"][i]["time"])) {
            document.getElementById("captions").innerHTML = steakprep["recipe"][i]["line"];
            i++;
         }
      }
      if (player.getVideoUrl() == "https://www.youtube.com/watch?v=R_QLdbfLGZ0") {
         if ((player.getCurrentTime() * 1000) >= parseInt(steakcook["recipe"][i]["time"])) {
            document.getElementById("captions").innerHTML = steakcook["recipe"][i]["line"];
            i++;
         }
      }
   }
   if (videoId == "braised-cherries") {
      if ((player.getCurrentTime() * 1000) >= parseInt(braisedcherries["recipe"][i]["time"])) {
         document.getElementById("captions").innerHTML = braisedcherries["recipe"][i]["line"];
         i++;
      }
   }
   if (videoId == "shiitake-mushrooms") {
      if (player.getVideoUrl() == "https://www.youtube.com/watch?v=XeRD00WTsQ8") {
         if ((player.getCurrentTime() * 1000) >= parseInt(mushroomprep["recipe"][i]["time"])) {
            document.getElementById("captions").innerHTML = mushroomprep["recipe"][i]["line"];
            i++;
         }
      }
      if (player.getVideoUrl() == "https://www.youtube.com/watch?v=bNdiE0umUZc") {
         if ((player.getCurrentTime() * 1000) >= parseInt(mushroomcook["recipe"][i]["time"])) {
            document.getElementById("captions").innerHTML = mushroomcook["recipe"][i]["line"];
            i++;
         }
      }
   }
}

// Keep loop
// Start the timer when the video plays
let timer;
function onStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING) {
      timer = window.setInterval(interactiveCaptions, 1000);
   }
   if (event.data == YT.PlayerState.ENDED) {
      player.playVideo();
      window.clearInterval(timer);
      i = 0;
   }
}

function changeVideo() {
   if (videoId == "seared-sirloin") {
      if (player.getVideoUrl() == "https://www.youtube.com/watch?v=xlnvkOemQI4") {
         player.loadVideoById("R_QLdbfLGZ0");
         i = 0;
      }
      else if (player.getVideoUrl() == "https://www.youtube.com/watch?v=R_QLdbfLGZ0"){
         player.loadVideoById("xlnvkOemQI4");
         i = 0;
      }
   }
   else if (videoId == "shiitake-mushrooms") {
      if (player.getVideoUrl() =="https://www.youtube.com/watch?v=XeRD00WTsQ8") {
         player.loadVideoById("bNdiE0umUZc");
         i = 0;
      }
      else if (player.getVideoUrl() == "https://www.youtube.com/watch?v=bNdiE0umUZc") {
         player.loadVideoById("XeRD00WTsQ8");
         i = 0;
      }
   }
}