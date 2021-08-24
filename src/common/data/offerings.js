/**
 * {
 *      asin: "1123",
 * offerings = [
 *      offeringID,
 *      promo
 * }]
 * 
https://www.amazon.com/gp/item-dispatch?submit.addToCart&offeringID.1=QM03rVtz1Bfkt9Lk9wXsZg1He7MYjREYkoCGlEJHooOO1m78qiJmB%2F6zZfO6jhTonzBqgH5WRgz7D6SiQBpGmx7P%2FNY4Qaavq%2BZw4xFZoLanANOOBCrCZVwrOHgx931%2Fbapp2x6Ivj2a75CaON3GtA%3D%3D
 */
let offerings = [
    {
        url: 'https://www.amazon.com/gp/product/B08SHTW92W?th=1&psc=1',
        asin: 'B08SHTW92W',
        offeringID:
            'xpHobHmOS8BUvI8r9i%2FEn%2BAWgJQjy34EwIYn4IUKaO3tYOcCsuswYcGz9vEykBuPAumlAzYjppZu4LV86BSIsMKMMBoXyllV16hZYzI1KoQoOrNksyNFNO5%2FzTtaxsUPx1eOFsVDUOIb9q87QdlLfwumRCNuIXQhLX%2BTr%2BMy7TiDkpBN5sJ8lg%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07K98XDX8?th=1&psc=1',
        asin: 'B07K98XDX8',
        offeringID:
            '18I3pDS9%2BuaZ%2B6wm%2B3aMzbLvmQEPwl6syPiaJzSwLe5JO1cUaJ9dMOMhavsrBv0Sn%2BqrAxH1MFWsVjPPemaqsFzwH1pO0ljqQRiF%2FMBU9aVg1HoSnKAzUCjLW%2Foyx%2FrjtSEn07qAxLxwV1k7PkmGnHrrhJtEsEdPPvXJvqoS3Fjqj6%2ByHt30EQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07K98LLVV?th=1&psc=1',
        asin: 'B07K98LLVV',
        offeringID:
            'G3Ixan5ZHR064adFQxs78DgaAvfghYMa9h4%2BdssFFEgBJl%2Bev9Lt%2FTCfWO63gnd%2BEC9%2BU06KlbaArOjLgDMSO2Ixo3VSxqMjwvbYSNeS440EvNPxemFHKBwM3pMK2KL9PzNgjJd1CWUSreQC442m4wCqlAzuCoVCzR1khfwuhdurQe5QVJdTwA%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07K995RWG?th=1&psc=1',
        asin: 'B07K995RWG',
        offeringID:
            'whjVhaRI0Tt1aK3sNA8Iss1OmzTgBbq0YWd%2F70UuoKmxuF%2BZRjPgA9aFRWIZ9vsZE42S%2FNOHDUP9c7x36yMxDUDhT25btM5m40lCketQOYH11YEGjwA3lRilYAJhdWvtgs2OMRBzYvhoKz5Adupijdy9Bbso2E9kLvdW595k5lJzIk6xWTugfQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BFRVMMN?th=1&psc=1',
        asin: 'B07BFRVMMN',
        offeringID:
            'SEk3fNtdoBHdM99r3P8dpZ0KNztGIyPCeFXRl2XLGDJEoAUYMGqgPxq23hZRIbTSA15AECrmHaO6wRYNX%2B6vejPyBMSlt3xFOgx7GJrsep2HBWVemG%2FvPzl%2BksTjkJ5ondqnUt1q494zsbeYaxE%2Bdkqc1EGbPcO55ati%2Fmi%2FCvPVzSZAfjK60A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BFS3G7P?th=1&psc=1',
        asin: 'B07BFS3G7P',
        offeringID:
            '6vXJhwFXx8z7IcQr0s5yUD4PgZEdM1Wxuyk1u9dhFhGCqOnEvfCXbXOOsjNRZ1h1y1yaQNRYG%2B%2By4IwSp117Ue35iaRjjkxf2GP0FSdUHwAkezHmWrj%2FXnOcWNas5u%2FRnZhp%2B9Y1BwjU4Y8hByiKqUoT5j9hIeWh3%2BFdrAyNysYMt%2FNUjrb%2B6A%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BFRYH2K?th=1&psc=1',
        asin: 'B07BFRYH2K',
        offeringID:
            '2neDi47EqQeXppCuXuMjdDLYvpvv9jMLprpiNHdpZpSVfPjrgHRK79bfCBHrcMYuytEGppmIxXTBr9%2B5RuHuQwwva2VZpVudEkEJ2gUUy%2FMtH6X%2BF3mknMM8G6ZrGxXqgZp%2BQDHoGu0Ign56RRe3oTWXvLPSR1wd5IDgSzjbmBxNkRWKPue4vQ%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BFRR94X?th=1&psc=1',
        asin: 'B07BFRR94X',
        offeringID:
            'D20AOzscbw7E3LfuoFUfYeEKxFgoOgNNx3dsZW75b%2FTOBSLSoagw04tOdFMC63P13oJvNX9lSGRCY9VxNKv3Xdvry%2B55WNcfRf3XBEhYq0dXMTuV1qhlcP%2Bw6rXIp03LHaWO0pT1liXFgqOHkllZCFSnHCBRl0Sz4%2BZqYHWzMuZC%2F70Ug%2Bi%2B9w%3D%3D'
    },
    {
        url: 'https://www.amazon.com/gp/product/B07BFT3S12?th=1&psc=1',
        asin: 'B07BFT3S12',
        offeringID:
            '3Y574Vzk4REtxuDIssqJZ7hbKSezGxThmMwnogVqWRxnU4JJ0wQXRocaOH6HEHxqCqKTyQgcrzPexubuDDBYhsR%2BFemWpOItjotbpTs%2Bpr9dnLOpqxtyvd2E5VKTNg9%2FsatbjWnBhXy5xQxnTTiKwEc%2FB5Wwu7GuFEySVq5gsOisYQe7FhsKfw%3D%3D'
    }
];

export const findOfferingIDFromAsin = (offerings, asin) => {
    return offerings.find((offering) => offering.asin === asin);
};

export const setOfferings = (_) => (offerings = _);

export default offerings;
