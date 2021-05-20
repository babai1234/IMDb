 
const AuthInput = (props) => {
    return (
        <input
            className="px-2 mx-auto mb-5 bg-transparent border-2 hover:shadow-md border-gray-300 rounded-md outline-none w-60"
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={(event) => props.change(event.target.value)}
          />
    );
}
 
export default AuthInput;