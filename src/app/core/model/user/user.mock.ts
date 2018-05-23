import {User} from './user.model';

export const USERS: User[] = [
  new User({
    id: 'U1',
    firstName: 'Zuly',
    middleName: 'Andrea',
    surname: 'Alcaraz',
    secondSurname: 'Diaz',
    email: 'zuly.alcaraz@talosdigital.com',
    password: 'test4echo',
  }),
  new User({
    id: 'U2',
    firstName: 'Carlos',
    middleName: 'Mateo',
    surname: 'Restrepo',
    secondSurname: 'Restrepo',
    email: 'carlos.mateo.restrepo@talosdigital.com',
    password: 'test4echo',
  }),
  new User({
    id: 'U3',
    firstName: 'Ian',
    middleName: '',
    surname: 'Franconi',
    secondSurname: 'Solanilla',
    email: 'julian.franco@talosdigital.com',
    password: 'test4echo',
  })
];

export const USER_EMPTY: User = new User({
  id: '',
  firstName: '',
  middleName: '',
  surname: '',
  secondSurname: '',
  email: '',
  password: '',
});
