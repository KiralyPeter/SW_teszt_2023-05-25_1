const {Builder, By, Key} = require('selenium-webdriver'); // {Builder, By, Key} = objektumok a selenium-webdriver-ből
require('chromedriver');

const url = 'https://szit.hu';

function szitTeszt(){
    let driver = new Builder().forBrowser('chrome').build(); // chrome = driver amire szükségünk van
    driver.get(url); // letölti az oldalt
    driver.findElement(By.id('qsearch__in')).sendKeys('recept', Key.ENTER); // ID alapján keresünk és beleírjuk: 'recept'

}

szitTeszt();