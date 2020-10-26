import axios from 'axios'

export default {
    changeTheme: async (theme: string, id: string | null) => {
        try {
            const response = await axios.put(
                `api/auth/user/${id}/theme`,
                {theme}
            );
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    getUser: async () => {
        try {
            const response = await axios.get(
                'api/auth/user');
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    login: async (email: string, password: string) => {
        try {
            const response = await axios.post(
                'api/auth/login',
                {
                    email,
                    password
                }
            );
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (error) {
            console.error(error);
        }
    },
    logOut: () => {
        localStorage.removeItem('token')
    },
    registration: async (email: string, password: string) => {
        try {
            const response = await axios.post(
                'api/auth/register',
                {
                    email,
                    password
                }
            );
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}
