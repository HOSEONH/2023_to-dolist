/* 버튼을 눌렀을 때 환영인사 출력 */
/* form의 submit을 눌렀을 때 input의 값이 h1태그에 할당 */

// id를 통해서 직접 접근
// submit(버튼)을 눌렀을 때(이벤트 - submit : form): form에 이벤트
// input의 값이 h1태그에 할당(실행할 함수)

// 누른 것은 버튼, 실행되는 것은 form
// 필요한 것 - input값, 버튼을 눌렀을 때 실행
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", onLogin)

// 로그인 함수
function onLogin(e){
    // submit 이벤트는 새로고침 이벤트가 들어가 있다.
    e.preventDefault(); // 새로고침 막아주기
    console.log("submit이벤트 발생");

    // 값을 들고올 input태그 가져옴 - value (속성에 있는 값으로)
    const loginId = document.querySelector("#login-id");
    // 값을 넣어줄 h1태그 가져옴 - innerHTML
    const greeting = document.querySelector("#greeting");

    // greeting.innerHTML += " " + loginId.value + "님"; // 복합대입연산자 사용 ! 앞에 글자에 뒤에 글자 추가 출력 
    greeting.innerHTML = `${loginId.value}님 TO-DOLIST`;
    // form의 submit의 경우는 enter를 눌러도 실행 가능 , 버튼을 눌러서도 실행 가능

    // 글자가 바뀌고 난 이후에 화면에 출력되도록
    // 화면에 글자를 보여주기 위해 calss 제거
    greeting.classList.remove("hidden");
    document.querySelector("#todo-form").classList.remove("hidden");
    document.querySelector("#todolist").classList.remove("hidden");
    // 로그인 창을 보이지 않게 하기 위해 calss 추가
    loginForm.classList.add("hidden");
}

