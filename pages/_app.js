import '../styles/globals.css'
import {ProjectContextProvider} from "../context/ProjectContext"

export default function App({ Component, pageProps }) {
  return (
    <ProjectContextProvider>
        <Component {...pageProps} />
    </ProjectContextProvider>
  )
}
