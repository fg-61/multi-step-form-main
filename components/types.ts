export type FormProps = {
  info: {
    name: string;
    email: string;
    phoneNumber: number | undefined;
  };
  plan: {
    type: string;
  };
  addOns: {
    name: string;
    detail: string;
    price: number | undefined;
  };
};
