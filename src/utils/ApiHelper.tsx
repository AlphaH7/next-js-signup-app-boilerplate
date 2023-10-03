import type { UserObjectData } from '@/pages/signup';

import ApiClient from './ApiClient';

const execAPI = (success: (a: ApiClient) => any, fail?: (e: any) => void) => {
  const apiClient = new ApiClient();
  apiClient.setUrl();
  try {
    return success(apiClient);
  } catch (e: any) {
    apiClient.processError(e);
    if (fail) {
      fail(e);
    }
    throw e;
  }
};

const registerUser = async (data: UserObjectData): Promise<any> => {
  return execAPI(async (apiClient) => {
    const response = await apiClient.post<UserObjectData>('/signup', {
      ...data,
    });
    return response;
  });
};

export { registerUser };
