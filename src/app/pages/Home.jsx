import { useEffect, useState } from "react";
import { selectionsService } from "../../setup/services/selections.service";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    selectionsService.getAll().then((response) => {
      setSelections(response);
    });
  }, [selections]);

  return (
    <div className="home">
      <div className="space" />
      <div className="head">
        <div className="title">
          <h1>CULTURE CAMPUS</h1>
          <p>Découvrez notre nouvelle collection!</p>
          <p>HÉRITAGE</p>
          <div className="primary_button">Découvrir</div>
        </div>
      </div>
      <div className="collection">
        <h2>NOS COLLECTIONS</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into el
        </p>
        <div className="primary_button nomargin">Découvrir</div>
      </div>
      <div className="catalogue">
        <div className="catalogue_item" id="sweats">
          <div className="info">
            <div className="name">Nos Sweats</div>
          </div>
        </div>
        <div className="catalogue_item" id="t-shirts">
          <div className="info">
            <div className="name">Nos T-Shirts</div>
          </div>
        </div>
      </div>
      <div className="selections">
        <h3>NOTRE SÉLECTION</h3>
        <div className="listes">
          {selections.map((selection) => (
            <Link
              to={`/items/${selection.id}`}
              key={selection.id}
              className="item"
            >
              <div className="image">
                <img src={selection.image} alt={selection.name} />
              </div>
              <div className="info">
                <p className="categorie">{selection.category}</p>
                <p className="name">{selection.name}</p>
                <p className="price">{selection.price}€</p>
                <div className="colors">
                  <div className="color grey" />
                  <div className="color blue" />
                  <div className="color red" />
                  <div className="color green" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
