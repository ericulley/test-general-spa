import { useAuth0 } from '@auth0/auth0-react'
import { useSearchParams } from 'react-router-dom';

const DefaultLoginRoute = () => {

    const { loginWithRedirect } = useAuth0()
    let [searchParams, setSearchParams] = useSearchParams();

    const invitation = searchParams.get('invitation');
    const organization = searchParams.get('organization');
    
    const redirectToAuthorize = (params) => {
        if (organization && invitation) {
            console.table({organization: organization, invitation: invitation})
            loginWithRedirect({
                authorizationParams: {
                    organization: organization,
                    invitation: invitation    
                }
            })
        } else {
            return loginWithRedirect()
        }
    }
    return redirectToAuthorize()
}

export default DefaultLoginRoute