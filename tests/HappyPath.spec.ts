import { test } from '@playwright/test';
import { formatDate, nextMonthDate } from "../Support/helpers";
import { DetailObjects, PageObjects, SearchObjects } from '../Support/pageObjects/pageObjects';
import {visitPage, DropboxPicker, delay, personalInformation, compareDetails } from "../Support/Robots/robots";

const detail = new DetailObjects;
const object = new PageObjects;
const search = new SearchObjects;

test.describe("Car Rent Tests", () => {
    let country = "France";
    let city = "Paris";
    let pickup_date = formatDate(new Date());
    let dropoff_date = nextMonthDate(new Date());

    test("Happy Flow - Check if result we chose is same as rental unit",async ({page}) => {
// Go to page
        await visitPage(page);
// Fill the form
        await DropboxPicker(page, object.country, country);
        await DropboxPicker(page, object.city, city);
        await page.fill(object.pickup_date, pickup_date);
        delay(500);
        await page.fill(object.dropoff_date, dropoff_date);
        delay(500);
// Submit the form
        await page.locator(object.submit_btn).click();
        delay(500);

// Save info about (first) car that you are renting
        var company = await page.locator(search.company).textContent();
        var model = await page.locator(search.model).textContent();
        var price_per_day = await page.locator(search.price_per_day).textContent();
        var license_plate = await page.locator(search.license_plate).textContent();
// Click on the (first) car
        page.locator(search.rent_btn).click();
        delay(500);
// Check if the details about the car are valid
        compareDetails(page, detail.model, model);
        compareDetails(page, detail.company, company);
        compareDetails(page, detail.price, price_per_day);
        compareDetails(page, detail.plate, license_plate);
        compareDetails(page, detail.location, country && city);
        compareDetails(page, detail.pickup_date, pickup_date);
        compareDetails(page, detail.dropoff_date, dropoff_date);
// Submit the details
        await page.locator(detail.rent_btn).click();
        delay(500);
// Provide personal information in the rent form 
        await personalInformation(page);
    })
})