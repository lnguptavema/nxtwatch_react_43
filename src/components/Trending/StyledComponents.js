import styled from 'styled-components'
import {Link} from 'react-router-dom'

//                 export const J = styled.h` `
export const UL = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  overflow: auto;
  height: 70vh;

  height: ${props => (props.containerList ? null : null)};
  display: ${props => (props.containerList ? null : null)};
  flex-direction: ${props => (props.containerList ? null : null)};
  justify-content: ${props => (props.containerList ? null : null)};
  align-items: ${props => (props.containerList ? null : null)};

  overflow: ${props => (props.containerList ? 'scroll' : null)};
`
export const ImgThumbnailvideo = styled.img`
  height: ${props => (props.nosearchImg ? '50vh' : '30vh')};
  width: ${props => (props.nosearchImg ? '70vh' : '40vw')};
`

export const CardVideo = styled.div`
  display: flex;
  background-color: ${props => (props.bannerTrending ? '#d7dfe9' : null)};
  color: ${props => (props.bannerTrending ? 'red' : null)};
  height: ${props => (props.bannerTrending ? '10vh' : null)};
  width: ${props => (props.bannerTrending ? '10vh' : null)};
  margin: ${props => (props.bannerTrending ? '20px' : '20px')};
  justify-content: ${props => (props.bannerTrending ? 'center' : null)};
  align-items: ${props => (props.bannerTrending ? 'center' : null)};
  border-radius: ${props => (props.bannerTrending ? '30px' : null)};

  display: ${props => (props.popup ? 'flex' : null)};
  flex-direction: ${props => (props.popup ? 'column' : null)};
  background-color: ${props => (props.popup ? '#ffffff' : null)};
  border: ${props => (props.popup ? '0px solid' : null)};
  border-radius: ${props => (props.popup ? '10px' : null)};
  justify-content: ${props => (props.popup ? 'center' : null)};
  align-items: ${props => (props.popup ? 'center' : null)};

  height: ${props => (props.popup ? '30vh' : null)};
  width: ${props => (props.popup ? '25vw' : null)};
  padding: ${props => (props.popup ? '0px' : null)};

  flex-direction: ${props => (props.mainCardPopup ? 'column' : null)};
  justify-content: ${props => (props.mainCardPopup ? 'center' : null)};
  align-self: ${props => (props.popup ? 'center' : null)};
  height: ${props => (props.mainCardPopup ? '100vh' : null)};
  width: ${props => (props.mainCardPopup ? '100vw' : null)};
  margin: ${props => (props.mainCardPopup ? '0px' : null)};

  background-color: ${props =>
    props.mainCardPopup ? 'rgba(0, 0, 0, 0.7)' : null};

  background-color: ${props => (props.darktheme ? '#383838' : null)};
`
export const VLink = styled(Link)`
  color: black;
  text-decoration: none;

  width: ${props => (props.popupText ? '20vw' : null)};
  margin-bottom: ${props => (props.popupText ? '20px' : null)};
`

export const ListContainer = styled.div`
  display: flex;
`

export const ListItemVideoHome = styled.li`
  list-style-type: none;
  margin: 15px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  outline: none;
  cursor: pointer;
  justify-content: space-between;
`

export const CardSearch = styled.div`
  background-color: ${props => (props.loader ? 'white' : null)};
  display: ${props => (props.loader ? 'flex' : null)};
  justify-content: ${props => (props.loader ? 'center' : null)};
  height: ${props => (props.loader ? '100vh' : null)};

  background-color: ${props => (props.darktheme ? 'black' : null)};
`

export const MainHomeRouteContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.cardView ? 'row' : 'column')};
  justify-content: ${props => (props.cardView ? 'center' : null)};
  align-items: ${props => (props.cardView ? 'center' : null)};

  background-color: ${props => (props.darktheme ? 'black' : null)};
`

export const ParagraphContactHome = styled.p`
  width: ${props => (props.BuyPara ? '23vw' : '13vw')};
  width: ${props => (props.VideoItem ? '25vw' : null)};
  margin: ${props => (props.VideoItem ? '0px' : null)};
  margin-top: ${props => (props.VideoItemView ? '0px' : null)};

  width: ${props => (props.popupText ? '20vw' : null)};
  margin-bottom: ${props => (props.popupText ? '20px' : null)};

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

  background-color: ${props => (props.darktheme ? ' #212121' : 'null')};
`

export const ContactContainer = styled.div`
  padding: 40px;

  background-color: ${props => (props.darktheme ? ' #212121' : null)};
`

export const ContainerIndexItems = styled.div`
  width: 20vw;
  margin-top: 40px;

  background-color: ${props => (props.darktheme ? ' #212121' : null)};
`
export const HeadingindexItemsHome = styled.h1`
  font-size: 20px;
  width: 10vw;

  color: ${props => (props.darktheme ? 'white' : null)};
  width: ${props => (props.nosearch ? '30vw' : null)};
`

export const NavItemsCard = styled.div`
  display: flex;
  width: 15vw;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => (props.darktheme ? ' #212121' : null)};
`

export const MainContainerHome = styled.div`
  height: 100vh;
  width: 100vw;

  background-color: ${props => (props.darktheme ? 'black' : null)};
`

export const CardIndexRouteHome = styled.div`
  display: flex;
  align-items: ${props => (props.bannerCard ? 'center' : null)};
  flex-direction: ${props => (props.bannerCard ? 'row' : null)};
  background-color: ${props => (props.bannerCard ? '#ebebeb' : null)};
  justify-content: ${props => (props.bannerCard ? 'flex-start' : null)};
  height: ${props => (props.bannerCard ? '20vh' : null)};
  width: ${props => (props.bannerCard ? '80vw' : null)};

  color: ${props => (props.darktheme ? 'white' : null)};

  background-color: ${props => (props.darktheme ? '#181818' : null)};
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
  padding: 20px;

  background-color: ${props => (props.darktheme ? ' #212121' : 'white')};
`
export const IndexButton = styled.button`
  border: ${props => (props.themeButton ? '0px solid' : '0px solid blue')};
  color: ${props => (props.themeButton ? 'red' : 'null')};
  height: 5vh;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: 5vw;

  color: ${props => (props.darktheme ? 'red' : null)};
  color: ${props => (props.darkthemenon ? '#909090' : 'null')};
`

export const ButtonIcon = styled.button`
  color: 'red';
  color: ${props => (props.darktheme ? 'white' : 'black')};
  background-color: ${props => (props.darktheme ? 'black' : 'white')};
  border: ${props => (props.darktheme ? '0px solid' : '0px solid blue')};
  background-color: ${props => (props.darktheme ? ' #212121' : null)};

  border: ${props => (props.themeButton ? '0px solid' : '1px solid blue')};
  height: 5vh;
  outline: none;
  cursor: pointer;
  width: 5vw;

  color: ${props => (props.confirmBtn ? 'white' : null)};
  background-color: ${props => (props.confirmBtn ? '#3b82f6' : null)};
  margin-left: ${props => (props.confirmBtn ? '10px' : null)};

  border: ${props => (props.cancelBtn ? '1px solid' : null)};
`

export const Button = styled.button`
  background-color: ${props => (props.themeButton ? 'transparent' : 'white')};
  border: ${props => (props.themeButton ? '0px solid' : '1px solid blue')};
  color: ${props => (props.themeButton ? null : 'blue')};
  height: 5vh;
  outline: none;
  cursor: pointer;
  width: 5vw;

  color: ${props => (props.darktheme ? 'white' : 'blue')};
  background-color: ${props => (props.darktheme ? 'black' : 'white')};
  border: ${props => (props.darktheme ? '1px solid' : '1px solid blue')};
  background-color: ${props => (props.darktheme ? ' #212121' : null)};
`

export const ImgLogoHome = styled.img`
  height: 7vh;
  width: 10vw;
  cursor: pointer;
  outline: none;
`
