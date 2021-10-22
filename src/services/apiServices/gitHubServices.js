import axios from "axios";
import { gitHubMostStarredUrl } from "./urls";

export const getMostStarredRepo = () =>
  axios.get({
    method: "get",
    url: gitHubMostStarredUrl,
  });
