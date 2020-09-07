import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
  it('should set the class properties', () => {
    let user = new User();
    expect(user).toEqual(new User('','',''), 'before setting properties')
    user.password = 'password';
    user.email = 'savovuksan@gmail.com';
    user.username = 'savovuk';
    expect(user.password).toBe('password');
    expect(user.email).toBe('savovuksan@gmail.com');
    expect(user.username).toBe('savovuk', 'after setting properties');
  })
});
