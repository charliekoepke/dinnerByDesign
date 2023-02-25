// Source: https://codepen.io/z-/pen/MQRGOe

// Change variable names

console.clear();
// Put recipes and steps into a text file and parse in
var _data = JSON.parse(recipe);
// Parse from text file

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

var lyricHeight = $(".recipe").height();
$(window).on("resize", function() {
   if ($(".recipe").height() != lyricHeight) { //Either width changes so that a line may take up or use less vertical space or the window height changes, 2 in 1
      lyricHeight = $(".recipe").height();
      align();
   }
});

$(document).ready(function() {
   $("video").on('timeupdate', function(e) {
      var time = this.currentTime*1000;
      var past = _data["lyrics"].filter(function (item) {
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