import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="bg-stone-700 text-white p-6">
      <div className="container max-w-7xl mx-auto flex justify-between items-center">
        <img className="w-50" src="img\58f37720a4fa116215a9240f.png" alt="" />
        <MainNav />
      </div>
    </header>
  );
}
