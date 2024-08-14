import bcrypt from 'bcrypt'

export interface User {
  email: string
  password: string
}

// Função para criar um hash de senha (usado para pré-carregar usuários)
const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10)
}

// Usuários pré-carregados (simulando um banco de dados)
let users: User[] = []

;(async () => {
  users = [
    {
      email: 'victorh.pedr@gmail.com',
      password: await hashPassword('2123412'), // Senha '2123412' hashada
    },
    {
      email: 'user2@example.com',
      password: await hashPassword('password2'), // Senha 'password2' hashada
    },
    {
      email: 'user3@example.com',
      password: await hashPassword('password3'), // Senha 'password3' hashada
    },
  ]

  console.log('Usuários carregados:', users)
})()

// Função para encontrar o usuário pelo email
export const findUserByEmail = (email: string): User | undefined => {
  return users.find((user) => user.email === email)
}

// Função para validar a senha
export const validatePassword = async (user: User, password: string): Promise<boolean> => {
  return bcrypt.compare(password, user.password)
}

// Se você precisar criar mais usuários manualmente
export const createUser = async (email: string, password: string): Promise<User> => {
  const hashedPassword = await hashPassword(password)
  const user: User = { email, password: hashedPassword }
  users.push(user)
  return user
}
