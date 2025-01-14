import React from 'react';
import parse from 'html-react-parser';
import Div from '../Div';
import Button from '../Button';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
}) {
  return (
    <Div className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1" style={{ position: 'relative', backgroundColor: '#000000' }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '60%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/video/vi.mp4" type="video/mp4" />
      </video>
      <Div className="cs-shape_1" style={{ zIndex: 1 }} />
      <Div className="cs-shape_1" style={{ zIndex: 1 }} />
      <Div className="cs-shape_1" style={{ zIndex: 1 }} />
      <Div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
