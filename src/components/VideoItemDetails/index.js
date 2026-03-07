import {Component} from 'react'
import {FaMoon, FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
import {RiPlayListAddFill} from 'react-icons/ri'
import {BiLike, BiDislike} from 'react-icons/bi'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect} from 'react-router-dom'
import ReactPlayer from 'react-player'
import ThemeContext from '../../context/ThemeContext'

import {
  ProfileImgHome,
  LogBtn,
  VLink,
  ButtonIcon,
  IndexButton,
  ImgLogoHome,
  ContainerIndexItems,
  MainContainerHome,
  CardSearch,
  CardVideo,
  ImgThumbnailvideo,
  Button,
  IndexsCardHome,
  HeadingindexItemsHome,
  NavItemsCard,
  NavContainerHome,
  ContactContainer,
  MainIndexContainer,
  ImgContactIcons,
  ParagraphContactHome,
  CardIndexRouteHome,
  MainHomeRouteContainer,
} from './StyledComponents'

const tabItems = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
  videoItem: 'VIDEO ITEM',
}

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class VideoItemDetails extends Component {
  state = {
    videosArray: [],
    currentApiStatus: apiStatus.loading,
  }

  componentDidMount() {
    this.renderVideosHome()
  }

  renderForamatData = data => ({
    id: data.id,
    title: data.title,
    videoUrl: data.video_url,
    thumbnailUrl: data.thumbnail_url,
    description: data.description,
    viewCount: data.view_count,
    publishedAt: data.published_at,
    saved: data.saved,
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
  })

  renderVideosHome = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const fomatedData = this.renderForamatData(data.video_details)
      this.setState({
        videosArray: fomatedData,
        currentApiStatus: apiStatus.success,
      })
    } else {
      this.setState({currentApiStatus: apiStatus.failure})
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {
            darkthemeChange,
            darktheme,
            currentTabValue,
            currentTabContextCallBack,
            clickedLikeVideo,
            liked,
            clickedDislikeVideo,
            disliked,
            savedVideoList,
            clickedSavedVideo,
            addedVideoSavedList,
          } = value
          const darkthemeChangeNow = () => {
            darkthemeChange()
          }
          const clickedLogout = () => {
            Cookies.remove('jwt_token')
          }
          const themeButtonChangeHome = () => {
            currentTabContextCallBack(tabItems.home)
          }
          const themeButtonChangeTrending = () => {
            currentTabContextCallBack(tabItems.trending)
          }
          const themeButtonChangesavedVideos = () => {
            currentTabContextCallBack(tabItems.savedVideos)
          }
          const themeButtonChangeGaming = () => {
            currentTabContextCallBack(tabItems.gaming)
          }
          const clickedLike = () => {
            clickedLikeVideo()
          }
          const clickedDislike = () => {
            clickedDislikeVideo()
          }
          const clickedSavedVideoItem = () => {
            const {videosArray} = this.state
            addedVideoSavedList(videosArray)
            clickedSavedVideo()
          }

          const navBarHome = () => {
            console.log()
            return (
              <NavContainerHome darktheme={darktheme}>
                {darktheme ? (
                  <ImgLogoHome
                    onClick={themeButtonChangeHome}
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="nxt watch logo"
                  />
                ) : (
                  <ImgLogoHome
                    onClick={themeButtonChangeHome}
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                )}
                <NavItemsCard darktheme={darktheme}>
                  {' '}
                  <ButtonIcon themeButton darktheme={darktheme}>
                    {darktheme ? (
                      <FaMoon onClick={darkthemeChangeNow} />
                    ) : (
                      <FaMoon onClick={darkthemeChangeNow} />
                    )}
                  </ButtonIcon>
                  <ProfileImgHome
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <CardVideo darktheme={darktheme}>
                    <Popup
                      modal
                      trigger={
                        <LogBtn logbtn darktheme={darktheme} type="button">
                          Logout
                        </LogBtn>
                      }
                    >
                      {close => (
                        <CardVideo mainCardPopup>
                          <CardVideo popup darktheme={darktheme}>
                            <div>
                              <ParagraphContactHome
                                popupText
                                darktheme={darktheme}
                              >
                                Are you sure, you want to logout ?
                              </ParagraphContactHome>
                            </div>
                            <CardVideo btns>
                              <ButtonIcon
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                                cancelBtn
                                darktheme={darktheme}
                              >
                                Cancel
                              </ButtonIcon>
                              <ButtonIcon
                                darktheme={darktheme}
                                confirmBtn
                                type="button"
                                onClick={clickedLogout}
                              >
                                Confirm
                              </ButtonIcon>
                            </CardVideo>
                          </CardVideo>
                        </CardVideo>
                      )}
                    </Popup>
                  </CardVideo>
                </NavItemsCard>
              </NavContainerHome>
            )
          }
          const renderLoading = () => {
            console.log()
            return (
              <CardSearch
                darktheme={darktheme}
                loader
                className="loader-container"
                data-testid="loader"
              >
                {darktheme ? (
                  <Loader
                    type="ThreeDots"
                    color="white"
                    height="50"
                    width="50"
                  />
                ) : (
                  <Loader
                    type="ThreeDots"
                    color="black"
                    height="50"
                    width="50"
                  />
                )}
              </CardSearch>
            )
          }
          const renderFailure = () => {
            console.log()
            return (
              <div>
                <ImgThumbnailvideo
                  oops
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                  alt="failure"
                />
                <h1>Oops! Something Went Wrong</h1>
                <p>
                  We are having some trouble to complete your reqeust. Please
                  try again.
                </p>
                <Button type="button">Retry</Button>
              </div>
            )
          }
          const indexTabItems = () => {
            console.log()
            return (
              <ContainerIndexItems>
                <VLink to="/">
                  <IndexsCardHome
                    onClick={themeButtonChangeHome}
                    bgColor={currentTabValue === tabItems.home}
                    darktheme={currentTabValue === tabItems.savedVideos}
                  >
                    <IndexButton
                      onClick={themeButtonChangeHome}
                      themeButton={currentTabValue === tabItems.home}
                      darkthemenon={darktheme}
                    >
                      {' '}
                      <FaHome />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome darktheme={darktheme}>
                      Home
                    </HeadingindexItemsHome>{' '}
                  </IndexsCardHome>{' '}
                </VLink>
                <VLink to="/trending">
                  {' '}
                  <IndexsCardHome
                    onClick={themeButtonChangeTrending}
                    bgColor={currentTabValue === tabItems.trending}
                    darktheme={currentTabValue === tabItems.savedVideos}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeTrending}
                      themeButton={currentTabValue === tabItems.trending}
                      darkthemenon={darktheme}
                    >
                      {' '}
                      <FaFire />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome darktheme={darktheme}>
                      Trending
                    </HeadingindexItemsHome>{' '}
                  </IndexsCardHome>
                </VLink>
                <VLink to="/gaming">
                  {' '}
                  <IndexsCardHome
                    onClick={themeButtonChangeGaming}
                    bgColor={currentTabValue === tabItems.gaming}
                    darktheme={currentTabValue === tabItems.savedVideos}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeGaming}
                      themeButton={currentTabValue === tabItems.gaming}
                      darkthemenon={darktheme}
                    >
                      {' '}
                      <SiYoutubegaming />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome darktheme={darktheme}>
                      Gaming
                    </HeadingindexItemsHome>{' '}
                  </IndexsCardHome>{' '}
                </VLink>{' '}
                <VLink to="/saved-videos">
                  <IndexsCardHome
                    onClick={themeButtonChangesavedVideos}
                    bgColor={currentTabValue === tabItems.savedVideos}
                    darktheme={currentTabValue === tabItems.savedVideos}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangesavedVideos}
                      themeButton={currentTabValue === tabItems.savedVideos}
                      darkthemenon={darktheme}
                    >
                      {' '}
                      <RiPlayListAddFill />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome darktheme={darktheme}>
                      {' '}
                      Saved videos{' '}
                    </HeadingindexItemsHome>{' '}
                  </IndexsCardHome>
                </VLink>{' '}
              </ContainerIndexItems>
            )
          }
          const contactDetails = () => {
            console.log()
            return (
              <ContactContainer darktheme={darktheme}>
                <ParagraphContactHome darktheme={darktheme}>
                  CONTACT US
                </ParagraphContactHome>
                <ImgContactIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                  alt="facebook logo"
                />{' '}
                <ImgContactIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />{' '}
                <ImgContactIcons
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />{' '}
                <ParagraphContactHome darktheme={darktheme}>
                  Enjoy! Now to see your channels and recommendations!
                </ParagraphContactHome>
              </ContactContainer>
            )
          }
          const renderVideosaved = () => {
            const {videosArray} = this.state
            const isSaved = savedVideoList.some(
              video => video.id === videosArray.id,
            )
            // let val = false
            // if (savedVideoList.length > 0) {
            //   const findvideo = savedVideoList.findIndex(
            //     eachVideo => eachVideo.id === videosArray.id,
            //   )

            //   if (findvideo !== -1) {
            //     val = true
            //   }
            // }
            return isSaved ? 'Saved' : 'Save'
          }
          const renderVideoItemDetails = () => {
            const {videosArray} = this.state
            const renderDate = currentDate => {
              const date = formatDistanceToNow(new Date(currentDate))
              const dateFormat = date.replace('over', '')
              const newdateFormat = dateFormat.replace('almost', '')
              return newdateFormat
            }
            return (
              <CardVideo mainCardVideoItem darktheme={darktheme}>
                <ReactPlayer url={videosArray.videoUrl} />
                <p>{videosArray.title} </p>
                <CardVideo reactionVideoItem darktheme={darktheme}>
                  <CardVideo darktheme={darktheme}>
                    <p>{videosArray.viewCount} </p>
                    <ParagraphContactHome dateVideoItem darktheme={darktheme}>
                      {renderDate(videosArray.publishedAt)} ago
                    </ParagraphContactHome>
                  </CardVideo>
                  <CardVideo darktheme={darktheme}>
                    <CardVideo reaction darktheme={darktheme}>
                      <Button
                        darktheme={darktheme}
                        reactionLike
                        liked={liked}
                        onClick={clickedLike}
                        type="button"
                      >
                        <BiLike />
                        Like
                      </Button>
                    </CardVideo>
                    <CardVideo reaction darktheme={darktheme}>
                      <Button
                        reactionLike
                        onClick={clickedDislike}
                        disliked={disliked}
                        type="button"
                      >
                        <BiDislike />
                        Dislike
                      </Button>{' '}
                    </CardVideo>{' '}
                    <CardVideo reaction darktheme={darktheme}>
                      <Button
                        reactionLike
                        onClick={clickedSavedVideoItem}
                        save={renderVideosaved() === 'Saved'}
                        type="button"
                      >
                        <RiPlayListAddFill />
                        <p type="button" save={renderVideosaved() === 'Saved'}>
                          {renderVideosaved() === 'Saved' ? 'Saved' : 'Save'}
                        </p>
                      </Button>
                    </CardVideo>
                  </CardVideo>
                </CardVideo>
                <br />
                <CardVideo darktheme={darktheme}>
                  <div>
                    <ProfileImgHome
                      VideoItem
                      src={videosArray.channel.profileImageUrl}
                      alt={videosArray.channel.name}
                    />
                  </div>{' '}
                  <div>
                    <ParagraphContactHome VideoItem darktheme={darktheme}>
                      {videosArray.channel.name}{' '}
                    </ParagraphContactHome>{' '}
                    <ParagraphContactHome darktheme={darktheme}>
                      {videosArray.channel.subscriberCount} subscribers
                    </ParagraphContactHome>
                    <ParagraphContactHome descVideoItem darktheme={darktheme}>
                      {videosArray.description}
                    </ParagraphContactHome>{' '}
                  </div>
                </CardVideo>
              </CardVideo>
            )
          }
          const renderBasedOnApistatus = () => {
            const {currentApiStatus} = this.state
            switch (currentApiStatus) {
              case apiStatus.success:
                return renderVideoItemDetails()
              case apiStatus.failure:
                return renderFailure()
              case apiStatus.loading:
                return renderLoading()
              default:
                return null
            }
          }
          const videoItemRouteData = () => {
            console.log()
            return (
              <MainHomeRouteContainer darktheme={darktheme}>
                <div>{renderBasedOnApistatus()}</div>
              </MainHomeRouteContainer>
            )
          }
          const currentTabCallback = () => {
            switch (currentTabValue) {
              case tabItems.videoItem:
                return videoItemRouteData()
              case tabItems.home:
                return <Redirect to="/" />
              default:
                return null
            }
          }

          return (
            <>
              <MainContainerHome data-testid="home" darktheme={darktheme}>
                {navBarHome()}
                <CardIndexRouteHome>
                  {' '}
                  <MainIndexContainer darktheme={darktheme}>
                    {indexTabItems()}
                    {contactDetails()}
                  </MainIndexContainer>
                  {currentTabCallback()}
                </CardIndexRouteHome>
              </MainContainerHome>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
