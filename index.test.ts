import {Builder, Capabilities, By } from "selenium-webdriver"
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
beforeAll(async () => {
    await (await driver).get('http://localhost:5500/index.html')
})

afterAll(async () => {
    await (await driver).quit()
})

test('Adding movie to the page', async () => {
    let searchBar = await driver.findElement(By.xpath('//input'))

    await searchBar.sendKeys('Avengers')

    await driver.findElement(By.xpath('//button')).click()

    await driver.sleep(1000)
})

test('Crossing off a movie from the page', async () => {
     driver.findElement(By.xpath('//span')).click();
    await driver.sleep(1000);
} )

test('Remove a movie from the page', async () => {
    driver.findElement(By.xpath('//button[text ()= "x"]')).click()
    await driver.sleep(1500)
})