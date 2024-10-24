import { useState } from 'react';
import { Checkbox, Col, Modal, Row } from 'antd';
import InputText from '../../../input/InputText';
import InputPassword from '../../../input/InputPassword';
import { optionsCheckInput } from '../../../const/rol';
import { useForm } from './useForm';
import { fetch } from '../../../api/api';
import { urlBase } from '../../../const/url';



export const ModalAgregar = ({ open, setOpen, setActualizar }) => {
  const [error, setError] = useState(false);
  const {form ,onChangeChecked, onChangeText, isFormValid, formValidation, resetForm } = useForm();
  
  const handleSubmit = async ()=>{
    const resp = await fetch('POST', `${urlBase}/api/Login/Agregar`,form);
    if (resp.ok) {
      setActualizar(true);
    };
  };

  const handleOk = () => {
    if(!isFormValid()){
      setError(true);
      return;
    }
    setError(false);
    resetForm();
    handleSubmit();
    setOpen(false);

  };

  const handleCancel = () => {
    setOpen(false);
  };

  
  return (
    <>
      <Modal title="Basic Modal" open={open} onOk={handleOk} onCancel={handleCancel}>
        <Row gutter={[18, 6]}>
          <Col md={12} sm={24}>
            <InputText
              placeholder={'Nombre del usuario'}
              name={'nombre'}
              label={'Nombre'}
              onChange={onChangeText}
              err={error && formValidation.nombreValid}
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.nombreValid}</span>
            }
          </Col>
          <Col md={12} sm={24}>
            <InputText
              placeholder={'Correo electrónico'}
              name={'email'}
              label={'Email'}
              onChange={onChangeText}
              err={error && formValidation.emailValid}
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.emailValid}</span>
            }
          </Col>
          <Col md={12} sm={24}>
            <InputPassword
              placeholder={'Contraseña'}
              name={'password'}
              label={'Contraseña'}
              onChange={onChangeText}
              err={error && formValidation.passwordValid}
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.passwordValid}</span>
            }
          </Col>

          <Col md={12} sm={24}>
            <label >Roles</label>
            <Checkbox.Group
              options={optionsCheckInput}
              name='rol'
              onChange={(value) => onChangeChecked(value, 'rol')}
              
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.rolValid}</span>
            }
          </Col>

        </Row>
      </Modal>
    </>
  );
};