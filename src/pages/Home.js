import React from "react";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import "./Home.css";
import image1 from "../assets/bg.avif";

function Home() {
  return (
    <div>
      <Navbar />

      <article className="article">
        <img className="image" src={image1} alt="bg"></img>
        <h1>This is E-shop for pcs welcome</h1>
        <h3>Make yoursef cumpftrble</h3>
        <h1 class="display-2">Cheep Prices</h1>
        <button type="button" class="btn btn-primary">
          <h4>Join now</h4>
        </button>
      </article>
      <Featured />
      {/* <main className="main">
        <div>
          <h2>Featured products</h2>
        </div>
      </main> */}
    </div>
  );
}

export default Home;
