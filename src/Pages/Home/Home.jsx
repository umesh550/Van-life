import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>You got the travel plans, we got the travel vans.</h1>

        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans" className="cta-button">
          Find your van
        </Link>
      </div>
    </div>
  );
};

export default Home;
