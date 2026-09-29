import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

function Form() {
  const form = useForm<FormData>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  // console.log(formState.errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        <span className="text-danger">
          {errors.name?.type === "required" && (
            <p>The name field is required</p>
          )}
          {errors.name?.type === "minLength" && (
            <p>The name field must be at least 3 chars</p>
          )}
        </span>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form;
