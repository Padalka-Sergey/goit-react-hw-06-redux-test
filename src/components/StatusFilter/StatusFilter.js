// import { Button } from 'components/Button/Button';
// import css from './StatusFilter.module.css';

// Импортируем хук
// import { useSelector } from 'react-redux';
// Импортируем объект значений фильтра
// import { statusFilters } from '../../redux/constants';

// export const StatusFilter = () => {
// Получаем значение фильтра из состояния Redux
//   const filter = useSelector(state => state.filters.status);

//   return (
//     <div>
//       <Button selected={filter === statusFilters.all}>All</Button>
//       <Button selected={filter === statusFilters.active}>Active</Button>
//       <Button selected={filter === statusFilters.completed}>Completed</Button>
//     </div>
//   );
// };

import { useSelector } from 'react-redux';
import { Button } from 'components/Button/Button';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
