import { withAuthenticationRequired } from '@auth0/auth0-react'

const StepUp = () => {

    return (
        <div id="protected">
            <h1>Step Up Auth Completed</h1>
            <h2>Super Secret Data</h2>  
        </div>
    )
}

export default withAuthenticationRequired(StepUp, {onRedirecting: () => (<div>Redirecting you to the login page...</div>)})