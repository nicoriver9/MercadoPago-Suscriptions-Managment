import { useForm } from "react-hook-form";
import { useState } from "react";
import { Navbar } from "../../ui";
import { InputName } from "../components/InputName";
import { InputAmount } from "../components/InputAmount";
import { InputMail } from "../components/InputMail";
import { InputPhone } from "../components/InputPhone";
import { ButtonDonatePage } from "../components/ButtonDonatePage";
import { ButtonDonateTranfer } from "../components/ButtonDonateTranfer";
import { InputDni } from "../components/InputDni";
import { TextDonate } from "../components/TextDonate";

export const DonatePage = () => {
  const { control, handleSubmit, formState } = useForm();
  const [formTouched, setFormTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amountValid, setAmountValid] = useState(true); // Nuevo estado para verificar si el monto es válido
  const apiUrl = import.meta.env.VITE_API_URL;

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const { payer_email, dni, transaction_amount, first_name, celnumber } = data;

      const response = await fetch(
      `${apiUrl}/create-subscripcion`,        
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: first_name,
            dni: dni,
            celnumber: celnumber,
            payer_email: payer_email,
            transaction_amount: transaction_amount,            
          }),
        }
      );
      const dataResponse = await response.json();
      if (dataResponse) window.location.href = dataResponse.init_point;
    } catch (error) {
      console.log(error);
      setError("Intente de nuevo. O hacer una transferencia");
      setIsLoading(false);
    } 
  });

  const handleFormChange = () => {
    if (!formTouched) {
      setFormTouched(true);
    }
  };

  const handleAmountChange = (value) => {
    
    if (value < process.env.VITE_API_DONATE_AMOUNT) {
      setAmountValid(false); 
    } else {
      setAmountValid(true); 
    }
  };

  return (
    <>
      <Navbar buttonAction="login" />
      <div className="flex items-center justify-center mt-3">
        <div className="lg:flex-row p-4 mb-6 border-2 border-gray-500 rounded-2xl bg-donatePage space-y-4 lg:space-y-0 lg:mr-10">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} onChange={handleFormChange} className="">
              <div>
                <InputName control={control} />
                <InputMail control={control} />
                <InputDni control={control} />
                <InputPhone control={control} />
              </div>
              <div>
                <InputAmount control={control} onChange={handleAmountChange} />
                <div>
                  {!amountValid && (
                    <div className="text-center"> {/* Contenedor para centrar el mensaje */}
                      <p className="absolute left-12 right-12 text-red-100 text-center bg-red-800 mx-auto -mt-4 rounded-md text-sm">El valor debe ser mayor o igual a 15</p>
                    </div>
                  )}
                  <ButtonDonatePage isLoading={isLoading} disabled={!amountValid} /> 
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </div>
            </form>
            <div>{formTouched && formState.isValid && <ButtonDonateTranfer />}</div>
          </div>
        </div>
        <TextDonate />
      </div>
    </>
  );
};
