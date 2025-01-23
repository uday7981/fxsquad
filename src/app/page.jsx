'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';

// Hero Social Links
const heroSocialLinks = [
  // {
  //   name: 'Behance',
  //   links: '/',
  // },
  // {
  //   name: 'Twitter',
  //   links: '/',
  // },
];
// FunFact Data
const funfaceData = [
  {
    title: 'Technical Solutions',
    factNumber: '24/5',
  },
  {
    title: 'Back-Office Support',
    factNumber: '100%',
  },
  {
    title: 'Operations Consulting',
    factNumber: '50+',
  },
  {
    title: 'Global Clients',
    factNumber: '200+',
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: 'Industry Pioneers',
    href: '',
    src: '/images/in.jpg',
    width: 400,
    height: 300,
    loading: "eager",
    priority: true
  },
  {
    title: 'Innovative Solutions',
    href: '',
    src: '/images/inn.jpg',
    width: 400,
    height: 300,
    loading: "eager",
    priority: true
  },
  {
    title: 'Tailored for You​',
    href: '',
    src: '/images/tailored.jpg',
    width: 400,
    height: 300,
    loading: "eager",
    priority: true
  },
  {
    title: 'Trust and Reliability',
    href: '',
    src: '/images/tr.jpg',
    width: 400,
    height: 300,
    loading: "eager",
    priority: true
  },
];

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Effective <br/> Technical <br/> Solutions in the <br/> Forex Market"
        style={{
          fontSize: '120px',
          fontWeight: 700,
          marginBottom: '60px',
          lineHeight: '1.25em'
        }}
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        // socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        videoUrl="/public/video/vi.mp4"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our Core Services"
          subtitle="With deep understanding of industry nuances, we provide turn-key solutions in Forex including Technical Solutions, Back-Office Support, Operations Consulting, Brokerage Setup, and Business Development."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}


      {/* Start Regulation Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-4">
            <SectionHeading
              title="Global Forex License Regulations"
              subtitle="Regulatory Compliance"
              btnText=""
              btnLink=""
            />
            <Div className="cs-regulation_text">
              <p>The world of Forex trading is vast and complex, requiring strict adherence to regulations to ensure fair practices and protect investors. Obtaining a Forex license is a critical step for any business looking to operate in this space.</p>
            </Div>
            <Spacing lg="90" md="45" />
          </Div>
          <Div className="col-xl-8">
            <Div className="cs-regulation_grid">
              <Div className="row g-4">
                {[
                  { region: 'Australia', authority: 'ASIC' },
                  { region: 'Cyprus', authority: 'CySEC' },
                  { region: 'UAE (Dubai)', authority: 'DGCX • DFSA • SCA' },
                  { region: 'Abu Dhabi', authority: 'ADGM' },
                  { region: 'Estonia', authority: 'FINANTSINSPEKTSIOON' },
                  { region: 'Hong Kong', authority: 'SFC' },
                  { region: 'Kenya', authority: 'CMA' },
                  { region: 'Mauritius', authority: 'FSC Mauritius' },
                  { region: 'Seychelles', authority: 'FSA Seychelles' },
                  { region: 'United States', authority: 'NFA' },
                  { region: 'South Africa', authority: 'FSCA' }
                ].map((item, index) => (
                  <Div className="col-lg-4 col-sm-6" key={index}>
                    <Div
                      className="cs-regulation_item cs-style1"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '15px',
                        padding: '25px',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        transform: 'translateY(0)',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 15px 45px 0 rgba(31, 38, 135, 0.47)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))';
                        // Enhanced flare effect
                        const flare = e.currentTarget.querySelector('.card-flare');
                        if (flare) {
                          flare.style.left = '-100%';
                          flare.style.opacity = '1';
                          flare.style.transition = 'all 0.8s ease';
                          flare.style.left = '100%';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))';
                        // Reset flare
                        const flare = e.currentTarget.querySelector('.card-flare');
                        if (flare) {
                          flare.style.left = '-100%';
                          flare.style.opacity = '0';
                        }
                      }}
                    >
                      <h3 style={{
                        fontSize: '22px',
                        marginBottom: '10px',
                        color: '#fff',
                        position: 'relative',
                        zIndex: 1
                      }}>{item.region}</h3>
                      <p style={{
                        fontSize: '16px',
                        color: 'rgba(255,255,255,0.8)',
                        margin: 0,
                        position: 'relative',
                        zIndex: 1
                      }}>{item.authority}</p>
                      <Div
                        className="card-flare"
                        style={{
                          position: 'absolute',
                          width: '60px',
                          height: '100%',
                          top: 0,
                          left: '-100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                          transform: 'skewX(-25deg)',
                          transition: 'none',
                          opacity: 0,
                          pointerEvents: 'none'
                        }}
                      />
                    </Div>
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Regulation Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="MT5 Admin Configuration"
                    link=""
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="CRM Support"
                    link=""
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Trade Copier Support"
                    link=""
                    src="/images/sticks.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Dedicated Server Support"
                    link=""
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Why Choose FXSQUAD"
            subtitle="Why Choose Us"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      {/* <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div> */}
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      {/* <TestimonialSlider /> */}
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Join The FX Squad Journey" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Expeirence the Future Of <br /> Forex with FX Squad"
          btnText="Contact Us"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
