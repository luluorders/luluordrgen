var faker = require('./faker.js/locale/en_GB.js');
const schedule = require('node-schedule');
const fetch = require('node-fetch');

function run() {
    const max = 6
    const min = 3
    const func = () => genUser();
    const times = Math.floor(Math.random() * (max - min)) + min;
    console.log(`Times: ${times}`)

    Array.from({ length: times }, () => func());
}

function genUser() {

    const wait = Math.floor(Math.random() * 86400)

    setTimeout(function () {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const ranNum = Math.floor(Math.random() * 500);
        const provider = ['gmail.com', 'yahoo.com', 'outlook.com', 'googlemail.com'];
        const randProvider = provider[Math.floor(Math.random() * provider.length)];
        const email = `${firstName}${lastName}${ranNum}@${randProvider}`;
        const addressOne = faker.address.streetAddress();
        const city = faker.address.city();
        const province = faker.address.county();
        const zip = faker.address.zipCode();
        const country = 'United Kingdom';
        const ranProductID = [6186414997679, 6186414342319];
        const productID = ranProductID[Math.floor(Math.random() * ranProductID.length)];
        if (productID === 6186414997679) {
            const productVar = 37936428286127
            const color = 'Pink'
            const qtyNum = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
            const quantity = qtyNum[Math.floor(Math.random() * qtyNum.length)];
            const price = 75;
            const title = 'LuluSkinCo Laser Hair Removal Handset Pink';

            console.log(firstName);
            console.log(lastName);
            console.log(email);
            console.log(addressOne);
            console.log(city);
            console.log(province);
            console.log(zip);
            console.log(country);
            console.log(productID);
            console.log(`${productVar} (${color})`);
            console.log(`Quantity: ${quantity}`);
            console.log(price)
            console.log(title)
            console.log("----------------------------")
            fetch(`https://hook.integromat.com/vptrw275nlqu7vge3icf853grwsbwoxs?First Name=${firstName}&Last Name=${lastName}&Email=${email}&Street=${addressOne}&City=${city}&Province=${province}&Zip=${zip}&Country=${country}&Product ID=${productID}&Product Variant=${productVar}&Quantity=${quantity}&Price=${price}&Title=${title}`)
                .then(res => res.json())
                .then(json => console.log(body));
        } else {
            const productVar = 37936427237551
            const color = 'White'
            const qtyNum = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
            const quantity = qtyNum[Math.floor(Math.random() * qtyNum.length)];
            const price = 75;
            const title = 'LuluSkinCo Laser Hair Removal Handset White';

            console.log(firstName);
            console.log(lastName);
            console.log(email);
            console.log(addressOne);
            console.log(city);
            console.log(province);
            console.log(zip);
            console.log(country);
            console.log(productID);
            console.log(`${productVar} (${color})`);
            console.log(`Quantity: ${quantity}`);
            console.log(price);
            console.log(title)
            console.log("----------------------------")
            fetch(`https://hook.integromat.com/vptrw275nlqu7vge3icf853grwsbwoxs?First Name=${firstName}&Last Name=${lastName}&Email=${email}&Street=${addressOne}&City=${city}&Province=${province}&Zip=${zip}&Country=${country}&Product ID=${productID}&Product Variant=${productVar}&Quantity=${quantity}&Price=${price}&Title=${title}`)
                .then(res => res.json())
                .then(json => console.log(body));
        }
    }, wait * 1000);
}

const job = schedule.scheduleJob('0 0 * * *', function () {
    run()
});