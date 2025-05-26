export const validateEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
      // Password must be at least 8 characters
      return password.length >= 8;
};

export const validateName = (name: string): boolean => {
      // Name must be at least 2 characters
      return name.length >= 2;
};
