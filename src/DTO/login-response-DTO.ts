export interface LoginResponseDTO {
  token: string;
  user: {
    id: number;
    email: string;
    role: string;
  };
}
