import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import { Row, Button, Alert, notification } from 'antd';
import { fillSchema } from '../../validationSchema';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

interface IFillValues {
  phoneNumber: string;
  sum: string;
}

const FillForm: FC = () => {
  const initialValues: IFillValues = { phoneNumber: '', sum: '' };
  const history = useHistory();

  const openNotification = (): void => {
    notification.open({
      message: 'Success',
      description: '',
      top: 70,
    });
  };

  const phoneNumberMask = [
    '(',
    /[1-9]/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={fillSchema}
        validateOnChange
        onSubmit={() => {
          setTimeout(() => {
            openNotification();
            history.push('/result');
          }, 2000);
        }}
      >
        {({ errors, touched, isValid, handleChange, handleBlur }) => (
          <Form>
            <StyledRow align="middle" justify="center" wrap>
              <StyledInput
                mask={phoneNumberMask}
                id="phoneNumber"
                placeholder="Enter your phone number"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </StyledRow>

            {errors.phoneNumber && touched.phoneNumber && (
              <Row align="middle" justify="center" wrap>
                <StyledAlert message={errors.phoneNumber} type="error" />
              </Row>
            )}

            <StyledRow align="middle" justify="center">
              <StyledField id="sum" name="sum" placeholder="Sum in rub" />
            </StyledRow>

            {errors.sum && touched.sum && (
              <Row align="middle" justify="center" wrap>
                <StyledAlert message={errors.sum} type="error" />
              </Row>
            )}

            <StyledRow align="middle" justify="center">
              <StyledButton
                type="primary"
                htmlType="submit"
                disabled={!isValid}
              >
                Pay
              </StyledButton>
            </StyledRow>
          </Form>
        )}
      </Formik>
    </>
  );
};

const StyledRow = styled(Row)`
  width: 50vw;
  padding: 15px;
`;

const StyledAlert = styled(Alert)`
  width: 80%;
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledField = styled(Field)`
  padding: 4px 11px;
  height: 40px;
  width: 100%;
  transition: all 0.3s;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  outline: 0;
  :hover {
    border-color: #1890ff;
  }
  :focus {
    border-color: #1890ff;
  }
  ::placeholder {
    color: #b9b8b8;
  }
`;

const StyledInput = styled(MaskedInput)`
  padding: 4px 11px;
  height: 40px;
  width: 100%;
  transition: all 0.3s;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  outline: 0;
  :hover {
    border-color: #1890ff;
  }
  :focus {
    border-color: #1890ff;
  }
  ::placeholder {
    color: #b9b8b8;
  }
`;

export default FillForm;
