$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SkyBlueBackground.feature");
formatter.feature({
  "line": 3,
  "name": "Set SkyBlue Background Button Functionality Validation",
  "description": "",
  "id": "set-skyblue-background-button-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@SkybluBackgroundFeature"
    }
  ]
});
formatter.before({
  "duration": 2540176800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Sky Blue Background",
  "description": "",
  "id": "set-skyblue-background-button-functionality-validation;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the SkyBlue Background button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.Set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 243777000,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.i_click_on_the_SkyBlue_Backgroundbutton()"
});
formatter.result({
  "duration": 57194800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 56196800,
  "status": "passed"
});
formatter.after({
  "duration": 718963200,
  "status": "passed"
});
});