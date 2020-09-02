import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/launch/AONT/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500x600_PV_en-GB._CB406746259_.jpg"
              alt=""
            />  

            {/* Product = id, title, price,rating, image */}
            <div className="home__row">
             <Product 
                id="12345621"
                title="Tony Hawks - Pro Skater 1 + 2 Remaster (PS4)"
                price={49.53}
                rating={5}
                image="https://iczc.cz/6jjuo6q47qi41booh1e89lf9u8-1_7/obrazek"
                />
             <Product 
                id="23345621"
                title="Death Stranding (PS4)"
                price={25.89}
                rating={4}
                image="https://www.xzone.cz/coverps3/3415_original.jpg"
             />
            </div>

            <div className="home__row">
                  <Product 
                id="98345621"
                title="Fall Guys: Ultimate Knockout"
                price={15.99}
                rating={5}
                image="https://upload.wikimedia.org/wikipedia/en/5/5e/Fall_Guys_cover.jpg"
                />
                  <Product 
                id="48345621"
                title="Minecraft"
                price={9.99}
                rating={3}
                image="https://media.playstation.com/is/image/SCEA/minecraft-starter-collection-squareboxart-01-ps4-11dec19-en-us?$native_nt$"
                />
                  <Product 
                id="85345621"
                title="The Elder Scrolls V: skyrim Special Edition"
                price={35.99}
                rating={4}
                image="https://cdn.aktivcommunication.cz/images/products/box/144.jpg"
                />
            </div>
            <div className="home__row">
                  <Product 
                id="73345621"
                title="Dark Souls III Deluxe Edition"
                price={19.99}
                rating={4}
                image="https://tbgames.cz/wp-content/uploads/2019/09/ds3-deluxe-300x424.jpg"
                />
            </div>
        </div>
    );
}

export default Home
