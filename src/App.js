// Dependencies
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
// Pages
import Main from './pages/Main'
import Protected from './pages/Protected'

// Components
import NavBar from './components/NavBar'
import ErrorPage from './pages/Error'


// const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN
const C_DOMAIN = process.env.REACT_APP_AUTH0_C_DOMAIN
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID
const AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE

// const LAYER0_DOMAIN = process.env.REACT_APP_LAYER0_DOMAIN
// const LAYER0_CLIENT_ID = process.env.REACT_APP_LAYER0_CLIENT_ID

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    if (appState && appState.returnTo) {
      let params = ''
      for (const [key, value] of Object.entries(appState)) {
        if (key !== 'returnTo') {
          params += `${key}=${value}&`
        }
      }
      navigate(`${appState.returnTo}?${params}`)
    } else {
      navigate(window.location.pathname);
    }   
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

// const l0Check = () => {
//   console.log("Check")
// }

const App = () => {
  return (
      <Router>
        <Auth0ProviderWithRedirectCallback
          domain={C_DOMAIN}
          clientId={CLIENT_ID}
          redirectUri={window.location.origin}
          // redirectUri={'http://localhost:3001/profile'}
          // redirectUri={'https://jwt.io'}
          audience={AUDIENCE}
          // scope={'read:messsage'}
          // sessionCheckExpiryDays is basically tryAutoAuthorize
          // sessionCheckExpiryDays={.01}
          useRefreshTokens={true}
          cacheLocation={'localstorage'}
          // organization={'org_cVrNdGU2SoPSvZoT'}
          // customParam={'test_param'}
          // screen_hint={'signup'}
          // login_hint={'bob@bob.com'}
          >
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Main />} />
              <Route path="/protected" element={<Protected />} />
              {/* <Route path="/step-up" element={<StepUp />} /> */}
              {/* <Route path="/idp-login" element={<IdpLogin />} /> */}
              <Route path="/error" element={<ErrorPage />} />
            </Routes>
          </div>
        </Auth0ProviderWithRedirectCallback>
      </Router>
  )
}

export default App;