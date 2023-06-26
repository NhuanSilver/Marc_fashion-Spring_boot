export interface User{
  firstName : string,
  lastName : string,
  username : string,
  authorities : string[],
  accessToken : string,
  refreshToken : string
}
