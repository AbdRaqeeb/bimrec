export interface FlwInterface {
  status: string;
  message: string;
  data: {
    id: number;
    tx_ref: string;
    flw_ref: string;
    amount: number;
    currency: string;
    charged_amount: number;
    processor_response: string;
    status: string;
    payment_type: string;
    customer: {
      hospitalId: string;
      hospitalName: string;
      patientId: string;
      patientName: string;
    };
  };
}
