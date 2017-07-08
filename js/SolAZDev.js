var sndbtn;var fid="mailform";
$(document).ready(function () {
    ChangeScreens(1);
    sndbtn = $("#" + fid + " [name='send']");
    $("#mailform").submit(function(event){
      event.preventDefault();
      SendMail();
    });
//  $(sndbtn).on('click',SendMail());
});
function ChangeScreens(page) {
    switch (page) {
        case 1:
            console.log("Going home");
            $("#HomeScreen").show();
            $("#ResumePage").hide();
            $("#MainPortfolio").hide();
            $("#ProjectsPage").hide();
            $("#ContactScreen").hide();
            break;
        case 2:
            console.log("Lemme see your resume");
            $("#HomeScreen").hide();
            $("#ResumePage").show();
            $("#MainPortfolio").hide();
            $("#ProjectsPage").hide();
            $("#ContactScreen").hide();
            break;
        case 3:
            console.log("I'll Explore your portfolio");
            $("#HomeScreen").hide();
            $("#ResumePage").hide();
            $("#MainPortfolio").show();
            $("#ProjectsPage").hide();
            $("#ContactScreen").hide();
            break;
        case 4:
            console.log("What about your projects?");
            $("#HomeScreen").hide();
            $("#ResumePage").hide();
            $("#MainPortfolio").hide();
            $("#ProjectsPage").show();
            $("#ContactScreen").hide();
            break;
        case 5:
            console.log("What if I wanna contact you?");
            $("#HomeScreen").hide();
            $("#ResumePage").hide();
            $("#MainPortfolio").hide();
            $("#ProjectsPage").hide();
            $("#ContactScreen").show();
            $("#EmailNo").hide();
            $("#EmailYes").hide();
            break;
    }
}

function SendMail(){
  console.log("Trying to send");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var data={"access_token":"7p2l78zz10isjooo9hum90vk"};
  var name = $("#"+fid+" [name=name]").val();
  var email = $("#"+fid+" [name=email]").val();
  console.log(email);
  //if(!ValidateEmail(email)){alert("Please enter a valid email");return;}
  if(!email.value==null){
    alert("Please use a valid email");
    return;
  }
  var subject = $("#"+fid+" [name=subject]").val();
  var message = $("#"+fid+" [name=message]").val();
  //Sending Stuff Here
  sndbtn.val("Sending...");
  sndbtn.prop('disabled',true);

  data['subject'] = subject;
  data['text'] = name+" (email : "+email+") Says...\n\n"+message;

  $.post('https://postmail.invotes.com/send',data, smoYes()).fail(smoNo());
  sndbtn.val("Send Mail");
  sndbtn.prop('disabled',false);
  return false;
}

function smoYes(){
  $("#EmailYes").show();
  $("#EmailNo").hide();
}
function smoNo(){
  $("#EmailNo").show();
  $("#EmailYes").hide();
}
function ValidateEmail(text){
  console.log(text.value);
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!text.value){return false;}
  if(text.value.match(mailformat)){
    return true;
  }else{
    return false;
  }
}
