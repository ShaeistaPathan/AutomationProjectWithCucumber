package steps;


import org.openqa.selenium.support.PageFactory;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BasePage;
import pages.ToDoListPage;

public class BackgroundStepDefinition extends BasePage{
	
	ToDoListPage toDoListPageObj;
	
	@Before
	public void beforeRun() {
		initDriver();
		toDoListPageObj = PageFactory.initElements(driver, ToDoListPage.class);
	}

	@Given("^Set SkyBlue Background button exists$")
	public void Set_SkyBlue_Background_button_exists() {
	
		toDoListPageObj.setSkybluBackgroundButtonExists();
	}
	
	@When("^I click on the SkyBlue Background button$")
	public void i_click_on_the_SkyBlue_Backgroundbutton()  {
		toDoListPageObj.clickSetSkybluBackgoundButton(); 
	}

	@Then("^The background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue()  {
		toDoListPageObj.validateSkybluBackground();  
	}
	
	@Given("^Set White Background button exists$")
	public void Set_White_Background_button_exists() {
	    toDoListPageObj.setWhiteBackgroundButtonExists();
	}
	
	@When("^I click on the White Background button$")
	public void i_click_on_the_White_Background_dbutton()  {
		toDoListPageObj.clickSetWhiteBackgoundButton(); 
	}

	@Then("^The background color will change to white$")
	public void the_background_color_will_change_to_white()  {
		toDoListPageObj.validateWhiteBackground();   
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
