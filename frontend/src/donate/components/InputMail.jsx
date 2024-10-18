import { useForm, Controller } from "react-hook-form";

export const InputMail = ({ control }) => {
  const { setError } = useForm();

  return (
    <div className="relative">
      <Controller
        name="payer_email"
        control={control}
        defaultValue=""
        rules={{
          required: "Ingrese un correo electrónico válido",
        }}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type="email"
              placeholder="Correo electrónico"
              id="email"
              className={`bg-white p-1.5 border rounded-xl w-80 font-medium text-center my-5 text-base text-gray-900 ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              onInput={(e) => {
                const value = e.target.value;
                const isInvalid =
                  !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(
                    value
                  );
                setError("email", {
                  type: isInvalid ? "manual" : "manual",
                  message: isInvalid
                    ? "Ingrese un correo electrónico válido"
                    : "",
                });
              }}
            />
            {fieldState.invalid && (
              <p className="absolute left-4 right-4 text-red-100 text-center bg-red-800 mx-auto -mt-7 rounded-md text-sm">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
