import MainArea from "../components/mainArea";
import NavBar from "../components/navBar";

export default function Home() {
  return (
    <div className="w-full h-[45rem] overflow-hidden gradinet relative">
      <div className="gradinet2 absolute inset-0 w-full h-full">
        <NavBar />
        <MainArea />
      </div>
    </div>
  );
}
