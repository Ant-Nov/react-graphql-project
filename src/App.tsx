import { useState } from "react"
import SearchForm from "./components/form/SearchForm"
import UserContainer from "./components/user/UserContainer";
import { Toaster } from "sonner";

function App() {
  const [searchValue, setSearchValue] = useState('quincylarson');

  return (
    <>
      <section className="px-10 mx-auto max-w-7xl xl:px-0">
        <h2 className='font-bold text-7xl text-primary mb-10'>React+GraphQL</h2>
        <SearchForm value={searchValue} setValue={setSearchValue} />
        <UserContainer username={searchValue} />
        <Toaster />
      </section>
    </>
  )
}

export default App
