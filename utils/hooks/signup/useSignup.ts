import { useDispatch } from "react-redux";
import { setName, setEmail, setPassword, signup } from "@/../core/redux/signup";
import { useSelectState } from "../common";

const useSignup = () => {
  const dispatch = useDispatch();
  const state = useSelectState().signup;
  const setState = {
    setName: (payload: string) => {
      dispatch(setName(payload));
    },
    setEmail: (payload: string) => {
      dispatch(setEmail(payload));
    },
    setPassword: (payload: string) => {
      dispatch(setPassword(payload));
    },
    signup: (payload: { name: string; email: string; password: string }) => {
      dispatch(
        signup({
          name: payload.name,
          email: payload.email,
          password: payload.password,
        })
      );
    },
  };
  return { state, setState };
};

export default useSignup;
