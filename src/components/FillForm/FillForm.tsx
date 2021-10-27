import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { Row, Button, Typography } from 'antd';
import { fillSchema } from '../../validationSchema';
import { IFillValues } from '../../interfaces';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

const { Text } = Typography;

const StyledRow = styled(Row)`
  width: 50vw;
  padding: 15px;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const StyledPhoneError = styled(Text)`
  position: absolute;
  top: 60px;
`;

const StyledSumError = styled(Text)`
  position: absolute;
  bottom: 50px;
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

const FillForm: FC = () => {
  const initialValues: IFillValues = { phoneNumber: '', sum: '' };

  const history = useHistory();

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
    <Formik
      initialValues={initialValues}
      validationSchema={fillSchema}
      validateOnChange
      onSubmit={(
        values: IFillValues,
        { setSubmitting }: FormikHelpers<IFillValues>
      ) => {
        setTimeout(() => {
          history.push('/result');
          setSubmitting(false);
        }, 2000);
      }}
    >
      {({
        errors,
        touched,
        isValid,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form>
          <StyledRow justify="center">
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
            <Row justify="center">
              <StyledPhoneError type="danger">
                {errors.phoneNumber}
              </StyledPhoneError>
            </Row>
          )}

          <StyledRow justify="center">
            <StyledField
              id="sum"
              name="sum"
              placeholder="Enter sum in rubles"
            />
          </StyledRow>

          {errors.sum && touched.sum && (
            <Row justify="center">
              <StyledSumError type="danger">{errors.sum}</StyledSumError>
            </Row>
          )}

          <StyledRow justify="center">
            <StyledButton
              type="primary"
              loading={isSubmitting}
              htmlType="submit"
              disabled={!isValid}
            >
              Pay
            </StyledButton>
          </StyledRow>
        </Form>
      )}
    </Formik>
  );
};

export default FillForm;
