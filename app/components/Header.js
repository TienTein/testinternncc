"use client";
import React from "react";
import { AppBar, useMediaQuery, useTheme } from "@mui/material";
import Link from "next/link";
import "../styles/Header.scss";
import { usePathname } from "next/navigation";
import DrawlerHeader from "./DrawlerHeader";
const Header = () => {
  const pathname = usePathname();
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {!isMatchMD ? (
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
      ) : (
        <AppBar style={{ backgroundColor: "black" }}>
          <DrawlerHeader />
        </AppBar>
      )}
    </>
  );
};

export default Header;
