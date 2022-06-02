import { useSelector } from 'react-redux';
import { ReducerType } from '@/../core/store/configureStore';

const useSelectState = () => {
  return useSelector((state: ReducerType) => state);
};

export default useSelectState;