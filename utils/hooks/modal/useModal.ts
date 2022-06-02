import { useDispatch } from 'react-redux';
import { useSelectState } from '../common';
import { setModalOff, setModalOn } from '@/../core/redux/modal';

const useModal = () => {
  const dispatch = useDispatch();
  const state = useSelectState().modal;
  const setState = {
    setModalOff: (payload: string) => {
      dispatch(setModalOff(payload));
    },
    setModalOn: (payload: string) => {
      dispatch(setModalOn(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useModal;