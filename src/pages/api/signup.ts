import ApiClient from '@/utils/ApiClient';

export default async function handler(req: any, res: any) {
  try {
    const { userObj } = req.body;
    const apiClient = new ApiClient();
    apiClient.setUrl(process.env.BACKEND_URL);
    const response = await apiClient.post('/api/register', userObj);
    return res.status(200).json(response);
  } catch (error: any) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
