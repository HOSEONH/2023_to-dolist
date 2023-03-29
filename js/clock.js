/* 현재 시간을 1초마다 다시 화면에 출력 */
// 현재 시간 : Date() - 시간을 가져오는 객체
// 현재 시간을 들고와도 자동으로 값이 바뀌지 않는다. (고정)
// 그 값을 새로 들고오면 바뀜 > new Date()값을 새로 할당
// 1초마다 new Date()의 값을 할당
// 타이머 함수인 인터벌 사용

// 시간을 출력할 태그 가져옴
const clock = document.querySelector("#clock");

// 함수 만들기
// 타이머 함수의 콜백함수(함수안에 함수)로 사용하기 위해 함수로 작성
function getClock() {
    // 숫자를 Date()를 통해 값 수정
    let date = new Date(); // 현재 시간을 가져옴
    let hour = String(date.getHours()).padStart(2, "0"); // date.getHours() // 가져옴
    let minute = String(date.getMinutes()).padStart(2, "0"); // get을 통해 들고오는 것은 모두 함수이므로 ()로
    // " " 문자열로 바꾸면 그 자리의 문자값을 변경한다
    // .padStart 날짜의 자릿수를 채우기 위한 메소드
    // 상황에 맞는 메소드를 잘 찾도록 하자
    // 특정한 상황에만 사용할 수 있는 메소드가 있다
    let second = String(date.getSeconds()).padStart(2, "0");

    // clock에 현재 시간을 출력
    // clock.innerHTML = `${hour}:${minute}:${second}`; 
    
    // clock.innerHTML="10:50:00"; // 임의로 문자열로 넣어준 것 - 값이 계속해서 바뀌지 않는다.
    // return값을 이용해서 clock.innerHTML = getClock();
    return `${hour}:${minute}:${second}`; 
    // return을 통해 시간을 문자열로 돌려줄 수 있다

}

// 타이머 함수를 통해서 1초마다 시간을 받아오게 작성
setInterval(function(){
    clock.innerHTML = getClock();
}, 1000); // 안에 들어가 있는 함수를 1초마다 반복하게 한다. 
// 위에 작성해준 숫자를 데이터 값으로 바꾸려고 한다

// 타이머는 1초 뒤에 실행하기에,
// 화면에 바로 출력하기위해 함수 호출
clock.innerHTML=getClock();