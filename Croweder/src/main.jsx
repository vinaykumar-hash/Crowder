import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
const CLient_ID = "262120898026-vlvr3ve9039901nrrduf5rrvq9r6evjs.apps.googleusercontent.com"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLient_ID}>
    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
