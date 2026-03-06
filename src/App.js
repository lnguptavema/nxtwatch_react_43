import {Component} from 'react'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Protected from './components/Protected'
import ThemeContext from './context/ThemeContext'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

const tabItems = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
  videoItem: 'VIDEO ITEM',
}

class App extends Component {
  state = {
    darktheme: false,
    themeButton: true,
    closedBanner: false,
    currentTabValue: tabItems.home,
    liked: false,
    disliked: false,
    save: false,
    savedVideoList: [],
  }

  darkthemeChange = () => {
    const {darktheme} = this.state
    this.setState({darktheme: !darktheme})
  }

  themeButtonChangeClicked = () => {
    const {themeButton} = this.state
    this.setState({themeButton: !themeButton})
  }

  closeCallback = () => {
    this.setState({closedBanner: true})
  }

  currentTabContextCallBack = tabId => {
    this.setState({currentTabValue: tabId})
  }

  clickedLikeVideo = () => {
    const {liked} = this.state
    if (liked) {
      this.setState({liked: false, disliked: false})
    } else {
      this.setState({liked: true, disliked: false})
    }
  }

  clickedSavedVideo = () => {
    const {save} = this.state
    this.setState({save: !save})
  }

  clickedDislikeVideo = () => {
    const {disliked} = this.state
    if (disliked) {
      this.setState({disliked: false, liked: false})
    } else {
      this.setState({disliked: true, liked: false})
    }
  }

  addedVideoSavedList = video => {
    const {savedVideoList} = this.state
    const findingVideoINList = savedVideoList.find(
      eachVideo => eachVideo.id === video.id,
    )
    if (findingVideoINList === undefined) {
      const addingSaved = {...video, saved: true}
      const updatedSavedList = [...savedVideoList, addingSaved]
      this.setState({savedVideoList: updatedSavedList})
    } else {
      const removigfromList = savedVideoList.filter(
        eachVideo => eachVideo.id !== video.id,
      )
      this.setState({savedVideoList: removigfromList})
    }
  }

  renderHome = () => {
    const {save} = this.state
    this.setState({save})
  }

  render() {
    const {
      darktheme,
      themeButton,
      closedBanner,
      currentTabValue,
      liked,
      disliked,
      save,
      savedVideoList,
    } = this.state
    return (
      <ThemeContext.Provider
        value={{
          darktheme,
          closeCallback: this.closeCallback,
          closedBanner,
          currentTabContextCallBack: this.currentTabContextCallBack,
          currentTabValue,
          themeButton,
          themeButtonChangeClicked: this.themeButtonChangeClicked,
          darkthemeChange: this.darkthemeChange,
          liked,
          clickedLikeVideo: this.clickedLikeVideo,
          clickedDislikeVideo: this.clickedDislikeVideo,
          disliked,
          clickedSavedVideo: this.clickedSavedVideo,
          save,
          renderHome: this.renderHome,
          addedVideoSavedList: this.addedVideoSavedList,
          savedVideoList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Protected exact path="/" component={Home} />
          <Protected exact path="/gaming" component={Gaming} />
          <Protected exact path="/trending" component={Trending} />
          <Protected exact path="/saved-videos" component={SavedVideos} />
          <Protected exact path="/videos/:id" component={VideoItemDetails} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
