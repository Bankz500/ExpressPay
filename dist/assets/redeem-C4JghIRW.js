import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css             */import{initializeApp as i}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";import{getAuth as c,createUserWithEmailAndPassword as p}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";import{getFirestore as m,setDoc as d,doc as u}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";const g={apiKey:"AIzaSyA3OvFCz4sU4QnZAPnFrc_yzZezjzlzkgY",authDomain:"exprespay-26ac0.firebaseapp.com",projectId:"exprespay-26ac0",storageBucket:"exprespay-26ac0.firebasestorage.app",messagingSenderId:"933418932546",appId:"1:933418932546:web:1eaac518eecab2042390db",measurementId:"G-8ECL5E373T"},s=i(g),l=c(s),y=m(s);window.signUp=function(){const r=document.getElementById("signUpName").value,a=document.getElementById("signUpEmail").value,n=document.getElementById("signUpPassword").value;p(l,a,n).then(async e=>{const t=e.user;try{await d(u(y,"users",t.uid),{name:r,email:a,uid:t.uid}),alert("Signed up successfully! Your account has been created."),window.location.href="sign-in.html"}catch(o){alert("Error saving user data: "+o.message)}}).catch(e=>{alert("Error signing up: "+e.message)})};
