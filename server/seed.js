const { faker } = require('@faker-js/faker');
const  MongoClient  = require('mongodb').MongoClient;
const _= require('lodash'); 

async function main() {
    const uri = "mongodb://localhost://27017";
    const client = new MongoClient(urik);

    try {
        await client.connect();

        const productsCollection = client
            .db("food-ordering-app")
            .collection("products");
        const catagoriesCollection = client
            .db("food-ordering-app")
            .collection("catagories");

        productsCollection.drop();
        let catagories = ["breakfast", "lunch", "dinner", "drinks"].map(
            (catagory) => {
                return { name: catagory };
            }
        );

        await catagoriesCollection.insertMany(catagories);

        let imageUrls = [
            "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png",
            "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png",
            "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png",
        ];
        let products = [];
        for (let i = 0; i < 10; i += 1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                desciption: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: _.sample(categories),
                imageUrl: _.sample(imageUrls),
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();