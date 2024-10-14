export interface HousingLocation {
    id: number;
    user_external_id: string;
    user_name: string;
    user_email: string;
    user_phone: string;
    postal_code: string;
    settlement: string;
    sync_address: string;
    type: string;
    price: string;
    size: string;
    status: string;
    ad_type: string;
    rentability: string;
    new: string;
    description: string;
    state: string;
    plot: string;
    utilities: string;
    images: {
      image: Array<{ src: { __cdata: string } }>
    };
  }
