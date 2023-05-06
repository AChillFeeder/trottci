import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), "..", ".."))
from app.run import db

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

    # @staticmethod
    # def get_by_name(username):
    #     """Get a Product by name."""
    #     return Product.query.filter_by(username=username).first()
