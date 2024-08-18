import { useValidadeAuthToken } from '@/presentation/hooks'

export default function Dashboard() {
  useValidadeAuthToken()
  return (
    <main>
      <h1>Painel do usuário</h1>
    </main>
  )
}
