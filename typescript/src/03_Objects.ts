/* 

let               타입 선언부           객체
const   변수명:{속성명 : 타입,,,,} = {속성명 :값}
var

*/

let myInfo : {
  name: string,
  height:number,
  isConditionGood : boolean,
  gender? : string,  //선택적 속성, 해당 속성이 없을 경우 값은 undefined

}={
  name : 'pes',
  height : 161,
  isConditionGood : true,
}

console.log('myInfo : ' , myInfo)
console.log('myInfo.gender : ', myInfo.gender)

/*
 interface
 인터페이스는 타입을 정의한 규칙을 의미.

  혁식] interface 인터페이스 이름 {
  속서명, 타입,
  ,,,
  }

  사용] e=let, const,var    변수명= 인터페이스이름{}
*/

interface User{
  age: number;
  name : string;
}

var p1 : User{age:2, name:'upus'}
var p2 : User{age:25}
  
function getUser(user:User ) :void{
  console.log(user)
}

getUseru(p1)

/*
  인터페이스확장
  기존의 인터페이스 속성을 재사용해서 원하는 속성을 추가ㅏ는 아기 어엉아
  interface 이름 extends 확장받을 이름{
  }
*/

interface Wip extentd User{
  hobby : string
}

var cust=Vip{
  age: 30,
  
  name: 34.\,
  hobby.
}