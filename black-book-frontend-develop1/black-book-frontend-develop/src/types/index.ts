export type IError = {
  code: number;
  type: string;
  message: string;
};

export type IUser = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: string;
  gender: string;
  profession: string;
  citizenship: string;
  residency: string;
  birthPlace: string;
  snils: string;
  taxId: string;
  phone: string;
  startTraining: string;
  endTraining: string;
  comment: string;
  realExperience: string;
};

export type IUsersList = {
  page: number;
  pageSize: number;
  totalCount: number;
  data: IUser[];
};
