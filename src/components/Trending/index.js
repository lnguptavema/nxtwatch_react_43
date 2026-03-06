import {Component} from 'react'
import {FaMoon, FaHome, FaFire} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ProfileImgHome,
  IndexButton,
  ImgLogoHome,
  VLink,
  ContainerIndexItems,
  MainContainerHome,
  CardSearch,
  CardVideo,
  ListContainer,
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

class Trending extends Component {
  state = {
    currentTab: tabItems.home,
    videosArray: [],
    currentApiStatus: apiStatus.loading,
  }

  componentDidMount() {
    this.renderVideosHome()
  }

  renderVideosHome = async () => {
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
        publishedAt: eachVideo.published_at,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
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
    const {currentTab} = this.state
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
            themeButtonChangeTrending()
          }
          const navBarHome = () => {
            console.log()
            return (
              <NavContainerHome darktheme={darktheme}>
                <>
                  {' '}
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
                  <Button themeButton darktheme={darktheme}>
                    {darktheme ? (
                      <FaMoon onClick={darkthemeChangeNow} />
                    ) : (
                      <FaMoon onClick={darkthemeChangeNow} />
                    )}
                  </Button>{' '}
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
                                darktheme={darktheme}
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
                darktheme={darktheme}
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
                    darktheme={darktheme}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeTrending}
                      themeButton={currentTabValue === tabItems.trending}
                      darktheme={darktheme}
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
                    bgColor={currentTab === tabItems.gaming}
                    darktheme={currentTab === tabItems.gaming}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeGaming}
                      themeButton={currentTab === tabItems.gaming}
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
                    bgColor={currentTab === tabItems.savedVideos}
                    darktheme={currentTab === tabItems.savedVideos}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangesavedVideos}
                      themeButton={currentTab === tabItems.savedVideos}
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
                  CONTACT US{' '}
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

            const renderDate = currentDate => {
              const date = formatDistanceToNow(new Date(currentDate))
              const dateFormat = date.replace('over', '')
              const newdateFormat = dateFormat.replace('almost', '')
              return newdateFormat
            }
            return (
              <UL containerList>
                {videosArray.length > 0 ? (
                  <UL>
                    {videosArray.map(eachVideo => (
                      <ListItemVideoHome key={eachVideo.id}>
                        <VLink
                          to={`/videos/${eachVideo.id}`}
                          onClick={themeButtonChangeVideoItem}
                        >
                          <ListContainer>
                            <ImgThumbnailvideo
                              src={eachVideo.thumbnailUrl}
                              alt={eachVideo.title}
                            />
                            <CardVideo>
                              <div>
                                <ParagraphContactHome
                                  VideoItem
                                  darktheme={darktheme}
                                >
                                  {eachVideo.title}{' '}
                                </ParagraphContactHome>
                                <ParagraphContactHome
                                  VideoItem
                                  darktheme={darktheme}
                                >
                                  {eachVideo.channel.name}{' '}
                                </ParagraphContactHome>
                                <MainHomeRouteContainer cardView>
                                  {' '}
                                  <ParagraphContactHome darktheme={darktheme}>
                                    {eachVideo.viewCount} views{' '}
                                  </ParagraphContactHome>
                                  <ParagraphContactHome darktheme={darktheme}>
                                    {renderDate(eachVideo.publishedAt)} ago
                                  </ParagraphContactHome>
                                </MainHomeRouteContainer>
                              </div>
                            </CardVideo>
                          </ListContainer>
                        </VLink>
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
                    <HeadingindexItemsHome nosearch darktheme={darktheme}>
                      No Search results found
                    </HeadingindexItemsHome>
                    <HeadingindexItemsHome nosearch darktheme={darktheme}>
                      Try different key words or remove search filter
                    </HeadingindexItemsHome>
                    <Button type="button">Retry</Button>
                  </div>
                )}
              </UL>
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
          const trendingRouteData = () => {
            console.log()
            return (
              <MainHomeRouteContainer darktheme={darktheme}>
                <CardIndexRouteHome bannerCard darktheme={darktheme}>
                  <CardVideo bannerTrending darktheme={darktheme}>
                    {' '}
                    <FaFire />
                  </CardVideo>
                  <HeadingindexItemsHome darktheme={darktheme}>
                    Trending
                  </HeadingindexItemsHome>
                </CardIndexRouteHome>
                <div>{renderBasedOnApistatus()}</div>
              </MainHomeRouteContainer>
            )
          }
          const currentTabCallback = () => {
            switch (currentTabValue) {
              case tabItems.trending:
                return trendingRouteData()
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
export default Trending
