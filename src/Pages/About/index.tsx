import React from 'react';
// import TopHeader from '../../components/Top/TopHeader';
import Mission from './Mission';
import Agents from './Agents';
import SellingOption from './SellingOption';
import ClientLogos from './ClientLogos';
import TopHeader from './TopHeader';
import  aboutbanner  from '../../assets/images/AboutUss.png';
import { styled } from '@mui/material/styles';
import OurTeam from './OurTeam';
import Vision from './Vision';
import WhyChooseUs from './WhyChooseUs';
import TestimonialsN from '../Dashboard/TestimonialsN';
import SellingGroup from '../Dashboard/SellingGroup';
import { download, feed4 } from '../../assets';




const About: React.FC = () => {
    return (
        <div>
            <TopHeader value="About Us" backgroundImage={aboutbanner}/>
            <Vision />
            <WhyChooseUs />
            <TestimonialsN />
            <OurTeam />
            <SellingGroup/>
            {/* <Mission /> */}
            {/* <SellingOption /> */}
            {/* <Agents/> */}
            <ClientLogos/>
        </div>
    );
};

export default About;