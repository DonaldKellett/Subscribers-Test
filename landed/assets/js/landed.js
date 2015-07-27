/*
  landed.js
  The main JS file for the Landed Website (a pretend company website)
  (c) Donald Leung.  All rights reserved.
*/

// Landed Object
var landed = {
  init: function() {
    console.log("%cLanded", "font-size: 80px;");
    console.log("%cDeveloper's Console", "font-size: 48px;");
    console.log("%cIf you are reading this message right now and you are not a Landed IT Developer, then you are a hacker.  Anyone found hacking the Landed Website will be subject to punishment by the School or, when necessary, punishment by court.", "font-size: 32px; color: red; text-transform: uppercase;");
  },
  subscribe: {
    atCount: 0,
    dotCount: 0,
    otherCount: 0,
    email: "",
    emailArray: [],
    sendEmail: function() {
      landed.subscribe.atCount = 0;
      landed.subscribe.dotCount = 0;
      landed.subscribe.otherCount = 0;
      landed.subscribe.email = document.getElementById("subscriberEmail").value;
      landed.subscribe.emailArray = landed.subscribe.email.split("");
      for (i = 0; i < landed.subscribe.emailArray.length; i++) {
        if (landed.subscribe.emailArray[i] === "@") {
          landed.subscribe.atCount++;
        }
        if (landed.subscribe.emailArray[i] === ".") {
          landed.subscribe.dotCount++;
        }
        if (landed.subscribe.emailArray[i] !== "@" && landed.subscribe.emailArray[i] !== ".") {
          landed.subscribe.otherCount++;
        }
      }
      if (landed.subscribe.atCount === 1 && landed.subscribe.dotCount >= 1 && landed.subscribe.otherCount >= landed.subscribe.atCount + landed.subscribe.dotCount + 1) {
        window.location = "mailto:dleung@connect.kellettschool.com?subject=Landed Email Subscription: I would like to receive the latest news from Landed&body=NOTE: PLEASE DO NOT ALTER THE CONTENT OF THIS AUTOMATICALLY GENERATED MAIL; OTHERWISE, THIS EMAIL WILL BE CONSIDERED NULL AND VOID.%0D%0A%0D%0ALanded Email News Subscription%0D%0A%0D%0A(c) Donald Leung.  All rights reserved.%0D%0A%0D%0A--------------------------------------------------------------------------------------------------%0D%0A%0D%0AHello, my email is " + landed.subscribe.email + " and I would like to subscribe to the latest news of Landed via email.";
        document.getElementById("invalidEmailAddress").innerHTML = "";
      } else {
        document.getElementById("invalidEmailAddress").innerHTML = "Sorry, the email address you just entered is invalid.  Please check if you have entered the email address correctly.";
      }
    }
  },
  contact: {
    sendEmail: function() {
      if (document.getElementById("firstName").value !== "" && document.getElementById("department").value !== "" && document.getElementById("summary").value !== "" && document.getElementById("message").value !== "") {
        window.location = "mailto:dleung@connect.kellettschool.com?subject=Landed Query - Sent via Contact Form&body=NOTE: PLEASE DO NOT ALTER ANY CONTENT OF THIS EMAIL ABOVE THE HORIZONTAL LINE; OTHERWISE, THIS EMAIL WILL BE CONSIDERED NULL AND VOID.%0D%0A%0D%0AName: " + document.getElementById("firstName").value + "%0D%0A%0D%0ADepartment: " + document.getElementById("department").value + "%0D%0A%0D%0ASummary: " + document.getElementById("summary").value + "%0D%0A%0D%0AThe email message starts below.%0D%0A%0D%0A----------------------------------------------------------------------------------------------------%0D%0A%0D%0A" + document.getElementById("message").value;
        document.getElementById("emailSent").innerHTML = "<span class='icon fa fa-check'></span> Your email has been sent successfully.";
        document.getElementById("emailIncomplete").innerHTML = "";
      } else {
        document.getElementById("emailSent").innerHTML = "";
        document.getElementById("emailIncomplete").innerHTML = "Please fill in and complete the form before sending your email.";
      }
    }
  }
};
