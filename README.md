# 이민석
[5월 11일]
### useEffect 주의점
async-await 문을 쓰는 함수가 useEffect에 포함되어 있으면,   
함수를 따로 빼서 정의하고 useEffect에서 함수를 실행시켜야 한다.

[5월 4일]   
### Profile.js 코드 추가

### Home.js 코드 추가
home 접근 시 보이는 부분에 대하여 코드 추가
### Navigation 추가
routes 폴더에 Navigation.js 파일 생성 및 router.js에 export 처리
    
    
[4월 27일]   

### 로컬 유의사항
Path 설정 및 로컬 설정 확인 후 작업 할 것   

### 회원가입 firebase 연동
setNewAccount()   

### useEffect
파이어베이스 로그인 정보를 받게 되었을 때, 실행되는 함수   

### 딜레이 
setInterval()   

[4월 14일]
### firebase와 git 연동 
firebase에서 이메일, google, Github 등록   
이메일 = 추후 로그인에 사용할 이메일 및 비밀번호   
Google = 자동 연동 관련   
Git    = (OAuth) 승인된 도메인에서 ~~firebaseapp.com와 승인 콜백을 firebase로부터 가져오고   
         클라이언트 ID PW를 firebase로 보내도록 설정    

[4월 06일]

### export 'authService' (imported as 'authService') was not found in 'fbase' 
fbase.js밑에 export   

### fbase 변경후 에러
import firebase from 'firebase/compat/app' 주석   
import 'firebase/compat/auth' 추가   

### Router 문제 해결
react-scripts start" 에서 --openssl-legacy-provider   
npm audit fix --force

### App.js Router import 문제

// import AppRouter from "./Router";  
import AppRouter from "components/Router"   
-> 경로를 설정하지 않으면 문제가 발생하여 경로 지정   

[3월 30일]

### firebase import 
책이랑 다름 9.0 이상일 경우의 import 방식
import firebase from 'firebase/compat/app';   
import 'firebase/compat/auth';    
import 'firebase/compat/firestore';   

### 비밀키 설정
.env 로 firebase.js의 비밀키 이동 및 매핑
REACT_APP_을 붙여야 CRA로 만든 파일 환경 변수에 정의가 가능 

[03월 23일]

### 로컬PC에서 push
$ git config --global user.email "Lemin6118@email.daelim.ac.kr"   
$ git config --global user.name "Lee MinSeok"   

### 확인방법
git config user.name   
git config user.email.   

### package.json 불필요 코드 삭제
"test": "react-scripts test"   
"eject": "react-scripts eject"   

### index.js 불필요 코드 삭제
import "./index.css";   
import reportWebvitals from "./reportWebVitals";   
reportWebVitals();      

### App.js 불필요 코드 삭제
import logo from "./logo.svg";   
import "./App.css";   
return{~~~~ 내용 삭제 후 "\<div\>App\</div\>" 만 추가