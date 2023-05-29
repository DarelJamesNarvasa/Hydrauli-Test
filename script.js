const dashboardButton = document.getElementById("button1");
const manometerButton = document.getElementById("button2");
const piezometerButton = document.getElementById("button3");
const utubeButton = document.getElementById("button4");
const differentialButton = document.getElementById("button5");
const inclinedButton = document.getElementById("button6");
const invertUtubeButton = document.getElementById("button7");
const multitubeButton = document.getElementById("button8");
const venturimeterButton = document.getElementById("button9");
const horizontalButton = document.getElementById("button10");
const verticalButton = document.getElementById("button11");
const venturiInclinedButton = document.getElementById("button12");
const orificemeterButton = document.getElementById("button13");
const constantHeadButton = document.getElementById("button14");
const fallingHeadButton = document.getElementById("button15");
const jetFlowButton = document.getElementById("button16");
const youtubeButton = document.getElementById("button17");
const notesButton = document.getElementById("button18");
const logoutButton = document.getElementById("button19");
const helpButton = document.getElementById("button20");

const website = document.getElementById("website");

    
const content = document.getElementById("title-content");
const formula = document.getElementById("formula");
const definition = document.getElementById("definiton");
const definitionDetails = document.getElementById("def-details");
const sticker = document.getElementById("sticker");
const dash2 = document.getElementById("dash2");
const youtubeLinks = document.getElementById("links");
const dynamicCalendar = document.getElementById("dynamicCalendar");
const inputValues = document.getElementById("input");
const temporary = document.getElementById("temporary");
const utubeDisplay = document.getElementById("utubedisplay");
const utubeSimulation = document.getElementById("utube-simulation");

const manomterFormula = document.getElementById("manometer-formula");
const piezometerFormula = document.getElementById("piezometer-formula");
const utubeFormula = document.getElementById("utube-formula");
const differentialFormula = document.getElementById("differential-formula");
const inclinedFormula = document.getElementById("inclined-formula");
const invertFormula = document.getElementById("invert-formula");
const multiTubeFormula = document.getElementById("multiTube-formula");
const venturiFormula = document.getElementById("venturi-formula");
const horizontalFormula = document.getElementById("horizontal-formula");
const verticalFormula = document.getElementById("vertical-formula");
const venInclinedFormula = document.getElementById("venInclined-formula");
const orificeFormula = document.getElementById("orifice-formula");
const constantFormula = document.getElementById("constant-formula");
const fallingFormula = document.getElementById("falling-formula");
const jetflowFormula = document.getElementById("jetflow-formula");


var originalYouTubeLinks = document.getElementById('links').innerHTML;
var originalDash2 = document.getElementById('dash2').innerHTML;
var originalsticker = document.getElementById('sticker').innerHTML;
var originalCalendar = document.getElementById('dynamicCalendar').innerHTML;
var originalInputValues = document.getElementById('input').innerHTML;

const dashboardIcon = document.querySelector('.dashboard_icon');
const manometerIcon = document.querySelector('.manometer_icon');
const venturimeterIcon = document.querySelector('.venturi_icon');
const orificemeterIcon = document.querySelector('.orifice_icon');
const youtubeIcon = document.querySelector('.youtube_icon');
const notesIcon = document.querySelector('.notes_icon');
const logoutIcon = document.querySelector('.logout_icon');
const helpIcon = document.querySelector('.help_icon');
    
let isActive1 = false;
let isActive2 = false;
let isActive3 = false;
let isActive4 = false;
let isActive5 = false;
let isActive6 = false;
let isActive7 = false;
let isActive8 = false;
let isActive9 = false;
let isActive10 = false;
let isActive11 = false;
let isActive12 = false;
let isActive13 = false;
let isActive14 = false;
let isActive15 = false;
let isActive16 = false;
   



// Click button
dashboardButton.addEventListener("click", function() {
    content.innerHTML = "Dashboard";
    definition.innerText = "Hello Claire!";
    definitionDetails.innerText = "Learn anytime, anywhere. Boost your skills with flexible online laboratory";
    formula.innerText = "";
    sticker.innerHTML = originalsticker;
    //dash2.style.width = "100px";
    dash2.style.display = "none";
    youtubeLinks.innerHTML = originalYouTubeLinks;
    inputValues.innerHTML = "<div></div>";
    inputValues.style.height = "0px";
    inputValues.style.width = "0px";
    temporary.style.display = "none";
    utubeDisplay.style.display = "block";
    utubeSimulation.style.display = "none";

    dynamicCalendar.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});
manometerButton.addEventListener("click", function() {
    content.innerText = "Manometer";
    definition.innerText = "Definition";
    definitionDetails.innerText = "A U-shaped tule filled with liquid that move as pressure changes. It is used to measure preasure.";       
    formula.innerText = "Formula";
    dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";

    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "block";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

piezometerButton.addEventListener("click", function() {
  content.innerText = "Piezometer";
  definition.innerText = "Definition";
  definitionDetails.innerText = "The simplest form of an open manometer which is a tube that taps into a container or conduit to measure the pressure of the liquid rising in the tube.";    
  formula.innerText = "Formula";
    dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "block";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});
  
utubeButton.addEventListener("click", function() {
  content.innerText= "U tube Manometer";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "U-tube manometers use a vertical or inclined U-tube column filled with a reference liquid to measure atmospheric pressure.";       
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "block";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

differentialButton.addEventListener("click", function() {
  content.innerText = "Differential Manometer";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "Differential manometers measure the difference in pressure between two points in a pipe or in two different pipes."; 
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "block";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

inclinedButton.addEventListener("click", function() {
  content.innerText = "Inclined Manometer";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "Differential manometers measure the difference in pressure between two points in a pipe or in two different pipes."; 
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "invert";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "block";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

invertUtubeButton.addEventListener("click", function() {
  content.innerText = "Invert U-tube";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "It is used to meausre the accuracy of small differences if pressure is increased"; 
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "block";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

multitubeButton.addEventListener("click", function() {
  content.innerText = "Multi-tube";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "A device that uses several U-shaped tubes, filled with liquid, to measure pressure difference between multiple points." ;
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "block";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

venturimeterButton.addEventListener("click", function() {
  content.innerText= "Venturi meters";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "Measures a  fliud's flow reate by reducing the cross-sectional area of flow path and creating pressure difference.";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "block";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

horizontalButton.addEventListener("click", function() {
  content.innerText = "Horizontal Venturi Meter";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "Learn anytime, anywhere. Boost your skills with flexible online laboratory"; 
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "block";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

verticalButton.addEventListener("click", function() {
  content.innerHTML = "Vertical Venturi Meter";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "Learn anytime, anywhere. Boost your skills with flexible online laboratory";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "block";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

venturiInclinedButton.addEventListener("click", function() {
  content.innerText = "Inclined Venturi Meter";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "Learn anytime, anywhere. Boost your skills with flexible online laboratory";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "block";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

orificemeterButton.addEventListener("click", function() {
  content.innerText = "Orifice Meters";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "An opening (usually circular with a close perimeter throught which fluid flow. It is used primariy to measure or to control the flow of fluid.";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "block";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

constantHeadButton.addEventListener("click", function() {
  content.innerText = "Constant Head Orifice (Turnout)";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "A water measuring device frequently usuedin irrigation is a combination regulating gate and measuring gate structure.";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "block";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "none";
});

fallingHeadButton.addEventListener("click", function() {
  content.innerText = "Falling Head";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "When the outflow of water is greater thatn the inflow, and the time it takes for water to flow form a reservior can be calculate by comparing the volume of water to flowing throught an orifice or pipe to the decrease in the reservior's volume over time.";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "block";
    jetflowFormula.style.display = "none";
});

jetFlowButton.addEventListener("click", function() {
  content.innerText = "Orifice and Free Jet Flow";
  formula.innerText = "Formula";
  definition.innerText = "Definition";
  definitionDetails.innerText = "The orifice and free jet flow apparatus is a cylindrical tank with an orifice plate and adjustable overflow pipe used for measuring water flow.";
  sticker.innerHTML = "<div></div>";
  youtubeLinks.innerHTML = "<div></div>";

  dash2.style.display = "block";
    sticker.innerHTML = "<div></div>";
    youtubeLinks.innerHTML = "<div></div>";
    inputValues.innerHTML = originalInputValues;
    inputValues.style.height = "500px";
    inputValues.style.width = "300px";
    inputValues.style.display = "block";
    temporary.style.display = "block";
    utubeDisplay.style.display = "none";
    utubeSimulation.style.display = "block";
    
    dynamicCalendar.style.display = "none";
    dash2.style.display = "block";
    manomterFormula.style.display = "none";
    piezometerFormula.style.display = "none";
    utubeFormula.style.display = "none";
    differentialFormula.style.display = "none";
    inclinedFormula.style.display = "none";
    invertFormula.style.display = "none";
    multiTubeFormula.style.display = "none";
    venturiFormula.style.display = "none";
    horizontalFormula.style.display = "none";
    verticalFormula.style.display = "none";
    venInclinedFormula.style.display = "none";
    orificeFormula.style.display = "none";
    constantFormula.style.display = "none";
    fallingFormula.style.display = "none";
    jetflowFormula.style.display = "block";
});

// Mouseover && Mouseout
dashboardButton.addEventListener("mouseover", function() {
    if (!isActive1) {
        setDashboardButtonHover();
    }
});
    
dashboardButton.addEventListener("mouseout", function() {
    if (!isActive1) {
        setDashboardButtonInactive();
    }
 });
    
manometerButton.addEventListener("mouseover", function() {
    if (!isActive2) {
        setManometerButtonHover();
    }
});
    
manometerButton.addEventListener("mouseout", function() {
    if (!isActive2) {
        setManometerButtonInactive();
    }
});

piezometerButton.addEventListener("mouseover", function() {
  if (!isActive3) {
      setPiezometerButtonHover();
  }
});
  
piezometerButton.addEventListener("mouseout", function() {
  if (!isActive3) {
    setPiezometerButtonInactive();
  }
});

utubeButton.addEventListener("mouseover", function() {
  if (!isActive4) {
      setUtubeButtonHover();
  }
});
  
utubeButton.addEventListener("mouseout", function() {
  if (!isActive4) {
    setUtubeButtonInactive();
  }
});

differentialButton.addEventListener("mouseover", function() {
  if (!isActive5) {
    setDifferentialHover();
  }
});
  
differentialButton.addEventListener("mouseout", function() {
  if (!isActive5) {
    setDifferentialInactive();
  }
});

inclinedButton.addEventListener("mouseover", function() {
  if (!isActive6) {
    setInclinedHover();
  }
});
  
inclinedButton.addEventListener("mouseout", function() {
  if (!isActive6) {
    setInclinedInactive();
  }
});

invertUtubeButton.addEventListener("mouseover", function() {
  if (!isActive7) {
    setInvertUtubeButtonHover();
  }
});
  
invertUtubeButton.addEventListener("mouseout", function() {
  if (!isActive7) {
    setInvertUtubeButtonInactive();
  }
});

multitubeButton.addEventListener("mouseover", function() {
  if (!isActive8) {
    setMultitubeButtonHover();
  }
});
  
multitubeButton.addEventListener("mouseout", function() {
  if (!isActive8) {
    setMultiTubeButtonInactive();
  }
});

venturimeterButton.addEventListener("mouseover", function() {
    if (!isActive9) {
        setVenturimeterButtonHover();
    }
});
    
venturimeterButton.addEventListener("mouseout", function() {
    if (!isActive9) {
        setVenturimeterButtonInactive();
    }
});

horizontalButton.addEventListener("mouseover", function() {
  if (!isActive10) {
      setHorizontalButtonHover();
  }
});
  
horizontalButton.addEventListener("mouseout", function() {
  if (!isActive10) {
      setHorizontalButtonInactive();
  }
});

verticalButton.addEventListener("mouseover", function() {
  if (!isActive11) {
      setVerticalButtonHover();
  }
});
  
verticalButton.addEventListener("mouseout", function() {
  if (!isActive11) {
      setVerticalButtonInactive();
  }
});

venturiInclinedButton.addEventListener("mouseover", function() {
  if (!isActive12) {
      setVenturiInclinedButtonHover();
  }
});
  
venturiInclinedButton.addEventListener("mouseout", function() {
  if (!isActive12) {
      setVenturiInclinedButtonInactive();
  }
});

orificemeterButton.addEventListener("mouseover", function() {
  if (!isActive13) {
      setOrificemeterButtonHover();
  }
});
  
orificemeterButton.addEventListener("mouseout", function() {
  if (!isActive13) {
      setOrificemeterButtonInactive();
  }
});

constantHeadButton.addEventListener("mouseover", function() {
  if (!isActive14) {
      setConstantHeadButtonHover();
  }
});
  
constantHeadButton.addEventListener("mouseout", function() {
  if (!isActive14) {
      setConstantHeadButtonInactive();
  }
});

fallingHeadButton.addEventListener("mouseover", function() {
  if (!isActive15) {
      setFallingHeadButtonHover();
  }
});
  
fallingHeadButton.addEventListener("mouseout", function() {
  if (!isActive15) {
      setFallingHeadButtonInactive();
  }
});

jetFlowButton.addEventListener("mouseover", function() {
  if (!isActive16) {
      setJetFlowButtonHover();
  }
});
  
jetFlowButton.addEventListener("mouseout", function() {
  if (!isActive16) {
      setJetFlowButtonInactive();
  }
});

youtubeButton.addEventListener("mouseover", function(){
    youtubeButton.style.backgroundColor = "#FFFFFF";
    youtubeButton.style.color = "#5669CC";
    youtubeIcon.src = 'youtube-active.png';
});

youtubeButton.addEventListener("mouseout", function(){
    youtubeButton.style.backgroundColor = "#5669CC";
    youtubeButton.style.color = "white";
    youtubeIcon.src = 'youtube.png';
});

notesButton.addEventListener("mouseover", function(){
    notesButton.style.backgroundColor = "#FFFFFF";
    notesButton.style.color = "#5669CC";
    notesIcon.src = 'notes-active.png';
});

notesButton.addEventListener("mouseout", function(){
    notesButton.style.backgroundColor = "#5669CC";
    notesButton.style.color = "white";
    notesIcon.src = 'notes.png';
});

logoutButton.addEventListener("mouseover", function(){
    logoutButton.style.backgroundColor = "#FFFFFF";
    logoutButton.style.color = "#5669CC";
    logoutIcon.src = 'logout-active.png';
});

logoutButton.addEventListener("mouseout", function(){
    logoutButton.style.backgroundColor = "#5669CC";
    logoutButton.style.color = "white";
    logoutIcon.src = 'logout.png';
});

helpButton.addEventListener("mouseover", function(){
    helpButton.style.backgroundColor = "#FFFFFF";
    helpButton.style.color = "#5669CC";
    helpIcon.src = 'help-active.png';
});

helpButton.addEventListener("mouseout", function(){
    helpButton.style.backgroundColor = "#5669CC";
    helpButton.style.color = "white";
    helpIcon.src = 'help.png';
});


// Inactive && Hover    
function setDashboardButtonInactive() {
    dashboardButton.classList.remove("active");
    dashboardButton.style.backgroundColor = "#5669CC";
    dashboardButton.style.color = "white";
    dashboardIcon.src = 'dashboard.png';
}
    
function setDashboardButtonHover() {
    dashboardButton.style.backgroundColor = "#FFFFFF";
    dashboardButton.style.color = "#5669CC";
    dashboardIcon.src = 'dashboard-active.png';
}
    
 function setManometerButtonInactive() {
    manometerButton.classList.remove("active");
    manometerButton.style.backgroundColor = "#5669CC";
    manometerButton.style.color = "white";
    manometerIcon.src = 'manometer.png';
}
    
function setManometerButtonHover() {
    manometerButton.style.backgroundColor = "#FFFFFF";
    manometerButton.style.color = "#5669CC";
    manometerIcon.src = 'manometer-active.png';
}

function setPiezometerButtonHover() {
  piezometerButton.style.backgroundColor = "#FFFFFF";
  piezometerButton.style.color = "#5669CC";
}
  
function setPiezometerButtonInactive() {
  piezometerButton.classList.remove("active");
  piezometerButton.style.backgroundColor = "#5669CC";
  piezometerButton.style.color = "white";
}

function setUtubeButtonHover() {
  utubeButton.style.backgroundColor = "#FFFFFF";
  utubeButton.style.color = "#5669CC";
}
  
function setUtubeButtonInactive() {
  utubeButton.classList.remove("active");
  utubeButton.style.backgroundColor = "#5669CC";
  utubeButton.style.color = "white";
}

function setDifferentialButtonHover() {
  differentialButton.style.backgroundColor = "#FFFFFF";
  differentialButton.style.color = "#5669CC";
}
  
function setDifferentialButtonInactive() {
  differentialButton.classList.remove("active");
  differentialButton.style.backgroundColor = "#5669CC";
  differentialButton.style.color = "white";
}

function setInclinedButtonHover() {
  inclinedButton.style.backgroundColor = "#FFFFFF";
  inclinedButton.style.color = "#5669CC";
}
  
function setInclinedButtonInactive() {
  inclinedButton.classList.remove("active");
  inclinedButton.style.backgroundColor = "#5669CC";
  inclinedButton.style.color = "white";
}

function setInvertUtubeButtonHover() {
  invertUtubeButton.style.backgroundColor = "#FFFFFF";
  invertUtubeButton.style.color = "#5669CC";
}
  
function setInvertUtubeButtonInactive() {
  invertUtubeButton.classList.remove("active");
  invertUtubeButton.style.backgroundColor = "#5669CC";
  invertUtubeButton.style.color = "white";
}

function setMultitubeButtonHover() {
  multitubeButton.style.backgroundColor = "#FFFFFF";
  multitubeButton.style.color = "#5669CC";
}
  
function setMultiTubeButtonInactive() {
  multitubeButton.classList.remove("active");
  multitubeButton.style.backgroundColor = "#5669CC";
  multitubeButton.style.color = "white";
}
    
function setVenturimeterButtonInactive() {
  venturimeterButton.classList.remove("active");
  venturimeterButton.style.backgroundColor = "#5669CC";
  venturimeterButton.style.color = "white";
  venturimeterIcon.src = 'venturimeter.png';
}
    
function setVenturimeterButtonHover() {
  venturimeterButton.style.backgroundColor = "#FFFFFF";
  venturimeterButton.style.color = "#5669CC";
  venturimeterIcon.src = 'venturimeter-active.png';
}

function setHorizontalButtonInactive() {
  horizontalButton.classList.remove("active");
  horizontalButton.style.backgroundColor = "#5669CC";
  horizontalButton.style.color = "white";
}
  
function setHorizontalButtonHover() {
  horizontalButton.style.backgroundColor = "#FFFFFF";
  horizontalButton.style.color = "#5669CC";
}

function setVerticalButtonInactive() {
  verticalButton.classList.remove("active");
  verticalButton.style.backgroundColor = "#5669CC";
  verticalButton.style.color = "white";
}
  
function setVerticalButtonHover() {
  verticalButton.style.backgroundColor = "#FFFFFF";
 verticalButton.style.color = "#5669CC";
}

function setVenturiInclinedButtonInactive() {
  venturiInclinedButton.classList.remove("active");
  venturiInclinedButton.style.backgroundColor = "#5669CC";
  venturiInclinedButton.style.color = "white";
}
  
function setVenturiInclinedButtonHover() {
  venturiInclinedButton.style.backgroundColor = "#FFFFFF";
  venturiInclinedButton.style.color = "#5669CC";
}

function setOrificemeterButtonInactive() {
  orificemeterButton.classList.remove("active");
  orificemeterButton.style.backgroundColor = "#5669CC";
  orificemeterButton.style.color = "white";
  orificemeterIcon.src = 'orificemeter.png';
}
    
function setOrificemeterButtonHover() {
  orificemeterButton.style.backgroundColor = "#FFFFFF";
  orificemeterButton.style.color = "#5669CC";
  orificemeterIcon.src = 'orificemeter-active.png';
}

function setConstantHeadButtonInactive() {
  constantHeadButton.classList.remove("active");
  constantHeadButton.style.backgroundColor = "#5669CC";
  constantHeadButton.style.color = "white";
}
  
function setConstantHeadButtonHover() {
  constantHeadButton.style.backgroundColor = "#FFFFFF";
  constantHeadButton.style.color = "#5669CC";
}

function setFallingHeadButtonInactive() {
  fallingHeadButton.classList.remove("active");
  fallingHeadButton.style.backgroundColor = "#5669CC";
  fallingHeadButton.style.color = "white";
}
  
function setFallingHeadButtonHover() {
  fallingHeadButton.style.backgroundColor = "#FFFFFF";
  fallingHeadButton.style.color = "#5669CC";
}

function setJetFlowButtonInactive() {
  jetFlowButton.classList.remove("active");
  jetFlowButton.style.backgroundColor = "#5669CC";
  jetFlowButton.style.color = "white";
}
  
function setJetFlowButtonHover() {
  jetFlowButton.style.backgroundColor = "#FFFFFF";
  jetFlowButton.style.color = "#5669CC";
}

function calculation() {
  const gaugeElement = document.querySelector(".gauge");

            function setGaugeValue(gauge, value) {
            if (value < 0 || value > 1) {
                return;
            }

            gauge.querySelector(".gauge__fill").style.transform = `rotate(${
                value / 2
            }turn)`;
            ;
            }

            setGaugeValue(gaugeElement, 1);

            var num1Input = document.getElementById("num1");
            var num2Input = document.getElementById("num2");
            var num3Input = document.getElementById("num3");
            var pressure = document.getElementById("pressure");
            var height = document.getElementById("height");
            var manometers = document.getElementsByClassName("manometer");
            var liquids = document.getElementsByClassName("liquid");
            var pressureValues = document.getElementsByClassName("pressure-value");

            const gauge__fill= document.querySelector(".gauge__fill");

            function updateTotal() {
                var num1 = Number(num1Input.value);
                var num2 = Number(num2Input.value);
                var num3 = Number(num3Input.value);
                var product = num1 * num2 * num3;
                var zero = 0;
                if(product === 0){
                    product = 0;
                    pressure.textContent = zero + " psi";
                    height.textContent = zero + " m";
                }
                else if(product === 50){
                    product = 50;
                    pressure.textContent = zero + " psi";
                    height.textContent = zero + " m";
                }
                else{
                    pressure.textContent = product - 50 + "psi";
                    height.textContent = Math.abs((100 - product) - product) + "m";
                }

                var firstLiquidHeight = (100 - product) / 100 * 400;
                var secondLiquidHeight = product / 100 * 400;

                liquids[0].style.height = (firstLiquidHeight / 2) + "px";
                liquids[1].style.height = (secondLiquidHeight / 2) + "px";
                gauge__fill.style.display = "block";
            }

            num1Input.addEventListener("input", updateTotal);
            num2Input.addEventListener("input", updateTotal);
            num3Input.addEventListener("input", updateTotal);

}

calculation();
// Dynamic Calendar
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

