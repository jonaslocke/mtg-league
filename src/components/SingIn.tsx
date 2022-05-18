import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Modal from "./Modal";

type Props = {};

const SignIn: FC<Props> = () => {
  const router = useRouter();
  const { query } = router;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log(router);
    setOpen(!!query.signin);
  }, [query]);

  return (
    <Modal open={open}>
      <div className="sign-in">
        <div>sign in</div>
      </div>
    </Modal>
  );
};

export default SignIn;
