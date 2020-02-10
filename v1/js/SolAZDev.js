var sndbtn; var fid = "mailform";
$(document).ready(function () {
    DisableAll();
    ChangeScreens(1);
    sndbtn = $("#" + fid + " [name='send']");
    $("#mailform").submit(function (event) {
        event.preventDefault();
        SendMail();
    });
    //  $(sndbtn).on('click',SendMail());
});
function ChangeScreens(page) {
    DisableAll();
    switch (page) {
        case 1:
            console.log("Going home");
            $("#HomeScreen").show();
            break;
        case 2:
            console.log("Lemme see your resume");
            $("#ResumePage").show();
            break;
        case 3:
            console.log("I'll Explore your portfolio");
            $("#MainPortfolio").show();
            break;
        case 4:
            console.log("What about your projects?");
            $("#ProjectsPage").show();
            break;
        case 5:
            console.log("What if I wanna contact you?");
            $("#ContactScreen").show();
            break;
        case 6:
            $("#PortLevel").show();
            break;
        case 7:
            $("#Port3D").show();
            break;
        case 8:
            $("#PortCSS").show();
            break;
        case 9:
            $("#GI-TDP").show();
            break;
        case 10:
            $("#PI-PB16").show();
            break;
        case 11:
            $("#PI-PCLD").show();
            break;
        case 12:
            $("#PI-NSP").show();
            break;
        case 13:
            $("#PI-OHTTHT").show();
            break;
        case 14:
            $("#PI-GSW").show();
            break;
    }
}

function SendMail() {
    console.log("Trying to send");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var data = { "access_token": "7p2l78zz10isjooo9hum90vk" };
    var name = $("#" + fid + " [name=name]").val();
    var email = $("#" + fid + " [name=email]").val();
    console.log(email);
    //if(!ValidateEmail(email)){alert("Please enter a valid email");return;}
    if (!email.value == null) {
        alert("Please use a valid email");
        return;
    }
    var subject = $("#" + fid + " [name=subject]").val();
    var message = $("#" + fid + " [name=message]").val();
    //Sending Stuff Here
    sndbtn.val("Sending...");
    sndbtn.prop('disabled', true);

    data['subject'] = subject;
    data['text'] = name + " (email : " + email + ") Says...\n\n" + message;

    $.post('https://postmail.invotes.com/send', data, smoYes()).fail(smoNo());
    sndbtn.val("Send Mail");
    sndbtn.prop('disabled', false);
    return false;
}

function smoYes() {
    $("#EmailYes").show();
    $("#EmailNo").hide();
}
function smoNo() {
    $("#EmailNo").show();
    $("#EmailYes").hide();
}
function ValidateEmail(text) {
    console.log(text.value);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!text.value) { return false; }
    if (text.value.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}

function DisableAll() {
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
    $("#PI-NSP").hide();
    $("#PI-OHTTHT").hide();
    $("#PI-GSW").hide();
    $("#PI-3DSBP").hide();
}
