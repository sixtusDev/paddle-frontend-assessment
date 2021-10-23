import axios from "axios";
import { gitHubMostStarredUrl } from "./urls";

export const getMostStarredRepos = () =>
  axios({
    method: "get",
    url: gitHubMostStarredUrl,
  });
