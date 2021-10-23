import { useState, useEffect } from "react";
import { Card, Pagination, Spin, notification } from "antd";
import { getMostStarredRepos } from "../../services/apiServices/gitHubServices";
import "./Github.scss";

const Github = () => {
  const [mostStarredRepos, setMostStarredRepos] = useState([]);
  const [pageCount, setPageCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNextPage = (page) => {
    setCurrentPage(page);
  };

  const fetchMostStarredRepos = async (pageNumber) => {
    try {
      setLoading(true);
      const { data } = await getMostStarredRepos(pageNumber);
      setMostStarredRepos(data.items);
      setPageCount(data.total_count);
      window.scroll(0, 0);
    } catch (error) {
      console.log(error.response);
      notification.error({
        message: "Error",
        description:
          error.response?.data?.message || "An error occured. Please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMostStarredRepos(currentPage);
  }, [currentPage]);

  return (
    <div className="Github">
      {loading && (
        <div className="spin">
          <Spin tip="Loading..." size="large" />
        </div>
      )}
      {mostStarredRepos.length > 0 &&
        mostStarredRepos.map(
          ({
            id,
            owner,
            description,
            name,
            stargazers_count,
            open_issues_count,
          }) => (
            <div className="Github__card-wrapper" key={id}>
              <Card className="Github__card">
                <div className="Github__flex flex-row align-items-center ">
                  <div className="mr20">
                    <img
                      className="Github__card-img"
                      alt="avatar"
                      src={owner.avatar_url}
                    />
                  </div>
                  <div
                    className="flex-column flex-wrap"
                    // style={{ maxHeight: "1000px" }}
                  >
                    <span className="app-heading3">{name}</span>
                    <span className="app-paragraph1 mb10">
                      {description || "There is no description for this repo"}
                    </span>
                    <div className="flex-row align-items-center flex-wrap">
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
        )}
      <div className="Github__pagination">
        {pageCount && (
          <Pagination
            defaultCurrent={1}
            total={340}
            onChange={handleNextPage}
          />
        )}
      </div>
    </div>
  );
};

export default Github;
