const fakeUser = {
  email: 'fake-user@gmail.com',
  password: 'password123'
};

/**
 * 
 * @param {Object} user 
 */
export default function fakeAuth(user) {
  return new Promise((resolve, reject) => {
    if (user.email !== fakeUser.email || user.pass !== fakeUser.pass) {
      reject('Login failed! email or password do not match!');
    }
    setTimeout(() => resolve('User login successful!'), 1000);
  })
}

