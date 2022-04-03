$(function () { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.evolve-button').click(clickedEvolveButton);




})

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {
  name: "Chia",
  weight: 0,
  happiness: 5,
  power: 0
};

function clickedTreatButton() {
  alert(pet_info.name + " is enjoying their treat!")
  // Increase pet happiness
  pet_info.happiness++;
  // Increase pet weight
  pet_info.weight++;
  if (document.getElementById("petimageid").src.indexOf("images/Hedgehog.web") != -1) {
    var eataudio = new Audio("audio/eat.mp3");
    eataudio.play();
  }
  else {
    var eat2audio = new Audio("audio/eat2.mp3");
    eat2audio.play();
  }
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  if (pet_info.weight != 0) {
    alert(pet_info.name + " is having fun playing with but his getting tired.")
    // Increase pet happiness
    pet_info.happiness++;
    // Decrease pet weight
    pet_info.weight--;
    var playaudio = new Audio("audio/chilling.mp3");
    playaudio.play();
    checkAndUpdatePetInfoInHtml();
  }
  else {
    alert(pet_info.name + " is too hungry to play!")
    var stomachgrowlaudio = new Audio("audio/stomachgrowl.mp3");
    stomachgrowlaudio.play();
    checkAndUpdatePetInfoInHtml();
  }
}

function clickedExerciseButton() {
  if (pet_info.weight != 0) {
    alert(pet_info.name + " is tired from excercising!")
    // Decrease pet happiness
    pet_info.happiness--;
    // Decrease pet weight
    pet_info.weight--;
    // Decrease pet energy
    pet_info.power++;
    var gruntaudio = new Audio("audio/grunt.mp3");
    gruntaudio.play();
    var dumbellaudio = new Audio("audio/dumbell.mp3");
    dumbellaudio.play();
    checkAndUpdatePetInfoInHtml();
  }
  else {
    alert(pet_info.name + " is too hungry to excercise!")
    var stomachgrowlaudio = new Audio("audio/stomachgrowl.mp3");
    stomachgrowlaudio.play();
    checkAndUpdatePetInfoInHtml();
  }
}

function clickedEvolveButton() {
  if (pet_info.happiness == 10 & pet_info.power == 10 & document.getElementById("petimageid").src.indexOf("images/Hedgehog.web") != -1) {
    alert(pet_info.name + " has evolved into Bob Ross!")
    document.getElementById("petimageid").src = "images/Bob.webp";
    var levelupaudio = new Audio("audio/levelup.mp3");
    pet_info.name = "Bob Ross"
    levelupaudio.play();
    updatePetInfoInHtml();
  }
  else if (document.getElementById("petimageid").src.indexOf("images/Bob.web") != -1) {
    alert(pet_info.name + " cannot evolve any further!")
  }
  else {
    alert(pet_info.name + " has not met the requirements to evolve!")
    updatePetInfoInHtml();
  }

}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero, set it back to zero
  // Add conditional so if weight is lower than zero, set it back to zero
  if (pet_info.weight <= 0) pet_info.weight = 0;

  // also doing the same for happiness level
  if (pet_info.happiness <= 0) pet_info.happiness = 0;

  // Add conditional so if values are greater than ten, set it back to ten
  if (pet_info.weight >= 10) pet_info.weight = 10;
  if (pet_info.happiness >= 10) pet_info.happiness = 10;
  if (pet_info.power >= 10) pet_info.power = 10;
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
  $('.power').text(pet_info['power']);
  var weightmetervalue = document.getElementById('weightmeter');
  weightmetervalue.value = pet_info.weight;
  var happinessmetervalue = document.getElementById('happinessmeter');
  happinessmetervalue.value = pet_info.happiness;
  var powermetervalue = document.getElementById('powermeter');
  powermetervalue.value = pet_info.power;
}
