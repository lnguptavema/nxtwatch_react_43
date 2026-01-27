import {ImgNot, Div} from './StyledComponents'

const NotFound = () => {
  console.log()
  return (
    <Div>
      <ImgNot
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found.</p>
    </Div>
  )
}
export default NotFound
