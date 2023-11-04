
import { BiChevronDown } from "react-icons/bi";

import { useComboboxContext } from "@/context/ComboboxContext";
import { useFormContext } from "@/context/FormContext";

import { IInputs } from "@/types/types";

const Combobox: React.FC<IInputs> = ({ error, register, name, type, placeholder, defaultValue }) => {

  const { updateUser, userApi } = useFormContext()

  const {
    selected,
    open,
    filteredCountries,
    setOpen,
    handleCountryClick,
    handleComboInputChange,
  } = useComboboxContext();

  console.log(userApi)

  const setCountry = (country: string) => {
    updateUser({ ...userApi, country });
  };


  return (
    <div className="relative w-full" onClick={() => setOpen(!open)}>
      <input
        className={
          `w-full border-b border border-gray-400 py-1 px-2 focus:outline-0 h-11 mt-2 pl-4 
          ${error && !selected ? "border-red-500 bg-red-200 placeholder:text-white" : "focus:outline-none"}`
        }
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue as string}
        value={selected as string}
        {...register(name)}
        name={name}
        onChange={(e) => { handleComboInputChange(e.target.value) }}
      />
      {error && !selected && (
        <p className='mt-1 text-xs text-red-400'>{error?.message}</p>
      )}
      <BiChevronDown
        size={30}
        className={`cursor-pointer text-gray-400 absolute right-2 transform -translate-y-1/2 ${!open ? "top-8" : "top-8"} ${open && "rotate-180"}`}

      />
      {open && (
        <div className="bg-white w-full max-h-60 overflow-y-auto mt-1">
          {filteredCountries.map((country: string) => (
            <div
              key={country}
              className={`p-2 text-sm hover:bg-blue-900 hover:text-white ${country.toLowerCase() === selected?.toLowerCase() && "bg-blue-900 text-white"}`}
              onClick={() => { handleCountryClick(country); setCountry(country); }}
            >
              {country}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Combobox;
