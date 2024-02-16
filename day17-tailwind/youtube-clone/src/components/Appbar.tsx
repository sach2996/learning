import { SearchBar } from "./SearchBar";

export function Appbar() {
  return (
    <div className="flex justify-between p-3">
      <div className="text-md inline-flex items-center">Youtube</div>
      <div>
        <SearchBar />
      </div>
      <div className="text-md inline-flex items-center">Signin</div>
    </div>
  );
}
