import React, { useRef } from 'react'
import "./styles.css"
interface InputFieldProps {
  todo : string;
  setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField: React.FC<InputFieldProps> = ({todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form 
        className="input"
        onSubmit = {(e) => { 
            handleAdd(e);
            inputRef.current?.blur();
         } }
        >
            <input 
            ref={inputRef}
            type='input' 
            placeholder="Enter" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="input_box" />
            <button className = 'input_submit' type="submit">Go</button>
        </form>
    )
}
export default InputField;