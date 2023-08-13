import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
// Components
import RequestData from '../components/RequestData'
import UserInfo from '../components/UserInfo'
import axios from 'axios'

const Main = () => {

    const { user, isAuthenticated, getIdTokenClaims, getAccessTokenSilently } = useAuth0()

    const [idTokenSt, setIdTokenSt] = useState('')

    const getId = () => {
        getIdTokenClaims().then((res) => {
            console.log("Id Token Claims: ", res)
            setIdTokenSt(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    const getToken = async () => {
        const token = await getAccessTokenSilently({audience: "https://eric-culley-auth0.us.auth0.com/mfa/"})
        console.log("ACCESS TOKEN", token)
        const mfaResponse = await axios({
            method: 'GET', 
            url: 'https://eric-culley-auth0.us.auth0.com/mfa/authenticators',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            }

        })
        console.log("MFA Response: ", mfaResponse);
        // const ls = JSON.parse(localStorage.getItem("@@auth0spajs@@::HbzOhfgL01pBqw3gUS66rm22qgqAdhnE::test-general-nodeAPI::openid profile email offline_access"));
        // let rt = ls.body.refresh_token;
        // console.log(rt);
    }

    return (
        <div id="main">
            <h1>Gernal SPA Test App</h1>
            <h2>Current Status</h2>
            <div id="status-container">
                <h3>User:</h3>
                {console.log("user: ", user)}
                {!user ? "no user" : (
                    <div>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>email_verified: {user.email_verified === true || user.email_verified === "true" ? <span>true</span> : <span>false</span>}</p>
                        <p>sub: {user.sub}</p>
                    </div>
                )}
                <h3>isAuthenticated:</h3>
                <button onClick={getToken}>Check</button>
                {isAuthenticated ? <p>true</p> : <p>false</p>}
                <h3>idToken</h3>
                <button onClick={getId}>Get Token Claims</button>
                {!idTokenSt ? <p></p> : <div>
                    <p>email: {idTokenSt.email}</p>
                    <p>email_verified: {idTokenSt.email_verified ?idTokenSt.email_verified.toString(): "null"}</p>
                    <p>exp: {idTokenSt.exp}</p>
                    <p>iat: {idTokenSt.iat}</p>
                    <p>iss: {idTokenSt.iss}</p>
                    <p>aud: {idTokenSt.aud}</p>
                    <p>name: {idTokenSt.name}</p>
                    <p>nickname: {idTokenSt.nickname}</p>
                    {/* <p>nonce: {idTokenSt.nonce}</p> */}
                    {/* <p>picture: {idTokenSt.picture}</p> */}
                    <p>sub: {idTokenSt.sub}</p>
                    <p>updated_at: {idTokenSt.updated_at}</p>
                    <p>org_id: {idTokenSt.org_id}</p>
                    
                </div>}
            </div>
            <RequestData />
            <UserInfo />
        </div>
    )
}

export default Main