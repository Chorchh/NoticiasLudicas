import React from 'react'
import { NewsSection } from '../news/NewsStyles'
import { NewsletterContainer, NewsletterInput, NewsletterInputContainer, NewsletterTitle } from './NewsletterStyles'
import { Button} from '../globalComponents/GlobalComponents'

const Newsletter = () => {
  return (
    <NewsSection>
        <NewsletterContainer>
            <NewsletterTitle>Unite a nuestro newsletter</NewsletterTitle>
            <NewsletterInputContainer>
            <NewsletterInput placeholder='ingresa tu email' type='email'/>
            <Button>Enviar</Button>
            </NewsletterInputContainer>
        </NewsletterContainer>
    </NewsSection>
  )
}

export default Newsletter