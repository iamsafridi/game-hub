import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0f919a5dfbb64112927980b778bb3738",
  },
});
