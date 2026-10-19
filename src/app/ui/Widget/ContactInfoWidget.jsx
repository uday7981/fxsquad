import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li style={{ alignItems: 'flex-start' }}>
          <span className='cs-accent_color' style={{ marginRight: '10px', marginTop: '4px' }}>
            <Icon icon="mdi:map-marker" />
          </span>
          <address style={{ flex: 1, minWidth: 0, fontStyle: 'normal', marginBottom: 0, lineHeight: 1.5 }}>
            510, Technohub 4, Silicon Oasis Techno Hub, Dubai Silicon Oasis, Dubai, U.A.E
          </address>
        </li>
        <li>
          <a href="tel:+971525286484">
            <span className='cs-accent_color' style={{ marginRight: '10px' }}>
              <Icon icon="material-symbols:add-call-rounded" />
            </span>
            +971 52 528 6484
          </a>
        </li>
      </ul>
    </>
  )
}
