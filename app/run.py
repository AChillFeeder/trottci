
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:MEDreda2001@127.0.0.1:3306/trottci'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Product(db.Model):
    """Product model."""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(120))
    price = db.Column(db.Integer)
    imageUrl = db.Column(db.String(256))
    link = db.Column(db.String(256))
    availability = db.Column(db.String(256))
    category = db.Column(db.String(256))

    def __init__(self, name, description, price, imageUrl, link, availability, category):
        self.name = name
        self.description = description
        self.price = price
        self.imageUrl = imageUrl
        self.link = link
        self.availability = availability
        self.category = category

    def save(self):
        """Save a product to the database."""
        db.session.add(self)
        db.session.commit()

    def delete(self):
        """Delete a product from the database."""
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_by_id(id):
        """Get a product by ID."""
        return Product.query.get(id)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': str(self.price),
            'imageUrl': str(self.imageUrl),
            'link': str(self.link),
            'availability': str(self.availability),
            'category': str(self.category)
        }


class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(120))
    price = db.Column(db.Integer)

    def __init__(self, name, description, price):
        self.name = name
        self.description = description
        self.price = price

    def save(self):
        """Save a product to the database."""
        db.session.add(self)
        db.session.commit()

    def delete(self):
        """Delete a product from the database."""
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def get_by_id(id):
        """Get a product by ID."""
        return Service.query.get(id)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': str(self.price),
        }


with app.app_context():
    # Create the database tables
    db.create_all()


# PRODUCTS
@app.route('/products', methods=["GET"])
def getProducts():
    products = Product.query.all()
    data = []
    for product in products:
        data.append(product.to_dict()) 
    return data

@app.route('/products/<productId>', methods=["GET"])
def getProductByProductId(productId):
    product = Product.query.filter_by(name=productId)
    return product[0].to_dict()

@app.route('/products', methods=["POST"])
def postProducts():
    data = request.json
    Product(data["name"], data["description"], data["price"], data['imageUrl'], data['link'], data['availability'], data['category']).save()
    return data

@app.route('/products/<int:product_id>', methods=["PUT"])
def editProducts(product_id):
    product = Product.query.get_or_404(product_id) # use get_or_404 when you are sure the requested row exists

    data = request.json

    # Update the product attributes
    if 'name' in data:
        product.name = data['name']
    if 'description' in data:
        product.description = data['description']
    if 'price' in data:
        product.price = data['price']
    if 'imageUrl' in data:
        product.imageUrl = data['imageUrl']
    if 'link' in data:
        product.link = data['link']
    if 'availability' in data:
        product.availability = data['availability']
    if 'category' in data:
        product.category = data['category']

    # Save the changes to the database
    db.session.commit()

    # Return the updated product as JSON
    return product.to_dict()

@app.route('/products/<int:product_id>', methods=['DELETE'])
def deleteProduct(product_id):
    # Check if product exists
    product = Product.query.get(product_id)
    if not product:
        return jsonify({'message': 'Product not found'}), 404

    # Delete product from database
    db.session.delete(product)
    db.session.commit()

    return jsonify({'message': 'Product deleted successfully'})



# SERVICES
@app.route('/services', methods=["GET"])
def getServices():
    services = Service.query.all()
    data = []
    for service in services:
        data.append(service.to_dict()) 
    return data

@app.route('/services/<serviceId>', methods=["GET"])
def getServiceByServiceId(serviceId):
    service = Service.query.filter_by(id=serviceId)
    return service[0].to_dict()

@app.route('/services', methods=["POST"])
def postServices():
    data = request.json
    Service(data["name"], data["description"], data["price"]).save()
    return data

@app.route('/services/<int:service_id>', methods=["PUT"])
def editServices(service_id):
    service = Service.query.get_or_404(service_id) # use get_or_404 when you are sure the requested row exists

    data = request.json

    # Update the product attributes
    if 'name' in data:
        service.name = data['name']
    if 'description' in data:
        service.description = data['description']
    if 'price' in data:
        service.price = data['price']
    
    # Save the changes to the database
    db.session.commit()

    # Return the updated product as JSON
    return service.to_dict()


@app.route('/services/<int:service_id>', methods=['DELETE'])
def deleteServices(service_id):
    # Check if Service exists
    service = Service.query.get(service_id)
    if not service:
        return jsonify({'message': 'Service not found'}), 404

    # Delete Service from database
    db.session.delete(service)
    db.session.commit()

    return jsonify({'message': 'Service deleted successfully'})


if __name__ == '__main__':
    app.run(debug=True)
