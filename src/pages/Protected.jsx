import { withAuthenticationRequired } from '@auth0/auth0-react'

const Protected = () => {

    return (
        <div id="protected">
            <h1>Protected Page</h1>
            <h2>Super Secret Data</h2>  
        </div>
    )
}

export default withAuthenticationRequired(Protected, {
    loginOptions: {
        foo: "bar"
    },
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
})