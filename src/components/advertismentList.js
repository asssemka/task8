import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdvertismentItem from './AdvertisementItem'; // Исправлен импорт компонента
import AdvertismentForm from './advertismentForm'; // Исправлен импорт компонента
import { addAdvertisment, updateAdvertisment } from '../actions/advertismentActions';
import '../App.css';


const AdvertismentList = () => {
  const advertisments = useSelector(state => state.advertisments.advertisments);
  const dispatch = useDispatch();
  const [editAdvertismentId, setEditAdvertismentId] = useState(null);

  const handleEditAdvertisment = (updatedAdvertisment) => {
    dispatch(updateAdvertisment(updatedAdvertisment));
    setEditAdvertismentId(null);
  };

  const handleCancelEdit = () => {
    setEditAdvertismentId(null);
  };


  return (
    <div className="advertisement-card-container"> {/* Добавлен класс для контейнера */}
    <h1 style={{textAlign:'center'}}>Объявления</h1>
      <ul className="advertisement-list">
        {advertisments.map(advertisment => (
           <li className="advertisement-item" key={advertisment.id}>
          <AdvertismentItem 
            key={advertisment.id} 
            advertisment={advertisment} 
            isEditing={editAdvertismentId === advertisment.id}
            onEdit={() => setEditAdvertismentId(advertisment.id)} 
            onCancelEdit={handleCancelEdit} 
            onUpdate={handleEditAdvertisment} 
          />
           </li>
        ))}
      </ul>

      {editAdvertismentId && (
        <AdvertismentForm 
          key={editAdvertismentId} 
          advertismentToEdit={advertisments.find(advertisment => advertisment.id === editAdvertismentId)} 
          onCancel={handleCancelEdit} 
          onUpdate={handleEditAdvertisment} 
        />
      )}
    </div>
  );
};

export default AdvertismentList;
