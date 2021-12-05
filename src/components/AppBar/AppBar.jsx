import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../../routes';
import { openModal } from '../../redux/recipes/recipes-actions';
import Container from '../Container';
import './AppBar.scss';

export default function AppBar() {
  const dispatch = useDispatch();
  const { home, recipes } = routes;
  const { pathname } = useLocation();

  return (
    <div className="header">
      <Container>
        <div className="header__wrapper">
          <nav className="header__navigation">
            <NavLink to={home} className="navigation__link">
              Random Dish
            </NavLink>
            <NavLink to={recipes} className="navigation__link">
              Favourites
            </NavLink>
          </nav>
          {pathname === '/favourites' && (
            <button
              type="button"
              className="header__button"
              onClick={() => dispatch(openModal())}
            >
              Add custom dish
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}
