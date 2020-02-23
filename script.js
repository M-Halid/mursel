
function hit(){
    const container=document.querySelector("#container")
    container.style.display="grid"
    let input=document.getElementById("inpt").value
    
   
    if(input==4516){
        let ugur= document.querySelector("#container")


      const welcome= document.createElement("h3")
        welcome.id="welcome16"
       const yaz= welcome.innerText="WELCOME  UGUR"

       let uyari=document.createElement("p")
       uyari.id="uyari"
       uyari.style.transition="2s"
       uyari.style.opacity="0.25"
       

       uyari.innerHTML="Lütfen yeni bir girdi icin sayfayi yenile devrem"

      
      
      let video=document.createElement("video")
        video.id="bingol"
        video.setAttribute("src","bingölshort.mp4")
       
        video.play();
        ugur.appendChild(welcome)
        
        ugur.appendChild(video)
        ugur.appendChild(uyari)
        

    }
    if(input==4527){
    let yasin = document.querySelector("#container")


    const welcome27 = document.createElement("h3")
    welcome27.id = "welcome27"
    welcome27.innerText = "WELCOME  YASIN"


    yasin.appendChild(welcome27)
    let video27 = document.createElement("video")
    video27.id = "Lion"
    video27.setAttribute("src", "Lion.mp4")
    yasin.appendChild(video27)
    video27.play();

}}





// const al1=document.querySelector("#inputlar:nth-child(3)>:nth-child(1)").value
// const al2=document.querySelector("#inputlar:nth-child(3)>:nth-child(2)").value
// const al3=document.querySelector("#inputlar:nth-child(3)>:nth-child(3)").value

// console.log(al1)
// console.log(al2)
// console.log(al3)
//window.location.reload()
function bas1(){
  document.querySelector("#panda").style.display="none"
  document.querySelector("#send1").style.display="none"
  document.querySelector("#send").style.display="block"
}

function bas(){

var murs=document.querySelector("#isim").value
murs=murs.toUpperCase()
if(murs==="MÜRSEL"){
  
  let mursgirdi1=document.querySelector("#girisspan")
  mursgirdi1.style.border="2px solid blue"
  mursgirdi1.style.width="auto"

  mursgirdi1.innerText="Oo Mürsel abi Ojgelmis"
 
  const show =document.querySelector(".sorus")
  show.style.display="grid"

  document.querySelector("#send2").style.display="block"
  document.querySelector("#send").style.display="none"

  console.log("aha oldu cok sükür")
  console.log(murs+" abi")

}



}

const bas2=function(){
 let al= prompt("Son bi soru :D \nCevrenizdeki insanlar en cok sizi hangi insan dışı varlıga benzetir ? Bitte im Ernst!!!")
  al=al.toUpperCase()
 if(al==="PANDA"){
   
 



document.querySelector("#giris").style.display="none"
document.querySelector(".sorus").style.display="none"
document.querySelector("#send2").style.display="none"


document.querySelector("#container").style.display="grid"
document.querySelector("#video>video").play()
}
}

