import React, { useEffect, useState } from "react";
import { selectionsService } from "../../setup/services/selections.service";
import { Link, useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [detail, setDetail] = useState(false);
  const [qualProd, setQualProd] = useState(false);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    selectionsService.getById(id).then((response) => {
      setItem(response);
      selectionsService
        .getByCategory(response.category, item)
        .then((response) => {
          setSelections(response);
        });
    });
  }, [id, item]);

  const handleActive = (e) => {
    const taille = document.querySelectorAll(".taille_item");
    taille.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  const handleActiveColors = (e) => {
    const colors = document.querySelectorAll(".color_item");
    colors.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <div className="item">
      <div className="space" />
      {item && (
        <>
          <div className="detail">
            <Link to={`/`} className="back_button">
              Retour
            </Link>
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="info">
              <div className="group">
                <div className="name">{item.name}</div>
                <div className="price">{item.price}€</div>
              </div>
              <div className="group">
                <div>CodeProduit</div>
                <div className="codeProduit">{item.codeProduit}</div>
              </div>
              <div className="taille">
                <div>Taille</div>
                <div className="listes">
                  <div className="taille_item" onClick={handleActive}>
                    XS
                  </div>
                  <div className="taille_item" onClick={handleActive}>
                    S
                  </div>
                  <div className="taille_item" onClick={handleActive}>
                    M
                  </div>
                  <div className="taille_item" onClick={handleActive}>
                    L
                  </div>
                  <div className="taille_item" onClick={handleActive}>
                    XL
                  </div>
                </div>
              </div>
              <div className="colors">
                <div>Couleur</div>
                <div className="listes">
                  <div
                    className="color_item black"
                    onClick={handleActiveColors}
                  />
                  <div
                    className="color_item pink"
                    onClick={handleActiveColors}
                  />
                  <div
                    className="color_item white"
                    onClick={handleActiveColors}
                  />
                </div>
              </div>
              <div className="quantity">
                <div>Quantité</div>
                <div className="quantity_input">
                  <input type="number" defaultValue="1" />
                </div>
              </div>
              <div className="panier">METTRE AU PANIER</div>
              <div className="accordeon">
                <div
                  className="accordeon_title"
                  onClick={() => setDetail(!detail)}
                >
                  <p>Détails</p>
                  {detail ? (
                    <img
                      src="/item/fleche.png"
                      alt="arrow_up"
                      className="active"
                    />
                  ) : (
                    <img src="/item/fleche.png" alt="arrow_down" />
                  )}
                </div>
                {detail && <p className="accordeon_children">Lorem ipsum</p>}
                <div
                  className="accordeon_title"
                  onClick={() => setQualProd(!qualProd)}
                >
                  <p>Qualité Produits</p>
                  {qualProd ? (
                    <img
                      src="/item/fleche.png"
                      alt="arrow_up"
                      className="active"
                    />
                  ) : (
                    <img src="/item/fleche.png" alt="arrow_down" />
                  )}
                </div>
                {qualProd && <p className="accordeon_children">Lorem ipsum</p>}
              </div>
            </div>
          </div>
          <div className="selections">
            <h3>Articles que vous pourriez aimer :</h3>
            <div className="listes">
              {selections?.map((selection) => (
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
        </>
      )}
    </div>
  );
};

export default Item;
