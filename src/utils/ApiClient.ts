/* eslint-disable class-methods-use-this */
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

class ApiClient {
  private baseUrl: string | undefined;

  private headers: { [key: string]: string } = {};

  public setUrl(url?: string): void {
    this.baseUrl = url ?? '/api';
  }

  public setHeaders(customHeaders: { [key: string]: string }): void {
    this.headers = { ...this.headers, ...customHeaders };
  }

  private getConfig(config?: AxiosRequestConfig): AxiosRequestConfig {
    const modifiedConfig = {
      ...config,
      headers: {
        ...config?.headers,
        ...this.headers,
      },
    };
    return modifiedConfig;
  }

  public async get<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response: AxiosResponse<T> = await axios.get<T>(
      `${this.baseUrl}${endpoint}`,
      this.getConfig(config)
    );
    return response.data;
  }

  public async post<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response: AxiosResponse<T> = await axios.post<T>(
      `${this.baseUrl}${endpoint}`,
      data,
      this.getConfig(config)
    );
    return response.data;
  }

  public async delete<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response: AxiosResponse<T> = await axios.delete<T>(
      `${this.baseUrl}${endpoint}`,
      this.getConfig(config)
    );
    return response.data;
  }

  public async patch<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response: AxiosResponse<T> = await axios.patch<T>(
      `${this.baseUrl}${endpoint}`,
      data,
      this.getConfig(config)
    );
    return response.data;
  }

  public async put<T>(
    endpoint: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.baseUrl) {
      throw new Error('Base URL not set. Please call setUrl() first.');
    }
    const response: AxiosResponse<T> = await axios.put<T>(
      `${this.baseUrl}${endpoint}`,
      data,
      this.getConfig(config)
    );
    return response.data;
  }

  public processError = (error: AxiosError): void => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log('Error Status:', error.response.status);
      console.log('Error Message:', error.response.data);
    }
    console.log('Error Config:', error.config);
  };
}

export default ApiClient;
