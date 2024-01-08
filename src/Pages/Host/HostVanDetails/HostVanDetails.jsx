import React from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";
import "./HostVanDetails.css";

const HostVanDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState(null);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section style={{ padding: "0 1rem" }}>
      <Link to=".." relative="path" className="back__button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host__van-details-container">
        <div className="host__van-details">
          <img src={currentVan.imageUrl} width={180} />
          <div className="host__van-details-info">
            <p className={`host__van-type ${currentVan.type}`}>
              {currentVan.type}
            </p>
            <h2>{currentVan.name}</h2>
            <p className="host__van-price">
              <span>${currentVan.price}</span>/day
            </p>
          </div>
        </div>
        <nav className="host__van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetails;
