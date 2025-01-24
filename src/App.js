import "./App.css";
import { InputField, SelectField } from "./components/formComponent.jsx";
import { useForm } from "react-hook-form";
import { RadioButtonGroup } from "./components/RadioGroup.jsx";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const options = ["Male", "Female", "Others"];
  const radio = ["Male", "Female", "Others"];

  const onSubmit = (data) => {
    console.log(data);

    //check validation

    const user = JSON.stringify(data);
    console.log("user: ", user);
    console.log(errors);
  };
  return (
    <div>
      <div className=" bg-slate-400 flex justify-center items-center absolute w-full h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:w-[25rem] h-[25rem] sm:w-[18rem] min-w-fit rounded-md shadow-2xl bg-slate-400"
        >
          <h1 className="text-center font-bold text-lg">forms builder</h1>

          <div className="">
            {/* <h1 className="text-center font-bold text-lg">forms builder</h1> */}
            <InputField
              className=" m-1"
              label="name"
              type="text"
              placeholder="Enter your Fullname"
              {...register("Fullname", {
                required: "Fullname is required",
                maxLength: 20,
              })}
            />
            {errors.Fullname && (
              <p className=" text-red-900">{errors.Fullname.message}</p>
            )}
            <InputField
              className=" m-1"
              label="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: "email is required" })}
            />

            {errors.email && (
              <p className=" text-red-900">{errors.email.message}</p>
            )}
            <SelectField
              className=" m-1"
              label="Choose"
              options={options}
              {...register("select", { required: "please select" })}
            />
            {errors.select && (
              <p className=" text-red-900">{errors.select.message}</p>
            )}
            <RadioButtonGroup
              label="Gender"
              options={radio}
              {...register("radio", { required: "please select option" })}
            />
            {errors.radio && (
              <p className=" text-red-900">{errors.radio.message}</p>
            )}
          </div>
          <button
            type="submit"
            className=" bg-orange-600 rounded-sm px-2 shadow-lg mx-12"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
