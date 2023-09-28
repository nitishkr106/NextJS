import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-16 px-5 bg-red-500 flex items-center">
      <div className="flex gap-8">
        <Link href="./About">About</Link>
        <Link href="./Product">product</Link>
        <Link href="./Courses">Courses</Link>
      </div>
    </div>
  );
};

export default Header;
