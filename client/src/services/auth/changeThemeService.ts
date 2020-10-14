import axios from 'axios'

const changeThemeService = async (theme:string, id:string|null) => {
    try {
        const response = await axios.put(
            `api/auth/user/${id}/theme`,
            { theme }
            );
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default changeThemeService