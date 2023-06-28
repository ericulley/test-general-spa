import { useAuth0 } from '@auth0/auth0-react'

const DefaultLoginRoute = () => {
    const { loginWithRedirect } = useAuth0()
    
    const redirectToAuthorize = () => {
        return loginWithRedirect()
    }
    return redirectToAuthorize()
}

export default DefaultLoginRoute