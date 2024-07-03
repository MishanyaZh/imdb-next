import React, { Suspense } from "react";
import NavbarItem from "./NavbarItem";
import Loading from "@/app/loading";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
};

export default Navbar;
