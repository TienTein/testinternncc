import Link from "next/link";
import Image from "next/image";
import logo from "../public/NCC-Logo.png";
import contentLogo1 from "../public/HomeLogo1.png";
import contentLogo2 from "../public/HomeLogo2.png";
import contentLogo3 from "../public/HomeLogo3.png";

import "./styles/Home.scss";
export default function Home() {
  const images = [contentLogo1, contentLogo2, contentLogo3];
  return (
    <main className="Home px-[50px] xl:px-[100px] lg:px-[50px]">
      <div className="flex flex-col w-fit mx-auto mb-[50px]">
        <div className="flex flex-row items-end">
          <Link href="/">
            <Image src={logo} alt="mission logo" className="h-20 w-20" />
          </Link>
          <h1 className="font-bold text-8xl p-0">ncc</h1>
        </div>
        <p className="text-center text-[22px]">
          We do <span className="text-[red]">it</span> with passion
        </p>
      </div>
      <div className="bg-[#EFEFEF] text-center mb-[50px] py-[50px] px-[20px] xl:px-[100px] lg:px-[50px]">
        <h1 className="text-[18px] font-bold">Lorem ipsum dolor sit asmet?</h1>
        <p className="text-[14px] md:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>

      <div className="home__content grid lg:grid-cols-3 gap-2 ">
        {images &&
          images.map((i) => (
            <div className="[&>h1]:font-bold [&>h1]:text-[24px] xl:[&>h1]:text-[24px] lg:[&>h1]:text-[18px] mb-2">
              <h1>Lorem ipsum dolor sit amet</h1>
              <div className="text-[14px] md:[&>span]:text-[16px]">
                <Image
                  src={i}
                  alt="mission logo"
                  className="h-[100px] w-[120px] "
                />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at ullamcorper
                  ultricies. Donec feugiat velit nulla, vel sodales est
                  ullamcorper id. Aenean consequat condimentum velit ut tempor.
                  Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </span>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
