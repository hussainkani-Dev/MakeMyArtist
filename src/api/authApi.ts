import api from "./axios";


export const loginApi = async (email: string, password: string) => {
  const response = await api.post("/auth/user/login", {
    email,
    password,
  });

  console.log("Status:", response.status);
  console.log("Headers:", response.headers);
  console.log("Response Data:", response.data);

  return response.data;
};

export const registerApi = async (data: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/auth/user/register", data);
  return response.data;
};