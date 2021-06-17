import { FunctionComponent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

const Input: FunctionComponent<{
  register: UseFormRegister<FieldValues>;
  label: string;
  error: any;
  fieldName: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}> = ({ register, label, fieldName, error, ...rest }) => {
  return (
    <div>
      <div className="flex flex-col space-y-1">
        <span className="text-lg">{label}</span>
        <input
          type="text"
          {...register(fieldName, { required: true })}
          {...rest}
          className="p-1 text-gray-800 placeholder-gray-800 rounded-md bg-dark-400 focus:outline-none"
        />
      </div>
      {error && <p className="m-0 text-red-600">{error?.message}</p>}
    </div>
  );
};

export default Input;

// https://stackoverflow.com/questions/66927051/getting-uncaught-typeerror-path-split-is-not-a-function-in-react
