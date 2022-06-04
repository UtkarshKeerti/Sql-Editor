import { useState, useEffect } from 'react'
import InputFields from "./Input";

const InputConditional = ({ input }) => {
  const [inputData, setInputData] = useState("")
  useEffect(() => {
    setInputData(
      input === "categories" ? "Select * from categories"
        : input === "customers" ? "Select * from customers"
          : input === "products" ? "Select * from products"
            : input === "shippers" ? "Select * from shippers"
              : input === "suppliers" ? "Select * from suppliers"
                : input === "territories" ? "Select * from territories"
                  : input === "regions" ? "Select * from regions"
                    : ""
    )
  }, [input])
  return (
    <>
      <InputFields setInputFieldData={setInputData} inputFieldData={inputData} />
    </>
  )
}

export default InputConditional