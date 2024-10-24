import { useEffect, useState } from 'react';
import { formValidations } from '../../../utils/formValidations';
import { initialData } from '../../../const/initialData';

export const useForm = (usuario) => {
  const [form, setForm] = useState(usuario);
  const [ formValidation, setFormValidation ] = useState({});
  
  useEffect(() => {
    createValidators();
  }, [form]);
  
  const onChangeText = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const onChangeChecked = (value, name) => {
    setForm({ ...form, [name]: value });
  };
  
  const resetForm =()=>{
    setForm(initialData);
  }
  
  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckedValues[`${formField}Valid`] = fn(form[formField]) ? null : errorMessage;
    }
    setFormValidation(formCheckedValues);
  };
  
  const isFormValid = () => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }
    return true;
  };
  console.log(form);
  console.log(usuario);
  console.log(initialData);
  return {
    form,
    formValidation,
    setForm,
    onChangeChecked,
    onChangeText,
    isFormValid,
    resetForm,
  }
}
