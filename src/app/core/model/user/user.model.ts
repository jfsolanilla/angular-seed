/* user model*/

export class User {
  private _id: string;
  private _firstName: string;
  private _middleName: string;
  private _surname: string;
  private _secondSurname: string;
  private _email: string;
  private _password: string;

  constructor(userDTO: any) {
    this._id = userDTO.id;
    this._firstName = userDTO.firstName;
    this._middleName = userDTO.middleName;
    this._surname = userDTO._surname;
    this._secondSurname = userDTO.secondSurname;
    this._email = userDTO.email;
    this._password = userDTO.password;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get middleName(): string {
    return this._middleName;
  }

  set middleName(value: string) {
    this._middleName = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get secondSurname(): string {
    return this._secondSurname;
  }

  set secondSurname(value: string) {
    this._secondSurname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get fullName(): string {
    const names = `${this._firstName} ${this._middleName ? this._middleName + ' ' : ''}`;
    const lastNames = `${this._surname}${this._secondSurname ? ' ' + this._secondSurname : ''}`;
    return names + lastNames;
  }
}
