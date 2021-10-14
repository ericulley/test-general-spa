import { useState } from "react"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN

const UserInfo = () => {

    const [userData, setUserData] = useState()

    const { getAccessTokenSilently } = useAuth0()

    const fetchUserData = async () => {
        try {
            const aToken = await getAccessTokenSilently()
            const response = await axios.get(`https://${DOMAIN}/userinfo`, 
            { 
                headers: {
                    Authorization: `Bearer ${aToken}`,
                }
            })
            setUserData(response.data)
            console.log(response.data)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div id="auth-container">
            <h3>/UserInfo Endpoint</h3>
            <button onClick={fetchUserData}>/userinfo Endpoint</button>
            {userData ? <p>Check Console</p> : <p>----</p>}
        </div>
    )
}

export default UserInfo