import React, { Suspense } from "react";
import HomePage from "@/components/HomePage";
import Loading from "./loading";

type Params = { genre: string };

type PageProps = {
  searchParams: Params;
};

const Home = (props: PageProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage {...props} />
    </Suspense>
  );
};

export default Home;
