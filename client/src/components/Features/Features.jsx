import { useEffect, useState } from "react";
import axios from "axios";
import { Feature } from "../Feature/Feature";
import HashLoader from "react-spinners/HashLoader";
import './Features.css';
import {features} from "../../utils/staticData";

export const Features = () => {
  const [featuresData, setFeaturesData] = useState([]);
  const override = {
    display: "block",
    margin: "2.4rem auto",
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/locationFeatures`
        );
        setFeaturesData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const featuresHtml = features.map((feature, idx) => {
    return <Feature key={idx} {...feature} idx={idx} />;
  });

  return (
    <section className="section-features container container1">
      <h4 className="subheading">What you&apos;ll get?</h4>
      <h2 className="section-features-heading heading-secondary">
        Unleash Your Startup Potential and Discover Our Spectacular Features
      </h2>

      {loading ? (
        <HashLoader cssOverride={override} color="#eb3656" />
      ) : (
        <div className="feature-contents">{featuresHtml}</div>
      )}
    </section>
  );
};
