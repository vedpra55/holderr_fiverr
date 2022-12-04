import HolderrDevMainArea from "../components/holderrDevMainArea";
import MainArea from "../components/mainArea";
import NavBar from "../components/navBar";

export default function HolderrDevPage() {
  return (
    <div className="w-screen h-screen gradinet relative">
      <div className="gradinet2 absolute inset-0 w-full h-full">
        <NavBar />
        <HolderrDevMainArea />
      </div>
    </div>
  );
}
