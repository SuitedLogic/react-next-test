import { JSX } from 'react';
import ContactForm from '../components/ContactForm';

export default function ContactPage(): JSX.Element {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}