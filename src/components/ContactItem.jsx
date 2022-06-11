import React from 'react';
import ContactItemImage from './ContactItemImage';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton';

export default function ContactItem({ name, tag, imageUrl, id, onDelete }) {
  return (
    <div className='contact-item'>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
