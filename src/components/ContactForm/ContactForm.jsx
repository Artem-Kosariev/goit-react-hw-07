import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';
import MaskedInput from 'react-text-mask';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";


const formSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too long!").required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();

 
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ name: values.name, phone: values.number }));
    resetForm(); 
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div>
            <label htmlFor="name">Name</label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id="name"
            />
            <ErrorMessage name="name" component="span" className={css.errorMessage} />
          </div>

          <div>
            <label htmlFor="number">Number</label>
            <Field
              as={MaskedInput}
              mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-',/\d/, /\d/, /\d/, /\d/]}
              className={css.field}
              type="tel"
              name="number"
              id="number"
            />
            <ErrorMessage name="number" component="span" className={css.errorMessage} />
          </div>

          <button
            className={css.btn}
            type="submit"
            disabled={isSubmitting}
          >
           ADD CONTACT
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
