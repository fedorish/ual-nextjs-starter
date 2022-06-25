import { WAX_BASE_HOST } from "../constants";

// This will fetch from:https://wax-test.bloks.io/account/nftgamerstkt?loadContract=true&tab=Tables&account=nftgamerstkt&scope=nftgamerstkt&limit=100&table=unboxtickets
const GetTableData = async () => {
    const contract = 'nftgamerstkt';
    const endpoint = WAX_BASE_HOST;
    const path = '/v1/chain/get_table_rows';
    const data = JSON.stringify({
        json: true,
        code: contract,
        scope: contract,
        table: 'unboxtickets',
        limit: 1000,
    });
    const response = await (
        await fetch('https://' + endpoint + path, {
            headers: { 'Content-Type': 'application/json' },
            body: data,
            method: 'POST',
        })
    ).json();


    return response;
};
export default GetTableData