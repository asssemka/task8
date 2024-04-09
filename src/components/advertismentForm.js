import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisment, updateAdvertisment } from '../actions/advertismentActions';
import { v4 as uuid } from 'uuid';
import '../App.css';

const AdvertismentForm = ({ advertismentToEdit, onCancel, onUpdate }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(advertismentToEdit ? advertismentToEdit.title : '');
  const [description, setDescription] = useState(advertismentToEdit ? advertismentToEdit.description : '');

  const handleAdd = () => {
    dispatch(addAdvertisment({ title, description, id: uuid() }));
    setTitle('');
    setDescription('');
  };

  const handleUpdate = () => {
    const updatedAdvertisment = {
      id: advertismentToEdit.id,
      title,
      description
    };
    dispatch(updateAdvertisment(advertismentToEdit.id, updatedAdvertisment)); // Исправлен вызов функции updateAdvertisment
    setTitle('');
    setDescription('');
    onCancel();
  };

  return (
    <div className="form-container">
      <div className="advertisement-card">
        <h2>{advertismentToEdit ? 'Edit Advertisment' : 'Add Advertisment'}</h2>
        <form>
          <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          {advertismentToEdit ? (
            <button className="update-button" type="button" onClick={handleUpdate}>Update</button>
          ) : (
            <button className="add-button" type="button" onClick={handleAdd}>Add</button>
          )}
          <button className="cancel-button" type="button" onClick={onCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AdvertismentForm;
