import * as Yup from 'yup';

export const fillSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\(\d{3}\)\s\d{3}-\d{4}/g, 'Phone number is invalid')
    .required('Phone number is required'),

  sum: Yup.number()
    .positive()
    .lessThan(1000, 'Sum must be less then 1000 rub!')
    .moreThan(0, 'Sum must be more then 1 rub!')
    .required('Sum is required'),
});
