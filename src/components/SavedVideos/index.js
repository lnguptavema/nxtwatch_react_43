import {Component} from 'react'
import {FaMoon, FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import Popup from 'reactjs-popup'
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
  ContainerIndexItems,
  MainContainerHome,
  CardSearch,
  ListItemVideoHome,
  CardVideo,
  VLink,
  ImgThumbnailvideo,
  UL,
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

class SavedVideos extends Component {
  state = {
    currentApiStatus: apiStatus.loading,
  }

  componentDidMount() {
    this.renderVideosHome()
  }

  renderVideosHome = async () => {
    this.setState({
      currentApiStatus: apiStatus.success,
    })
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
            savedVideoList,
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
          if (currentTabValue === tabItems.home) {
            themeButtonChangesavedVideos()
          }
          const navBarHome = () => {
            console.log()
            return (
              <NavContainerHome>
                <>
                  <ImgLogoHome
                    onClick={themeButtonChangeHome}
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                </>
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
                    bgColor={currentTabValue === tabItems.gaming}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeGaming}
                      themeButton={currentTabValue === tabItems.gaming}
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
                    bgColor={currentTabValue === tabItems.savedVideos}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangesavedVideos}
                      themeButton={currentTabValue === tabItems.savedVideos}
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
          const themeButtonChangeVideoItem = () => {
            currentTabContextCallBack(tabItems.videoItem)
          }
          const renderVideoItemDetails = () => {
            const videosArray = savedVideoList
            const renderDate = currentDate => {
              const date = formatDistanceToNow(new Date(currentDate))
              const dateFormat = date.replace('over', '')
              const newdateFormat = dateFormat.replace('almost', '')
              return newdateFormat
            }
            return (
              <UL>
                {videosArray.length > 0 ? (
                  <>
                    {videosArray.map(eachVideo => (
                      <VLink
                        to={`/videos/${eachVideo.id}`}
                        onClick={themeButtonChangeVideoItem}
                      >
                        <ListItemVideoHome key={eachVideo.id}>
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
                        </ListItemVideoHome>
                      </VLink>
                    ))}
                  </>
                ) : (
                  <div>
                    <ImgThumbnailvideo
                      oops
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <h1>No saved videos found</h1>
                    <p>You can save your videos while watching them</p>
                    <p>Save your videos by clicking a button</p>
                  </div>
                )}
              </UL>
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
              <MainHomeRouteContainer>
                <CardIndexRouteHome bannerCard>
                  <CardVideo bannerTrending>
                    {' '}
                    <RiPlayListAddFill />
                  </CardVideo>
                  <h1>Saved Videos</h1>
                </CardIndexRouteHome>
                {renderBasedOnApistatus()}
              </MainHomeRouteContainer>
            )
          }
          const currentTabCallback = () => {
            switch (currentTabValue) {
              case tabItems.savedVideos:
                return videoItemRouteData()
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
                <MainContainerHome data-testid="savedVideos">
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
export default SavedVideos
