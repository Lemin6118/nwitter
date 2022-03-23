# 이민석

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
return{~~~~ 내용 삭제 후 <div>App</div> 만 추가  
 
### firebase import 
책이랑 다름 9.0 이상일 경우의 import 방식
import firebase from 'firebase/compat/app';   
import 'firebase/compat/auth';    
import 'firebase/compat/firestore';   