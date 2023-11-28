import { useParams } from "react-router-dom";
import { collectionService } from "../../setup/services/collections.service";
import { useEffect, useState } from "react";

const OneCollection = () => {
  const { id } = useParams();
  console.log(id);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    console.log(collectionService.getAll());
    collectionService.getById(id).then((response) => {
      setCollection(response);
    });
  }, [id]);

  return (
    <div className="oneCollection">
      {collection && (
        <>
          <div className="image">
            <img src={collection.image} alt={collection.name} />
          </div>
          <div className="name">{collection.name}</div>
        </>
      )}
    </div>
  );
};

export default OneCollection;
