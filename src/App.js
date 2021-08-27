// Dependencies
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
//Components
import NavBar from './components/NavBar'
import Main from './components/Main'
import RequestData from './components/RequestData'
import UserInfo from './components/UserInfo'

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID
const AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE

const App = () => {

  const {  } = useAuth0()

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      redirectUri={window.location.origin}
      // Set audience to the identifier of the API you created
      audience={AUDIENCE}
      // useRefreshTokens={true}
      scope="read:auth"
      // sessionCheckExpiryDays is basically tryAutoAuthorize
      // sessionCheckExpiryDays={.01}
    >
      <div className="App">
        <NavBar />
        <Main />
        <RequestData />
        <UserInfo />
      </div>
    </Auth0Provider>
  )
}

export default App;