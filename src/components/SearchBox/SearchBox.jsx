import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { changeFilter } from '../../redux/contactsSlice';
import css from './SearchBox.module.css';

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const onFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={css.wrapper}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onFilter}
      />
    </div>
  );
}

export default SearchBox;
