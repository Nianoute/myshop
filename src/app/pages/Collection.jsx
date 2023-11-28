import { Fragment, useEffect, useState } from "react";
import { collectionService } from "../../setup/services/collections.service";
import { Link } from "react-router-dom";

const Collection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    collectionService.getAll().then((response) => {
      setCollections(response);
    });
  }, [collections]);

  return (
    <Fragment>
      <div className="space" />
      <h1>Collections</h1>
      <div className="collections">
        {collections?.map((collection) => (
          <Link to={`/collections/${collection.id}`} key={collection.id}>
            <div className="collection">
              <div className="image">
                <img src={collection.image} alt={collection.name} />
              </div>
              <div className="name">
                <h2>{collection.name}</h2>
                <p>Découvrir</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Collection;
