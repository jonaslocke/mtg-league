import {
  getProviders as prov,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AvatarSizes, User } from "../types";
import Avatar from "./Avatar";
import Modal from "./Modal";
import { ToDataUrl, ArchiveImage, dummy } from "../../vendors";

type Props = {};

const SignIn: FC<Props> = () => {
  const router = useRouter();
  const { query } = router;
  const inSignIn = !!query.signIn;
  const inSignOut = !!query.signOut;
  const [open, setOpen] = useState(false);
  const [providers, setProviders] = useState<any>({});
  const [user, setUser] = useState<User>();
  const { data } = useSession();

  const getProviders = async () => setProviders(await prov());

  useEffect(() => {
    setOpen(inSignIn || inSignOut);
    if (inSignIn) getProviders();
  }, [query]);

  useEffect(() => {
    if (!user) setUser({ ...data?.user, localImage: dummy });
  }, [data]);

  useEffect(() => {
    if (!user?.localImage) console.log("eeff => no local image");
    try {
      const image = new Image();
      image.src = user?.image || "";

      image.addEventListener("loadeddata", (event) => console.log(event));
    } catch (error) {
      console.error(`Can't get image`, error);
      setUser({ ...user, localImage: dummy.toString() });
    }
  }, [user]);

  return (
    <Modal open={open}>
      <div className="sign-in">
        {inSignIn && <BiUserCircle size={64} />}
        {inSignIn &&
          Object.values(providers).map((provider: any) => (
            <div key={provider.id}>
              <button
                onClick={() => signIn(provider.id)}
                className="menu-icon wh-0 ma-0 mt-4"
              >
                <div className="menu-icon__inner wh-0 pxy-5-3">
                  Sign in with {provider.name}
                </div>
              </button>
            </div>
          ))}
        {inSignOut && (
          <>
            <Avatar size={AvatarSizes.LARGE}>
              <img src={user?.localImage} alt={user?.name?.toString()} />
            </Avatar>
            <div className="fz-5 mt-4">{user?.name}</div>
            <div className="fz-4">{user?.email}</div>

            <button
              onClick={() => signOut()}
              className="menu-icon wh-0 ma-0 mt-4"
            >
              <div className="menu-icon__inner wh-0 pxy-5-3">Sign out</div>
            </button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default SignIn;
