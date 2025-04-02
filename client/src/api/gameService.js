import request from "../utils/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async getAll() {
        const result = await request.get(baseUrl);
        return Object.values(result);
    },
    create(gameData) {
        return request.post(baseUrl, gameData);
    }
}