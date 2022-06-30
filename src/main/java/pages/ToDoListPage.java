package pages;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import junit.framework.Assert;

public class ToDoListPage {

	WebDriver driver;
	
	public ToDoListPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how= How.XPATH,using="//button[@onclick='myFunctionSky()']") WebElement SetSkybluBackgroundButtonElement;
	@FindBy(how= How.XPATH,using="//button[@onclick='myFunctionWhite()']") WebElement SetWhiteBackgroundButtonElement;
	@FindBy(how= How.XPATH,using="//body") WebElement BodyElement;
	
	public void setSkybluBackgroundButtonExists() {
		Assert.assertTrue(SetSkybluBackgroundButtonElement.isDisplayed());

	}
	
	public void clickSetSkybluBackgoundButton() {
		SetSkybluBackgroundButtonElement.click();
	}
	
	public void validateSkybluBackground() {
		System.out.println(BodyElement.getCssValue("background-color"));
	}
	
	public void setWhiteBackgroundButtonExists() {
		Assert.assertTrue(SetWhiteBackgroundButtonElement.isDisplayed());

	}
	
	public void clickSetWhiteBackgoundButton() {
		SetWhiteBackgroundButtonElement.click();
	}
	
	public void validateWhiteBackground() {
		System.out.println(BodyElement.getCssValue("background-color"));
	}
	
	
	
	
	
	
}
