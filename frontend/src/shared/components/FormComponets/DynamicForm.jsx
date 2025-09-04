import React from 'react';
import { Formik, Form } from 'formik';
import FormElement from './FormElement';

const DynamicForm = ({ elements, onSubmit, initialValues, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          {elements.map((el, idx) => (
            <FormElement key={idx} element={el} />
          ))}
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
