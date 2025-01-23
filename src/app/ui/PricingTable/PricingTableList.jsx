import React from 'react'
import { useState } from 'react'
import PricingTable from '.'
import Section from '../Div'
import Spacing from '../Spacing'

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly')
  return (
    <Section className="position-relative">
      {/* <ul className="cs-tab_links cs-style1 cs-mp0 cs-primary_font">
        <li className={tab === 'monthly' ? "active" : ""} onClick={() => setTab('monthly')}>Monthly</li>
        <li className={tab === 'yearly' ? "active" : ""} onClick={() => setTab('yearly')}>Yearly</li>
      </ul> */}
      <Section className="row">
        <Section className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title='MT5 Admin Support'
              features={[
                'Server network cluster setup',
                'Trade symbols & groups config',
                'Feeder & gateway setup',
                'History data sync',
                'SMTP & plugins config',
                'Server monitoring',
                'Backup & recovery setup'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title='MT5 Admin Support'
              features={[
                'Server network cluster setup',
                'Trade symbols & groups config',
                'Feeder & gateway setup',
                'History data sync',
                'SMTP & plugins config',
                'Server monitoring'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25' />
        </Section>
        <Section className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title='MT5 Admin Configuration'
              features={[
                'Monitor client database & orders',
                'Detailed manager training',
                'Analyze brokerage reports',
                'Risk management analysis',
                'Client group modifications',
                'Trading password management'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title='MT5 Admin Configuration'
              features={[
                'Monitor client database & orders',
                'Detailed manager training',
                'Analyze brokerage reports',
                'Risk management analysis',
                'Client group modifications',
                'Trading password management'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25' />
        </Section>
        <Section className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title='Gateway & Bridge Support'
              features={[
                'API connection setup',
                'Feed & execution config',
                'Markup model setup',
                'Connection monitoring',
                'Coverage monitoring',
                'Detailed reporting'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title='Gateway & Bridge Support'
              features={[
                'API connection setup',
                'Feed & execution config',
                'Markup model setup',
                'Connection monitoring',
                'Coverage monitoring',
                'Detailed reporting'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25' />
        </Section>
        <Section className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title='Dedicated Server Support'
              features={[
                'MT5 desktop installation',
                'MT5 web terminal setup',
                'MT5 mobile app configuration',
                'Weekly server maintenance',
                'Server load optimization',
                'System updates & patches'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title='Dedicated Server Support'
              features={[
                'MT5 desktop installation',
                'MT5 web terminal setup',
                'MT5 mobile app configuration',
                'Weekly server maintenance',
                'Server load optimization',
                'System updates & patches'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25' />
        </Section>
        <Section className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title='CRM Support'
              features={[
                'Backoffice admin support',
                'Traders room management',
                'KYC compliance handling',
                'Payment gateway integration',
                'IB commission structuring',
                'Client support training',
                'Risk management tools'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title='CRM Support'
              features={[
                'Backoffice admin support',
                'Traders room management',
                'KYC compliance handling',
                'Payment gateway integration',
                'IB commission structuring',
                'Client support training'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25' />
        </Section>
        <Section className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title='Trade Copier Support'
              features={[
                'Trade copier plugin installation',
                'Server-side configuration',
                'MT5 admin integration setup',
                'Custom copy trading rules',
                'Multiple module creation',
                'Performance monitoring'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title='Trade Copier Support'
              features={[
                'Trade copier plugin installation',
                'Server-side configuration',
                'MT5 admin integration setup',
                'Custom copy trading rules',
                'Multiple module creation',
                'Performance monitoring'
              ]}
              btnText='Contact Us'
              btnLink='/contact'
            />
          )}
          <Spacing lg='25' md='25' />
        </Section>
      </Section>
    </Section>
  )
}
