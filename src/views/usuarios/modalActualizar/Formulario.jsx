import { Col, Row } from "antd";
import InputText from "../../../input/InputText";


export const Formulario = ({ form, usuario, formValidation, onChangeText, error }) => {
  console.log(usuario);
  console.log(form);

  return (
    <Row gutter={[18, 6]}>
      <Col md={12} sm={24}>
        <InputText
          placeholder={'Nombre del usuario'}
          name={'nombre'}
          label={'Nombre'}
          onChange={onChangeText}
          value={form.nombre}
          err={error && formValidation.nombreValid}
        />
        {
          error && <span style={{ fontSize: 12 }}>{formValidation.nombreValid}</span>
        }
      </Col>
    </Row>
  )
}
