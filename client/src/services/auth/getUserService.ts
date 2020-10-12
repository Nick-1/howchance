import axios from "axios";

const getUserService = async () => {
        try {
        const response = await axios.get(
            'api/auth/user');
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default getUserService