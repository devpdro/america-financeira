import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useValidateAuthToken = () => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('auth-token')

    if (!token) {
      router.push('/login')
    }
  }, [router])
}

export default useValidateAuthToken
