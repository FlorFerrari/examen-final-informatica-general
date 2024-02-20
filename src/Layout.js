import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import App from './App';
function Layout() {
   // eslint-disable-next-line
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      <App/>
    </ReactLenis>
  )
}

export default Layout;