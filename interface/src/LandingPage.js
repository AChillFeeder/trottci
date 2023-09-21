import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <div>
      <header className='banner'>
        <h1>Trottci</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex quam atque reprehenderit aliquam corporis</h2>
      </header>
      
      <main>
        <section id="intro">
          <p>
            Bienvenue chez Trottci ! Nous sommes spécialisés dans les trottinettes électriques - nous les vendons, réparons et entretenons. 
          </p>
          
          <p>
            Nos trottinettes sont de qualité supérieure et nous garantissons un service après-vente irréprochable. Venez découvrir notre gamme de produits !
          </p>
        </section>
        
        <section id="products">
          {/* <img src="https://thumbs.gfycat.com/SmugSpecificCarpenterant-max-1mb.gif" alt="" /> */}
          <img id="spinning" src="wheel.png" alt="" />
          <h2>Nos Produits</h2>
          <Link to="/shop" className="button" id='shop-button'>Visiter le Shop</Link>
        </section>
        
        <section id="services">
          <h2>Nos services</h2>
          
          <div className="service">
            <h3>Vente</h3>
            <p>Large choix de trottinettes en boutique et en ligne</p>
          </div>
          
          <div className="service">
            <h3>Réparation</h3>
            <p>Atelier de réparation agréé toutes marques</p>
          </div>
          
          <div className="service">
            <p>-- autres services --</p>  
          </div>
        </section>
        
      </main>
      
      <footer>
        <p>&copy; Trottci 2023</p>  
      </footer>
    </div>
  );
}

export default LandingPage;