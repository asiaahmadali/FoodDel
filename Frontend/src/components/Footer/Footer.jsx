import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div>
      {/* left content */}
      <div>
        <img src={assets.logo} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          nisi?
        </p>
        {/* social icons */}
        <div>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>

      {/* centr content */}
      <div>
        <h1>Company</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      {/* right content */}
      <div>
        <h1>Get in touch</h1>
        <ul>
          <li>+92-3365-89589</li>
          <li>asiaahmadali17@gmail.com</li>
        </ul>
      </div>

      <hr />
      <p>CopyRight 2025 , Tomato.com - All rights reserved</p>
    </div>
  );
}

export default Footer;
