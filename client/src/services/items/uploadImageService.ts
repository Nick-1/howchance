import axios from 'axios'

const uploadImageService = async (data: any) => {
    try {
        const response = await axios.post(
            'api/action/image', data, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default uploadImageService