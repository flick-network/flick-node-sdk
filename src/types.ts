export interface APIConfig {
    environment: 'sandbox' | 'production';
    apiKey: string;
  }
  
export interface EGSData {
    vat_name: string;
    vat_number: string;
    devices: {
        device_name: string;
        city: string;
        city_subdiv: string;
        street: string;
        plot: string;
        building: string;
        postal: string;
        branch_name: string;
        branch_industry: string;
        otp: string;
    }[];
}

export interface InvoiceData {
    egs_uuid: string;
    invoice_ref_number: string;
    issue_date: string;
    issue_time: string;
    party_details?: {
        party_name_ar: string;
        party_name_en?: string;
        party_vat: string;
        party_add_id?: {
        crn: number;
        };
        city_ar: string;
        city_en?: string;
        city_subdivision_ar: string;
        city_subdivision_en?: string;
        street_ar: string;
        street_en?: string;
        plot_identification?: string;
        building?: string;
        postal_zone: string;
    };
    doc_type: string;
    has_advance?: boolean;
    advance_details?: {
        advance_amount: number;
        total_amount: number;
        advance_invoices: {
        tax_category: string;
        tax_percentage: number;
        taxable_amount: number;
        tax_amount: number;
        invoices: {
            id: string;
            issue_date: string;
            issue_time: string;
        }[];
        }[];
    };
    inv_type: string;
    payment_method: number;
    currency?: string;
    total_tax?: string;
    lineitems: {
        name_ar: string;
        name_en?: string;
        quantity: number;
        tax_category: string;
        tax_exclusive_price: number;
        tax_percentage: number;
    }[];
}
