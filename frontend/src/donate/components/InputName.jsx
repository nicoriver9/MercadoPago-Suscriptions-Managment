import { useForm, Controller } from "react-hook-form";

export const InputName = ({ control }) => {
  const { setError } = useForm();

  return (
    <div className="relative">
      <Controller
        name="first_name"
        control={control}
        defaultValue=""
        rules={{
          required: "Ingrese un nombre y apellido",
        }}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type="text"
              placeholder="Nombre y apellido o Razón social"
              id="first_name"
              className={`bg-white p-1.5 border rounded-xl w-80 my-2 font-medium text-center text-base text-gray-900 ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              autoFocus
              onInput={(e) => {
                const value = e.target.value;
                const isInvalid = !/^[A-Za-z\s]+$/.test(value);
                setError("first_name", {
                  type: isInvalid ? "manual" : "manual",
                  message: isInvalid
                    ? "Ingrese un nombre y apellido válido"
                    : "",
                });
              }}
            />
            {fieldState.invalid && (
              <p className="absolute left-12 right-12 text-red-100 text-center bg-red-800 mx-auto -mt-3 rounded-md text-sm">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
