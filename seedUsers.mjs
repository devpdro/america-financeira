import db from './src/lib/db.mjs'

const users = [
  {
    name: 'Victor Hugo Pedro',
    email: 'victorh.pedr@gmail.com',
    password: 'Ame!@#10',
  },
  {
    name: 'Victor',
    email: 'iago.santarelli@gmail.com',
    password: '123456',
  },
]

db.insert(users, (err, newDocs) => {
  if (err) {
    console.error('Erro ao inserir usuários:', err)
  } else {
    console.log('Usuários inseridos com sucesso:', newDocs)
  }
})
