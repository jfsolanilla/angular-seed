import {RegisterUserComponent} from './register-user.component';

export const state = {
  name: 'registerUser',
  url: '/register-user',
  views: {
    $default: {
      component: RegisterUserComponent
    }
  },
  data: {
    requiresAuth: true,
    roles: []
  }
};
