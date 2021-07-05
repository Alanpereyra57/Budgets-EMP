// Get global elements
var bempH1 = document.getElementById('bemp-h1');
var bempBreadcrumbs = document.getElementById('bemp-breadcrumbs');
var bempOptions = document.getElementById('bemp-options');
var bempPrevBtn = document.getElementById('bemp-btn-prev');
var bempNextBtn = document.getElementById('bemp-btn-next');


// Define global variables
var breadcrumb = [];

// Increce or reduce de step number
var bempSteps = [];
var bempStep = 0;
function bempPrevStep(){
  bempStep--;
  bempActualStep();
}
function bempNextStep(){
  bempEnablePrevBtn();
  bempStep++;
  bempActualStep();
}

// Execute actual step
function bempActualStep(){
  bempSteps[bempStep]();
}

// Disable prev and next buttons
function bempDisablePrevBtn(){
  var bempPrevBtn = document.getElementById('bemp-btn-prev');
  bempPrevBtn.disabled = true;
  bempPrevBtn.classList.add('bemp-btn-disabled');
}
function bempDisableNextBtn(){
  bempNextBtn.disabled = true;
  bempNextBtn.classList.add('bemp-btn-disabled');
}
bempDisablePrevBtn();
bempDisableNextBtn();

// Enable prev and next buttons
function bempEnablePrevBtn(){
  bempPrevBtn.disabled = false;
  bempPrevBtn.classList.remove('bemp-btn-disabled');
}
function bempEnableNextBtn(){
  var bempNextBtn = document.getElementById('bemp-btn-next');
  bempNextBtn.disabled = false;
  bempNextBtn.classList.remove('bemp-btn-disabled');
}

// Add an option to the item
function bempAddOption(name, select){
  var option = document.createElement('option');
  option.setAttribute('value', name);
  option.innerHTML = name;
  select.appendChild(option);
}

// Add fade in animation class
window.onload = function(){
  var fempFadeIn = document.getElementById('bemp-div');
  fempFadeIn.classList.add("bemp-faded");
  fempFadeIn.classList.remove("bemp-d-none");
}
