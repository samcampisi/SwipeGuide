import axios, { AxiosInstance } from 'axios';

export default class ApiService {
  private static instance: ApiService;
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL:
        'https://c33p01hq50.execute-api.eu-west-1.amazonaws.com/assesment',
    });
  }

  static getInstance(): ApiService {
    if (!this.instance) {
      this.instance = new ApiService();
    }
    return this.instance;
  }

  getClient(): AxiosInstance {
    return this.axios;
  }
}
