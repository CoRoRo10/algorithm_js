/*

  아래의 코드를 2단계에 걸쳐 리팩토링 하세요. 각 단계별 리팩토링 결과물을 모두 제출하여야 합니다.

  주어진 jsbin을 clone(command + s)하여 작업한 후,
  결과물이 담긴 jsbin 링크를 @ken에게 슬랙 DM으로 전달 부탁드립니다.

  다른 누구와도 논의 불가하며, 인터넷 서칭은 가능합니다.

  제출 마감시간은 오늘 오후 4시입니다.

*/
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 100);
}

/*

  < 1단계 리팩토링 >

  아래에 주어진 코드를 Promise를 사용하여 리팩토링 하세요.

*/
const getNumber = (i) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(i);
    }, i * 100)
  );
};

for (let i = 1; i <= 5; i++) {
  getNumber(i).then((result) => console.log(result));
}

/*

  < 2단계 리팩토링 >

  Promise를 사용하여 리팩토링한 결과물을 async/await을 이용하여 리팩토링 하세요.

*/
const printNumber = async () => {
  for (let i = 1; i <= 5; i++) {
    const result = await getNumber(i);
    console.log(result);
  }
};

printNumber();
