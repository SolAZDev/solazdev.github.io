var sndbtn;var fid="mailform";
$(document).ready(function () {
    DisableAll();
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
            DisableAll();
            $("#HomeScreen").show();
            break;
        case 2:
            console.log("Lemme see your resume");
            DisableAll();
            $("#ResumePage").show();
            break;
        case 3:
            console.log("I'll Explore your portfolio");
            DisableAll();
            $("#MainPortfolio").show();
            break;
        case 4:
            console.log("What about your projects?");
            DisableAll();
            $("#ProjectsPage").show();
            break;
        case 5:
            console.log("What if I wanna contact you?");
            DisableAll();
            $("#ContactScreen").show();
            break;
        case 6:
            DisableAll();
            $("#PortLevel").show();
            break;
        case 7:
            DisableAll();
            $("#Port3D").show();
            break;
        case 8:
            DisableAll();
            $("#PortCSS").show();
            break;
        case 9:
            DisableAll();
            $("#GI-TDP").show();
            break;
        case 10:
            DisableAll();
            $("#PI-PB16").show();
            break;
        case 11:
            DisableAll();
            $("#PI-PCLD").show();
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

function DisableAll(){
  $("#HomeScreen").hide();
  $("#ResumePage").hide();
  $("#MainPortfolio").hide();
  $("#ProjectsPage").hide();
  $("#ContactScreen").hide();
  $("#EmailNo").hide();
  $("#EmailYes").hide();
  $("#PortLevel").hide();
  $("#Port3D").hide();
  $("#PortCSS").hide();
  $("#GI-TDP").hide();
  $("#PI-PB16").hide();
  $("#PI-PCLD").hide();
  $("#PI-3DSBP").hide();
}
