import React from 'react';
import Product from './Product';

const Catalogue = () => {
    return (
        <div id="catalogue">
            <h2>Grand titre</h2>
            {/* LOOP */}
            <Product />
        </div>
    );
}

export default Catalogue;