fetch('/head.html')
.then(response => response.text())
.then(data => {
  document.head.innerHTML += data
  
})
.catch(error => console.log("에러 : ",error))

fetch('/header.html')
.then(response => response.text())
.then(data => {
  document.querySelector(".header_wrap").innerHTML += data
      //모바일 메뉴 버튼 클릭 했을 때 메뉴 나오기
  let btn_gnb=document.querySelector("#btn_gnb")
  let hidden_gnb=document.querySelector(".hidden_gnb")
  let btn_close_gnb=document.querySelector("#btn_close_gnb")

  btn_gnb.addEventListener("click",function(){
      hidden_gnb.classList.add("on")
  })
  btn_close_gnb.addEventListener("click",function(){
      hidden_gnb.classList.remove("on")
  })
})
.catch(error => console.log("에러 : ",error))

fetch('/footer.html')
.then(response => response.text())
.then(data => {
  document.querySelector("footer").innerHTML += data
  
})
.catch(error => console.log("에러 : ",error))