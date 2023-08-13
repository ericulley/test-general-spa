import { useAuth0 } from '@auth0/auth0-react'
import { useSearchParams } from 'react-router-dom';

const DefaultLoginRoute = () => {

    const { loginWithRedirect } = useAuth0()
    let [searchParams] = useSearchParams();

    const invitation = searchParams.get('invitation');
    const organization = searchParams.get('organization');
    
    const redirectToAuthorize = () => {
        console.table({invitation: invitation, organization: organization})
        if (organization && invitation) {
            console.table({organization: organization, invitation: invitation})
            return loginWithRedirect({
                    organization: organization,
                    invitation: invitation    
            })
        } else {
            return loginWithRedirect()
        }
    }

    return redirectToAuthorize()
}

export default DefaultLoginRoute