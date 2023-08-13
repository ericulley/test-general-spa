import { useAuth0 } from '@auth0/auth0-react'
import { useSearchParams } from 'react-router-dom'

const IdpLogin = () => {

    const { loginWithRedirect } = useAuth0()
    let [searchParams] = useSearchParams();

    const redirectToAuthorize = () => {
        const connection = searchParams.get('connection');
        if (connection) {
            return loginWithRedirect({
                    connection: connection,    
            })
        } else {
            return loginWithRedirect()
        }
    }

    return redirectToAuthorize()
}

export default IdpLogin