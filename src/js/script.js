// Source: https://codepen.io/z-/pen/MQRGOe

console.clear();

var _data;

function parseVid(file) {
   fetch(file)
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then((json) => _data = json)
      .catch(err => {
         console.error(err);
      });
   // _data = JSON.parse(file);
}

console.log(_data);

// Parsing from text file
// var _data = JSON.parse();

var currentLine = "";

function align() {
   var a = $(".highlighted").height();
   var c = $(".content").height();
   var d = $(".highlighted").offset().top - $(".highlighted").parent().offset().top;
   var e = d + (a/2) - (c/2);
   $(".content").animate(
       {scrollTop: e + "px"}, {easing: "swing", duration: 250}
   );
}

var recipeHeight = $(".recipe").height();
$(window).on("resize", function() {
   if ($(".recipe").height() != recipeHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
      recipeHeight = $(".recipe").height();
      align();
   }
});

$(document).ready(function() {
   $("video").on('timeupdate', function(e) {
      var time = this.currentTime*1000;
      var past = _data["recipe"].filter(function (item) {
         return item.time < time;
      });
      if (_data["recipe"][past.length] != currentLine) {
         currentLine = _data["recipe"][past.length];
         $(".recipe div").removeClass("highlighted");
         $(`.recipe div:nth-child(${past.length})`).addClass("highlighted"); //Text might take up more lines, do before realigning
         align();
      }
   });
});

generate();

function generate() {
   var html = "";
   for(var i = 0; i < _data["recipe"].length; i++) {
      html += "<div";
      if(i == 0) {
         html+=` class="highlighted"`;
         currentLine = 0;
      }
      if(_data["recipe"][i]["note"]) {
         html += ` note="${_data["recipe"][i]["note"]}"`;
      }
      html += ">";
      html += _data["recipe"][i]["step"] == "" ? "•" : _data["recipe"][i]["line"];
      html += "</div>"
   }
   $(".recipe").html(html);
   align();
}

function changeVid(buttonLink) {
   document.getElementById("change").src = buttonLink;
}