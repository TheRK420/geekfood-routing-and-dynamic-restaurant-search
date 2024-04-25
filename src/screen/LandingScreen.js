import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./LandingScreen.css";
import "../component/Button";
import { Button } from "../component/Button";

const LandingScreen = () => {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="innertext">
          <p className="header3">Let us Find your</p>
          <strong className="food">Forever food</strong>
          <p className="content2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="content3">
            Nesciunt illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="button1">
            <Button
              borderKaRadius="4px"
              backgroundKaColor="rgb(190 18 60)"
              fontColor="#FFFFFF"
            >
              Search Now
            </Button>
            <Button
              borderKaRadius="4px"
              backgroundKaColor="#FFFFFF"
              fontColor="rgb(190 18 60)"
            >
              Know More
            </Button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="image54"></div>
        <div className="content4">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>
          <Button
            borderKaRadius="4px"
            backgroundKaColor="#4F46E5"
            fontColor="#FFFFFF"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      <div class="grid">
        <div className="card123">
          <div className="card-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.</p>
          </div>
          <div className="card-signature">Gladis Lennon</div>
        </div>
        <div className="card123">
          <div className="card-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.</p>
          </div>
          <div className="card-signature">Gladis Lennon</div>
        </div>
        <div className="card123">
          <div className="card-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.</p>
          </div>
          <div className="card-signature">Gladis Lennon</div>
        </div>
        <div className="card123">
          <div className="card-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.</p>
          </div>
          <div className="card-signature">Gladis Lennon</div>
        </div>
        <div className="card123">
          <div className="card-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!</p>
          </div>
          <div className="card-signature">Gladis Lennon</div>
        </div>
        <div className="card123">
          <div className="card-content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.</p>
          </div>
          <div className="card-signature">Gladis Lennon</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LandingScreen;
