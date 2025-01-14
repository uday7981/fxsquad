import React from 'react'
import Div from '../Div'

export default function TextWidget({ text }) {
  return (
    <Div className="cs-text_widget">
      <p>{text}</p>
    </Div>
  )
}
