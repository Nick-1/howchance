import axios from 'axios'

const registrationService = async (email:string, password:string) => {
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

export default registrationService