import { User, ROLES } from "./01-enum"

const currentUser: User = {
  username: 'santi',
  role: ROLES.ADMIN,
}

export const checkAdmin = () => {
  if(currentUser.role === 'admin') {
    return true;
  }
  return false
}

console.log(checkAdmin());


