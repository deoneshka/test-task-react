import { createPortal } from 'react-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { closeModal, addToFavorite } from '../../redux/recipes/recipes-actions';
import defaultImage from '../../images/Placeholder.png';
import './ModalAddDish.scss';

const modalRoot = document.getElementById('modal-root');

export default function ModalAddDish() {
  const [state, setState] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClick = useCallback(
    e => {
      if (e.currentTarget === e.target) {
        dispatch(closeModal());
      }
    },
    [dispatch],
  );

  const handleChange = e => {
    const { name, value } = e.target;

    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const { title, description } = state;

      dispatch(
        addToFavorite({
          idMeal: uuidv4(),
          strMeal: title,
          strInstructions: description,
          strMealThumb: defaultImage,
        }),
      );

      dispatch(closeModal());
    },
    [state, dispatch],
  );

  return createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <h3 className="modal__title">Add custom dish</h3>
        <form onSubmit={handleSubmit} className="modal__form">
          <input
            name="title"
            type="text"
            placeholder="Dish title"
            className="form__input item"
            onChange={handleChange}
            required
            minLength="2"
          />
          <textarea
            name="description"
            cols="27"
            rows="10"
            placeholder="Dish description..."
            className="form__textarea item"
            onChange={handleChange}
            required
            minLength="10"
          ></textarea>
          <button type="submit" className="form__button item">
            Add custom dish
          </button>
        </form>
      </div>
    </div>,
    modalRoot,
  );
}
