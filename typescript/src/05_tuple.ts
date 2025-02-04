/*
tuple 
다양한 타입에 데이터를 배률 하까 유재ㅜ
 변수명  {타이브 타이브,,} = [값, 괎,,] //값의 갯루 넣고 선언한 ㅏ입의 개수와 순서 동ㅇ리해야
*/

const myTuple:readonly [string, number] = ['kg',47];
console.log('myTuple', myTuple)
// readonly가 없다면 데이터를 추가할 수 있다. 그러나 튜플의 목적에 맞지 않음
// myTuple.push('KKKK')

// 함수에서 튜플을 인자로 받을 수 있다.
function printMyTuple(name:string, info:[string, number]):void{
  console.log(`[${name}], ..info`)
}

// printMyTuple('튜플테스트', myTuple)

//튜플을 반환하는 함수
function fetchUser():[string, number]{
  return ['uplus',2]
}

console.log(fetchUser())

let returnTuple = fetchUser();
console.log(returnTuple)

// 튜플의 결과값을 분해해서 받을 수 있다.
const [nameT, ageT] = fetchUser();
console.log(`name : ${nameT}, age : ${ageT}`)