import React from 'react'
import { authenticateToken } from './auth'

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuthComponent = (props: P & { token?: string }) => {
    const token = props.token || ''
    let user

    try {
      user = authenticateToken(token)
    } catch (error) {
      return <p>Acesso negado</p>
    }

    return <WrappedComponent {...props} user={user} />
  }

  // Definindo o display name
  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return WithAuthComponent
}

export default withAuth
