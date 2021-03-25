import React from 'react';
import { ContactFormFields } from '../../Forms/FormFields';

const BeccaContact = () => {
  return (
    <div>
      <h1 className='contactHeader'>Becca's Contact Form</h1>
      <ContactFormFields url={'api/form/becca'} />
    </div>
  );
};

export default BeccaContact;
