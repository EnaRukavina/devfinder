import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="bg-navy-900 h-screen w-full py-8 px-6">
      <Header/>
      <SearchBar/>
      <UserCard/>
    </div>
  );
}

export default App;
