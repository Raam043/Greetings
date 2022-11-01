// Select All Elements
const timeCon = document.getElementById("time"),
  greetCon = document.getElementById("greetings"),
  formCon = document.getElementById("userInputForm"),
  inputForm = document.getElementById("mainForm"),
  userInput = document.getElementById("userName");

// Prevent Default Function on Form Submission
inputForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //   Get user name from the input value
  let userName = userInput.value;

  // Store Name on LocalStorage
  localStorage.setItem("user", userName);

  //  Hide the entire form on successfull submit
  formCon.style.display = "none";

  //   Show Current Time

  function currTime() {
    var date = new Date(); //Initialize The Date
    var hrs = date.getHours();
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12; //Format hours in 12
    var mnts = date.getMinutes();
    if (mnts < 10) {
      mnts = "0" + mnts; //add 0 before singular second number
    }
    timeCon.innerHTML = hrs + "<span class='blink'>:</span>" + mnts;
  }

  setInterval(() => {
    currTime();
  }, 100);

  // Greet User Dynamically
  function greet(name) {
    function greetings(message) {
      return message + ", " + name + "!";
    }
    return greetings;
  }

  var greetUser = greet(userName),
    sayGoodMorning = greetUser("Good Morning"),
    sayGoodNoon = greetUser("Good Noon"),
    sayGoodAfterNoon = greetUser("Good Afternoon"),
    sayGoodEvening = greetUser("Good Evening"),
    sayGoodNight = greetUser("Good Night");

  var date = new Date(); //Initialize The Date

  var totalHrs = date.getHours(); // Get time in 24 Hours Format

  function customBg(url) {
    document.body.style.background =
      "linear-gradient(#00000050, #00000050),url(" + url + ")";
    document.body.style.backgroundColor = "#000000";
    // document.body.style.backgroundImage = "url(" + url + ")";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  if (totalHrs >= 5 && totalHrs <= 10) {
    //ভোর ৫ টা হতে সকাল ১০ টা
    greetCon.innerHTML = sayGoodMorning;
    customBg("'images/morning.jpg'");
  } else if (totalHrs >= 11 && totalHrs <= 14) {
    // বেলা ১১ টা হতে দুপুর ২ টা
    greetCon.innerHTML = sayGoodNoon;
    customBg("'images/noon.jpg'");
  } else if (totalHrs >= 15 && totalHrs <= 17) {
    // দুপুর ৩ টা হতে বিকাল ৫ টা
    greetCon.innerHTML = sayGoodAfterNoon;
    customBg("'images/afternoon.jpg'");
  } else if (totalHrs >= 18 && totalHrs <= 21) {
    // সন্ধ্যা ৬ টা হতে রাত ১০ টা
    greetCon.innerHTML = sayGoodEvening;
    customBg("'images/evening.jpg'");
  } else {
    greetCon.innerHTML = sayGoodNight;
    customBg("'images/night.jpg'");
  }
});
