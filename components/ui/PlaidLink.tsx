import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./button";
import { StyledString } from "next/dist/build/swc";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getLinkToken = async () => {
      // const data = await createLinkToken(user);
      // setToken(data?.linkToken);
    };

    getLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      // await exhangePublicToken({
      //   publicToken: public_token,
      //   user,
      // })

      router.push("/");
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  return (
    <>
      {variant === "primary" ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button>Connect bank</Button>
      ) : (
        <Button>Connect bank</Button>
      )}
    </>
  );
};

export default PlaidLink;