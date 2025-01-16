import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          <a href="tel:+97152789565">
            <span className='cs-accent_color' style={{ marginRight: '10px' }}>
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
            +971 52 789 5656
          </a>
        </li>
        <li>
          <a href="mailto:dipen@fxsquad.ae">
            <span className='cs-accent_color' style={{ marginRight: '10px' }}>
              <Icon icon="mdi:envelope" />
            </span>
            dipen@fxsquad.ae
          </a>
        </li>
        <li>
          <a href="https://instagram.com/fxsquad_mena" target="_blank" rel="noopener noreferrer">
            <span className='cs-accent_color' style={{ marginRight: '10px' }}>
              <Icon icon="mdi:instagram" />
            </span>
            fxsquad_mena
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/fx-squad/" target="_blank" rel="noopener noreferrer">
            <span className='cs-accent_color' style={{ marginRight: '10px' }}>
              <Icon icon="mdi:linkedin" />
            </span>
            Fx Squad
          </a>
        </li>
      </ul>
    </>
  )
}
