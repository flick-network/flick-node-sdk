# Flick NodeJS SDK
![Platform](https://img.shields.io/badge/node-16--20-blue)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)


A Typescript interface for interacting with the APIs of Flick.

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Documentation](#documentation)
- [Examples](#examples)
- [Contribute to our SDK](#contributing)
- [License](#license)
- [Support](#support)

## Installation
To use the Flick Node SDK in your project, you can install it via npm or yarn:

```bash
npm install flick-node-sdk
# OR
yarn add flick-node-sdk
```

## Getting Started
Before using the package, you need to configure it with your API credentials. You should have an apiKey and specify whether you are using the 'sandbox' or 'production' environment.

Here's how you to initiate our SDK in your project:

```typescript
import { Bills } from 'flick-node-sdk';

const config = {
  environment: 'sandbox', // or 'production'
  apiKey: 'your-api-key',
};

const client = new Bills(config);
```

## Documentation
To learn about available methods and their usage, please refer to the [official API documentation](https://docs.flick.network/).
Here's a glimpse to our Bills Module:

### Bills Client
The Bills client provides access to various functionalities for managing bills. You can interact with the following API endpoints:

#### Onboard EGS to ZATCA:

```typescript
const egsData = { /* Your EGS data - Check Documentation */ };
const response = await client.onboardEGS(egsData);
```

#### Compliance Check:

```typescript
const egsUuid = 'your-egs-uuid';
const response = await client.doComplianceCheck(egsUuid);
```

#### Generate E-Invoice for Phase-2 in Saudi Arabia:
```typescript
const invoiceData = { /* Your invoice data - Check Documentation */ };
const response = await client.generateInvoice(invoiceData);
```

## Examples

1. Here's an Example of how you can **onboard multiple EGS to ZATCA Portal** [If you are onboarding PoS devices or VAT-Group members, this comes handy].

```typescript
import { Bills } from 'flick-node-sdk';

// Configuration with your API key and environment
const config = {
  environment: 'sandbox',
  apiKey: 'your-api-key',
};

// Initialize the Bills client
const client = new Bills(config);

// Define your EGS data
const egsData = {
  vat_name: 'Test Co.',
  vat_number: '300000000000003',
  devices: [
    {
      device_name: 'TestEGS1',
      city: 'Riyadh',
      city_subdiv: 'Test Dist.',
      street: 'Test St.',
      plot: '1234',
      building: '1234',
      postal: '12345',
      branch_name: 'Riyad Branch 1', //This will be 10-digit TIN if you are onboarding a VAT-Group Member
      branch_industry: 'Retail',
      otp: '123321',
    },
    {
      device_name: 'TestEGS2',
      city: 'Riyadh',
      city_subdiv: 'Test Dist.',
      street: 'Test St.',
      plot: '1234',
      building: '1234',
      postal: '12345',
      branch_name: 'Riyad Branch 2', //This will be 10-digit TIN if you are onboarding a VAT-Group Member
      branch_industry: 'Retail',
      otp: '321123',
    }
  ],
};

// Call the onboardEGS method
(async () => {
  try {
    const response = await client.onboardEGS(egsData);
    console.log('EGS Onboarding Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
})();

```

2. Here's an Example of how you can **Genereate a ZATCA-Complied E-Invoice**.

```typescript
import { Bills } from 'flick-node-sdk';

// Configuration with your API key and environment
const config = {
  environment: 'sandbox',
  apiKey: 'your-api-key',
};

// Initialize the Bills client
const client = new Bills(config);

// Define your invoice data
const invoiceData = {
  egs_uuid: '7b9cc231-0e14-4bff-938c-4603fe10c4bc',
  invoice_ref_number: 'INV-5',
  issue_date: '2023-01-01',
  issue_time: '01:40:40',
  party_details: {
    party_name_ar: 'شركة اختبار',
    party_vat: '300001111100003',
    party_add_id: {
      crn: 45463464,
    },
    city_ar: 'جدة',
    city_subdivision_ar: 'حي الشرفية',
    street_ar: 'شارع الاختبار',
    plot_identification: '1234',
    building: '1234',
    postal_zone: '12345',
  },
  doc_type: '388',
  inv_type: 'standard',
  payment_method: 10,
  currency: 'SAR',
  total_tax: 142.,
  has_advance: true,
  advance_details: {
    advance_amount: 575,
    total_amount: 2875,
    advance_invoices: [
      {
        tax_category: 'S',
        tax_percentage: 0.15,
        taxable_amount: 500,
        tax_amount: 75,
        invoices: [
          {
            id: 'INV-1',
            issue_date: '2022-12-10',
            issue_time: '12:28:17',
          },
        ],
      },
    ],
  },
  lineitems: [
    {
      name_ar: 'متحرك',
      quantity: 1,
      tax_category: 'S',
      tax_exclusive_price: 750,
      tax_percentage: 0.15,
    },
    {
      name_ar: 'حاسوب محمول',
      quantity: 1,
      tax_category: 'S',
      tax_exclusive_price: 1750,
      tax_percentage: 0.15,
    },
  ],
};

// Call the generateInvoice method
(async () => {
  try {
    const response = await client.generateInvoice(invoiceData);
    console.log('Invoice Generation Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
})();

```

## Contributing

We welcome contributions from the community. If you find issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please contact our support team at support@flick.network

## Keywords 

einvoicing, zatca, phase2, saudi, ksa, fatoora, saudiarabia, E-Invoicing ZATCA, E-InvoicingSaudiArabia, EGS