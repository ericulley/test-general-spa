import {  } from '@auth0/auth0-react'

const IdpLogin = () => {

    return (
        <div id="idp-login">
            <h1>Initializing Login from Identity Provider</h1>
        </div>
    )
}

export default (IdpLogin, {onRedirecting: () => (<div>Redirecting you to the login page...</div>)})