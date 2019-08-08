'use strict';

var mysql = require('mysql');


class Model {
    table_name = '';
    _db_connection = null;

    constructor(){
        
    }

    async insert(fields = [], values = []){
        /**
         * Build insert like SQL query to add data into the db
         * @param fields list of field where to persist data
         */
        var _str_fields = ''
        var fields = fields.forEach((value, index)=>{ _str_fields.concat(value, ',') });
        var sql_insert_template = `INSERT INTO ${this.table_name} (${fields}) VALUES ?;`;
        this._db_connection.query(sql_insert_template, [values], function(err, result){
            return result
        })
    }
}

class Department {
    department_id = Number
    name = String
    description = String

    constructor(id, name, description){
        this.department_id = id
        this.name = name
        this.description = description
    }
}

class Category {
    category_id = Number
    name = String
    description = String
    department_id = Number

    constructor(id, name, description, department_id){
        this.category_id = id
        this.name = name
        this.description = description
        this.department_id = department_id
    }
}

class CategoryBasic {
    category_id = Number;
    department_id = Number;
    name = String;

    constructor(category_id, department_id, name){
        this.category_id = category_id
        this.department_id = department_id
        this.name = name
    }
} 

class Product {
    product_id = Number
    name = String
    description = String
    price = String
    discounted_price = String
    thumbnail = String

    constructor(id, name, description, price, discounted_price, thumbnail){
        this.product_id = id
        this.name = name
        this.description = description
        this.price = price
        this.discounted_price = discounted_price
        this.thumbnail = thumbnail
    }
}

class ProductInDepartment {
    product_id = Number
    name = String
    description = String
    price = Number
    discounted_price = String
    thumbnail = String

    constructor(id, name, description, price, discounted_price, thumbnail){
        this.product_id = id
        this.name = name
        this.description = description
        this.price = price
        this.discounted_price = discounted_price
        this.thumbnail = thumbnail
    }
}

class ProductDetail {
    product_id = Number
    name = String
    description = String
    price = String
    discounted_price = String
    image = String
    image2 = String

    constructor(id, name, description, price, discounted_price, image, image2){
        this.product_id = id
        this.name = name
        this.price = price
        this.discounted_price = discounted_price
        this.image = image
        this.image2 = image2
    }
}

class ProductComplete {
    product_id = Number
    name = String
    description = String
    price = String
    discounted_price = String
    image = String
    image2 = String
    thumbnail = String
    display = Number

    constructor(id, name, description, price, discounted_price, image, image2, thumbnail, display){
        this.product_id = id
        this.name = name
        this.description = description
        this.price = price
        this.discounted_price = discounted_price
        this.image = image
        this.image2 = image2
        this.thumbnail = thumbnail
        this.display = display
    }
} 

class ProductLocation {
    category_id = Number
    category_name = String
    department_id = Number
    department_name = String

    constructor(cat_id, category_name, dept_id, dept_name){
        this.category_id =cat_id
        this.category_name = category_name
        this.department_id = dept_id
        this.department_name = dept_name
    }
} 

class Review {
    name = String
    review = String
    rating = Number
    created_on = String

    constructor(name, review, rating, create_on){
        this.name = name
        this.review = review
        this.rating = rating
        this.created_on = create_on
    }
} 

class Customer {
    custumer_id = Number
    name = String
    email = String
    address_1 = String
    address_2 = String
    city = String
    region = String
    postal_code = String
    country = String
    shipping_region_id = Number
    day_phone = String
    eve_phone = String
    mob_phone = String
    credit_card = String

    constructor(
        id, name, email,
        address_1, address_2, city,
        region, postal_code, country,
        shipping_region_id, day_phone, eve_phone,
        mob_phone, credit_card
    ){
        this.custumer_id = id
        this.name = name
        this.email = email
        this.address_1 = address_1
        this.address_2 = address_2
        this.city = city
        this.region = region
        this.postal_code = postal_code
        this.country = country
        this.shipping_region_id = shipping_region_id
        this.day_phone = day_phone
        this.eve_phone = eve_phone
        this.mob_phone = mob_phone
        this.credit_card = credit_card
    }
} 

class CustomerRegister {
    customer = Customer
    accessToken = String
    expires_in = String

    constructor(customer, accessToken, expires_in){
        this.customer = customer
        this.accessToken = accessToken
        this.expires_in = expires_in
    }
} 

class Cart {
    item_id = Number
    name = String
    attributes = String
    price = String
    quantity = String
    subtotal = String

    constructor(id, name, attributes, price, quantity, subtotal){
        this.item_id = id
        this.name = name
        this.attributes = attributes
        this.price = price
        this.quantity = quantity
        this.subtotal = subtotal
    }
}

class CartWithProduct {
    item_id = Number
    name = String
    attributes = String
    product_id = String
    price = String
    quantity = Number
    image = String
    subtotal = StorageManager

    constructor (id, name, attributes, product_id, price, quantity, image, subtotal){
        this.item_id = id
        this.name = name
        this.attributes = attributes
        this.product_id = product_id
        this.price = price
        this.quantity = quantity
        this.image = image
        this.subtotal = subtotal
    }
    
}


class Error {
    code = String
    message = String
    field = String
    status = String

    constructor(code, message, field, status){
        this.code = code
        this.message = message
        this.field = field
        this.status =status
    }
} 

class Unauthorized {
    code = String
    message = String
    field = String

    constructor(code, message, fiels){
        this.code = code
        this.message = message
        this.field = fiels
    }
}

class NotFound {
    message = String

    constructor(message){
        this.message = message
    }
}

const ERROR_CODES = {
    AUT_01: 'Authorization code is empty',
    AUT_02: 'Access Unauthorized',

    PAG_01: "The order is not matched 'field,(DESC|ASC)'",
    PAG_02: 'The field of order is not allow sorting.',

    USR_01: 'Email or Password is invalid.',
    USR_02: 'The field(s) are/is required.',
    USR_03: 'The email is invalid',
    USR_04: 'The email already exists',
    USR_05: "The email doesn't exist.",
    USR_06: 'this is an invalid phone number.',
    USR_07: 'this is too long <FIELD NAME>',
    USR_08: 'this is an invalid Credit Card.',
    USR_09: 'The Shipping Region ID is not number',

    CAT_01: "Don't exist category with this ID.",

    DEP_01: 'The ID is not a number.',
    DEP_02: "Don'exist department with this ID.",
}

export {
    Department,
    Category,
    CategoryBasic,
    Product,
    ProductInDepartment,
    ProductComplete,
    ProductDetail,
    ProductLocation,
    Review,
    Customer,
    CustomerRegister,
    Cart,
    CartWithProduct,
    Error,
    Unauthorized,
    NotFound
}