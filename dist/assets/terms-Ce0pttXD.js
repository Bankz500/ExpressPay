import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as s}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";import{getAuth as o,signInWithEmailAndPassword as i}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";const r={apiKey:"AIzaSyA3OvFCz4sU4QnZAPnFrc_yzZezjzlzkgY",authDomain:"exprespay-26ac0.firebaseapp.com",projectId:"exprespay-26ac0",storageBucket:"exprespay-26ac0.firebasestorage.app",messagingSenderId:"933418932546",appId:"1:933418932546:web:1eaac518eecab2042390db",measurementId:"G-8ECL5E373T"},c=s(r),d=o(c);window.signIn=function(){const e=document.getElementById("signInButton"),t=document.getElementById("signInEmail").value,a=document.getElementById("signInPassword").value;e.textContent="Signing in...",e.disabled=!0,e.classList.add("opacity-70","cursor-not-allowed"),i(d,t,a).then(n=>{alert("Welcome Back!"),window.location.href="dashboard.html"}).catch(n=>{alert("Error signing in: "+n.message),console.error(n)}).finally(()=>{e.textContent="Sign In",e.disabled=!1,e.classList.remove("opacity-70","cursor-not-allowed")})};