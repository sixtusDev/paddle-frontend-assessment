import axios from "axios";
import { gitHubMostStarredUrl } from "./urls";

export const getMostStarredRepos = (pageNumber) =>
  axios({
    method: "get",
    url: `${gitHubMostStarredUrl}/&page=${pageNumber}`,
  });
