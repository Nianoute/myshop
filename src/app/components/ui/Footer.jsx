const Footer = () => {
  return (
    <div className="footer">
      <div className="nav">
        <h3>Support</h3>
        <p className="space"></p>
        <p>Faq</p>
        <p>Nos points de ventes</p>
        <p>Nous contacter</p>
        <p>TCGU et Mentions Légales</p>
      </div>
      <div className="newsletter">
        <h2>NEWSLETTER</h2>
        <input type="text" placeholder="Adresse email" readOnly />
      </div>
      <div className="social">
        <h3>RÉSEAUX</h3>
        <p>Instagram</p>
      </div>
      <div className="logo">
        <img src="Logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
