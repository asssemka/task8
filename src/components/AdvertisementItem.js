import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAdvertisment } from '../actions/advertismentActions';
import AdvertismentForm from './advertismentForm';


const AdvertismentItem = React.memo(({ advertisment }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    dispatch(deleteAdvertisment(advertisment.id));
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <AdvertismentForm advertismentToEdit={advertisment} onCancel={handleCancelEdit} />
      ) : (
        <>
          <h3>{advertisment.title}</h3>
          <p>{advertisment.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button> {/* Вызов функции handleDelete */}
        </>
      )}
    </li>
  );
});

export default AdvertismentItem;
