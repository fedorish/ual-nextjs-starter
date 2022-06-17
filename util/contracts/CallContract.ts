const CallContract = async (activeUser: any) => {
  const makeBlockchainTransaction: any = {
    actions: [
      {
        account: "CONTRACT_NAME",
        name: "CONTRACT_ACTION_NAME",
        authorization: [
          {
            actor: activeUser?.accountName,
            permission: activeUser?.requestPermission,
          },
        ],
        data: {
          // Any data to send to the blockchain ie the wallet name:
          // participant: activeUser.accountName, <- the currently signed in wallet
        },
      },
    ],
  };

  try {
    const response = await activeUser.signTransaction(
      makeBlockchainTransaction,
      {
        broadcast: true,
        blocksBehind: 3,
        expireSeconds: 60,
      }
    );
    if (response.status === "executed") {
      return true;
    } else {
      return false;
    }
  } catch ({ message }) {
    console.error("Error: ", message);
  }
};

export default CallContract;
