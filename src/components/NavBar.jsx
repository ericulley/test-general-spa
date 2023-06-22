// Dependencies
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
// import Cookies from 'js-cookie'

const NavBar = () => {

    const { user, isLoading, loginWithRedirect, loginWithPopup, getAccessTokenSilently, logout, isAuthenticated, } = useAuth0()

    const [accessMsg, setAccessMsg] = useState("")

    // Enable SSO Check on Load
    // useEffect( async () => {
        // console.log('***useEffect***')
        // if (!isAuthenticated && !Cookies.get('auth0.is.authenticated')) {
        //     console.log("Line 14: This Effect Was Triggered")
        //     const token = await getAccessTokenSilently({
        //         organization: 'org_cVrNdGU2SoPSvZoT'
        //     });
        //     console.log('Line 17, Token: ', token);
        // }
      
        // const token2 = await getAccessTokenSilently({
        //     organization: 'org_cVrNdGU2SoPSvZoT'
        // });
        // console.log('Line 17, Token: ', token2);
    //   }, [])

    const login = async () => {
        loginWithRedirect({
            // connection: "sms",
            // response_mode: "web_message",
            // scope: "enroll",
            // audience: "https://eric-culley-auth0.us.auth0.com/mfa/"
            // prompt: 'consent',
            // login_hint: 'eric.culley@auth0.com',
            // screen_hint: 'signup'
            // organization: 'org_cVrNdGU2SoPSvZoT'
            // ui_locales: 'fr-FR',
            // test_param3: 'foo-bar',
            // appState: {
            //     // returnTo: '/protected',
            //     test: true
            //   }
        }).then(() => { 
            if (!user) {
                setAccessMsg("Access Denied: Please logout and try again.")
            } 
            
        })
    }

    const login2 = async () => {

        // LOGIN WITH POPUP
        await loginWithPopup({
            // max_age: 0,
            // scope: '',
            // manageAccount: true
        }).then(async () => { 
            try {
                const t = await getAccessTokenSilently()
                console.log("AWAITED T: ", t)
            } catch (err) {
                console.log("ERROR: ", err)
            }
        })

        // LOGIN WITH AN ORG
        // loginWithRedirect({
        //     // organization: 'org_bMWVaffCfWlnITLQ'
        // }).then((res) => {
        //     console.log(res)
        // })
       
        // getAccessTokenSilently({
        //     organization: 'org_bMWVaffCfWlnITLQ'
        // }).then((res) => {
        //     console.log(res)
        // })
        
        // console.log(isAuthenticated)
        // try {
        //     const sesh = await getAccessTokenSilently({ignoreCache: true})
        //     if (!!sesh) {
        //         console.log(true)
        //     }
        // } catch (err) {
        //     console.log(err)
        // }
        

        // getIdTokenClaims({
        //     // scope: 'login2:clicked',
        //     org_id: 'org_9ybsU1dN2dKfDkBi'
        // }).then((res) => {
        //     console.log("GET ID TOKEN CLAIMS: ", res)
        // })


    }

    const appLogout = async () => {
        await logout({
            federated: true,
            // returnTo: 'https://idp.acmetest.org/v2/logout',
            // client_id: process.env.REACT_APP_CLIENT_ID
            // returnTo: 'https://samltool.io'
        })
        console.log("Logout Check")
    }

    return (
        <nav id="navbar-container">
          <p>Auth0</p>
          {isAuthenticated ? <p>Authenticated</p> : <p>Not Authenticated</p>}
          <div id="auth-panel">
            {!isLoading && /*!user && !accessMsg && */ (
                <button onClick={login}>Log In</button>
            )}

            {/* {!isLoading && !user && accessMsg && <p>{accessMsg}</p>} */}

            {!isLoading && (
                <button onClick={appLogout}>Log Out</button>
            )}

            {!isLoading && !accessMsg && (
                <button onClick={login2}>Log In 2</button>
            )}
          </div>
        </nav>
    )
}

export default NavBar