import React from 'react';
import Map from './Map'; 
import Location from './Location';
import ContactusForm from './ContactusForm';
import Banner from './Banner';

const ContactUs: React.FC = () => {

    return (
        <div>
            {/* <h1>Contact Us</h1> */}
            <Banner/>
          <ContactusForm/>
          <Location/>
          <Map/>
        </div>
    );
};

export default ContactUs;