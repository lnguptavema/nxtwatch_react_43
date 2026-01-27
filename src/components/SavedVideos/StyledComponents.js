import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const UL = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: scroll;
  height: 90vh;
  width: 90vw;
`

export const VLink = styled(Link)`
  color: black;
  text-decoration: none;
`

export const ImgThumbnailvideo = styled.img`
  height: ${props => (props.nosearchImg ? '25vh' : '30vh')};
  width: ${props => (props.nosearchImg ? '70vh' : '40vw')};
`

export const CardVideo = styled.div`
  display: flex;
  background-color: ${props => (props.bannerTrending ? '#d7dfe9' : null)};
  color: ${props => (props.bannerTrending ? 'red' : null)};
  height: ${props => (props.bannerTrending ? '10vh' : null)};
  width: ${props => (props.bannerTrending ? '10vh' : null)};
  margin: ${props => (props.bannerTrending ? '0px' : '20px')};
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
`
export const ParagraphContactHome = styled.p`
  width: ${props => (props.BuyPara ? '23vw' : '13vw')};
  width: ${props => (props.VideoItem ? '25vw' : null)};
  margin: ${props => (props.VideoItem ? '0px' : null)};
  margin-top: ${props => (props.VideoItemView ? '0px' : null)};
  margin-left: ${props => (props.dateVideoItem ? '10px' : null)};
  width: ${props => (props.hrTag ? '75vw' : null)};

  width: ${props => (props.descVideoItem ? '70vw' : null)};
`

export const ListItemVideoHome = styled.li`
  list-style-type: none;
  margin: 1px;
  width: 70vw;
  display: flex;
  outline: none;
  cursor: pointer;
  justify-content: space-between;
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
  outline: none;
`
export const ButtonSearch = styled.button`
  height: 6vh;
  cursor: pointer;
  outline: none;
  border: #64748b 1px solid;
  width: 6vw;
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
`

export const MainHomeRouteContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.cardView ? 'row' : 'column')};
  justify-content: ${props => (props.cardView ? 'center' : null)};
  align-items: ${props => (props.cardView ? 'center' : null)};
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
`

export const NavItemsCard = styled.div`
  display: flex;
  width: 15vw;
  justify-content: space-between;
  align-items: center;
`

export const MainContainerHome = styled.div`
  height: 100vh;
  width: 100vw;
`

export const CardIndexRouteHome = styled.div`
  display: flex;
  padding: ${props => (props.bannerCard ? '0px' : null)};
  margin: ${props => (props.bannerCard ? '0px' : null)};
  align-items: ${props => (props.bannerCard ? 'center' : null)};
  flex-direction: ${props => (props.bannerCard ? 'row' : null)};
  background-color: ${props => (props.bannerCard ? '#ebebeb' : null)};
  justify-content: ${props => (props.bannerCard ? 'flex-start' : null)};
  height: ${props => (props.bannerCard ? '20vh' : null)};
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
`
export const IndexButton = styled.button`
  border: ${props => (props.themeButton ? '0px solid' : '0px solid blue')};
  color: ${props => (props.themeButton ? 'red' : 'null')};
  height: 5vh;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  width: 5vw;
`

export const ImgLogoHome = styled.img`
  height: 7vh;
  width: 10vw;
  outline: none;
  cursor: pointer;
`
