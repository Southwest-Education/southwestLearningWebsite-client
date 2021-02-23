import React from 'react';
import { FormFields } from '../../Form/FormFields';

const DebbieContact = () => {
  return (
    <div>
      <h1 className='contactHeader'>Debbie's Contact Form</h1>
      <FormFields url={'/api/form/debbie'} />
      <hr className='container testimonial' />
    </div>
  );
};

export default DebbieContact;
