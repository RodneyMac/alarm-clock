let p = new Date();
let month;
switch (p.getMonth()) {
  case 0:
    month = "Jan";
    break;
  case 1:
    month = "Feb";
    break;
  case 2:
    month = "Mar";
    break;
  case 3:
    month = "Apr";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "Jun";
    break;
  case 6:
    month = "Jul";
    break;
  case 7:
    month = "Aug";
    break;
  case 8:
    month = "Sep";
    break;
  case 9:
    month = "Oct";
    break;
  case 10:
    month = "Nov";
    break;
  case 11:
    month = "Dec";
    break;
  default:
    console.log("Error");
    break;
}

function time() {
  let d = new Date();
  if (d.getHours() < 10) {
    document.getElementById("hr").innerHTML = "0" + d.getHours();
  } else {
    document.getElementById("hr").innerHTML = d.getHours();
  }

  if (d.getMinutes() < 10) {
    document.getElementById("min").innerHTML = "0" + d.getMinutes();
  } else {
    document.getElementById("min").innerHTML = d.getMinutes();
  }

  if (d.getSeconds() < 10) {
    document.getElementById("sec").innerHTML = "0" + d.getSeconds();
  } else {
    document.getElementById("sec").innerHTML = d.getSeconds();
  }

  document.getElementById("date").innerHTML =
    d.getDate() + " " + month + " " + d.getFullYear();
  setTimeout(time, 1000);
}

time();

function setTime() {
  document.getElementById("set-time").style.visibility = "visible";
}

function saveAlarm() {
  let hour = document.getElementById("set-hr").value;
  let minute = document.getElementById("set-min").value;
  let second = document.getElementById("set-sec").value;
  document.getElementById("set-button").setAttribute("onclick", "cancelBtn()");

  function x() {
    document.getElementById("set-time").innerHTML =
      "Your alarm is set for " +
      `<strong class="horas">${hour}</strong>` +
      ":" +
      `<strong class="minutos">${minute}</strong>` +
      ":" +
      `<strong class="segundos">${second}<strong>` +
      ` <strong class="hs">hs</strong>`;

    document.getElementById("set-time").style.fontSize = "25px";
    document;
    document.getElementById("set-time").style.fontWeight = "bold";
    document.getElementById("set-time").style.paddingTop = "45px";
    document.getElementById("set-time").style.color = "cyan";
    document.getElementById("set-time").style.textAlign = "center";
    document.getElementById("set-time").style.fontFamily =
      "Gill Sans, sans-serif";
    document.getElementById("set-button").innerHTML = "Cancel Alarm";

    if (
      document.getElementById("hr").innerHTML == hour &&
      document.getElementById("min").innerHTML == minute &&
      document.getElementById("sec").innerHTML == second
    ) {
      let audio = new Audio("mp3/Morning_mood.mp3");
      setInterval(() => {
        audio.play();
      }, 1000);
    } else {
      setTimeout(x, 100);
    }
  }
  x();
}

function cancelBtn() {
  window.location.reload();
}
