import { AxiosInstance, AxiosResponse } from 'axios';
import { ApiService } from '../APIServices';
import { APIConfig, EGSData, InvoiceData } from '../types';
export class Bills {
    
    private api: AxiosInstance;

    constructor(private config: APIConfig) {
        const apiService = new ApiService(config);
        this.api = apiService.getApi();
    }

    async onboardEGS(egsData: EGSData): Promise<AxiosResponse> {
        try {
          const response = await this.api.post('/egs/onboard', egsData);
          return response;
        } catch (error) {
          // Handle errors here
          throw error;
        }
      }

    async doComplianceCheck(egs_uuid: string): Promise<AxiosResponse> {
      try {
        const response = await this.api.get(`/egs/compliance-check/${egs_uuid}`);
        return response;
      } catch (error) {
        // Handle errors here
        throw error;
      }
    }

    async generateInvoice(invoice_data: InvoiceData) {
      try {
        const response = await this.api.post('/invoice/generate', invoice_data);
        return response;
      } catch (error) {
        // Handle errors here
        throw error;
      }
    }
}

export default Bills;