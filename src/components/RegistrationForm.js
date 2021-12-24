 // Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 import validation from '../utils/RegistrationFormValidation'

 const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
 
 const RegistrationForm = () => (
   <div>
     <h1>Fake registration form!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={validation}
       onSubmit={handleSubmit}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default RegistrationForm;