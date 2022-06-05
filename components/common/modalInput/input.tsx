import * as S from "./style";

interface Props {
  width: number;
  height?: number;
  placeholder?: string;
  margin?: string;
  inputChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  keypressHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
const Input = ({
  width,
  height,
  placeholder,
  margin,
  inputChangeHandler,
  keypressHandler,
}: Props) => {
  return (
    <S.Input
      type="text"
      width={width}
      height={height}
      placeholder={placeholder}
      margin={margin}
      onChange={inputChangeHandler}
      onKeyPress={keypressHandler}
    />
  );
};

export default Input;
