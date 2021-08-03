import { useState } from "react"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"

const RequestData = () => {

    const [protectedData, setProtectedData] = useState({})

    const { getAccessTokenSilently } = useAuth0()

    const getProtectedData = async () => {
        try {
            const aToken = await getAccessTokenSilently()
            const response = await axios.get('http://localhost:8080/auth', 
            { 
                headers: {
                    Authorization: `Bearer ${aToken}`,
                }
            })
            setProtectedData(response.data)
            console.log(response)
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <div id="auth-container">
            <h3>Request Protected Data</h3>
            <button onClick={getProtectedData}>Protected Endpoint</button>
            {protectedData ? <p>{protectedData.message}</p> : <p>----</p>}
        </div>
    )
}

export default RequestData