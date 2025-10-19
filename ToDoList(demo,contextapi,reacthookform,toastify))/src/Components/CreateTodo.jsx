import { nanoid } from "nanoid";
import {useForm} from 'react-hook-form';

const CreateTodo = (props) => {

  const todo = props.todo;
  const setTodo = props.setTodo;
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
