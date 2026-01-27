import {Component} from 'react'
import {FaMoon, FaHome, FaFire} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect, Link} from 'react-router-dom'
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
              <NavContainerHome>
                <Link to="/">
                  <ImgLogoHome
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                </Link>
                <NavItemsCard>
                  {' '}
                  <Button themeButton>
                    <FaMoon onClick={darkthemeChangeNow} />
                  </Button>{' '}
                  <ProfileImgHome
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <CardVideo pop>
                    <Popup trigger={<Button type="button">Logout</Button>}>
                      {close => (
                        <>
                          <div>
                            <p>Are you sure,you want to logout?</p>
                          </div>
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button type="button" onClick={clickedLogout}>
                            Confirm
                          </button>
                        </>
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
              >
                <Loader type="ThreeDots" color="black" height="50" width="50" />
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
                  >
                    <IndexButton
                      onClick={themeButtonChangeHome}
                      themeButton={currentTabValue === tabItems.home}
                    >
                      {' '}
                      <FaHome />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome>Home</HeadingindexItemsHome>{' '}
                  </IndexsCardHome>{' '}
                </VLink>
                <VLink to="/trending">
                  {' '}
                  <IndexsCardHome
                    onClick={themeButtonChangeTrending}
                    bgColor={currentTabValue === tabItems.trending}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeTrending}
                      themeButton={currentTabValue === tabItems.trending}
                    >
                      {' '}
                      <FaFire />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome>Trending</HeadingindexItemsHome>{' '}
                  </IndexsCardHome>
                </VLink>
                <VLink to="/gaming">
                  {' '}
                  <IndexsCardHome
                    onClick={themeButtonChangeGaming}
                    bgColor={currentTab === tabItems.gaming}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeGaming}
                      themeButton={currentTab === tabItems.gaming}
                    >
                      {' '}
                      <SiYoutubegaming />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome>Gaming</HeadingindexItemsHome>{' '}
                  </IndexsCardHome>{' '}
                </VLink>{' '}
                <VLink to="/saved-videos">
                  <IndexsCardHome
                    onClick={themeButtonChangesavedVideos}
                    bgColor={currentTab === tabItems.savedVideos}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangesavedVideos}
                      themeButton={currentTab === tabItems.savedVideos}
                    >
                      {' '}
                      <RiPlayListAddFill />{' '}
                    </IndexButton>{' '}
                    <HeadingindexItemsHome>
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
              <ContactContainer>
                <p>CONTACT US</p>
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
                <ParagraphContactHome>
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
                                <ParagraphContactHome VideoItem>
                                  {eachVideo.title}{' '}
                                </ParagraphContactHome>
                                <ParagraphContactHome VideoItem>
                                  {eachVideo.channel.name}{' '}
                                </ParagraphContactHome>
                                <MainHomeRouteContainer cardView>
                                  {' '}
                                  <ParagraphContactHome>
                                    {eachVideo.viewCount} views{' '}
                                  </ParagraphContactHome>
                                  <ParagraphContactHome>
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
                    <h1>No Search results found</h1>
                    <p>Try different key words or remove search filter</p>
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
              <MainHomeRouteContainer>
                <CardIndexRouteHome bannerCard>
                  <CardVideo bannerTrending>
                    {' '}
                    <FaFire />
                  </CardVideo>
                  <h1>Trending</h1>
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
              {darktheme ? (
                <ImgLogoHome
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="nxt watch logo"
                />
              ) : (
                <MainContainerHome data-testid="home">
                  {navBarHome()}
                  <CardIndexRouteHome>
                    {' '}
                    <MainIndexContainer>
                      {indexTabItems()}
                      {contactDetails()}
                    </MainIndexContainer>
                    {currentTabCallback()}
                  </CardIndexRouteHome>
                </MainContainerHome>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
