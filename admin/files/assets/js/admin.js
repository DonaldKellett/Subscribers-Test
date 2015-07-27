/*
  admin.js
  The main JS file that powers the Admin Panel of the Landed Website (a pretend company website)
  (c) Donald Leung.  All rights reserved.
  Note: If you are seeing this and you are not a Landed IT Developer, then you are a HACKER.  Anyone found hacking the Admin Panel (and any other part of the Landed Website) will be subject to punishment by the school or the Local Court if necessary.
  Naaaaaaah ... don't worry ... the message is just a pretend message.  Feel free to check out the code below!
*/

// Caesar Shift (for passwords)
// Note: ALL single-letter variables reserved (do NOT use i for "for" loops)
var a = "d",
    b = "e",
    c = "f",
    d = "g",
    e = "h",
    f = "i",
    g = "j",
    h = "k",
    i = "l",
    j = "m",
    k = "n",
    l = "o",
    m = "p",
    n = "q",
    o = "r",
    p = "s",
    q = "t",
    r = "u",
    s = "v",
    t = "w",
    u = "x",
    v = "y",
    w = "z",
    x = "a",
    y = "b",
    z = "c";
// Neat, huh?  You can't just read the code for the password, you have to apply the Caesar Shift :p

// Admin Object

var admin = {
  init: function() {
    console.log("%cLanded - Admin Panel", "font-size: 50px;");
    console.log("%cIf you are reading this right now and you are not a Landed IT Developer, then you are a hacker.  Anyone found hacking the Landed Admin Panel (and any other part of the Landed Website thereof) will be subject to punishment by the school and by the Local Court if appropriate.","font-size: 25px; color: red; text-transform: uppercase;");
  },
  sendEmail: function() {
    if (document.getElementById("password").value !== d+o+n+a+l+d+" "+l+e+u+n+g) {
      document.getElementById("noSend").innerHTML = "Invalid password.  The message did not send.";
      document.getElementById("sent").innerHTML = "";
    } else {
      if (document.getElementById("email").value !== "" && document.getElementById("subject").value !== "" && document.getElementById("message").value !== "") {
        window.location = "mailto:" + document.getElementById("email").value + "?subject=Landed Admin - " + document.getElementById("subject").value + "&body=Sent via Landed Admin Panel%0D%0A%0D%0ANote: Please check that this email is sent from the email address dleung@connect.kellettschool.com.  If it was sent from another email address or if the content of this email contains spam, please use the contact form or the Tawk.to chat widget to report it to us immediately.  Thank you for your cooperation.%0D%0A%0D%0AThe actual message starts below the horizontal line.%0D%0A%0D%0A----------------------------------------------------------------------------------------------------%0D%0A%0D%0A" + document.getElementById("message").value;
        document.getElementById("noSend").innerHTML = "";
        document.getElementById("sent").innerHTML = "<span class='icon fa fa-check'></span> Message Successfully Sent";
      } else {
        document.getElementById("noSend").innerHTML = "Not all areas are filled in - please fill in the form before sending your message again.";
        document.getElementById("sent").innerHTML = "";
      }
    }
  },
  subscribers: [
    // The Subscribers Database - how neat!
    "dleung@connect.kellettschool.com",
    "i.donaldl@me.com",
    "a@example.tld",
    "b@example.tld",
    "c@example.tld",
    "d@example.tld",
    "e@example.tld"
  ],
  publishNews: function() {
    if (admin.subscribers.length === 0) {
      // No Subscribers!
      document.getElementById("subscribeNoSend").innerHTML = "Sorry, there are currently no subscribers.  No need to send Landed News Articles.";
      document.getElementById("subscribeSent").innerHTML = "";
    } else {
      if (document.getElementById("subscribePassword").value !== l+a+n+d+e+d+" "+n+e+w+s+" "+a+r+t+i+c+l+e+s) {
        // Incorrect Password!
        document.getElementById("subscribeNoSend").innerHTML = "Invalid password!  The news article is not published.";
        document.getElementById("subscribeSent").innerHTML = "";
      } else {
        if (document.getElementById("subscribeSubject").value !== "" && document.getElementById("subscribeMessage").value !== "") {
          // All fields filled in!  Send email to all subscribers
          var url = "";
          url += "mailto:";
          if (admin.subscribers.length === 1) {
            url += admin.subscribers[0];
          } else {
            url += admin.subscribers[0];
            var loop;
            for (loop = 1; loop < admin.subscribers.length; loop++) {
              url += ",";
              url += admin.subscribers[loop];
            }
          }
          url += "?subject=Landed News - ";
          url += document.getElementById("subscribeSubject").value;
          url += "&body=Landed News Article%0D%0A%0D%0ANote: Please check that this email is sent from dleung@connect.kellettschool.com.  If this email is not sent from dleung@connect.kellettschool.com or if this email contains spam of any sort, then please use the contact form on our website or the Tawk.to chat widget to notify us as soon as possible.  Thank you for your cooperation.%0D%0A%0D%0AThe news article starts below the horizontal line.%0D%0A%0D%0A----------------------------------------------------------------------------------------------------%0D%0A%0D%0A";
          url += document.getElementById("subscribeMessage").value;
          window.location = url;
          document.getElementById("subscribeNoSend").innerHTML = "";
          document.getElementById("subscribeSent").innerHTML = "<span class='icon fa fa-check'></span> News successfully published";
        } else {
          // Fill in all fields before sending the message again
          document.getElementById("subscribeNoSend").innerHTML = "Please fill in all fields on this form before publishing the news again.";
          document.getElementById("subscribeSent").innerHTML = "";
        }
      }
    }
  }
};
