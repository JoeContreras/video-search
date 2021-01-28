import axios from "axios";
const KEY = "AIzaSyBNdq6E8ktk3sR5N3ENVQlveUnUK_IRVUA";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
