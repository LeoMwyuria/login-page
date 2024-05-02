import React from 'react';
import { useFormik } from 'formik';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: values => {
      const errors: Partial<FormValues> = {};

      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
        errors.firstName = 'First name must contain only letters';
      }

      if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
        errors.lastName = 'Last name must contain only letters';
      }

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
      }

      return errors;
    },
    onSubmit: values => {
      try {
        const existingFormDataJSON = localStorage.getItem('formData');
        let existingFormData: FormValues[] = [];

        if (existingFormDataJSON) {
          existingFormData = JSON.parse(existingFormDataJSON);

          if (!Array.isArray(existingFormData)) {
            existingFormData = [];
          }
        }

        existingFormData.push(values);

        localStorage.setItem('formData', JSON.stringify(existingFormData));

        console.log('Form data saved successfully!');
      } catch (error) {
        console.error('Error saving form data:', error);
      }
    },
  });

  return (
    <form className="inputDiv" onSubmit={formik.handleSubmit}>
      <div className="inputField">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="inputField">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="inputField">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="inputField">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" className="trial">
        CLAIM YOUR FREE TRIAL
      </button>
      <div className="termServices">
        <span style={{ color: 'gray' }}>
          By clicking the button, you are agreeing to our
        </span>{' '}
        <span style={{ color: 'red' }}>Terms and Services</span>
      </div>
    </form>
  );
};

export default RegForm;
