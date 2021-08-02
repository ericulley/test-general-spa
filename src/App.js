// Dependencies
import { Auth0Provider } from '@auth0/auth0-react'
//Components
import NavBar from './components/NavBar'
import Main from './components/Main'

const App = () => {

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      // Set audience to the identifier of the API you created
      // audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    >
      <div className="App">
        <NavBar />
        <Main />
      </div>
    </Auth0Provider>
  )
}

export default App;