import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [Alice, Bob, cat, doug, hilary] = await stdlib.newTestAccounts(
  10,
  startingBalance
);
const token = await stdlib.launchToken(Alice, "Afiniki", "NIKI");
const whitelist = async (who) => {
  try {
    console.log("Attaching..... ");
    const contract = who.contract(backend, ctcAlice.getInfo());
    const response = await contract.apis.whitelisters.whiteListMyAddress();
    console.log(
      "\nBalances in wallet\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who, token.id)),
      "Niki"
    );
  } catch (error) {
    console.log(error);
  }
};

const claim = async (who) => {
  try {
    console.log("Attaching..... ");
    const contract = who.contract(backend, ctcAlice.getInfo());
    await who.tokenAccept(token.id);
    const response = await contract.apis.Claimers.claim();
    console.log(
      "\nBalances in wallet\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who, token.id)),
      "Niki"
    );
  } catch (error) {
    console.log(error);
  }
};
const willError = async (x) => {
  let err;

  try {
    await x();
    err = false;
  } catch (terr) {
    err = terr;
  }
  if (err === false) {
    throw Error(`Expected to error, but I guess no show`);
  }
  console.warn(`That last call errored as expected`);
};
console.log("Participants: Alice, Bob, cat");

console.log("Launching...");
const ctcAlice = Alice.contract(backend);

console.log("Starting backends...");
try {
  await Promise.all([
    backend.Alice(ctcAlice, {
      tokenId: token.id,
      alert: () => {
        console.log("Contract Initialized .......");
        throw 42;
      },
      // implement Alice's interact object here
    }),
  ]);
} catch (error) {
  if (error !== 42) console.log(error);
}

await whitelist(Bob);
await whitelist(cat);
await whitelist(doug);
// await willError(()=>whitelist(hilary));

await claim(Bob);
await claim(cat);
await claim(doug);
// await willError(()=> claim(hilary));
console.log("Goodbye, Bobs!");
