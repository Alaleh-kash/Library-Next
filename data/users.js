import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'admin',
    email: 'admin@frontcast.com',
    password: bcrypt.hashSync('12345'), // Ensure passwords are correctly hashed
    isAdmin: true,
  },
  {
    name: 'User 1',
    email: 'user1@frontcast.com',
    password: bcrypt.hashSync('12345'), // Ensure passwords are correctly hashed
    isAdmin: false,
  },
  {
    name: 'User 2',
    email: 'user2@frontcast.com',
    password: bcrypt.hashSync('12345'), // Ensure passwords are correctly hashed
    isAdmin: false,
  },
  {
    name: 'User 3',
    email: 'user3@frontcast.com',
    password: bcrypt.hashSync('12345'), // Ensure passwords are correctly hashed
    isAdmin: true,
  }
]

export default users;
