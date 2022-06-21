import React from "react";

//S1.5-- Import home.css
import "./Home.css";

//import product.js
import Product from "./Product";
  
function Home() {
  return (
    <div className="home">

      {/*S1.6-- Add Home Container*/}
      <div className="home__container">

        {/*the Home component contains The Image of AMAZON PRIME, so add the Image*/}
        <img
        className="home__image" 
        src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        alt=""
       />

      {/*S1.7-- Add Div Section For the Home Items/Components i.e Products AND Create PRODUCT.JS*/}
      <div className="home__row">
        {/*Firts DIV With two Products*/}
        {/*S1.8-- Render The Products From PRODUCT.JS HERE*/}
        <Product 
        id="123456" 
        title="LINEN BLEND DRESS" 
        price={5999} 
        image="https://static.zara.net/photos///2022/V/0/1/p/3654/325/622/2/w/750/3654325622_6_1_1.jpg?ts=1652093762260" 
        rating={5}/> {/*S1.10-- Pass the PROPS/Parameters(title, price, image, rating) ORIGINAL VALUE HERE*/}
        
        {/*S1.11-- Add the rest of the products here*/}
        <Product id="132456"
        title="SLOGAN PRINT HOODIE" price={3999} 
        image="https://static.zara.net/photos///2022/V/0/2/p/9240/414/942/2/w/750/9240414942_6_1_1.jpg?ts=1647438055915" 
        rating={4}/>  
      </div>

      <div className="home__row">
 
         {/*Second DIV With three Products*/}
         <Product id="213456"
         title="JACQUARD DRESS" 
         price={4999} 
         image="https://static.zara.net/photos///2022/V/0/1/p/5039/600/500/2/w/750/5039600500_6_1_1.jpg?ts=1646208490586" 
         rating={5}
         />

         <Product id="321456"
         title="DAISY NECKLACE" 
         price={2999} 
         image="https://static.zara.net/photos///2022/V/0/1/p/4548/043/433/2/w/750/4548043433_6_1_1.jpg?ts=1651145637727" 
         rating={3}
         />
         
         <Product id="451456"
         title="JACQUARD JUMPSUIT WITH CUT-OUT DETAIL" 
         price={3890} 
         image="https://static.zara.net/photos///2022/V/0/1/p/5039/045/600/2/w/750/5039045600_6_1_1.jpg?ts=1647530883010" 
         rating={5}
         />
      </div>

      <div className="home__row">
 
         {/*Third DIV With two Products*/}
         <Product id="553456"
         title="HIGH-HEEL SLINGBACK SHOES WITH BOW" 
         price={6990} 
         image="https://static.zara.net/photos///2022/I/1/1/p/2204/010/080/2/w/750/2204010080_6_2_1.jpg?ts=1654672110773" 
         rating={5}
         />

         <Product id="613456"
         title="MONOCHROME RUNNING SNEAKERS" 
         price={5855} 
         image="https://static.zara.net/photos///2022/V/1/2/p/2302/020/004/2/w/750/2302020004_6_3_1.jpg?ts=1648736932356" 
         rating={5}
         />

      </div>
     </div>
    </div>
  )
}

export default Home;