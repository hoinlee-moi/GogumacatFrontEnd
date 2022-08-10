# :sweet_potato: **GogumacatFrontEnd**
<span style="font-size : 19px">**중고물품 대여 플랫폼 <br>
(팀프로젝트) - 프론트엔드**</span> <br>
[팀 github](https://github.com/sparta-cloud-a3)

<br>
<br>
<br>


>## 1. 제작기간 & 참여인원

<br>
<li>2022-05-06 ~ 2022-07-29</li>
<li>3명 -> 백엔드 2명 , 프론트엔드 1명 </li>

<br>
<br>

>## 2. 사용기술

<br>
<ul><span style="font-size : 18px; font-weight : bold">Front-end</span>
<li>Javascript</li>
<li>jQuery 3.6.0</li>
<li>vue.js</li>
<br>
</ul>
<ul><span style="font-size : 18px; font-weight : bold">Back-end</span>
<li>Java 8 </li>
<li>Spring Boot 2.7.0</li>
<li>Gradle</li>
<li>Spring Data JPA</li>
<li> MySQL </li>
</ul>

<br>
<br>

>## 3. 내가 맡은 기능
<br>

### 3-1. **디자인 적인 부분**
프론트엔드는 눈에 보이는 영역으로서 디자인 적 요소나 순간적으로 확 끌어당길 수 있는 요소가 필요하다 생각했습니다. <br>
의도는 명확하지만 실력적인 부분이 모자라 주로 유명 사이트들의 디자인을 참고 하였습니다.<br>
(당근마켓, 라인, 토스 등)<br>
<br>
<details>
<summary style="cursor : pointer;">기능 설명 펼치기</summary>

*  <span style="font-size : 15px; font-weight : bold">메인페이지</span>
    - 첫 로딩 화면   :mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/27260c638c3076fb5ff0af5f559f80de97339af2/js/index.js#L98) <br>
         requestAnimationFrame을 이용하여  첫 페이지가 로딩 될 때 애니메이션 효과를 적용하였습니다.<br>
         **LINE 홈페이지 참고** <br>
         <br>
         ![](./Readme_gif/ezgif-4-8dc19e4aae.gif)

         <br>
    - 스크롤 애니메이션   :mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/27260c638c3076fb5ff0af5f559f80de97339af2/js/index.js#L246)<br>
        addEventListener를 사용하여 사용자가 scroll 할 때마다 값을 갱신하여 특정 세션에 들어올경우<br> element의 class를 변환하여 CSS의 @Keyframes 의 애니메이션이 동작되도록           만들었습니다.<br>
        **TOSS 홈페이지 참고**<br>
        <br>
        ![](./Readme_gif/ezgif-4-9e6ae07206.gif)

        <br>
    - 인기 리스트 띄우기   :mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/27260c638c3076fb5ff0af5f559f80de97339af2/js/index.js#L342)<br>
    백엔드에서 보내준 API명세서를 확인하여 jQuery의 Ajax를 이용, 좋아요가 가장 많이 된 인기매물 top8개를 골라 리스트에 띄우도록 만들었습니다.<br>
    **당근마켓 홈페이지 참고**<br>
    <br><img src="./Readme_gif/main-list.jpg" width="600" height="388">

    <br>
</details>

<br>
<br>

### 3-2. **게시판기능**
이 서비스는 사용자가 글을 올림으로서 거래라는 명목이 활성화 됩니다.<br>
이로인해 다른 누군가가 글을 확인 할 수 있고 그로인해 거래가 완료 되어 글이 수정되거나 삭제되는 등 <br>
게시판 기능이 이 서비스의 핵심이라고 볼 수 있습니다.<br>
<br>

<details>
<summary style="cursor : pointer;">기능 설명 펼치기</summary>

*   <span style="font-size : 15px; font-weight : bold">목록페이지</span>   
:mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/72f129fa619388fd739c96c09cd1b6926e2ed8eb/js/list.js#L16)<br>
    - jQuery의 Ajax를 이용하여 데이터를 받아 전체 목록을 쭉 띄워주도록 하였습니다.<br>
    - Ajax콜을 할 때 들어가는 값에 따라 최신순과 좋아요 순으로 나뉘도록 하였습니다.<br>
    - 각 게시글마다 존재하는 id값이 있으며 id값을 도메인에 넣어 상세페이지로 연결합니다<br>
    <br><img src="./Readme_gif/list.jpg" width="600" height="388">
    <br>
    <br>
* <span style="font-size : 15px; font-weight : bold">검색기능</span>   
:mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/72f129fa619388fd739c96c09cd1b6926e2ed8eb/js/list.js#L35)<br>
    - [search.js](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/7ac7577ea9cccd3fe6d6b67832bf1209dc270f5f/js/search.js#L1) 에 입력된 코드를 통해 검색 값을 도메인에서 받아 Ajax를 사용하여 백엔드에 요청하면 값에 따라 데이터를 받게 됩니다.
    - 받은 데이터 값을 토대로 목록을 띄워줍니다.<br>
    <br><img src="./Readme_gif/search.jpg" width="600" height="388">
    <br>
    <br>
* <span style="font-size : 15px; font-weight : bold">글 상세 페이지(글삭제)</span>   
:mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/7ac7577ea9cccd3fe6d6b67832bf1209dc270f5f/js/post.js#L14)<br>
    - 도메인에서 id값을 받아 Ajax로 백엔드에 요청, 받은 데이터로 상세페이지를 구성합니다.
    - 접속한 유저가 토큰을 가지고 있는지와 게시글에 등록된 username과 접속한 username이 같은지를 비교하여 삭제 수정등의 기능을 비 활성화 합니다.<br>
    - 상단의 모든 조건이 통과 될 경우 글 삭제를 누를 시 Ajax로 토큰과 함께 통신을 보내 db상 데이터를 삭제합니다.   
    :mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/424b0ad03085d21146d057612f4545c002182c37/js/post.js#L207)<br>
    <br><img src="./Readme_gif/post(guest).jpg" width="600" height="388"><br>
    <br><img src="./Readme_gif/post(user).jpg" width="600" height="388">
    <br>
    <br>
* <span style="font-size : 15px; font-weight : bold">글 작성 페이지</span>   
:mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/3601a0b7c990165f863d2582fade1d508690df68/js/posting.js#L9)<br>
    - 글 작성전에 유저가 로그인을 한 상태인지 쿠키에 저장된 토큰을 확인합니다.<br>
    - 날짜 부분에서 jQuery로 이루어진 달력 라이브러리를 사용했습니다   
    :mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/3601a0b7c990165f863d2582fade1d508690df68/js/overlap-posting.js#L107)<br>
    - 지도와 주소부분에서 kakao API공식 문서를 바탕으로 주소 검색과 지도 확인을 구성하였습니다.<br>
    - 등록 버튼을 누를 시 입력된 값과 이미지 파일을 FormData에 담아 Ajax로 토큰과 함께 백엔드에 전송합니다.   
    :mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/3601a0b7c990165f863d2582fade1d508690df68/js/overlap-posting.js#L36)
    <br>
    <br><img src="./Readme_gif/posting.png" width="600" height="388">
    <br>
    <br>
* <span style="font-size : 15px; font-weight : bold">글 수정 페이지</span>   
:mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/424b0ad03085d21146d057612f4545c002182c37/js/posting-update.js#L39)<br>
    - 글 수정 페이지 들어오기 전 url을 통한 우회 접속을 막기 위해 토큰 검사 및 로그인 한 유저와 글 작성 유저가 동일한지 확인합니다.   
    :mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/424b0ad03085d21146d057612f4545c002182c37/js/posting-update.js#L133)<br>
    - url을 통해 id 값을 뽑아 내어 해당하는 게시글의 데이터를 Ajax로 불러와 각 요소에 삽입합니다.<br>
    - 수정 완료 버튼을 누를 시 각 요소의 유무를 파악 후 Ajax를 통해 해당 게시글 데이터를 업데이트 합니다<br>
    <br><img src="./Readme_gif/ezgif-5-a0b3c7fbad.gif" width="600" height="388">
    <br>
    <br>
</details>
<br>
<br>

### 3-3. **Open API 사용**
사이트의 기능을 구현하는데 있어 필요한 부분들을 Open API를 이용하여 구현하였습니다.<br>
<br>
<details>
<summary style="cursor : pointer;">기능 설명 펼치기</summary>

* <span style="font-size : 15px; font-weight : bold">상세 페이지 내 카카오 지도API</span>   
:mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/7ac7577ea9cccd3fe6d6b67832bf1209dc270f5f/js/post.js#L133)<br>
    - kakao api 공식문서를 통하여 지도 api를 구현하였으며 커스텀 오버레이를 통해 고구마캣 대표 색감과 캐릭터 이미지로 변경하였습니다.
    - 버튼을 통하여 지도와 로드뷰를 번갈아 확인할 수 있도록 구현하였습니다.<br>
    <br><img src="./Readme_gif/map.jpg" width="600" height="388"><br>
    <br><img src="./Readme_gif/roadview.jpg" width="600" height="388">
    <br>
    <br>
* <span style="font-size : 15px; font-weight : bold">주소 검색 API</span>  
:mag: [코드확인](https://github.com/hoinlee-moi/GogumacatFrontEnd/blob/7ac7577ea9cccd3fe6d6b67832bf1209dc270f5f/js/overlap-posting.js#L90)<br>
    - kakao(daum)우편번호 api를 이용하여 구현하였으며 공식문서를 통해 어떤 주소를 입력해도 지번 주소로 출력 되도록 변경하였습니다<br>
    <br><img src="./Readme_gif/address.png" width="600" height="388"><br>
    <br>
    <br>
</details>
<br>

### 3-4. **AWS와 git actions를 통한 배포 자동화**
프론트와 백을 분리하여 진행하면서 Git과 AWS의 s3, cloudfront를 이용하여 배포 하였고 git actions를 이용하여 배포 자동화까지 구현하였습니다.
이후 gabia에서 도메인을 구입하여 aws의 cloudfront에 연결, 도메인 변경까지 완료하였습니다.
<br>
<br>
<br>

>## 4. **트러블 슈팅**
<br>

<span style="font-size : 20px; font-weight : bold">핵심 트러블 슈팅</span>
<br>

<span style="font-size : 15px; font-weight : bold">4-1.프론트와 백 분리 </span>
<details>
<summary style="cursor : pointer;">4-1. 트러블 슈팅 펼치기</summary>

* 처음 프로젝트를 시작할 땐 제가 프론트로 전향 전이었고 python의 flask로 서버를 구성하여 만들었습니다. 이때는 SSR로 구성하였는데 이에 구성 속도 면에서 차이가 있고 Java로 개발 언어를 바꾸는 과정에서 모든 걸 엎어야 되는 걸 경험 후 분리를 시켰습니다.<br>
<br>
    - 이 과정에서 프론트는 사용하였던 템플릿 언어(timeleaf)를 전부 제거 하고 순수 html, javascript로 구성하였으며 백엔드와의 api명세서를 바탕으로 jQuery(Ajax)를 이용하여 데이터 통신을 완료 했습니다.<br>
    <br>

* **수정전코드**<br>

    ``` html
    <div class=content-name;>
        <h1 th:text="${post.title}">글제목</h1>
        <h4 th:text="${post.price} +'원 (1일 기준)'">0원 (1일 기준)</h4>
        <h5 th:text="${post.date}">작성 일자</h5>
    </div>
    <div class="content-info" style="white-space: pre-line">
        <br>
        <p th:text="${post.content}">게시물 내용</p>
    </div>
    ```
    <br>

* **수정후코드 - javascript로 데이터를 받아 각 element값을 채워줬습니다.**<br>
    ```html
    <div class="post-img-container">
            <div class="post-img" id="post-img-box">
                <img id="postImage" src="">
            </div>
        </div>
        <div id="chat-box">
        </div>
        <div class="post-title-container">
            <div class="post-title">
                <p id="postTitle"></p>
                <p id="postAddress"></p>
                <p id="postPrice"></p>
                <p id="postSold"></p>
    ```
    ```javascript
    function getDetail(postId) { 
        $.ajax({
            type: "GET",
            url: `${domain}/post/detail/${postId}`,
            data: {},
            dataType : "json",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("token", token);
            },
            success: function (response) {
                write_user = response['post']['writeUserId']
                makeDetail(response)
            },
            error:() => {
                alert('잘못된 접근입니다.')
                window.history.back()
            }
        })
    };
    ```

</details>
<br>

<span style="font-size : 15px; font-weight : bold">4-2. 유저 보안 </span>
<details>
<summary style="cursor : pointer;">4-2. 트러블 슈팅 펼치기</summary>

* 프로젝트 완성이후 고객 피드백을 받는 과정에서 url을 변경을 통한 접속시 토큰이나 유저에 상관없이 접속 되는 경우가 발생하였습니다.<br>
이로인해 로그인 하지 않은 사람 또는 다른 회원이 다른 사람의 글을 마음대로 변경할 수 있었습니다.
    - 앞 페이지에서의 버튼이나 태그를 통한 이동시에만 토큰이나 유저검사를 하는 문제점을 발견했습니다.
    - 페이지가 로딩 될 때 토큰과 유저검사, 비 정상적인 접근으로 ajax콜이 거부 당할 때 error 메세지 와 페이지 접근 불가 조치로 해결하였습니다.<br>
    <br>
* **추가된 코드**

```javascript
function token_check() {
    if(!token) {
        alert('로그인이 필요합니다')
        window.history.back()
    }
}

function user_check() {
    connet_id = document.querySelector('.logo-container #loginName-0').textContent
    console.log(connet_id,write_id)
    if(connet_id != write_id) {
        alert('올바르지 않은 접근입니다.')
        window.history.back()
    }
}

window.addEventListener('load',() => {
    token_check()
    parameter()
    post()
})
```
<br>

</details>
<br>

<span style="font-size : 15px; font-weight : bold">4-3. git actions를 이용한 자동배포시 s3내 파일이나 cloudfront의 캐시가 변경되지 않는 문제 </span>
<details>
<summary style="cursor : pointer;">4-3. 트러블 슈팅 펼치기</summary>

* 자동 배포 완료 후 테스트를 진행하던 도중 s3내의 파일중 index를 제외하곤 변경된 내용이 저장되지 않는 문제점을 발견하였습니다.

    - main.yml 저장된 코드의 문제로 해당 코드를 삭제 후 정상 작동을 확인하였습니다.
    (with부분 삭제)<br>
    <br>
* **수정전코드**
```yml
    steps:
      - name: Checkout source code.
        uses: actions/checkout@master

      - name: Upload binary to S3 bucket
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --acl public-read --exclude '*' --include 'index.html'
        env:
          AWS_S3_BUCKET: ${{ secrets.BUCKET_NAME }}
```
<br>

* **수정후코드**
```yml
steps:
      - name: Checkout source code.
        uses: actions/checkout@master
      - name: Upload binary to S3 bucket
        uses: jakejarvis/s3-sync-action@master
        env:
          AWS_S3_BUCKET: ${{ secrets.BUCKET_NAME }}
```
<br>

* 상단의 문제를 해결 중 cloudfront에선 index파일 또한 캐시 삭제가 되지 않고 처음 배포된 상태 그대로 유지되는 문제점 또한 발견하였습니다.
    - 같은 main.yml 코드문제 였는데 cloudfront 코드 부분에서 캐시 초기화가 입력되어 있지만 PATHS를 /index.html로 지정하여 생긴 문제로 확인하여 /* 전체로 수정하여 해결하였습니다.
    <br>
    <br>
* **수정전코드**
```yml
- name: Invalidate cache CloudFront
        uses: chetan/invalidate-cloudfront-action@master
        env:
          DISTRIBUTION: ${{ secrets.DISTRIBUTION_ID }}
          PATHS: '/index.html'
        continue-on-error: true

```
<br>

* **수정후코드**
```yml
- name: Invalidate cache CloudFront
        uses: chetan/invalidate-cloudfront-action@master
        env:
          DISTRIBUTION: ${{ secrets.DISTRIBUTION_ID }}
          PATHS: '/*'
        continue-on-error: true
```
<br>
</details>
<br>

<span style="font-size : 20px; font-weight : bold"> 트러블 슈팅</span>
<br>

<span style="font-size : 15px; font-weight : bold">4-4. 메인페이지 스크롤 애니메이션 에러 
</span>
<details>
<summary style="cursor : pointer;">4-4. 트러블 슈팅 펼치기</summary>

* 스크롤을 이용한 인터렉션 페이지를 만드는 도중 사용자가 스크롤 할 때마다 계속해서 애니메이션이 재 시작되는 문제를 발견하였습니다.
    - 이는 requestAnimationFrame로 구현하였는데 제제 없이 계속해서 관련 함수가 실행되는 것이 확인되었습니다.
    - requestAnimationFrame로 구현한 부분을 과감히 포기, 삭제 후 CSS의 keyframs 애니메이션 효과를 이용 class명 유무를 트리거로 두어 특정 위치에서 스크롤 될 시 한 번만 애니메이션이 실행되도록 변경하였습니다.

</details>
<br>

<span style="font-size : 15px; font-weight : bold">4-5. canvas 이미지 무응답 에러 </span>
<details>
<summary style="cursor : pointer;">4-5. 트러블 슈팅 펼치기</summary>

* 이미지 파일을 canvas로 그릴 때 아직 load되지 않아 페이지 로딩시 에러 없이 흰색 화면만 출력되었다.<br>
<br>
    - 이미지가 로드 되고 canvas에 image를 넣어줄 수 있도록 image.onload 사용하여 해결했습니다.
    - 이후 최초 로딩 화면을 구현함으로서 로딩 화면이 끝난 후 canvas가 그려질 수 있도록 변경하여 image.onload는 제거하였습니다.
</details>
<br>

<span style="font-size : 15px; font-weight : bold">4-6. jquery 에러 </span>
<details>
<summary style="cursor : pointer;">4-6. 트러블 슈팅 펼치기</summary>

* 글 작성과 글 수정 페이지에서 jQuery가 아예 동작하지 않는 오류가 발생하였습니다.<br>
<br>
    - 문제점을 찾기 위해 개발자 도구 창을 이용하여 문제점이 콘솔에 찍히지 않는 점을 확인 네트워크를 들어가 jQuery가 로드 되는지 확인하였습니다.
    - 확인 결과 jQuery가 2번 로드 되는 것을 확인 달력 라이브러리를 가져올 때 생긴 문제로 다른 버전의 jQuery를 2번 로드하여 생겼다고 판단하여 구 버전 로드를 삭제하니 정상 작동하였습니다.

</details>
<br>

<span style="font-size : 15px; font-weight : bold">4-7. UI/UX 디자인 </span>
<details>
<summary style="cursor : pointer;">4-7. 트러블 슈팅 펼치기</summary>

* 초기 디자인은 매우 단조로웠으며 사용자 편의성도 매우 낮았습니다. 이후에 수정된 부분들도 부족한 부분이 많아 계속되는 수정을 거쳤습니다.<br>
<br>
    - 각 페이지 별로 직접 사용하며 불편한 점들을 하나하나 고쳐 나갔습니다.
    - list페이지로 돌아올 버튼이 없는 것, 로그인 버튼이 명확하게 주어지지 않아 사용자가 처음 접속 시 로그인 하기 어려운 점, 첫 메인 페이지에서 바로 list들을 보러가려면 상단 배너의 버튼을 클릭해야 하는 등의 사용자 편의에 불편한 부분들을 수정을 통해 완화하였습니다.
</details>
<br>

<span style="font-size : 15px; font-weight : bold">4-8. 추가 수정시 발생되는 에러 </span>
<details>
<summary style="cursor : pointer;">4-8. 트러블 슈팅 펼치기</summary>

* 프로젝트를 처음 시작할 때 필요한 html요소들이나 domain, token등을 따로 상단에 모아두지 않아 수정시마다 전체에서 검색하여 고쳐야 되는 문제가 발생하였습니다.<br>
    - 코드를 진행하며 필요한 변수와 html 요소들을 한꺼번에 상단에 모아두어 정리한 뒤 하단부 코드에서 직접적으로 사용하는 것이 아닌 정리한 변수들을 사용하여 적용하였습니다.
    - 이로인해 수정 변경이 있을 시 상단에 코드를 추가한다거나 변경하여 전체 코드를 찾아가며 수정하는 번거로움이 사라졌습니다.<br>
    <br>
* **수정코드**<br>
```javascript
//도메인과 토큰
const domain = "http://www.hongseos.shop"

const token = $.cookie("mytoken")

//파라미터 닮을 배열
const paramArray = [];
let id = 0;
//비교할 유저 아이디
let connet_id;
let write_id;

//각 input 값 변수 지정
const inputInfo = [{
    type : 'input',
    objs : {
        title : document.querySelector('#posting-title'),
        date : document.querySelector('#calendar'),
        price : document.querySelector('#price'),
        content : document.querySelector('#content'),
        address :document.querySelector('#local_address'),
        file : document.querySelector('#img'),
        file_name : document.querySelector('#file-js-example .file-name'),
        file_preview : document.querySelector('#image_preview #img_pre')
    }
}]
const objs = inputInfo[0].objs
```
</details>
<br>

>## 5. 회고 / 느낀점
<br>

* ### **회고**
    - 작성중

<br>

* ### **느낀점**
    - [개인 블로그](https://velog.io/@lee_moi/WIL-15202207025-0731-%EC%B2%AB-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%EB%81%9D)
