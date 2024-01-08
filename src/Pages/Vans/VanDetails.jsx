import React from "react";
import "./vandetails.css";
import { useParams, Link } from "react-router-dom";
export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van__details-container">
      <Link to=".." relative="path" className="back__button">
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
        <div className="van__detail">
          <img src={van.imageUrl} />
          <i className={`van__type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van__price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link__button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
