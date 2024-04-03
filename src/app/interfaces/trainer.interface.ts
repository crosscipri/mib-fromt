export interface Trainer {
  id: number;
  name: string;
  firstLastName: string;
  alias: string;
}

export interface TrainersResponse {
  data: Trainer[];
  message: string;
}
