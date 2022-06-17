import Head from "next/head";
//@ts-ignore
import { withUAL } from "@cmichel/ual-reactjs-renderer";

type Props = {
  ual: any;
};
const Home = (props: Props) => {
  const {
    ual: { activeUser, activeAuthenticator, logout, showModal },
  } = props;
  return (
    <>
      <div>
        <Head>
          <title>UAL - Next - Starter</title>
          <meta name="description" content="UAL - Next - Starter" />
        </Head>

        <main className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto">
            {activeUser ? (
              <div>
                <div>Logged in as: {activeUser.accountName}</div>
                <button className="rounded border-2 mt-2 px-2" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="rounded border-2 mt-2 px-2"
                onClick={showModal}
              >
                Login
              </button>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default withUAL(Home);
