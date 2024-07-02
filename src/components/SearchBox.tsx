"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const SearchBox = (props: Props) => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex justify-between px-5 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="text-amber-600 disabled:to-gray-400"
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
