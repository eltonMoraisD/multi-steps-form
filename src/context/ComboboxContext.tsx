"use client"
import { Dispatch, SetStateAction, createContext, useContext, useState, useCallback } from 'react';

import { countries } from "../utils/countries"

export interface IComboboxContext {
  selected: string;
  open: boolean;
  filteredCountries: string[];
  setSelected: Dispatch<SetStateAction<string>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setFilteredCountries: Dispatch<SetStateAction<string[]>>;
  handleCountryClick: (country: string) => void
  handleComboInputChange: (values: string) => void
}

const ComboboxContext = createContext<IComboboxContext | null>(null);

const useComboboxContext = () => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useComboboxContext must be used within a FormProvider');
  }
  return context;
};

const ComboboxProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [selected, setSelected] = useState('Luxembourg');
  const [open, setOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState<string[]>(countries);

  const handleCountryClick = useCallback((country: string) => {
    console.log('test')
    setSelected(country);
  }, [])

  const handleComboInputChange = useCallback((value: string) => {
    console.log('test')
    setSelected(value);
    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [])

  return (
    <ComboboxContext.Provider
      value={{
        selected,
        open,
        filteredCountries,
        setOpen,
        handleCountryClick,
        handleComboInputChange,
        setFilteredCountries,
        setSelected
      }}
    >
      {children}
    </ComboboxContext.Provider>
  );

};

export { useComboboxContext, ComboboxProvider }
