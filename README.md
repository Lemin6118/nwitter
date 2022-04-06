# 이민석
[4월 06일]

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
