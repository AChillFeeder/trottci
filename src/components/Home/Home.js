import React from 'react';
import Header from './Header';
import Catalogue from './Catalogue';
import Information from './Information';
import Contact from './Contact';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Catalogue />
            <Information />
            <Contact />
        </div>
    );
}

export default Home;



// trading and chatgpt

/*
- Home
    - description
    - catalogue
        - product
- Admin
    - login
    - dashboard
*/
