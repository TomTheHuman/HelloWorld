import { atom } from 'recoil';

const userState = atom({
  key: 'UserState',
  default: {
    username: '',
    firstName: '',
    lastName: '',
    dateOfBirth: ''
  }
});

export default userState;
