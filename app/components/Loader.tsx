import Logo from "./Logo";

export default function Loader() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black flex items-center justify-center">
      <Logo />
    </div>
  )
}
