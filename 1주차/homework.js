let fruit_list = ['사과', '감', '감', '배', '포도', '포도', '딸기',
    '포도', '감', '수박', '딸기']

// 숙제 1 : 배열에서 특정 원소 개수 구하기 - map 함수를 사용해서 해결하기
let count = 0;
fruit_list.map((item) => {
    if (item == '딸기') {
        count += 1;
    }
});
console.log(count);

// 숙제 2 : filter 함수로 '포도'만 들어 있는 podo_list 리스트 구현해보기
const podo_list = fruit_list.filter(fruit => fruit == '포도');
console.log(podo_list);

