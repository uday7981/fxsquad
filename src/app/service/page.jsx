'use client'
import Card from "../ui/Card";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        title='Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80' />
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Services we can help you with'
                subtitle='What Can We Do'
              />
              <Spacing lg='90' md='45' />
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="MT5 Admin Configuration"
                    link=""
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="CRM Support"
                    link=""
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="Trade Copier Support"
                    link=""
                    src="/images/sticks.png"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title="Dedicated Server Support"
                    link=""
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      <Div className="container">
        <SectionHeading
          title='Providing best <br/>services to the clients'
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40' />
        <PricingTableList />
      </Div>
      <Spacing lg='125' md='55' />
      {/* <TestimonialSlider /> */}
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Cta
          title='Expeirence the Future Of <br />Forex with FX Squad'
          btnText='Contact Us'
          btnLink='/contact'
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
