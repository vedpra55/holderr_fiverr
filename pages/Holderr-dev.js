import HolderrDevMainArea from "../components/holderrDevMainArea";

import NavBar from "../components/navBar";

export default function HolderrDevPage() {
  return (
    <div className="w-full h-[55rem] md:h-[50rem] gradinet relative">
      <div className="gradinet2 absolute inset-0 w-full h-full">
        <NavBar />
        <HolderrDevMainArea />
      </div>
    </div>
  );
}
