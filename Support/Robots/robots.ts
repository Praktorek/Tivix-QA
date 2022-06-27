import { expect } from "@playwright/test";
import { SummaryPageObjects } from "../pageObjects/pageObjects";
import { myConfig } from "../../testConfig";

const data = new myConfig;
const summary = new SummaryPageObjects;

export function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time);
    });
}

export async function visitPage(page: any)
{
    await page.goto("http://qalab.pl.tivixlabs.com");
    delay(1000);
} 

export async function DropboxPicker (page:any, selector:string, value:string)
{
    var tes1 = await page.locator(selector);
    tes1.click();
    delay(300);
    tes1.type(value);
    delay(300);
    tes1.press('Enter');
    delay(300);
}

export async function compareDetails(page:any, selector: string, value: any) {
    var check = await page.locator(selector).textContent();
    expect(check).toContain(value);
}

export async function personalInformation(page: any) 
{
    await page.fill(summary.name, data.name);
    await page.fill(summary.last_name, data.last_name);
    await page.fill(summary.card_number, data.card_number);
    await page.fill(summary.email, data.email);
    await page.locator(summary.rent_btn).click();
}