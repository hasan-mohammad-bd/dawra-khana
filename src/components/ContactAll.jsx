import React from 'react';
import Location from './Location';
import Contact from './Contact';

const ContactAll = () => {
    return (
        <div id='contact' className='flex flex-col md:flex-row items-center justify-between container mx-auto my-16'>
            <Location className="flex-1" />
            <Contact className="flex-1" />
        </div>
    );
};

export default ContactAll;