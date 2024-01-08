import React from "react";
import { Link } from "react-router-dom";
import "./vans.css";
export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van__tile">
      <Link to={`/vans/${van.id}`} className="van-link">
        <img src={van.imageUrl} className="van-image" />
        <div className="van__info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van__type ${van.type}`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van__list-container">
      <h1>Explore our van options</h1>
      <div className="van__list">{vanElements}</div>
    </div>
  );
}
