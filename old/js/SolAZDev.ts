import $ = require('jquery');

ChangeScreens(1);
$(document).ready(function(){
  ChangeScreens(1);
  $('#mailform').submit()
});

function ChangeScreens(page){
  switch(page){
    case 1: //Home
    console.log("Going home");
    $("#HomeScreen").show();
    $("#ResumePage").hide();
    $("#MainPortfolio").hide();
    $("#ProjectsPage").hide();
    $("#ContactScreen").hide();
    break;
    case 2: //Resume
    console.log("Lemme see your resume");
    $("#HomeScreen").hide();
    $("#ResumePage").show();
    $("#MainPortfolio").hide();
    $("#ProjectsPage").hide();
    $("#ContactScreen").hide();
    break;
    case 3: //Porfolio
    console.log("I'll Explore your portfolio");
    $("#HomeScreen").hide();
    $("#ResumePage").hide();
    $("#MainPortfolio").show();
    $("#ProjectsPage").hide();
    $("#ContactScreen").hide();
    break;
    case 4: //Projecs
    console.log("What about your projects?");
    $("#HomeScreen").hide();
    $("#ResumePage").hide();
    $("#MainPortfolio").hide();
    $("#ProjectsPage").show();
    $("#ContactScreen").hide();
    break;
    case 5: //Projecs
    console.log("What if I wanna contact you?");
    $("#HomeScreen").hide();
    $("#ResumePage").hide();
    $("#MainPortfolio").hide();
    $("#ProjectsPage").hide();
    $("#ContactScreen").show();
    break;
  }
}

interface FormElements {
  name: HTMLInputElement;
  email: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLInputElement;
  sendbtn: HTMLInputElement;
}

function SendMail(e){
  e.preventDefault();
  console.log("Trying.");
  let MSender = new MailSender($("#mailform"));
  console.log(MSender.name.value);
  return false;
}

class MailSender{
  constructor(form: HTMLFormElement){
    var elements: FormElements = <FormElements>(<any> form.elements);
    this.name = elements.name;
    this.email = elements.email;
    this.subject = elements.subject;
    this.message = elements.message;
    this.sendbtn = elements.sendbtn;
    console.log(this.name.value);
  };
  name: HTMLInputElement;
  subject: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLInputElement;
  sendbtn: HTMLInputElement;
  data={"access_token":"7p2l78zz10isjooo9hum90vk"};
  formid="mailform";
  SendMessage(){

  }
}
