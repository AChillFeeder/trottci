import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import scooter1 from './scooter1.jpg';
import scooter2 from './scooter2.jpg';
import scooter3 from './scooter3.jpg';

function LandingPage() {
  return (
    <div>
      <header className='banner'>
        <h1>Trottci</h1>
        <h2>Votre spécialiste en trottinettes électriques de qualité supérieure</h2>
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

        <section id="carousel">
          <h2>Trottci à disposition!</h2>
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src={scooter1} alt="Trottinette modèle 1" />
              <p className="legend">Une large selection de trottinettes</p>
            </div>
            <div>
              <img src={scooter2} alt="Trottinette modèle 2" />
              <p className="legend">Vente et installation d'accessoires de trottinettes</p>
            </div>
            <div>
              <img src={scooter3} alt="Trottinette modèle 3" />
              <p className="legend">Retrouvez les meilleurs offres chez nous!</p>
            </div>
          </Carousel>
        </section>
        
        <section id="products">
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
            <h3>Entretien</h3>
            <p>Service d'entretien régulier pour assurer la longévité de votre trottinette</p>  
          </div>

          <div className="service">
            <h3>Location</h3>
            <p>Possibilité de louer nos trottinettes pour une courte ou longue durée</p>
          </div>
        </section>

        <section id="testimonials">
          <h2>Témoignages</h2>
          <blockquote>
            "Service impeccable et trottinettes de grande qualité !" - Marie
          </blockquote>
          <blockquote>
            "J'ai trouvé la trottinette parfaite pour mes trajets quotidiens." - Pierre
          </blockquote>
        </section>

        <section id="contact">
          <h2>Contactez-nous</h2>
          <p>Adresse : 123 Rue de la Mobilité, Paris</p>
          <p>Téléphone : 01 23 45 67 89</p>
          <p>Email : contact@trottci.fr</p>
        </section>
        
      </main>
      
      <footer>
        <p>&copy; Trottci 2023 - Tous droits réservés</p>  
      </footer>
    </div>
  );
}

export default LandingPage;
