import { useForm, Controller } from "react-hook-form";

export const InputPhone = ({ control }) => {
  const { setError } = useForm();

  return (
    <div className="relative">
      <Controller
        name="celnumber"
        control={control}
        defaultValue=""
        rules={{
          required: "Ingrese un número de teléfono válido",
        }}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type="number"
              inputMode="numeric"
              placeholder="Número de teléfono"
              id="celnumber"
              className={`bg-white p-1.5 border rounded-xl w-80 font-medium text-center my-4 text-base text-gray-900 ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              onInput={(e) => {
                const value = e.target.value;
                const isInvalid = !/^\d+$/.test(value);
                setError("celnumber", {
                  type: isInvalid ? "manual" : "manual",
                  message: isInvalid
                    ? "Ingrese un número de teléfono válido"
                    : "",
                });
              }}
            />
            {fieldState.invalid && (
              <p className="absolute left-8 right-8 text-red-100 text-center bg-red-800 mx-auto -mt-6 rounded-md text-sm">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
