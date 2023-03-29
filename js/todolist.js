/* 투두리스트 만들기 */
// 추가) 할일 값을 받아와서 ul의 li로 출력하기
// 완료) 할일을 완료(체크)를 했을 때, 완료표시
// 삭제) 할일을 삭제

// 할일 입력창에 값을 입력하고 submit을 했을 때(이벤트 발생) - form태그에만 
// 작성한 할 일을 ul에 li로 추가(실행할 함수)
const todoForm = document.querySelector("#todo-form"); // 접근
// 접근한 값에 submit 이벤트
todoForm.addEventListener("submit", todoAdd);

// 할일과 완료한 할일 DOM
const countPrint = document.querySelector("#count"); // 자주 사용할 것 같다면 밖으로 빼서 사용하면 된다

// 전역으로 관리할 전체 할일 개수와 체크한 개수
let allCount = 0; // const를 하게 되면 값 자체의 연산이 어려울 수 있기 때문에 let으로 작성
let checkedCount = 0;


// 투두를 추가하는 함수
function todoAdd(e) {
    e.preventDefault();
    
    // input태그의 값을 가져와서 ul의 list로 추가하기
    // todoForm.firstElementChild 는 input type = text
    const todoValue = todoForm.firstElementChild.value;

    // li태그 생성 ul찾아서 추가
    const li = document.createElement("li");

    // li태그에 추가할 내용 : 체크박스, 텍스트노드, 버튼
    // 태그 생성
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerHTML = "X";
    // 시간을 추가하기 위한 span태그
    const time = document.createElement("span");
    // 다른 자바스크립트에서 작성한 함수를 가져와 쓸 수 있다.
    time.innerHTML = getClock();

    // li 태그에 생성한 태그 추가
    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time); // 시간 추가
    li.appendChild(button);

    // document.querySelector("#todolist"); ul
    document.querySelector("#todolist").appendChild(li);

    // input의 value값을 " " 으로 바꿈
    todoForm.firstElementChild.value = "";

    // 할 일이 추가되었다면 갯수를 세어서 출력 getAllCount()
    countPrint.innerHTML = `${getAllCount()}개 해야해요 ${getCheckedCount()}개 했어요`
    // 전역변수에 접근해서 Allcount 개수 증가
    allCount++;
    console.log("전체 개수", allCount);

    // check에 클릭 이벤트 추가
    check.addEventListener("click", todoCheck);

    // button에 클릭 이벤트 추가
    button.addEventListener("click", todoDelete);
}

// check에 들어가는 todoCheck 함수 작성
function todoCheck(e) {
    // 이벤트 객체를 통해서 이벤트가 실행된 태그 찾아서 값 사용
    const check = e.target;
    const li = check.parentNode;
    // console.log(check.checked);
    if(check.checked) {
        li.firstChild.style.color = "gray";
        // 체크했을 때 1추가
        checkedCount++;
    } else {
        li.firstChild.style.color = "";
        // 체크해제했을 때 1감소
        checkedCount--;
    }
    // 할 일이 삭제되었다면 갯수를 세어서 출력 getAllCount()
    countPrint.innerHTML = `${getAllCount()}개 해야해요 ${getCheckedCount()}개 했어요`
    // 체크한 값 출력
    console.log("체크한 수", checkedCount);

    // 전체 할일의 감소를 위해 allCount의 값을 1씩 감소
    allCount--;
    console.log("전체 개수", allCount);
    console.log("체크한 수", checkedCount);
} 

// 버튼에 클릭이벤트를 추가해서
// 선택된 li가 삭제되는 함수 작성 remove()
function todoDelete (e){
    const button = e.target;
    const li = button.parentNode;
    // 체크가 되어있는지 확인 (체크가 되어있다면 1감소)
    const checkbox = li.firstElementChild;
    if(checkbox.checked){
        checkedCount--;
    }

    li.remove("check");
    // 할 일이 삭제되었다면 갯수를 세어서 출력 getAllCount()
    countPrint.innerHTML = `${getAllCount()}개 해야해요 ${getCheckedCount()}개 했어요`
}

/* Dom을 직접 가져와서 갯수를 확인 */
// 추가, 삭제, 체크할 때마다 갯수를 확인
// 함수 만들어서 확인
function getAllCount() {
    const todolist = document.querySelector("#todolist");
    // 1) return을 통해서 값을 전달
    // 2) DOM을 가져와서 출력
    console.log(todolist.childElementCount); // 출력되는 내용 콘솔창으로 확인
    return todolist.childElementCount; // 함수 안에 사용해주어야 한다.
}

// 체크된 DOM 갯수 가져오기
function getCheckedCount(){
    const checkedlist = document.querySelectorAll("#todolist li input[type='checkbox']:checked");
    // 선택자를 넣어서도 가능한데, 속성이름과 타입까지 , 명확하게 작성해주기 위함
    console.log(checkedlist.length);
    return checkedlist.length;
}