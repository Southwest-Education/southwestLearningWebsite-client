import React from 'react';
import { ContactFormFields } from '../../Form/FormFields';

const KevinContact = () => {
  return (
    <div>
      <h1 className='contactHeader'>Kevin's Contact Form</h1>
      <ContactFormFields url={'api/form/kevin'} />
      <hr className='container testimonial' />
    </div>
  );
};

export default KevinContact;
