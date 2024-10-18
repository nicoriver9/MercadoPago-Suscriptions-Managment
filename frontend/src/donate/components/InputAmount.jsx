import { useForm, Controller } from "react-hook-form";
import CurrencyInput from "react-currency-input-field";

export const InputAmount = ({ control, onChange }) => {
  const { setError } = useForm();

  return (
    <div className="relative">
      <Controller
        name="transaction_amount"
        control={control}
        defaultValue={15} // Establecer el valor por defecto en 15
        rules={{
          required: "Ingrese un monto",
          min: {
            value: 15,
            
          },
        }}
        render={({ field, fieldState }) => (
          <>
            <CurrencyInput
              id="transaction_amount"
              placeholder="$15.0"
              allowNegativeValue={false}
              decimalSeparator=","
              groupSeparator="."
              prefix="$"
              className={`bg-white p-4 border rounded-full w-80 text-gray-700 text-center text-2xl mt-5 mb-4 ${
                fieldState.invalid ? "border-red-500" : ""
              }`}
              onValueChange={(value, name) => {
                const numericValue =
                  value && parseFloat(value.replace(/[^0-9.-]+/g, ""));
                field.onChange(numericValue);
                onChange && onChange(numericValue);
                if (isNaN(numericValue)) {
                  setError(name, {
                    type: "manual",
                    message: "Solo se permiten números",
                  });
                } else {
                  setError(name, null); // Limpiar el error si el valor es válido
                }
              }}
            />

            {fieldState.invalid && (
              <p className="absolute left-12 right-12 text-red-100 text-center bg-red-800 mx-auto -mt-5 rounded-md text-sm">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};
