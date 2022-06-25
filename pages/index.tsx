import Head from "next/head";
import React from "react"
//@ts-ignore
import { withUAL } from "@cmichel/ual-reactjs-renderer";
import GetTableData from "@/util/contracts/GetContractTableData";

type Props = {
  ual: any;
};
const Home = (props: Props) => {
  const {
    ual: { activeUser, activeAuthenticator, logout, showModal },
  } = props;


  const [tableData, setTableData] = React.useState([])

  React.useEffect(() => {

    const fetchTableData = async () => {
      const data = await GetTableData()
      console.log(data)
      setTableData(data.rows)
    }
    fetchTableData()
  }, [])

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
          <div>
            {!!tableData.length && <div>
              <div>Sample data from `GetContractTableData.ts`:</div>
              <div>{JSON.stringify(tableData[0])}</div>
            </div>}
          </div>
        </main>
      </div>
    </>
  );
};

export default withUAL(Home);
