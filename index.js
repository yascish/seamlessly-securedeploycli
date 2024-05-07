// Alice should have the initial balance minus tranfer amount
if (aliceBalanceAfter[0].amount !== ALICE_INITIAL_BALANCE - TRANSFER_AMOUNT)
  throw new Error("Alice's balance after transfer is incorrect");

// Sponsor should have the initial balance minus gas
if (sponsorBalanceAfter[0].amount >= SPONSOR_INITIAL_BALANCE)
  throw new Error("Sponsor's balance after transfer is incorrect");
