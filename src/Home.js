import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_2x._CB418256337_.jpg"
        />
        <div className="home__row">
          <Product
            id="87631270"
            title="Amazon.ca eGift Card"
            price={50.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/15/gc/designs/livepreview/thxgivsweets_email_v2016_ca-main._CB405002534_.png"
          />

          <Product
            id="66420803"
            title="Milky Pink Czech Glass Wire-wrapped Drop Bronze Lever-back Earrings 1.4 Inches"
            price={26.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61dBQgK8eeL._SY500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="87929962"
            title="MERNETTE Pack of 2, Chenille Decorative Square Throw Pillows"
            price={22.99}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71hbb8qCa4L._AC_SX522_.jpg"
          />
          <Product
            id="04393647"
            title="STMT DIY Journaling Set by Horizon Group USA"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/916QHBtoAiL._AC_SX425_.jpg"
          />
          <Product
            id="79681415"
            title="The World Needs More Purple People Hardcover"
            price={26.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51QmX7S38-L._SX258_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="07603499"
            title="Toshiba 43-inch 4K Ultra HD HDR Smart LED TV - Fire TV Edition, Released 2020"
            price={354.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91kniQDPy9L._AC_SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
