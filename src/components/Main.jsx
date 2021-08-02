import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

const Main = () => {

    const { user, isAuthenticated, getIdTokenClaims } = useAuth0()

    const [idTokenSt, setIdTokenSt] = useState('')

    const getId = () => {
        getIdTokenClaims().then((res) => {
            console.log("Id Token Claims: ", res)
            setIdTokenSt(res)
        })
    }

    return (

        <div id="main">
            <h1>Gernal SPA Test App</h1>
            <h2>Current Status</h2>
            <div id="status-container">
                <h3>User:</h3>
                {/* {console.log("user: ", user)} */}
                {!user ? "no user" : (
                    <div>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>email_verified: {user.email_verified ? <span>true</span> : <span>false</span>}</p>
                        <p>sub: {user.sub}</p>
                    </div>
                )}
                <h3>isAuthenticated:</h3>
                {isAuthenticated ? <p>true</p> : <p>false</p>}
                <h3>idToken</h3>
                {!idTokenSt ? <button onClick={getId}>Get Id Token Claims</button> : <div>
                    <p>aud: {idTokenSt.aud}</p>
                    <p>email: {idTokenSt.email}</p>
                    <p>email_verified: {idTokenSt.email_verified}</p>
                    <p>exp: {idTokenSt.exp}</p>
                    <p>iat: {idTokenSt.iat}</p>
                    <p>iss: {idTokenSt.iss}</p>
                    <p>name: {idTokenSt.name}</p>
                    <p>nickname: {idTokenSt.nickname}</p>
                    <p>nonce: {idTokenSt.nonce}</p>
                    <p>picture: {idTokenSt.picture}</p>
                    <p>sub: {idTokenSt.sub}</p>
                    <p>updated_at: {idTokenSt.updated_at}</p>
                    
                </div>}
            </div>
        </div>
    )
}

export default Main