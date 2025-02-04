/*
타입 명시하기

//"strickNullChecks" : true 설정에 의해 반드시 해당 타입의 값을 대입
형식] const
      let     변수명 : 타입 = 값    
      var


  타입 종류
  null       : 의도적으로 값이 없음을 나타낼 때 사용
  undefined  : 의도하지 않았는데 값의 부재
  number     : 숫자 표현으로 정수(10진수, 16진수, 8진수), 부동소수점을 표현한다. 2^52 까지 표현
  string     : 문자열
  boolean    : 논리 값 true, false
  bigint     : number 이상의 수(2^52 이상)를 표현. 숫자 뒤에 n을 붙여서 표현 ex) 123n.  es2020부터 지원
  symbol     : 불변이면서 유니크한 값을 표현하는 자료형

  ex) 함수에서 매개변수를 넣어주지 않았다면 undefined
*/

// target이 es2016면 에러남
let bigData:bigint = 123n; 

let one : number = 1;
// one = undefined // "strictNullChecks" : true 설정 때문에 error

let myName : string = 'uplus';
let tureOrFalse:boolean = true;
let undefinedVal : undefined = undefined;
//undefined 타입이므로 값을 대입하면 오류 발생 
//  => 타입 유니온에서 현재 변수에 값이 없을 때 
// undefinedVal = 11;   

let nullVal : null = null;
// nullVal = 100;   //유미온에서 사용하기

// sybmol로 선언한 변수는 모든 값이 유일값이므로 같은 값으로 만든 데이터를 비교해도 false
let symbolVal: symbol = Symbol('symbol') 
console.log(symbolVal === Symbol('symbol'))
