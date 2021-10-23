import { useState, useEffect } from "react";
import { Card } from "antd";
import { getMostStarredRepos } from "../../services/apiServices/gitHubServices";
import "./Github.scss";

const Github = () => {
  const [mostStarredRepos, setMostStarredRepos] = useState([]);

  useEffect(() => {
    const fetchMostStarredRepos = async () => {
      try {
        const { data } = await getMostStarredRepos();
        setMostStarredRepos(data.items);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchMostStarredRepos();
  });
  return (
    <div className="Github">
      <span>Hello</span>
    </div>
  );
};

export default Github;
