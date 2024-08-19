import bcrypt from 'bcryptjs'

export type User = {
  id: number
  email: string
  password: string
}

const hashedPassword1 = bcrypt.hashSync('123456', 10)
const hashedPassword2 = bcrypt.hashSync('123456', 10)

export const users: User[] = [
  {
    id: 1,
    email: 'victorh.pedr@gmail.com',
    password: hashedPassword1,
  },
  {
    id: 2,
    email: 'victorlolzinho08@gmail.com',
    password: hashedPassword2,
  },
]

export const validateUserPassword = (email: string, plainPassword: string): User | null => {
  const user = users.find((user) => user.email === email)
  if (user && bcrypt.compareSync(plainPassword, user.password)) {
    return user
  }
  return null
}
