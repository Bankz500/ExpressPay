import"./modulepreload-polyfill-B5Qt9EMX.js";import{initializeApp as g}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";import{getAuth as h,onAuthStateChanged as d,signOut as y}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";import{getFirestore as p,doc as u,getDoc as f,collection as w,query as x,where as C,getDocs as E}from"https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";const I={apiKey:"AIzaSyA3OvFCz4sU4QnZAPnFrc_yzZezjzlzkgY",authDomain:"exprespay-26ac0.firebaseapp.com",projectId:"exprespay-26ac0",storageBucket:"exprespay-26ac0.firebasestorage.app",messagingSenderId:"933418932546",appId:"1:933418932546:web:1eaac518eecab2042390db",measurementId:"G-8ECL5E373T"},l=g(I),r=h(l),m=p(l);d(r,async t=>{if(t){const i=u(m,"users",t.uid),s=await f(i);if(s.exists()){const e=s.data();document.getElementById("history1").textContent=`${e.history1||"No history available"}`,document.getElementById("history2").textContent=`${e.history||""}`,document.getElementById("history3").textContent=`${e.history2||""}`,document.getElementById("wallet").textContent=`${e.wallet||"₦0.00"}`,document.getElementById("pending1").textContent=`${e.pending1||"No pending transactions"}`,document.getElementById("pending2").textContent=`${e.pending2||""}`,document.getElementById("pending3").textContent=`${e.pending3||""}`;const n=document.getElementById("welcome-name");n?e&&e.name?n.textContent=`Welcome back, ${e.name}!`:(n.textContent="Welcome back, User!",console.warn("User data does not contain a name field.")):console.error('Element with ID "welcome-name" not found in the DOM.')}else console.log("No user document found in Firestore."),alert("No user data found.")}else console.log("No user signed in, redirecting to sign-in page."),window.location.href="sign-in.html"});window.signOut=function(){y(r).then(()=>{alert("Signed out successfully!"),window.location.href="sign-in.html"}).catch(t=>{alert("Error signing out: "+t.message)})};document.addEventListener("DOMContentLoaded",async()=>{try{d(r,async t=>{if(t){const i=w(m,"history"),s=x(i,C("userId","==",t.uid)),e=await E(s),n=document.getElementById("history-container");if(!e.empty)e.forEach(o=>{const c=o.data(),a=document.createElement("div");a.className="bg-white p-4 rounded-lg shadow-md text-center h-16",a.innerHTML=`
                                    <h3 class="font-semibold text-gray-800">${c.description||"No description"}</h3>
                                    <p class="text-gray-600">ID: ${o.id}</p>
                                    <p class="text-gray-600">$${c.amount||""}</p>
                                `,n.appendChild(a)});else{console.log("No transaction history found for this user.");const o=document.createElement("div");o.className="bg-white p-4 rounded-lg shadow-md text-center h-16",o.innerHTML=`
                                <h3 class="font-semibold text-gray-800">No history</h3>
                                <p class="text-gray-600">You have no transaction history.</p>
                            `,n.appendChild(o)}}else console.log("No user signed in, redirecting to sign-in page."),window.location.href="sign-in.html"})}catch(t){console.error("Error fetching transaction history:",t)}});