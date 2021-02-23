import React from 'react';
import { ContactFormFields } from '../../Forms/FormFields';

const BeccaContact = () => {
  return (
    <div>
      <h1 className='contactHeader'>Becca's Contact Form</h1>
      <ContactFormFields url={'api/form/becca'} />
      <hr className='container testimonial' />
    </div>
  );
};

export default BeccaContact;
