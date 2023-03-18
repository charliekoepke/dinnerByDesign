console.clear();

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

function changevideo(newsrc) {
   document.getElementById("video-switch").src = newsrc;
}

function changecaption() {
   
}
