/* 
  intersection
  
  타입 A가 있고 타입 B가 있다면 intersection을 통해 A이면서 B인 타입을 정의한다.

  형식] 
    type 타입명 A{
      속성명 : 타입 ... 
    }

    type 타입명 B{
      속성명 : 타입 ... 
    }

    type 타입명 C = 타입명 A & 타입명 B; 

*/

type cup = {size : string}
type brand = {brandName : string}
type brandCup = cup & brand;

let starbuck : brandCup= {size : 'grande', brandName : '스타벅스'}

console.log(starbuck)