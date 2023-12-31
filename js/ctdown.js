// Set the date we're counting down to
var countDownDate = new Date("Dec 16, 2023 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var ctf_name = "BackDoorCTF 2023" // Dont forget to modify 

  // Display the result in the element with id="demo"
  var countdownHTML = "<h2>Countdown before <span>" + ctf_name + "</span> start:</h2>" + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  document.getElementById("demo").innerHTML = countdownHTML;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "No New CTF announced as of NOW";
  }
}, 1000);

