"use client";
import React from "react";
import {
  AppBar,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import Link from "next/link";
import "../styles/Header.scss";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="navbar__container">
      <div className="menu__links">
        <Link href="/" className={`${pathname == "/" ? "focus" : ""}`}>
          Home
        </Link>
        <Link href="/">Services</Link>
        <Link href="/">News</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
