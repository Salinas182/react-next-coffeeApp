"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "../../public/logos/MVSTCoffee.png";
import Button from "./Button";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between my-3 lg:h-[100px]">
      <Link href="/">
        <Image src={brandLogo} alt="Home link" priority />
      </Link>

      <Link className="no-underline" href="/add">
        <Button label="Create" type="primary" />
      </Link>
    </nav>
  );
}
