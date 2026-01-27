import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const UL = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
  height: 80vh;
  width: 80vw;
`
export const ImgThumbnailvideo = styled.img`
  height: ${props => (props.nosearchImg ? '50vh' : '23vh')};
  width: ${props => (props.nosearchImg ? '70vh' : '20vw')};
`

export const CardVideo = styled.div`
  display: flex;
  text-decoration: none;
`

export const VLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export const ListItemVideoHome = styled.li`
  list-style-type: none;
  margin: 5px;
  width: 20vw;
  color: black;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`

export const CardSearch = styled.div`
  background-color: ${props => (props.loader ? 'white' : null)};
  display: ${props => (props.loader ? 'flex' : null)};
  justify-content: ${props => (props.loader ? 'center' : null)};
  height: ${props => (props.loader ? '100vh' : null)};
`

export const InputSearch = styled.input`
  height: 6vh;
  width: 30vw;
  padding: 10px;
  margin-top: 20px;
  margin-left: 20px;
  outline: none;
  color: ${props => (props.darktheme ? 'white' : null)};

  background-color: ${props => (props.darktheme ? 'black' : null)};
`
export const ButtonSearch = styled.button`
  height: 6vh;
  cursor: pointer;
  outline: none;
  border: #64748b 1px solid;
  width: 6vw;

  background-color: ${props => (props.darktheme ? '#606060' : null)};
  border: ${props => (props.darktheme ? '0px solid' : null)};
  color: ${props => (props.darktheme ? '#cccccc' : null)};
`

export const GetButton = styled.button`
  border: 1.5px solid black;
  display: flex;
  background-color: transparent;
  height: 7vh;
  width: 9vw;
  justify-content: center;
  align-items: center;
`

export const ButtonClose = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0px solid;
  height: 5vh;
  width: 2vw;
  margin: 10px;
  font-size: 30px;
  outline: none;
`

export const MainHomeRouteContainer = styled.div`
  display: flex;
  width: ${props => (props.cardView ? '30vh' : null)};
  flex-direction: ${props => (props.cardView ? 'row' : 'column')};
  justify-content: ${props => (props.cardView ? 'center' : null)};
  align-items: ${props => (props.cardView ? 'center' : null)};
`

export const ParagraphContactHome = styled.p`
  width: ${props => (props.BuyPara ? '23vw' : '13vw')};
  width: ${props => (props.VideoItem ? '15vw' : null)};
  margin: ${props => (props.VideoItem ? '0px' : null)};
  text-decoration: none;
  margin-top: ${props => (props.VideoItemView ? '0px' : null)};

  color: ${props => (props.darktheme ? 'white' : null)};
`

export const ImgContactIcons = styled.img`
  height: ${props => (props.bannerHome ? '40vh' : '5vh')};
  width: ${props => (props.bannerHome ? '38vw' : '4vh')};
  padding: ${props => (props.bannerHome ? '20px' : null)};
  align-self: ${props => (props.bannerHome ? 'center' : null)};
`

export const MainIndexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  flex-direction: column;
`

export const MiniCard = styled.div`
  width: 70vw;
  padding: 20px;
  height: 40vh;
  background-size: cover;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
`

export const ContactContainer = styled.div`
  padding: 40px;
`

export const ContainerIndexItems = styled.div`
  width: 20vw;
  margin-top: 40px;
`
export const HeadingindexItemsHome = styled.h1`
  font-size: 20px;
  width: 10vw;
  color: ${props => (props.darktheme ? 'white' : null)};
`

export const NavItemsCard = styled.div`
  display: flex;
  width: 15vw;
  justify-content: space-between;
  align-items: center;
`

export const MainContainerHome = styled.div`
  height: 100%;
  width: 100vw;
  background-color: ${props => (props.darktheme ? '#181818' : null)};
`

export const CardIndexRouteHome = styled.div`
  display: flex;
  justify-content: ${props => (props.bannerCard ? 'space-around' : null)};
  height: ${props => (props.bannerCard ? '40vh' : null)};
  width: ${props => (props.bannerCard ? '80vw' : null)};
`

export const IndexsCardHome = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10vw;
  align-items: center;
  outline: none;
  height: 7vh;
  width: 20vw;
  background-color: ${props => (props.bgColor ? '#e2e8f0' : 'null')};
  cursor: pointer;

  background-color: ${props => (props.darktheme ? '#424242' : null)};
`
export const ProfileImgHome = styled.img`
  height: 5vh;
  width: 3vw;
  margin-top: ${props => (props.VideoItem ? '20px' : null)};
`
export const NavContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.darktheme ? 'black' : 'white')};
  padding: 20px;
`
export const IndexButton = styled.button`
  border: ${props => (props.themeButton ? '0px solid' : '0px solid blue')};
  color: ${props => (props.themeButton ? 'red' : null)};
  color: ${props => (props.darktheme ? 'red' : null)};
  color: ${props => (props.darkthemenon ? '#909090' : 'null')};
  height: 5vh;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: 5vw;
`

export const Button = styled.button`
  background-color: ${props => (props.themeButton ? 'transparent' : 'white')};
  border: ${props => (props.themeButton ? '0px solid' : '1px solid blue')};
  color: ${props => (props.themeButton ? null : 'blue')};
  height: ${props => (props.reactionLike ? '10vh' : '5vh')};

  color: ${props => (props.darktheme ? 'white' : 'black')};
  background-color: ${props => (props.darktheme ? 'black' : 'white')};
  border: ${props => (props.darktheme ? '0px solid' : '0px solid blue')};
  border: ${props => (props.logbtn ? '1px solid' : '0px solid blue')};
  outline: none;
  cursor: pointer;

  border: ${props => (props.retrybtn ? '1px solid' : null)};
  margin-left: ${props => (props.retrybtn ? '130px' : null)};
`
export const ImgLogoHome = styled.img`
  height: 7vh;
  width: 10vw;
`
