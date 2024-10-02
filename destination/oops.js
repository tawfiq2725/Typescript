"use strict";
// 1. Vehicle Management System
// Design a class Vehicle with properties like make, model, and year.
// Create subclasses Car and Motorbike that extend Vehicle and add their own properties.
// Implement polymorphism for the startEngine method (e.g., cars and motorbikes start differently).
// Add a method to track the mileage and calculate fuel efficiency.
class Vehicle {
    constructor(compny, model, year) {
        this.make = compny;
        this.model = model;
        this.year = year;
        this.milage = 0;
        this.fuel = 0;
    }
    startEngine() {
        console.log('Vehicle started');
    }
    addTrip(miles, fuel) {
        this.milage += miles;
        this.fuel += fuel;
    }
    calculateMiledperFuel() {
        if (this.milage <= 0)
            return 0;
        return this.milage / this.fuel;
    }
}
class Car extends Vehicle {
    constructor(company, model, year, gear) {
        super(company, model, year);
        this.gear = gear;
    }
    // Start car
    startEngine() {
        console.log('The car was started');
    }
}
class Motorbike extends Vehicle {
    constructor(company, model, year, gear) {
        super(company, model, year);
        this.gear = gear;
    }
    startEngine() {
        console.log('The motorbike start');
    }
}
const car = new Car('Honda', 'model21', 2020, 'Automatic');
const bike = new Motorbike('Hero', 'model21', 2011, 'Manual');
car.startEngine();
// 2. Shopping Cart System
// Implement a class Product with properties like name, price, and quantity.
// Create a class ShoppingCart that manages a list of Product items.
// Implement methods for adding, removing, and displaying items in the cart.
// Ensure polymorphism by creating different types of discounts (e.g., PercentageDiscount and FlatDiscount) using inheritance.
class Product {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}
class ShopingKart {
    constructor() {
        this.items = [];
        // removeproduct
        // displayproduct
    }
    // addproduct
    addProduct(product_name) {
        const existingProduct = this.items.find((item) => item.name === product_name.name);
        if (existingProduct) {
            existingProduct.quantity += product_name.quantity;
        }
        else {
            this.items.push(product_name);
        }
    }
}
