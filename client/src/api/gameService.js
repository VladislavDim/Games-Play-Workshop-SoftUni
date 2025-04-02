import request from "../utils/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    async getAll() {
        const result = await request.get(baseUrl);
        return Object.values(result);
    },
    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`);
    },
    create(gameData) {
        return request.post(baseUrl, gameData);
    },
    delete(gameId) {
        return request.delete(`${baseUrl}/${gameId}`);
    },
    edit(gameId, newGame) {
        return request.put(`${baseUrl}/${gameId}`, { ...newGame, _id: gameId });
    }
}