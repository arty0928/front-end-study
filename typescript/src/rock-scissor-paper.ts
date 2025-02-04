const buttons = document.querySelectorAll(".button");

buttons.forEach((button, index) =>{
  button.addEventListener('click', () => rockGame(index));
})

let totalCount = 0;
let win = 0;
let lose = 0;
let middle = 0;


function rockGame(index : number) : void {
  // 번호뽑기

  totalCount++;
  let computer : number = parseInt(Math.random() * 3 +'');
  let computerResult = document.querySelector(".computer") as HTMLImageElement;
  // let computerResult = document.querySelector(".computer");

  switch(computer){

    case 0:
      computerResult == null ? '' : computerResult.src = '/images/rock.png';
      // computerResult == null ? '' : computerResult.setAttribute('src','/images/rock.png');
      
      if(index == 2){
        win++;
      }
      else if(index == 1){
        lose++;
      }
      break;
    case 1:
      computerResult == null ? '' : computerResult.src = '/images/scissors.png';
      if(index == 0){
        win++;
      }
      else if(index == 2){
        lose++;
      }
      break;

    default:
      computerResult == null ? '' : computerResult.src = '/images/paper.png';
      if(index == 1){
        win++;
      }
      else if(index == 0){
        lose++;
      }
      break;
  }

  if(computer == index) {
    middle++;
  }
  result()

}

function result() : void {

  let resultView = document.querySelector('.result') as HTMLParagraphElement;
  resultView.innerText = `${totalCount} 전 ${win} 승 ${middle} 무 ${lose} 패`;
}