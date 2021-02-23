import React from 'react';
import { ContactFormFields } from '../../Forms/FormFields';

const DebbieContact = () => {
  return (
    <div>
      <h1 className='contactHeader'>Debbie's Contact Form</h1>
      <ContactFormFields url={'/api/form/debbie'} />
      <hr className='container testimonial' />
    </div>
  );
};

export default DebbieContact;
