import { createContext, useState } from "react";
import React from "react";

export const Form = createContext({});

const FormProvider = ({ children }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState();
  const [mail, setMail] = useState("");
  const [mail2, setMail2] = useState("");

  const emptyForm = () => {
    setNombre("");
    setApellido("");
    setMail("");
    setMail2("");
  };

  return (
    <Form.Provider
      value={{
        nombre,
        apellido,
        telefono,
        mail,
        mail2,
        setNombre,
        setApellido,
        setTelefono,
        setMail,
        setMail2,
        emptyForm,
      }}
    >
      {children}
    </Form.Provider>
  );
};

export default FormProvider;
