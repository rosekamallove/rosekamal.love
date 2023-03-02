import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Layout from "~/components/layout";
import { api } from "~/utils/api";

const Guestbook = () => {
  const [text, setText] = useState("");
  const { data: session } = useSession();

  const { mutateAsync } = api.sign.sign.useMutation();
  const { data, isLoading, refetch } = api.sign.getAll.useQuery();

  return (
    <Layout>
      <div className="flex gap-3">
        <input
          className="rounded-md bg-gray-50 px-3 transition-all hover:bg-gray-100 active:scale-95 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          onChange={(e) => setText(e.target.value)}
          placeholder="Add your signature"
        />
        {session ? (
          <button
            className="rounded-md bg-gray-50 px-3 transition-all hover:bg-gray-100 active:scale-95 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            onClick={() => {
              setText("");
              mutateAsync({ text })
                .then(() => {
                  console.log("Mutated Succesfully");
                  refetch();
                })
                .catch((e) => console.log(e));
            }}
          >
            Sign
          </button>
        ) : (
          <button
            className="rounded-md border-2 border-red-500 bg-gray-50 px-3 transition-all hover:bg-gray-100 active:scale-95 dark:border-red-900 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            onClick={() => void signIn()}
          >
            Signin
          </button>
        )}
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <div>
          {data?.map((signature) => (
            <div key={signature.id} className="flex gap-1 px-1">
              <b>{signature.author?.name}:</b>
              <p>{signature.text}</p>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Guestbook;
