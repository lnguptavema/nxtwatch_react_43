import {Component} from 'react'
import {FaMoon, FaHome, FaFire} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'
import {IoSearchOutline} from 'react-icons/io5'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Redirect, Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ProfileImgHome,
  VLink,
  IndexButton,
  ImgLogoHome,
  ContainerIndexItems,
  MainContainerHome,
  CardSearch,
  CardVideo,
  Button,
  ListItemVideoHome,
  IndexsCardHome,
  ImgThumbnailvideo,
  HeadingindexItemsHome,
  InputSearch,
  ButtonSearch,
  NavItemsCard,
  NavContainerHome,
  ContactContainer,
  MainIndexContainer,
  ImgContactIcons,
  ParagraphContactHome,
  CardIndexRouteHome,
  MiniCard,
  MainHomeRouteContainer,
  ButtonClose,
  GetButton,
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

class Home extends Component {
  state = {
    videosArray: [],
    standardVideosAraray: [],
    currentApiStatus: apiStatus.loading,
    inputSearch: '',
  }

  componentDidMount() {
    this.renderVideosHome()
  }

  renderBySearch = async inputValue => {
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${inputValue}`
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
    } else {
      this.setState({currentApiStatus: apiStatus.failure})
    }
  }

  renderVideosHome = async () => {
    this.setState({currentApiStatus: apiStatus.loading})
    const apiUrl = 'https://apis.ccbp.in/videos/all?search='
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
        standardVideosAraray: updatedData,
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
            closedBanner,
            currentTabValue,
            currentTabContextCallBack,
            closeCallback,
          } = value
          const darkthemeChangeNow = () => {
            darkthemeChange()
          }
          const clickedLogout = () => {
            Cookies.remove('jwt_token')
            const {history} = this.props
            history.replace('/login')
          }
          const clickedClose = () => {
            closeCallback()
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
          const themeButtonChangeVideoItem = () => {
            currentTabContextCallBack(tabItems.videoItem)
          }
          const navBarHome = () => {
            console.log()
            return (
              <NavContainerHome darktheme={darktheme}>
                <Link to="/">
                  {darktheme ? (
                    <ImgLogoHome
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <ImgLogoHome
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}
                </Link>
                <NavItemsCard>
                  <Button
                    darktheme={darktheme}
                    type="button"
                    data-testid="theme"
                  >
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
                  <CardVideo pop>
                    <Popup
                      trigger={
                        <Button logbtn darktheme={darktheme} type="button">
                          Logout
                        </Button>
                      }
                    >
                      {close => (
                        <>
                          <div>
                            <p>Are you sure, you want to logout</p>
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
                  alt="failure view"
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
                    darktheme={darktheme}
                  >
                    <IndexButton
                      onClick={themeButtonChangeHome}
                      themeButton={currentTabValue === tabItems.home}
                      darktheme={darktheme}
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
                    darktheme={currentTab === tabItems.trending}
                    onClick={themeButtonChangeTrending}
                    bgColor={currentTabValue === tabItems.trending}
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
                    darktheme={currentTab === tabItems.gaming}
                    onClick={themeButtonChangeGaming}
                    bgColor={currentTab === tabItems.gaming}
                  >
                    {' '}
                    <IndexButton
                      onClick={themeButtonChangeGaming}
                      darkthemenon={darktheme}
                      themeButton={currentTab === tabItems.gaming}
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
                    darktheme={currentTab === tabItems.savedVideos}
                    onClick={themeButtonChangesavedVideos}
                    bgColor={currentTab === tabItems.savedVideos}
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
              <ContactContainer>
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

            const renderDate = currentDate => {
              const date = formatDistanceToNow(new Date(currentDate))
              const dateFormat = date.replace('over', '')
              const newdateFormat = dateFormat.replace('almost', '')
              return newdateFormat
            }
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
                            alt="video thumbnail"
                          />
                          <CardVideo>
                            <div>
                              <ProfileImgHome
                                VideoItem
                                src={eachVideo.channel.profileImageUrl}
                                alt="channel logo"
                              />
                            </div>{' '}
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
                        </VLink>{' '}
                      </ListItemVideoHome>
                    ))}
                  </UL>
                ) : (
                  <div>
                    <ImgThumbnailvideo
                      nosearchImg
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                      alt="no videos"
                    />
                    <h1>No Search results found</h1>
                    <p>Try different key words or remove search filter</p>
                    <Button
                      retrybtn
                      type="button"
                      onClick={this.renderVideosHome}
                    >
                      Retry
                    </Button>
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
          const homeRouteData = () => {
            const {inputSearch, standardVideosAraray} = this.state

            const enteringValue = event => {
              this.setState({inputSearch: event.target.value})
            }
            const clickedSearch = () => {
              const video = standardVideosAraray.filter(eachVideo =>
                eachVideo.title
                  .toLowerCase()
                  .includes(inputSearch.toLowerCase()),
              )
              this.setState({videosArray: video})
              this.renderBySearch(inputSearch)
            }

            return (
              <MainHomeRouteContainer>
                {closedBanner ? null : (
                  <CardIndexRouteHome bannerCard data-testid="banner">
                    <MiniCard data-testid="banner">
                      <ImgLogoHome
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <ParagraphContactHome BuyPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </ParagraphContactHome>
                      <GetButton>GET IT NOW</GetButton>
                    </MiniCard>
                    <ButtonClose
                      data-testid="close"
                      close
                      type="button"
                      onClick={clickedClose}
                    >
                      x
                    </ButtonClose>
                  </CardIndexRouteHome>
                )}
                <div>
                  <CardSearch>
                    {' '}
                    <InputSearch
                      value={inputSearch}
                      onChange={enteringValue}
                      placeholder="Search"
                      type="search"
                      darktheme={darktheme}
                    />
                    <ButtonSearch
                      data-testid="searchButton"
                      onClick={clickedSearch}
                      type="button"
                      darktheme={darktheme}
                    >
                      <IoSearchOutline />
                    </ButtonSearch>
                  </CardSearch>
                  {renderBasedOnApistatus()}
                </div>
              </MainHomeRouteContainer>
            )
          }
          const currentTabCallback = () => {
            switch (currentTabValue) {
              case tabItems.home:
                return homeRouteData()
              case tabItems.savedVideos:
                return <Redirect to="/saved-videos" />
              default:
                return null
            }
          }

          return (
            <MainContainerHome data-testid="home" darktheme={darktheme}>
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
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
