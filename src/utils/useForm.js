import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setValues({
      initialValues,
    });
  };

  return [values, handleChanges, reset];
};

export default useForm;
