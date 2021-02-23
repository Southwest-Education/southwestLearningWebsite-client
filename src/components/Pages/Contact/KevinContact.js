import React from 'react';
import { FormFields } from '../../Form/FormFields';

const KevinContact = () => {
  return (
    <div>
      <h1 className='contactHeader'>Kevin's Contact Form</h1>
      <FormFields url={'api/form/kevin'} />
      <hr className='container testimonial' />
    </div>
  );
};

export default KevinContact;
