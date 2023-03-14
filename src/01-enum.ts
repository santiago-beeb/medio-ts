export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  GUEST = "guest",
}

export type User = {
  username: string;
  role: ROLES;
}

const santiUser: User = {
  username: "santi",
  role: ROLES.ADMIN,
 }

 const num = 0; const valB = num ?? "default";
console.log(valB);

