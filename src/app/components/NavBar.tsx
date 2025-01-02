import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border border-black absolute w-full h-32 p-12">
      David Kim
      <div>
        <Link href="">
          Cafes
        </Link>
        <Link href="">
          About
        </Link>
      </div>
    </div>
  )
}

export default NavBar;