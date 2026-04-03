const BASE_URL = 
// "https://cdn.jsdelivrinet/gh/fawazahmed0/currency—api@l/latest/currencies/usd/inr.json";

// "https://aaapis.com/api/v1/info/countries/currencies";

"https://aaapis.com/api/v1/info/currencies/exchange-rates";

const dropDowns = document.querySelectorAll(".dropDown select");

for ( let select of dropDowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.value = currCode;
        newOption.innerText = currCode;
        select.append(newOption);
}
}