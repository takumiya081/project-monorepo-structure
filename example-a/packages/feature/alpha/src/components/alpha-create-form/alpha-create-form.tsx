import React, {useState} from 'react';

type AlphaCreateFormProps = {
  onSuccess: () => void;
};

export const AlphaCreateForm = (props: AlphaCreateFormProps): JSX.Element => {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.onSuccess();
    console.log(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} />
    </form>
  );
};
