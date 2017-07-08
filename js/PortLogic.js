$($(document).ready(function() {
  $("#AboutBtn").click(function(event) {StartUp(1);});
  $("#ResumeBtn").click(function(event) {StartUp(2);});
  $("#ProjectsBtn").click(function(event) {StartUp(1);});
  $("#GalleryBtn").click(function(event) {StartUp(1);});
  $("#ContactBtn").click(function(event) {StartUp(1);});
});)

function StartUp(Section){
  alert(Section);
  switch(Section){
    case 1:
    case "About":
      $("#Welcome").show();
      $("#ResumeSec").hide();
      break;
    case 2:
    case "Resume":
      $("#Welcome").hide();
      $("#ResumeSec").show();
  }
}
