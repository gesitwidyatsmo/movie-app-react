const Search = () => {
  return (
    <div className="mx-auto max-w-md">
      <form action="" className="relative mx-auto w-max">
        <input type="search" className="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent outline-none focus:w-48 focus:cursor-text focus:border-white focus:pl-12 focus:pr-4 text-white" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-10 border-r border-transparent stroke-white px-2.5 peer-focus:border-white peer-focus:stroke-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>
    </div>
  );
};
export default Search;
