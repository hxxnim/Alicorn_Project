export interface CategoryMenu {
  id: number;
  name: string;
}

export interface ButtonMenu {
  name: string;
}

export const categoryMenu: CategoryMenu[] = [
  {
    id: 1,
    name: "사람",
  },
  {
    id: 2,
    name: "기업",
  },
  {
    id: 3,
    name: "채용",
  },
  {
    id: 4,
    name: "셀프구직",
  },
];

export const buttonMenu: ButtonMenu[] = [
  {
    name: "로그인" || "무료 가입",
  },
];
