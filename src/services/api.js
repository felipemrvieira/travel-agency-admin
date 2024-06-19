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

export const createAgency = async (agencyData) => {
    try {
        const response = await api.post("/agencies", agencyData);
        return response.data;
    } catch (error) {
        console.error("Failed to create agency:", error);
        throw error;
    }
};
