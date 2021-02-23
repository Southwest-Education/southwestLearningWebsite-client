import React from 'react';
import { FormFields } from '../../Form/FormFields';

const BeccaContact = () => {
  return (
    <div>
      <h1 className='contactHeader'>Becca's Contact Form</h1>
      <FormFields url={'api/form/becca'} />
      <hr className='container testimonial' />
    </div>
  );
};

export default BeccaContact;
