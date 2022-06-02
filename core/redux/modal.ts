import { createAction } from "typesafe-actions";

export const MODAL_ON = "modal/MODAL_ON";
export const MODAL_OFF = "modal/MODAL_OFF";

export const setModalOn = createAction(MODAL_ON)<string>();
export const setModalOff = createAction(MODAL_OFF)<string>();

export type modalActionType =
  | ReturnType<typeof setModalOff>
  | ReturnType<typeof setModalOn>;

interface ModalState {
  type: string;
}

const initState: ModalState = {
  type: "",
};

export default function modalReducer(
  state: ModalState = initState,
  action: modalActionType
) {
  switch (action.type) {
    case MODAL_ON: {
      return { ...state, type: action.payload };
    }
    case MODAL_OFF: {
      return { ...state, type: "" };
    }
    default: {
      return state;
    }
  }
}
