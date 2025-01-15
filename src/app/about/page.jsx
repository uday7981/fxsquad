'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import { motion } from "framer-motion";
import aboutImg from '../../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/about_img_4.jpeg'

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

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <>
      <PageHeading
        title="About Us"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />

      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title="Your Trusted Partner in Forex Excellence"
                subtitle="About FXSQUAD"
              >
                <Spacing lg="30" md="20" />
                <motion.p
                  className="cs-m0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  At FXSQUAD, we understand the complexities of the Forex Industry. Our mission is to empower Forex brokers with the tools, knowledge, and support necessary to excel in this dynamic landscape of the Forex Market.
                </motion.p>
                <Spacing lg="30" md="30" />
                <motion.p
                  className="cs-m0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  With a proven track record of delivering excellence, we specialize in providing professional technical solutions, unparalleled backoffice support, and invaluable operational consulting services to various Forex brokers worldwide.
                </motion.p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </motion.div>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={aboutImg}
                alt="About FXSQUAD"
                className="w-100 cs-radius_15"
              />
            </motion.div>
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>

      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              className="cs-image_layer cs-style1"
            >
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="Our Vision"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </motion.div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SectionHeading
                title="Our Vision"
                subtitle="Driving Forex Excellence"
              >
                <Spacing lg="30" md="20" />
                <motion.p
                  className="cs-m0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Our vision is simple yet profound: to be the driving force behind the success stories of Forex brokers worldwide. We envision a future where every brokerage, regardless of size or experience, has access to the tools, knowledge, and support needed to excel.
                </motion.p>
                <Spacing lg="15" md="15" />
                <motion.p
                  className="cs-m0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Every brokerage, from aspiring newcomers to established players, has a unique story waiting to be written. At FXSQUAD, we believe in being the co-authors of those stories, providing unwavering support, cutting-edge solutions, and a commitment to excellence.
                </motion.p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </motion.div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="100" md="80" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <Div className="container">
          <FunFact
            title="Our Core Services"
            subtitle="With deep understanding of industry nuances, we provide turn-key solutions in Forex including Technical Solutions, Back-Office Support, Operations Consulting, Brokerage Setup, and Business Development."
            data={funfaceData}
          />
        </Div>
      </motion.div>

      <Spacing lg="150" md="80" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={{ duration: 0.6 }}
      >
        <Div className="container">
          <Cta
            title="Ready to elevate your <br />Forex brokerage with <i>FXSQUAD</i>?"
            btnText="Contact Us Today"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </motion.div>
    </>
  );
}
