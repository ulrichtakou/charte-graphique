import { Search } from 'lucide-react';
import { Input, type InputProps } from './Input';

export type SearchFieldProps = Omit<InputProps, 'type'> & {
  /** @default true */
  clearable?: boolean;
};

export function SearchField({
  startAdornment,
  clearable = true,
  placeholder = 'Rechercher…',
  ...rest
}: SearchFieldProps) {
  return (
    <Input
      {...rest}
      type="search"
      placeholder={placeholder}
      clearable={clearable}
      startAdornment={startAdornment ?? <Search aria-hidden strokeWidth={2.25} />}
    />
  );
}
