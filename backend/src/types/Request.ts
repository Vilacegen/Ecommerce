declare namespace Express {
  export interface Request {
    user?: {
      // Make `user` optional
      _id: string;
      name: string;
      email: string;
      isAdmin: boolean;
      token?: string; // Make `token` optional
    };
  }
}
