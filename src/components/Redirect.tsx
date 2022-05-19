import { useRouter } from "next/router";
import { FC } from "react";

const Redirect: FC = () => {
  const router = useRouter();
  const redirect = async () => await router.push("/");
  redirect();
  return <div>Redirecting...</div>;
};

export default Redirect;
