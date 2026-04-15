export const loginApi = async (email: string, password: string) => {
  // Dummy API (replace with real API later)
  if (email === 'test@gmail.com' && password === '1234') {
    return {
      success: true,
      token: 'abc123',
      user: {name: 'Test User'},
    };
  } else {
    throw new Error('Invalid email or password');
  }
};

export const logoutApi = async () => {
  return {
    success: true,
    token: '',
    user: {name: ''},
  };
};
