export const BASE_URL = 'https://www.saucedemo.com/';

export const USERS = {
  standard_user: { username: 'standard_user', password: 'secret_sauce' },
  locked_out_user: { username: 'locked_out_user', password: 'secret_sauce' },
  problem_user: { username: 'problem_user', password: 'secret_sauce' },
  performance_glitch_user: { username: 'performance_glitch_user', password: 'secret_sauce' },

  error_user: { username: 'error_user', password: 'secret_sauce' },
  visual_user: { username: 'visual_user', password: 'secret_sauce' },
};

export const INVALID = {
  wrong_password: { 
    username: 'standard_user', 
    password: 'wrong_pass', 
    error: 'Epic sadface: Username and password do not match any user in this service' 
  },
  wrong_username: { 
    username: 'wrong_user', 
    password: 'secret_sauce', 
    error: 'Epic sadface: Username and password do not match any user in this service' 
  },
  wrong_both: { 
    username: 'wrong_user', 
    password: 'wrong_password', 
    error: 'Epic sadface: Username and password do not match any user in this service' 
  },
  empty_username: { 
    username: '', 
    password: 'secret_sauce', 
    error: 'Epic sadface: Username is required' 
  },
  empty_password: { 
    username: 'standard_user', 
    password: '', 
    error: 'Epic sadface: Password is required' 
  },
  empty_both: { 
    username: '', 
    password: '', 
    error: 'Epic sadface: Username is required' 
  },
};