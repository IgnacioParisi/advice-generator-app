import { useEffect, useState } from "react";
import "../../components/index.css";

export const Advice = ({ advice }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (advice) {
      setLoading(false);
    }
  }, [advice]);

  return (
    <div className="advice-quote-container">
      <h1 className="advice-title">Advice #{!loading && advice.slip.id} </h1>
      {loading && <p className="loading-message">Loading advice...</p>}
      {!loading && <p className="advice-quote">"{advice.slip.advice}"</p>}
    </div>
  );
};
