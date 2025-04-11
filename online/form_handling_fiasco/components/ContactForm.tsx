import { useState, FormEvent, JSX } from 'react';

export default function ContactForm(): JSX.Element {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) throw new Error('Failed');
      setStatus('Success!');
    } catch (error) {
      setStatus('Error!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit">Send</button>
      {status && <p>{status}</p>}
    </form>
  );
}