const PROTOCOL = process.env.PROTOCOL || "http";
const API_HOST = process.env.API_HOST || "localhost";
const API_PORT = process.env.API_PORT || "3001";

const API_URL =
  process.env.REACT_APP_API_URL || `${PROTOCOL}://${API_HOST}:${API_PORT}`;
export default API_URL;
