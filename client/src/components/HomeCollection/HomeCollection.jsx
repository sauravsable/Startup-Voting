import { useState } from "react";
import { CollectionCard } from "../CollectionCard/CollectionCard";
import HashLoader from "react-spinners/HashLoader";
import './HomeCollection.css';
import {startupIdeasData} from "../../utils/staticData"; 

export const HomeCollection = () => {
  const override = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const [loading, setLoading] = useState(false);

  const startupCards = startupIdeasData.map((startup) => (
    <CollectionCard key={startup.id} {...startup} />
  ));

  return (
    <section className="section-home-collection" id="topIdeas">
      <div className="home-collection-heading-container">
        <h1 className="heading-secondary heading-collection">
          Top Startup Ideas &rarr;
        </h1>
      </div>

      {loading && <HashLoader cssOverride={override} color="#eb3656" />}
      {!loading && (
        <div className="home-collection-container">
          <div className="home-collection-inner">{startupCards}</div>
        </div>
      )}
    </section>
  );
};
