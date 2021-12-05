import { useSelector } from 'react-redux';
import { getModalStatus } from '../../redux/recipes/recipes-selectors';
import Container from '../../components/Container';
import RecipesList from '../../components/RecipesList';
import ModalAddDish from '../../components/ModalAddDish';

export default function RecipesView() {
  const isModalOpen = useSelector(getModalStatus);

  return (
    <>
      <Container>
        <RecipesList />
      </Container>
      {isModalOpen && <ModalAddDish />}
    </>
  );
}
