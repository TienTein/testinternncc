"use client";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DrawlerHeader() {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  //   useEffect(() => {
  //     try {
  //       const user = localStorage.getItem("user");
  //       if (user === null) {
  //         setExistUser(null);
  //       } else {
  //         setExistUser(JSON.parse(user));
  //       }
  //     } catch (error) {
  //       console.log("Error parsing user from local storage:", error);
  //       setExistUser(null);
  //     }
  //   }, []);

  const handleClearUser = () => {
    signOut();
    localStorage.removeItem("user");
    setExistUser(null);
    dispatch(authSlice.actions.clearUserData());
    router.push("/");
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <div className="bg-black px-[10vw] py-[30px] flex flex-col menu__links">
          <Link href="/" className={`${pathname == "/" ? "focus" : ""}`}>
            Home
          </Link>
          <Link href="/">Services</Link>
          <Link href="/">News</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className="w-fit rounded-none"
      >
        <MenuIcon className="text-white text-[40px]" />
      </IconButton>
    </>
  );
}
