"reach 0.1";

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    alert: Fun([], Null),
    tokenId: Token,
  });
  const whitelisters = API("whitelisters", {
    whiteListMyAddress: Fun([], Bool),
    alertEnd: Fun([], Bool),
  });
  const claimers= API("Claimers", {
    claim: Fun([], Bool),
  })
  init();
  Alice.only(() => {
    const tokenId = declassify(interact.tokenId);
  });
  // The first one to publish deploys the contract
  Alice.publish(tokenId);
  commit();
  const amt = 10000000000;
  Alice.pay([[amt, tokenId]]);
  Alice.interact.alert();
  const whitelist = new Set();

  // The second one to publish always attaches
  const [condition, users] = parallelReduce([true, 0])
    .invariant(balance() == 0)
    .while(condition && users<3)
    .api(
      whitelisters.whiteListMyAddress,
      () => {
        check(!whitelist.member(this), "Already a member");
        check(
          users < 3,
          "Limit Exceeded cannot register for whiteListMyAddress"
        );
      },
      () => 0,
      (k) => {
        k(true);
        whitelist.insert(this);

        return [condition, users + 1];
      }
    )
    .timeout(relativeTime(5000), () => {
      const [[], k] = call(whitelisters.alertEnd);
      k(false);
      return [condition, users];
    });

  const [condition1, users1] = parallelReduce([true, 3])
    .invariant(balance() == 0)
    .while(condition1 && users1>=1)
    .api(
      claimers.claim,
      () => {
        check(whitelist.member(this), "Already a member");
      },
      () => 0,
      (k) => {
        k(true);
        whitelist.remove(this);
        transfer(balance(tokenId) / users1, tokenId).to(this);
        return [condition1, users1 - 1];
      }
    )
    .timeout(relativeTime(5000), () => {
      const [[], k] = call(whitelisters.alertEnd);
      k(false);
      return [condition1, users1];
    });
  transfer(balance(tokenId), tokenId).to(Alice);
  transfer(balance()).to(Alice);
  commit();
  exit();
});
