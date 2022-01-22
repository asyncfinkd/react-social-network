import React from 'react'
import { Popup } from 'semantic-ui-react'

function MyPopup({ content, children }: any) {
  return <Popup inverted content={content} trigger={children} />
}

export default MyPopup
