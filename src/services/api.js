import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const getAgencies = async () => {
    try {
        const response = await api.get("/agencies");
        return response.data.data;
    } catch (error) {
        console.error("Failed to fetch agencies:", error);
        throw error;
    }
};
