import React, { useState, useEffect } from 'react';

function AdminInterface() {

    const baseUrl = "http://localhost:5000"
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: 0,
        imageUrl: '',
        link: '',
        availability: '',
        category: ''
    });
    const [newService, setNewService] = useState({
        name: '',
        description: '',
        price: 0
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const [editingService, setEditingService] = useState(null);

    useEffect(() => {
        fetchProducts();
        fetchServices();
    }, []);

    const fetchProducts = () => {
        fetch(`${baseUrl}/products`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error));
    };

    const fetchServices = () => {
        fetch(`${baseUrl}/services`)
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.log(error));
    };

    const addProduct = () => {
        fetch(`${baseUrl}/products`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(response => {
            if (response.ok) {
                fetchProducts();
                setNewProduct({
                    name: '',
                    description: '',
                    price: 0,
                    imageUrl: '',
                    link: '',
                    availability: '',
                    category: ''
                });
            } else {
                console.log('Failed to add product');
            }
            })
            .catch(error => console.log(error));
    };

    const deleteProduct = (productId) => {
        fetch(`${baseUrl}/products/${productId}`, { method: 'DELETE' })
            .then(response => {
            if (response.ok) {
                fetchProducts();
            } else {
                console.log('Failed to delete product');
            }
            })
            .catch(error => console.log(error));
    };

    const editProduct = (product) => {
        setEditingProduct(product);
    };

    const updateProduct = () => {
        fetch(`${baseUrl}/products/${editingProduct.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(editingProduct)
        })
            .then(response => {
            if (response.ok) {
                fetchProducts();
                setEditingProduct(null);
            } else {
                console.log('Failed to update product');
            }
            })
            .catch(error => console.log(error));
    };

    const addService = () => {
        fetch(`${baseUrl}/services`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(response => {
            if (response.ok) {
                fetchServices();
                setNewService({
                    name: '',
                    description: '',
                    price: 0
                });
            } else {
                console.log('Failed to add service');
            }
            })
            .catch(error => console.log(error));
    };

    const deleteService = (serviceId) => {
        fetch(`${baseUrl}/services/${serviceId}`, { method: 'DELETE' })
            .then(response => {
            if (response.ok) {
                fetchServices();
            } else {
                console.log('Failed to delete service');
            }
            })
            .catch(error => console.log(error));
    };

    const editService = (service) => {
        setEditingService(service);
    };

    const updateService = () => {
        fetch(`${baseUrl}/services/${editingService.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editingService)
        })
            .then(response => {
            if (response.ok) {
                fetchServices();
                setEditingService(null);
            } else {
                console.log('Failed to update service');
            }
            })
            .catch(error => console.log(error));
    };

    // Don't understand this one yet
    const handleProductInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleServiceInputChange = (e) => {
    const { name, value } = e.target;
    setNewService(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    const handleProductEditChange = (e) => {
    const { name, value } = e.target;
    setEditingProduct(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    const handleServiceEditChange = (e) => {
    const { name, value } = e.target;
    setEditingService(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    return (
    <div>
        <h2>Products:</h2>
        <ul>
        {products.map(product => (
            <li key={product.id}>
            {editingProduct && editingProduct.id === product.id ? (
                <div>
                    <input
                    type="text" 
                    name="name"
                    value={editingProduct.name}
                    onChange={handleProductEditChange} 
                    />
                
                    <input
                    type="text"
                    name="description"
                    value={editingProduct.description}
                    onChange={handleProductEditChange}
                    />
                    
                    <input
                    type="number"
                    name="price" 
                    value={editingProduct.price}
                    onChange={handleProductEditChange}
                    />
                
                    <input 
                    type="text"
                    name="imageUrl"
                    value={editingProduct.imageUrl}
                    onChange={handleProductEditChange} 
                    />
                    
                    <input
                    type="text"
                    name="link"
                    value={editingProduct.link} 
                    onChange={handleProductEditChange}
                    />
                
                    <input
                    type="text"
                    name="availability"
                    value={editingProduct.availability}
                    onChange={handleProductEditChange}
                    />
                
                    <input
                    type="text"
                    name="category"
                    value={editingProduct.category}
                    onChange={handleProductEditChange} 
                    />
                
                    <button onClick={() => updateProduct()}>Save</button>
                </div>
            ) : (
                <div>
                {product.name} ({product.id})
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
                <button onClick={() => editProduct(product)}>Edit</button>
                </div>
            )}
            </li>
        ))}
        </ul>

        <h2>Add Product:</h2>
        <form onSubmit={addProduct}>
        <div>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleProductInputChange}
            />
            </label>
        </div>
        <div>
            <label>
            Description:
            <input
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleProductInputChange}
            />
            </label>
        </div>
        <div>
            <label>
            Price:
            <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleProductInputChange}
            />
            </label>
        </div>
        <button type="submit">Add Product</button>
        </form>

        <h2>Services:</h2>
        <ul>
        {services.map(service => (
            <li key={service.id}>
            {editingService && editingService.id === service.id ? (
                <div>
                <input
                    type="text"
                    name="name"
                    value={editingService.name}
                    onChange={handleServiceEditChange}
                />
                <input
                    type="text"
                    name="description"
                    value={editingService.description}
                    onChange={handleServiceEditChange}
                />
                <input
                    type="number"
                    name="price"
                    value={editingService.price}
                    onChange={handleServiceEditChange}
                />
                <button onClick={() => updateService()}>Save</button>
                </div>
            ) : (
                <div>
                {service.name} ({service.id})
                <button onClick={() => deleteService(service.id)}>Delete</button>
                <button onClick={() => editService(service)}>Edit</button>
                </div>
            )}
            </li>
        ))}
        </ul>

        <h2>Add Service:</h2>
        <form onSubmit={addService}>
        <div>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={newService.name}
                onChange={handleServiceInputChange}
            />
            </label>
        </div>
        <div>
            <label>
            Description:
            <input
                type="text"
                name="description"
                value={newService.description}
                onChange={handleServiceInputChange}
            />
            </label>
        </div>
        <div>
            <label>
            Price:
            <input
                type="number"
                name="price"
                value={newService.price}
                onChange={handleServiceInputChange}
            />
            </label>
        </div>
        <button type="submit">Add Service</button>
        </form>
    </div>
    );
}

export default AdminInterface;