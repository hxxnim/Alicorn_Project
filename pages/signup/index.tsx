import { useSignup } from "@/../utils/hooks/signup";
import Header from "@/../components/layout/header/header";
import Signup from "@/../components/layout/signup";

const signup = () => {
  const { state, setState } = useSignup();
  return (
    <>
      <Header />
      <Signup {...state} {...setState} />
    </>
  );
};

export default signup;
