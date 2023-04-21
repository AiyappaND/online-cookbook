import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const BOOKMARKS_URL = `${SERVER_API_URL}/bookmarks`;

export const createOrUpdateBookmarks = async (bookmarks) => {
    const response = await axios.post(`${BOOKMARKS_URL}/${bookmarks.username}`, bookmarks);
    return response.data;
};

export const findUserBookmarks = async (username) => {
    const response = await axios.get(`${BOOKMARKS_URL}/${username}`);
    return response.data;
}
