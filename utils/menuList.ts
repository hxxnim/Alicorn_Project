export interface CategoryMenu {
  name: string;
}

export interface ButtonMenu {
  name: string;
}

export const categoryMenu: CategoryMenu[] = [
  {
    name: "사람",
  },
  {
    name: "기업",
  },
  {
    name: "채용",
  },
  {
    name: "셀프구직",
  },
];

export const buttonMenu: ButtonMenu[] = [
  {
    name: "로그인" || "무료 가입",
  },
];
