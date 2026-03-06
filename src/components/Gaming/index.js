import {Component} from 'react'
import {FaMoon, FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
import {RiPlayListAddFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ProfileImgHome,
  IndexButton,
  ButtonIcon,
  ImgLogoHome,
  ContainerIndexItems,
  MainContainerHome,
  CardSearch,
  VLink,
  CardVideo,
  Button,
  ListItemVideoHome,
  IndexsCardHome,
  ImgThumbnailvideo,
  HeadingindexItemsHome,
  NavItemsCard,
  NavContainerHome,
  ContactContainer,
  MainIndexContainer,
  ImgContactIcons,
  ParagraphContactHome,
  CardIndexRouteHome,
  MainHomeRouteContainer,
  UL,
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

class Gaming extends Component {
  state = {
    videosArray: [],
    currentApiStatus: apiStatus.loading,
  }

  componentDidMount() {
    this.renderVideosHome()
  }

  renderVideosHome = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosArray: updatedData,
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
          } = value
          const darkthemeChangeNow = () => {
            darkthemeChange()
          }

          const clickedLogout = () => {
            Cookies.remove('jwt_token')
            this.renderVideosHome()
          }

          const themeButtonChangeHome = () => {
            currentTabContextCallBack(tabItems.home)
            const {history} = this.props
            history.replace('/')
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
          const themeButtonChangeVideoItem = () => {
            currentTabContextCallBack(tabItems.videoItem)
          }
          if (currentTabValue === tabItems.home) {
            themeButtonChangeGaming()
          }
          const navBarHome = () => {
            console.log()
            return (
              <NavContainerHome darktheme={darktheme}>
                <>
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
                </>
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
                  <CardVideo>
                    <Popup
                      modal
                      trigger={
                        <Button logbtn darktheme={darktheme} type="button">
                          Logout
                        </Button>
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
                              <Button
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                                cancelBtn
                              >
                                Cancel
                              </Button>
                              <Button
                                confirmBtn
                                type="button"
                                onClick={clickedLogout}
                              >
                                Confirm
                              </Button>
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
                loader
                className="loader-container"
                data-testid="loader"
                darktheme={darktheme}
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
              <ContainerIndexItems darktheme={darktheme}>
                <VLink to="/">
                  <IndexsCardHome
                    onClick={themeButtonChangeHome}
                    bgColor={currentTabValue === tabItems.home}
                    darktheme={currentTabValue === tabItems.home}
                  >
                    <IndexButton
                      onClick={themeButtonChangeHome}
                      themeButton={currentTabValue === tabItems.home}
                      darkthemenon={darktheme}
                    >
                      {' '}
                      <FaHome />
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
                    darktheme={currentTabValue === tabItems.home}
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
                    darktheme={darktheme}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeGaming}
                      themeButton={currentTabValue === tabItems.gaming}
                      darktheme={darktheme}
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
          const renderVideoItem = () => {
            const {videosArray} = this.state
            return (
              <>
                {videosArray.length > 0 ? (
                  <UL>
                    {videosArray.map(eachVideo => (
                      <ListItemVideoHome key={eachVideo.id}>
                        <VLink
                          to={`/videos/${eachVideo.id}`}
                          onClick={themeButtonChangeVideoItem}
                        >
                          {' '}
                          <ImgThumbnailvideo
                            src={eachVideo.thumbnailUrl}
                            alt={eachVideo.title}
                          />
                          <CardVideo>
                            <ParagraphContactHome
                              VideoItem
                              darktheme={darktheme}
                            >
                              {eachVideo.title}
                            </ParagraphContactHome>
                            <ParagraphContactHome
                              VideoItem
                              darktheme={darktheme}
                            >
                              {eachVideo.title}
                            </ParagraphContactHome>
                            <MainHomeRouteContainer cardView>
                              {' '}
                              <ParagraphContactHome darktheme={darktheme}>
                                {eachVideo.viewCount} views{' '}
                              </ParagraphContactHome>
                            </MainHomeRouteContainer>
                          </CardVideo>
                        </VLink>{' '}
                      </ListItemVideoHome>
                    ))}
                  </UL>
                ) : (
                  <div>
                    {' '}
                    <ImgThumbnailvideo
                      nosearchImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                      alt="no videos"
                    />
                    <HeadingindexItemsHome darktheme={darktheme}>
                      No Search results found
                    </HeadingindexItemsHome>
                    <HeadingindexItemsHome darktheme={darktheme}>
                      Try different key words or remove search filter
                    </HeadingindexItemsHome>
                    <Button type="button">Retry</Button>
                  </div>
                )}
              </>
            )
          }
          const renderBasedOnApistatus = () => {
            const {currentApiStatus} = this.state
            switch (currentApiStatus) {
              case apiStatus.success:
                return renderVideoItem()
              case apiStatus.failure:
                return renderFailure()
              case apiStatus.loading:
                return renderLoading()
              default:
                return null
            }
          }
          const gamingRouteData = () => {
            console.log()
            return (
              <MainHomeRouteContainer darktheme={darktheme}>
                <CardIndexRouteHome bannerCard darktheme={darktheme}>
                  <CardVideo bannerTrending darktheme={darktheme}>
                    <SiYoutubegaming />
                  </CardVideo>
                  <HeadingindexItemsHome darktheme={darktheme}>
                    Gaming
                  </HeadingindexItemsHome>
                </CardIndexRouteHome>
                <CardVideo>{renderBasedOnApistatus()}</CardVideo>
              </MainHomeRouteContainer>
            )
          }
          const currentTabCallback = () => {
            switch (currentTabValue) {
              case tabItems.gaming:
                return gamingRouteData()
              case tabItems.savedVideos:
                return <Redirect to="/saved-videos" />
              default:
                return null
            }
          }

          return (
            <>
              <MainContainerHome data-testid="home">
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

export default Gaming
