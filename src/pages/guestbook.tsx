import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Layout from "~/components/layout";
import { api } from "~/utils/api";

const Guestbook = () => {
  const [text, setText] = useState("");
  const { data: session } = useSession();

  const { mutateAsync } = api.sign.sign.useMutation();
  const { data, isLoading } = api.sign.getAll.useQuery();

  return (
    <Layout>
      <h1>Guestbook</h1>
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your signature"
      />
      {session ? (
        <button
          onClick={() => {
            mutateAsync({ text })
              .then(() => "Mutated Succesfully")
              .catch((e) => console.log(e));
          }}
        >
          Sign
        </button>
      ) : (
        <button onClick={() => void signIn()}>Signin</button>
      )}

      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </Layout>
  );
};

export default Guestbook;
