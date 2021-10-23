import { useState, useEffect } from "react";
import { Card } from "antd";
import { getMostStarredRepos } from "../../services/apiServices/gitHubServices";
import "./Github.scss";

const Github = () => {
  const [mostStarredRepos, setMostStarredRepos] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMostStarredRepos = async () => {
      try {
        setLoading(true);
        const { data } = await getMostStarredRepos();
        console.log(data);
        setMostStarredRepos(data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMostStarredRepos();
  }, []);
  return (
    <div className="Github">
      {loading ? (
        <div>Loading</div>
      ) : (
        mostStarredRepos.length &&
        mostStarredRepos.map(
          ({
            owner,
            description,
            name,
            stargazers_count,
            open_issues_count,
          }) => (
            <div className="Github__card-wrapper">
              <Card className="Github__card">
                <div className="flex-row align-items-center">
                  <div className="mr20">
                    <img
                      className="Github__card-img"
                      alt="avatar"
                      src={owner.avatar_url}
                    />
                  </div>
                  <div className="flex-column">
                    <span className="app-heading2">{name}</span>
                    <span className="app-paragraph1 mb10">
                      {description || "There is no description for this repo"}
                    </span>
                    <div className="flex-row align-items-center">
                      <div className="mr10">
                        <span className="badge mr10">
                          Stars: {stargazers_count}
                        </span>
                        <span className="badge">
                          Issues: {open_issues_count}
                        </span>
                      </div>
                      <span>Submitted 30 days ago by {owner.login}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Github;
