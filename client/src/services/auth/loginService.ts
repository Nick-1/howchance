import axios from 'axios'

const loginService = async (email:string, password:string) => {
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
}

export default loginService