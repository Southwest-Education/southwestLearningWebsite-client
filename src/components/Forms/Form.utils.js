import { useState } from 'react';
import axios from 'axios';

const headers = {
  'content-type': 'application/json',
};

export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

export function useContactHandleSubmit(url, body) {
  async function handleSubmit(e) {
    e.preventDefault();

    let res = await axios.post(url, body, {
      headers,
    });

    window.open(res.data, '_self');
  }

  return {
    onSubmit: handleSubmit,
  };
}

export function useMapDataHandleSubmit(url, body) {
  async function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();

    await axios.post(url, body, {
      headers,
    });
  }

  return {
    onSubmit: handleSubmit,
  };
}
