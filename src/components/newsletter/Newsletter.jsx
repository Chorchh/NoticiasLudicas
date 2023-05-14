import React from "react"
import { NewsSection } from "../news/NewsStyles"
import { NewsletterContainer, NewsletterInput, NewsletterInputContainer, NewsletterTitle } from "./NewsletterStyles"
import { Button} from "../globalComponents/GlobalComponents"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  email: Yup.string().email("El email no es válido").required("El mail es requerido")
})

const Newsletter = () => {
  const handleSubmit = (values, {setSubmitting}) => {
    console.log(values)
    setSubmitting(false);
  }

//   return (
//     <NewsSection>
//         <NewsletterContainer>
//             <NewsletterTitle>Unite a nuestro newsletter</NewsletterTitle>
//             <NewsletterInputContainer>
//             <NewsletterInput placeholder="ingresa tu email" type="email"/>
//             <Button>Enviar</Button>
//             </NewsletterInputContainer>
//         </NewsletterContainer>
//     </NewsSection>
//   )
// }

return (
  <NewsSection>
    <NewsletterContainer>
      <NewsletterTitle>Únete a nuestro newsletter</NewsletterTitle>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <NewsletterInputContainer>
            <Field
              as={NewsletterInput}
              type="email"
              name="email"
              placeholder="Ingresa tu email"
            />
            <ErrorMessage component="div" name="email" className="ErrorMsg"/>
            <Button type="submit">Enviar</Button>
          </NewsletterInputContainer>
        </Form>
      </Formik>
    </NewsletterContainer>
  </NewsSection>
);
};

export default Newsletter