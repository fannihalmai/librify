export class User {
  public id: number;
  public username: string;
  public firstname: string;
  public lastname: string;
  public email: string;
  public password: string;

  constructor(
    id: number,
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    password: string,
  ) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}
