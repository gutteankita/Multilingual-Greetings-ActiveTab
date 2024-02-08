import {Component} from 'react'

import {
 
  Img,
 
} from './styleComponents'

class MultiLangGreeting extends Component {
  render() {
    const {greetingDetails} = this.props
    const {imageUrl, id, imageAltText} = greetingDetails
    return (
      <>
        <Img src={imageUrl} alt={imageAltText} />
      </>
    )
  }
}

export default MultiLangGreeting
