/* body의 이미지가 새로고침(다시 들어올 때)할 때마다 바뀜 */
// 이미지가 새로고침할 때마다 바뀜
// : body를 새로 부를 때마다 바뀜 - 새로고침할 때마다 JS호출
// 1) 이미지가 여러개
// 2) 이미지는 랜덤으로 바뀜
// 랜덤) Math.random() 정수값을 사용하기 위해 원하는 횟수를 곱함
// 소수 부분은 버림

const body = document.querySelector("body");
// 랜덤한 문자열을 사용하기 위해 배열과 함께 사용 숫자가 아닌 문자로 작성해줄 때는 배열과 함께 사용한다
// 배열의 인덱스를 랜덤하게 접근
const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"] // 공간안에 문자열

// 랜덤한 숫자값 0~2까지 생성
// 한번에 생성을 하려면
const randomIndex = Math.floor(Math.random()*4) // Math.floor를 통해 잘라서 사용
// const randomIndex = Math.floor(Math.random()*images.length)

body.style.backgroundImage = `url(./Img/${images[randomIndex]})`;
body.style.backgroundSize = "cover";

// 문자열로 넣어져야 한다

// function changeStyle(){
//     let randomIndex = Math.floor(Math.random()*4)
//     randomIndex.style.opacity = "1";
// }