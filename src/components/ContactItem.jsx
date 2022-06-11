import React from 'react';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';

export default function ContactItem({ name, tag, imageUrl }) {
  return (
    <div className='contact-item'>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
    </div>
  );
}
