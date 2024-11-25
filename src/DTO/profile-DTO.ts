export interface ProfileResponseDTO {
  id: number;
  userId: number;
  name: string;
  address: string | null;
  gender: string | null;
  phone: string | null;
  Transaction: [];
  user?: {
    email: string;
  };
}
