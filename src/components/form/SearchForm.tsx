import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";

const SearchForm = ({ value, setValue }: { value: string; setValue: (value: string) => void }) => {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const searchValue = fd.get('search') as string;

    if (!searchValue) {
      toast.error('Please enter a search value');
    } else {
      setValue(searchValue);
    }
  };

  return (
    <form className="max-w-3xs flex items-center gap-x-3" onSubmit={handleSubmit}>
      <Input name="search" defaultValue={value} placeholder="Search for Github users"/>
      <Button type="submit">Search</Button>
    </form>
  )
}
export default SearchForm