test("GET to patch: api/v1/status should return  200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  if (response.status == 200) {
    console.log("veio 200!! ;)");
  }

  //TDD
  expect(response.status).toBe(200);
});
