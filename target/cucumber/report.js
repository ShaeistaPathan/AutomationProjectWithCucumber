$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/WhiteBackground.feature");
formatter.feature({
  "line": 3,
  "name": "Set White Background Button Functionality Validation",
  "description": "",
  "id": "set-white-background-button-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@WhiteBackgroundFeature"
    }
  ]
});
formatter.before({
  "duration": 2945155700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "White Background",
  "description": "",
  "id": "set-white-background-button-functionality-validation;white-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Set White Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the White Background button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundStepDefinition.Set_White_Background_button_exists()"
});
formatter.result({
  "duration": 202600900,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.i_click_on_the_White_Background_dbutton()"
});
formatter.result({
  "duration": 56621900,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 35513000,
  "status": "passed"
});
formatter.after({
  "duration": 789586700,
  "status": "passed"
});
});