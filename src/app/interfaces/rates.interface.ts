export interface Rate {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
  durationUnit: string;
}

export interface ClientRate {
  rateId: number;
  startDate?: string;
}

export interface RatesResponse {
  data: Rate[];
  message: string;
}

export interface RateResponse {
  data: Rate;
  showMessage?: string;
  message: string;
}

export interface RateRequestDto {
  name: string;
  description: string;
  price: number;
  duration: number;
}
