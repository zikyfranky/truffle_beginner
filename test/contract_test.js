const Test = artifacts.require("Test");

contract("Test", function (/* accounts */) {
  it("should add", async function () {
    const test = await Test.deployed();
    const sum = await test.add(3, 2);

    expect(Number(sum)).to.be.equal(5)
  });

  it("should subtract", async function () {
    const test = await Test.deployed();
    const diff = await test.sub(3, 2);

    expect(Number(diff)).to.be.equal(1)
  });

  it("should subtract", async function () {
    const test = await Test.deployed();
    const diff = await test.sub(3, 2);

    expect(Number(diff)).to.not.be.equal(2)
  });

});
