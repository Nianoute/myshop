import React, { useEffect, useState } from "react";
import { selectionsService } from "../../setup/services/selections.service";
import { Link, useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    selectionsService.getById(id).then((response) => {
      setItem(response);
    });
  }, [id]);

  return (
    <div className="item">
      <div className="space" />
      <Link to={`/`} className="back_button">
        Retour
      </Link>
      {item && (
        <>
          <div className="image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="info">
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
            <div className="description">{item.description}</div>
            <div className="primary_button">Ajouter au panier</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
