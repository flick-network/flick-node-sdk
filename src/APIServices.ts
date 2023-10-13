import axios, { AxiosInstance } from 'axios';

interface Config {
  environment: 'sandbox' | 'production';
  apiKey: string;
}

export class ApiService {
  private api: AxiosInstance;

  constructor(private config: Config) {
    const baseUrl = this.getBaseUrl(config.environment);

    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
    });
  }

  private getBaseUrl(environment: 'sandbox' | 'production'): string {
    if (environment === 'sandbox') {
      return 'https://sandbox-api.flick.network';
    } else {
      return 'https://api.flick.network';
    }
  }

  getApi(): AxiosInstance {
    return this.api;
  }
}
