import {
  getProviders as prov,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { dummy } from "../../vendors";
import { AvatarSizes, FontVariants, User } from "../types";
import Avatar from "./Avatar";
import Button from "./Button";
import Modal from "./Modal";
import Typography from "./Typography";

type Props = {};

const SignIn: FC<Props> = () => {
  const router = useRouter();
  const { query } = router;
  const inSignIn = !!query.signIn;
  const inSignOut = !!query.signOut;
  const [open, setOpen] = useState(false);
  const [providers, setProviders] = useState<any>({});
  const [user, setUser] = useState<User>();
  const [userImage, setUserImage] = useState(dummy);
  const [userImage2, setUserImage2] = useState<any>(null);
  const { data } = useSession();

  const getProviders = async () => setProviders(await prov());

  useEffect(() => {
    setOpen(inSignIn || inSignOut);
    if (inSignIn) getProviders();
  }, [query]);

  useEffect(() => {
    setUser(data?.user);
  }, [data]);

  const fetchImage = (image: string, alias: string) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", image);
    xhr.responseType = "blob";
    xhr.send();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (result) {
          localStorage.setItem(`avatar-${alias}`, reader.result.toString());
          setUserImage(reader.result.toString());
        }
      };
      reader.readAsDataURL(xhr.response);
      return reader.result;
    };
  };

  useEffect(() => {
    const hasImagesBackup = Object.keys(localStorage).some((item) =>
      item.match(new RegExp("avatar-", "i"))
    );
    if (hasImagesBackup) {
      if (data) {
        const alias = user?.email?.split("@")[0];
        const localImage = localStorage.getItem(`avatar-${alias}`);
        if (localImage) {
          setUserImage(localImage);
        }
      } else {
        for (const item in localStorage) {
          if (item.match(new RegExp("avatar-", "i"))) {
            localStorage.removeItem(item);
          }
        }
      }
    } else {
      if (data) {
        const alias = user?.email?.split("@")[0];
        if (user?.image && alias) {
          fetchImage(user.image, alias);
        }
      }
    }
  }, [user]);

  return (
    <Modal open={open}>
      <div className="sign-in">
        {inSignIn && (
          <div className="d-flex align-center">
            <BiUserCircle size={64} />
            <Typography variant={FontVariants.HEADING_2} className={"ml-3"}>
              MTG Leagues
            </Typography>
          </div>
        )}
        {inSignIn && (
          <Typography variant={FontVariants.SUBTITLE_1} className={"mt-3"}>
            Sign in to continue to MTG Leagues
          </Typography>
        )}
        {inSignIn &&
          Object.values(providers).map((provider: any) => (
            <div key={provider.id}>
              <Button onClick={() => signIn(provider.id)} className="mt-12">
                Sign in with {provider.name}
              </Button>
            </div>
          ))}
        {inSignOut && (
          <>
            <Avatar size={AvatarSizes.MEDIUM}>
              <img src={userImage} alt={user?.name?.toString()} />
            </Avatar>
            <Typography variant={FontVariants.HEADING_3} className={"mt-4"}>
              {user?.name}
            </Typography>
            <Typography variant={FontVariants.SUBTITLE_1}>
              {user?.email}
            </Typography>
            <Button onClick={() => signOut()} className="mt-10">
              Sign out
            </Button>
          </>
        )}
      </div>
    </Modal>
  );
};

export default SignIn;
