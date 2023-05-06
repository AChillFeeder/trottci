import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), "..", ".."))

from app.run import Product
from app.run import db
from app.run import app

import requests

from faker import Faker
fake = Faker()

baseUrl = "http://localhost:5000/"

def test_create_product():
    # create a new product
    product = Product(
        name=fake.name(),
        description=fake.text(max_nb_chars=100),
        price=fake.random_int(min=1, max=1000),
        imageUrl=fake.image_url(),
        link=fake.url(),
        availability=fake.word(),
        category=fake.word()
    )

    # add the product to the database
    with app.app_context():
        db.session.add(product)
        db.session.commit()

        # check if the product was added successfully
        assert Product.query.filter_by(name='test product').first() is not None


def test_get_products():

    name=fake.name(),
    description=fake.text(max_nb_chars=100),
    price=fake.random_int(min=1, max=1000),
    imageUrl=fake.image_url(),
    link=fake.url(),
    availability=fake.word(),
    category=fake.word()
    
    # Create a new product to get
    product = Product(name=name, description=description, price=price, imageUrl=imageUrl, link=link, availability=availability, category=category)
    with app.app_context():
        product.save()


    # TESTING FOR ALL PRODUCTS REQUEST

    response = requests.get(baseUrl + 'products')
    assert response.status_code == 200

    # Check that we get at least one product from the database
    data = response.json()
    assert len(data) >= 1
    

    # TESTING FOR SINGLE PRODUCT REQUEST

    response = requests.get(f'{baseUrl}products/{str(name[0])}')
    assert response.status_code == 200

    # Check that the response data contains the expected product information
    data = response.json()
    print(data, type(data))

    assert data['description'] == description[0]
    assert data['price'] == str(price[0])
    assert data['imageUrl'] == imageUrl[0]
    assert data['link'] == link[0]
    assert data['availability'] == availability[0]
    assert data['category'] == category

# test edit product

# test save product through api
