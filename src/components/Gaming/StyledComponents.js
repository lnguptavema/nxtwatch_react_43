import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const UL = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
  width: 80vw;
  height: 70vh;
`

export const VLink = styled(Link)`
  color: black;
  text-decoration: none;

  width: ${props => (props.popupText ? '20vw' : null)};
  margin-bottom: ${props => (props.popupText ? '20px' : null)};
`

export const ImgThumbnailvideo = styled.img`
  height: ${props => (props.nosearchImg ? '50vh' : '60vh')};
  width: ${props => (props.nosearchImg ? '70vh' : '20vw')};
  padding: ${props => (props.nosearchImg ? null : '0px')};
  margin: ${props => (props.nosearchImg ? null : '0px')};
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

  display: ${props => (props.reactionVideoItem ? 'flex' : null)};
  margin: ${props => (props.reactionVideoItem ? '0px' : null)};
  justify-content: ${props =>
    props.reactionVideoItem ? 'space-between' : null};
  align-items: ${props => (props.reactionVideoItem ? 'center' : null)};
  width: ${props => (props.reactionVideoItem ? '80vw' : null)};
  height: ${props => (props.reactionVideoItem ? '10vh' : null)};

  display: ${props => (props.reaction ? 'flex' : null)};
  justify-content: ${props => (props.reaction ? 'space-around' : null)};
  align-items: ${props => (props.reaction ? 'center' : null)};
  width: ${props => (props.reaction ? '5vw' : null)};

  width: ${props => (props.mainCardVideoItem ? '65vw' : null)};
  flex-direction: ${props => (props.mainCardVideoItem ? 'column' : null)};

  height: ${props => (props.popup ? '30vh' : null)};
  width: ${props => (props.popup ? '25vw' : null)};
  padding: ${props => (props.popup ? '40px' : null)};
  flex-direction: ${props => (props.mainCardPopup ? 'column' : null)};
  flex-direction: ${props => (props.popup ? 'column' : null)};
  justify-content: ${props => (props.mainCardPopup ? 'center' : null)};
  align-self: ${props => (props.popup ? 'center' : null)};
  height: ${props => (props.mainCardPopup ? '100vh' : null)};
  width: ${props => (props.mainCardPopup ? '100vw' : null)};
  margin: ${props => (props.mainCardPopup ? '0px' : null)};
  color: ${props => (props.mainCardPopup ? 'red' : null)};
  justify-content: ${props => (props.popup ? 'center' : null)};
  align-items: ${props => (props.popup ? 'center' : null)};
  background-color: ${props => (props.popup ? 'white' : null)};
  border-radius: ${props => (props.popup ? '10px' : null)};

  background-color: ${props =>
    props.mainCardPopup ? 'rgba(0, 0, 0, 0.7)' : null};

  background-color: ${props => (props.darktheme ? '#383838' : null)};
`

export const ListItemVideoHome = styled.li`
  list-style-type: none;
  margin: 35px;
  outline: none;
  cursor: pointer;
  margin-bottom: 0px;
  margin-top: 0px;
  height: 80vh;
  width: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardSearch = styled.div`
  background-color: ${props => (props.loader ? 'white' : null)};
  display: ${props => (props.loader ? 'flex' : null)};
  margin-left: ${props => (props.loader ? '500px' : null)};
  margin-top: ${props => (props.loader ? '70px' : null)};
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
  margin: ${props => (props.VideoItem ? '0px' : '0px')};
  margin-top: ${props => (props.VideoItemView ? '0px' : '0px')};

  width: ${props => (props.popupText ? '20vw' : null)};
  color: ${props => (props.popupText ? 'black' : null)};
  margin-bottom: ${props => (props.popupText ? '20px' : null)};

  color: ${props => (props.darktheme ? 'white' : null)};
`

export const ImgContactIcons = styled.img`
  height: ${props => (props.bannerHome ? '40vh' : '5vh')};
  width: ${props => (props.bannerHome ? '38vw' : '4vh')};
  padding: ${props => (props.bannerHome ? '20px' : null)};
  align-self: ${props => (props.bannerHome ? 'center' : null)};

  color: ${props => (props.confirmBtn ? 'white' : null)};
  background-color: ${props => (props.confirmBtn ? '#3b82f6' : null)};
  margin-left: ${props => (props.confirmBtn ? '10px' : null)};

  background-color: ${props => (props.cancelBtn ? '#ebebeb' : null)};
  border: ${props => (props.cancelBtn ? '1px solid' : null)};
  color: ${props => (props.cancelBtn ? 'black' : null)};
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
`

export const ContainerIndexItems = styled.div`
  width: 20vw;
  margin-top: 40px;

  background-color: ${props => (props.darktheme ? '#212121' : null)};
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

  background-color: ${props => (props.darktheme ? ' #212121' : null)};
`

export const MainContainerHome = styled.div`
  height: 100%;
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

  background-color: ${props => (props.themeButton ? 'transparent' : 'white')};
  border: ${props => (props.themeButton ? '0px solid' : '1px solid blue')};
  color: ${props => (props.themeButton ? null : 'blue')};
  height: 5vh;
  outline: none;
  cursor: pointer;
  width: 5vw;
`

export const Button = styled.button`
  background-color: ${props => (props.themeButton ? 'transparent' : 'white')};
  border: ${props => (props.themeButton ? '0px solid' : '1px solid blue')};
  color: ${props => (props.themeButton ? null : 'blue')};
  height: ${props => (props.reactionLike ? '10vh' : '5vh')};
  outline: none;
  cursor: pointer;

  width: ${props => (props.reactionLike ? '30vw' : '5vw')};
  background-color: ${props =>
    props.reactionLike ? 'transparent' : 'transparent'};
  border: ${props => (props.reactionLike ? '0px solid' : 'null')};
  color: ${props => (props.reactionLike ? null : null)};
  display: ${props => (props.reactionLike ? 'flex' : null)};
  flex-direction: ${props => (props.reactionLike ? 'row' : null)};
  justify-content: ${props => (props.reactionLike ? 'center' : null)};
  align-items: ${props => (props.reactionLike ? 'center' : null)};
  color: ${props => (props.liked ? 'blue' : null)};
  color: ${props => (props.disliked ? 'blue' : null)};
  color: ${props => (props.save ? 'blue' : null)};

  color: ${props => (props.confirmBtn ? 'white' : null)};
  background-color: ${props => (props.confirmBtn ? '#3b82f6' : null)};
  margin-left: ${props => (props.confirmBtn ? '10px' : null)};

  background-color: ${props => (props.cancelBtn ? '#ebebeb' : null)};
  border: ${props => (props.cancelBtn ? '1px solid' : null)};
  color: ${props => (props.cancelBtn ? 'black' : null)};

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
