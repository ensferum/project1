// $(document).on("click", ".addBtn", function() {
//     var type = $("#myInput").val().trim()
//     console.log(type)
//     var youTubeURL = $("#myInput").val(trim)
//     console.log(youTubeURL)
  
// });



function createYouTubeEmbedLink (link) {
    link = document.getElementById('link').value;
    if (link.charAt(12) == 'y') {    //if the 13th character = y (youtube  videos)
        var number = link.substring(32);    //key # = from 33rd character on
        var embed = "https://www.youtube.com/embed/" + number;    //Add youtube link before key #
        document.getElementById('iframe').src = embed;
    }
    else if (link.charAt(12) == 'o') {    //if the 13th character = o (vimeo videos)
        var number = link.substring(18);    //key # = from 19th character on
        var embed = "https://player.vimeo.com/video/" + number;    //Add vimeo link before key #
        document.getElementById('iframe').src = embed;
    }
    else {}
}




function handleAPILoaded() {
  console.log('youtube api ready');
}


function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 1,
            
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId}]));
            });
          });
          resetVideoHeight();
       });
    });
    
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("AIzaSyBNszSj_KTYE16DegvSVu4Qn6Ivn1Hjwqc");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}


// AIzaSyBNszSj_KTYE16DegvSVu4Qn6Ivn1Hjwqc


// "http://www.omdbapi.com/?apikey=1b9c323?t=" + type + "&tomatoes=true&plot=full"


//   document.getElementsByClassName("addBtn").onclick = function() {
//   var userInput = document.getElementById("myInput").value; 
//   console.log("myInput");

// }

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    return;
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
