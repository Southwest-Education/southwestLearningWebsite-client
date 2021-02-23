import axios from 'axios';

export function useHandleSubmit(body) {
  async function handleSubmit(e) {
    e.preventDefault();

    let res = await axios.post('api/form', body, {
      headers: {
        'content-type': 'application/json',
      },
    });

    window.open(res.data, '_self');
  }

  return {
    onSubmit: handleSubmit,
  };
}
