import { nanoid } from "nanoid";
import { useContext } from "react";
import {useForm} from 'react-hook-form';
import { toast } from "react-toastify";
import { todocontext } from "../context/TodoContext";

const CreateTodo = (props) => {

  const [todo, setTodo] = useContext(todocontext);
  const {register, handleSubmit, reset, formState : { errors }} = useForm()


  // const [title, setTitle] = useState("");
  
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setTodo([
  //     ...todo, 
  //     {
  //       id: nanoid(),
  //       title,
  //       isCompleted: false,
  //     },
  //   ]);
  //   setTitle("");
  // };
  const submitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted = false;
    setTodo([...todo,data])
    toast.success("todo created")
    reset();
  }
  return (
    <>
      <h1>Create Tasks</h1>
      <form 
      onSubmit={handleSubmit(submitHandler)}
      >
        <input
        {...register("title", {required:"title can not be empty"})}
          // onChange={(e) => {
          //   setTitle(e.target.value);
          // }}
          // value={title}
          type="text"
          placeholder="Enter todo"
        />
        <small>{errors?.title?.message}</small>
        <button
          // onClick={(e) => {
          //   if (title === "") {
          //     e.preventDefault();
          //   }
          // }}
        >
          Add Todo
        </button>
      </form>
    </>
  );
};

export default CreateTodo;
