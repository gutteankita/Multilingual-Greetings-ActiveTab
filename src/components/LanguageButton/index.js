import {Component} from 'react'

import {Li, Button} from './styledComponents'

class LanguageButton extends Component {
  handleLanBtn = () => {
    const {buttonDetails, clickBtn} = this.props
    const {id} = buttonDetails
    clickBtn(id)
  }

  render() {
    const {buttonDetails, isActive} = this.props
    const {buttonText, id} = buttonDetails

    return (
      <>
        <Li>
          <Button isActive={isActive} onClick={this.handleLanBtn}>
            {buttonText}
          </Button>
        </Li>
      </>
    )
  }
}

export default LanguageButton
