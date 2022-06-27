export class PageObjects{
/*front Page Objects*/
    country=    "#country"
    city=       "#city"
    model=      "#model"
    pickup_date="#pickup"
    dropoff_date="#dropoff"
    submit_btn= "button.btn.btn-primary"
}

export class SearchObjects{
/*search results page objects*/

    /*[1] [1] is for first item on the list [1] [2] is for next one */
    company=        "//table[@id='search-results']/tbody[1]/tr[1]/td[1]"
    model=          "//table[@id='search-results']/tbody[1]/tr[1]/td[2]"
    license_plate=  "//table[@id='search-results']/tbody[1]/tr[1]/td[3]"
    price=          "//table[@id='search-results']/tbody[1]/tr[1]/td[4]"
    price_per_day=  "//table[@id='search-results']/tbody[1]/tr[1]/td[5]"
    rent_btn=       "//table[@id='search-results']/tbody[1]/tr[1]/td[6]/a[1]"
}

export class DetailObjects{
/*Car details page objects */
    model =         "div.card-header"
    company =       "h5.card-title"
    price =         "(//p[@class='card-text'])[1]"
    plate =         "(//p[@class='card-text'])[3]"
    location =      "(//p[@class='card-text'])[2]"
    pickup_date =   "//div[@class='card-body']//h6[1]"
    dropoff_date =  "(//div[@class='card-body']//h6)[2]"
    rent_btn =      "a.btn.btn-primary"
}

export class SummaryPageObjects{
/* renting summary page objects */
    name =          "#name"
    last_name =     "#last_name"
    card_number =   "#card_number"
    email =         "#email"
    rent_btn =      "button.btn.btn-primary"


}