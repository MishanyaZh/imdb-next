import React, { Suspense } from "react";
import HomePage from "@/components/HomePage";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Loading from "./loading";

const Home = (
  props: React.JSX.IntrinsicAttributes & { searchParams: Params }
) => {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage {...props} />
    </Suspense>
  );
};

export default Home;
