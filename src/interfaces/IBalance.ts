import IUserAndAccount from "./IUserAndAccount";

export default interface IBalance extends IUserAndAccount
{
  tokenUser: IUserAndAccount
}