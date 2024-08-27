function solution(n, lost, reserve) {
const CanLend = reserve
  .filter((reserveStudent) => lost.indexOf(reserveStudent) === -1)
  .sort((a, b) => a - b);

const WantBorrow = lost
  .filter((lostStudent) => reserve.indexOf(lostStudent) === -1)
  .sort((a, b) => a - b);

return (
  n - WantBorrow.filter((lostStudent) => {
    const target = CanLend.find((reserveStudent) => Math.abs(reserveStudent - lostStudent) === 1);
    if (!target) return true;
    CanLend.splice(CanLend.indexOf(target), 1);
  }).length
);
}