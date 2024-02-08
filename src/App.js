import './App.css'
import {Component} from 'react'
import {
  AppContainer,
  ButtonsContainer,
  Heading,
  ImgContainer,
} from './styledComponents'

import MultiLangGreeting from './components/MultiLangGreeting'
import LanguageButton from './components/LanguageButton'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeBtnId: languageGreetingsList[0].id,
  }

  onClickLanguageBtn = btnID => {
    this.setState({activeBtnId: btnID})
  }

  getFilteredImges = () => {
    const {activeBtnId} = this.state
    const filteredData = languageGreetingsList.filter(
      each => each.id === activeBtnId,
    )
    return filteredData
  }

  render() {
    const {activeBtnId} = this.state
    const filteredData = this.getFilteredImges()

    return (
      <>
        <AppContainer>
          <Heading>MultiLingual Greetings</Heading>
          <ButtonsContainer>
            {languageGreetingsList.map(each => (
              <LanguageButton
                buttonDetails={each}
                key={each.id}
                clickBtn={this.onClickLanguageBtn}
                isActive={activeBtnId === each.id}
              />
            ))}
          </ButtonsContainer>
          <ImgContainer>
            {filteredData.map(each => (
              <MultiLangGreeting key={each.id} greetingDetails={each} />
            ))}
          </ImgContainer>
        </AppContainer>
      </>
    )
  }
}
export default App
