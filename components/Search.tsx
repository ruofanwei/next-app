import React from 'react';
import { Icon, Input, Stack, InputGroup, InputRightElement } from '@chakra-ui/react';
import { GrSearch } from 'react-icons/gr';

interface SearchProps {
  placeholder: string;
  type: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
}
const Search = ({ placeholder, type, onChange, value }: SearchProps) => {
  return (
    <InputGroup bg="white">
      <InputRightElement>
        <Icon as={GrSearch} />
      </InputRightElement>
      <Input placeholder={placeholder} type={type} onChange={onChange} value={value} />
    </InputGroup>
  );
};

export default Search;
