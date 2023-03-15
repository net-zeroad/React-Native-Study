# 앱개발에 자주 쓰이는 ES6 Javascript 문법
- 리액트 네이티브는 항상 최신 버전의 자바스크립트 문법(ES6)을 사용합니다.
그렇기 때문에 공식문서를 볼때 당황하지 않고 간결한 문법을 사용하기 위하여 배워봅니다.

## 화살표 함수 - 함수를 더 짧게 사용한다.
```js
    // 기존 방식
    let a = function() {
    console.log("function");
    }
    a();

    // 최신 방식
    let a = () => {
    console.log("arrow function");
    }
    a();.
```

## 비구조 할당 - 딕셔너리의 키와 값을 빠르게 꺼낸다.
- 객체의 값을 꺼내 변수에 담을 때 할당 과정을 거치지 않으면서 딕셔너리의 키 값 그대로 변수 사용이 가능하다.
```js
    //객체 
    let blog = {
        owner : "noah",
        url : "noahlogs.tistory.com",
        getPost() { 
            // 객체의 키값으로 함수를 가질수도 있다.
            console.log("ES6 문법 정리"); 
        }
    };

    //기존 할당 방식
    let owner = blog.owner
    let getPost = blog.getPost()

    //비구조 할당 방식 - good
    let { owner, getPost } = blog;       
    //각각 blog 객체의 owner , getPost() 의 데이터가 할당
    //blog의 키 값과 이름이 같아야 해요!
    //(예 - owner가 아니라 owner2를 넣어보세요! 아무것도 안 들어온답니다.)

    ** 앞으로 리액트 네이티브 앱을 만들며 가장 많이 사용할 방식**

    //함수에서 비구조 할당 방식으로 전달된 딕셔너리 값 꺼내기
    let blogFunction = ({owner,url,getPost}) => {
        console.log(owner)
        console.log(url)
        console.log(getPost())
    }

    blogFunction(blog)
```

## 리터널 템플릿 - 자바스크립트 안에서 줄바꿈을 자유롭게 한다.
- 최신 방식에서는 키보드에서 느낌표 옆에 있는 키인 백틱 ( ` ) 을 이용하여 문자열을 + 기호 없이 간단히 처리할 수 있습니다.
또한 백틱 ( ` ) 안에서는 여러 줄의 줄바꿈도 자유롭게 사용 가능합니다.
```js
    const id = "myId" ;
    const url = `http://noahlog.tistory.com/login/${id}` ;

    const message = "줄바꿈을 하려면 \n 이 기호를 써야 했죠!"

    const message = ` 줄바꿈도 마음대로
    사용이 가능합니다. ` 
```

## 객체 리터럴 - 딕셔너리를 짧게 만들 수 있다.
- 기존에는 객체를 생성할 때 필드명과 대입할 변수명이 같은 상황에서 아래와 같은 코드를 작성하였다.
```js
    var name = "스파르타";
    var job = "developer";

    var user = {
    name: name,
    job: job
    }

    console.log(user);
    //{name: "스파르타", job: "developer"}
```
- 그러나 최신 방식으로는 아래와 같이 간결하게 작성할 수 있다. (key: value 형태에서 단순히 변수명만 작성해주면 변수명과 동일한 필드가 생성되며, 그 변수값이 대입됩니다.)
```js
    var name = "스파르타";
    var job = "developer";

    // 이렇게 축약 가능하다. - good
    var user = {
        name, job
    }

    console.log(user);
    //{name: "스파르타", job: "developer"}
```

## map - 반복문
- 기존에는 리스트(배열)를 순회하여 값을 꺼내 확인할 땐 다음과 같이 for 반복문을 사용했습니다.
```js
    let numbers = [1,2,3,4,5,6,7];
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
    }
```
- 이를 위해 리스트의 길이 값을 알아야 했습니다. 하지만 map은 리스트의 길이값을 몰라도 되며, for와는 반대로 리스트안에서 몇 번째에 있는 값인지 순서를 알려줍니다.
```js
let numbers = [1,2,3,4,5,6,7];

// 아래 2개의 map은 같다.
numbers.map((value,i) => { 
	console.log(value,i) 
});

numbers.map(function(value,i) {
    console.log(value,i)
});
```