const staff = [
  {
    id: 1,
    name: "Alex Rosetta",
    email: "alexyrosetta@egmail.com",
    image: "assets/staff1.png",
  },
  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image: "assets/staff2.png",
  },
];

const services = [
  {
    id: 1,
    name: "Oral hygiene",
    image: "assets/service1.png",
    duration: "1 hour",
    price: 50.0,
  },
  {
    id: 2,
    name: "Implants",
    image: "assets/service2.png",
    duration: "1 hour 30 minutes",
    price: 120.0,
  },
];

const date = [
    {
        dayy1: "2022-03-04"
    },
    {
        dayy2: "2022-03-05"
    },
    {
        dayy3: "2022-03-06"
    }
    ]
const time = [
  {
    start_time: "09:00",
    end_time: "09:30",
  },
  {
    start_time: "09:30",
    end_time: "10:00",
  },
];

// localStorage.setItem("staffArr", JSON.stringify(staff));

// let staffGet = JSON.parse(localStorage.getItem("staffArr"));
// console.log(staffGet);

let nextServiceA = document.querySelector(".nextServiceA");
let backStaffA = document.querySelector(".backStaffA");

let backServiceBtn = document.querySelector(".backService");
let nextDataA = document.querySelector(".nextDataA");
let backServiceA = document.querySelector(".backServiceA");
let nextConfirmA = document.querySelector(".nextConfirmA");
let backDataA = document.querySelector(".backDataA");


let nextService = document.querySelector("#nextService");
let backStaffBtn = document.querySelector("#backStaffBtn");
let nextData = document.querySelector("#nextData");
let backService = document.querySelector("#backService");
let nextConfirm = document.querySelector("#nextConfirm");
let backData = document.querySelector("#backData");

let errStaff = document.querySelector("#errStaff")
let errorService = document.querySelector("#errorService")
let errorData = document.querySelector("#errorData")
let dataMain = document.querySelector(".dataMain")
let confirmBooking = document.querySelector("#confirmBooking")
let errConfirm = document.querySelector("#errConfirm")
let iconConfirm = document.querySelector(".iconConfirm")
let iconSuccess = document.querySelector(".iconSuccess")
let successConfirm = document.querySelector("#successConfirm")




let alex = document.getElementById("alex");
let maria = document.querySelector("#maria");
let service1 = document.querySelector("#service1");
let service2 = document.querySelector("#service2");
let service3 = document.querySelector("#service3");
let day4 = document.querySelector("#day4");
let day5 = document.querySelector("#day5");
let day6 = document.querySelector("#day6");
let dataMainBox1 = document.querySelector("#dataMainBox1");
let dataMainBox2 = document.querySelector("#dataMainBox2");
let dataMainBox3 = document.querySelector("#dataMainBox3");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");


// const boxBorder = JSON.parse(localStorage.getItem("border")) 
// let getStaff = localStorage.getItem("staffData")
alex?.addEventListener("click", ()=>{

        maria.classList.remove("selected");
        let isSelectedMaria = maria.classList.contains("selected");
        localStorage.setItem("boxSelectedMaria",isSelectedMaria);

        alex.classList.add("selected");

        let isSelected = alex.classList.contains("selected");
        localStorage.setItem("boxSelected",isSelected);
    maria.style.border = "";

})
let savedSelectedState = localStorage.getItem("boxSelected");
if (savedSelectedState === 'true') {
    alex?.classList.add('selected');
  }


maria?.addEventListener("click", ()=>{
    alex.classList.remove("selected");
    let isSelected = alex.classList.contains("selected");
    localStorage.setItem("boxSelected",isSelected);


    // localStorage.removeItem("boxSelected")

    maria.classList.add("selected");

    let isSelectedMaria = maria.classList.contains("selected");
    localStorage.setItem("boxSelectedMaria",isSelectedMaria);

    alex.style.border = "";
    maria.style.border = "2px solid green"
})
let savedSelectedMaria = localStorage.getItem("boxSelectedMaria");
if (savedSelectedMaria === "true") {
    maria?.classList.add('selected');
}


  // localStorage.setItem("staffArr",JSON.stringify(staff))
    // localStorage.setItem("border","2px solid green");
    // console.log(getStaff);

nextService?.addEventListener("click", () => {
    if (savedSelectedState === 'true' || savedSelectedMaria === 'true') {

        nextServiceA.setAttribute("href", "service.html");
    }
    else{ 
        errStaff.style.display = "flex";
        
        setTimeout(function(e){
            errStaff.style.display = "none"
            e.preventDefault()

        }, 3000) 
    }

});



// service codes start here
service1?.addEventListener("click", ()=>{
    service1.classList.add("selected");
    let isselectedService1 = service1.classList.contains("selected");
    localStorage.setItem("selectedService1",isselectedService1);

    service2.classList.remove("selected");
    let isselectedService2 = service2.classList.contains("selected");
    localStorage.setItem("selectedService2",isselectedService2);

    service3.classList.remove("selected");
    let isselectedService3 = service3.classList.contains("selected")
    localStorage.setItem("selectedService3",isselectedService3)


    // service2.style.border = "";
    // service3.style.border = "";
    // service1.style.border = "2px solid green"
})
let savedSelectedService1 = localStorage.getItem("selectedService1");
if (savedSelectedService1 === 'true') {
    service1?.classList.add('selected');
  }
service2?.addEventListener("click", ()=>{
    service2.classList.add("selected");
    let isselectedService2 = service2.classList.contains("selected")
    localStorage.setItem("selectedService2",isselectedService2);

    service1.classList.remove("selected");
    let isselectedService1 = service1.classList.contains("selected");
    localStorage.setItem("selectedService1",isselectedService1);

    service3.classList.remove("selected");
    let isselectedService3 = service3.classList.contains("selected");
    localStorage.setItem("selectedService3",isselectedService3);
    // service1.style.border = "";
    // service3.style.border = "";
    // service2.style.border = "2px solid green"
})

let savedSelectedService2 = localStorage.getItem("selectedService2");
if (savedSelectedService2 === 'true') {
    service2?.classList.add('selected');
  }

service3?.addEventListener("click", ()=>{
    service3.classList.add("selected");
    let isselectedService3 = service3.classList.contains("selected");
    localStorage.setItem("selectedService3",isselectedService3);

    service1.classList.remove("selected");
    let isselectedService1 = service1.classList.contains("selected");
    localStorage.setItem("selectedService1",isselectedService1);

    service2.classList.remove("selected");
    let isselectedService2 = service2.classList.contains("selected");
    localStorage.setItem("selectedService2",isselectedService2);
    // service1.style.border = "";
    // service2.style.border = "";
    // service3.style.border = "2px solid green"
})
let savedSelectedService3 = localStorage.getItem("selectedService3");
if (savedSelectedService3 === 'true') {
    service3?.classList.add('selected');
  }
nextData?.addEventListener("click", () => {
    if (savedSelectedService1 === "true" || savedSelectedService2 === "true" || savedSelectedService3 === "true") {
        nextDataA?.setAttribute("href", "data.html");
        
    }else{
        errorService.style.display = "flex"

        setTimeout(function(){
            errorService.style.display = "none"
        }, 3000)
    }


});


// Data codes start here
localStorage.setItem("activeClass", "flex")
day4?.addEventListener("click", ()=>{

    day4.classList.add("activeDayShow");
    let isselectedDay4 = day4.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay4",isselectedDay4);

    day5.classList.remove("activeDayShow");
    let isselectedDay5 = day5.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay5",isselectedDay5);

    day6.classList.remove("activeDayShow");
    let isselectedDay6 = day6.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay6",isselectedDay6);
    dataMain.style.display = "flex";
})
let savedIsselectedDay4 = localStorage.getItem("selectedDay4")
if(savedIsselectedDay4 === "true"){
    day4.classList.add("activeDayShow");
    dataMain.style.display = "flex";

}
day5?.addEventListener("click", ()=>{
    day5.classList.add("activeDayShow");
    let isselectedDay5 = day5.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay5",isselectedDay5);

    day4.classList.remove("activeDayShow");
    let isselectedDay4 = day4.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay4",isselectedDay4);

    day6.classList.remove("activeDayShow");
    let isselectedDay6 = day6.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay6",isselectedDay6);

    dataMain.style.display = "flex";


});
let savedIsselectedDay5 = localStorage.getItem("selectedDay5");
if(savedIsselectedDay5 === "true"){
    day5.classList.add("activeDayShow");
    dataMain.style.display = "flex";
}

day6?.addEventListener("click", ()=>{
    day6.classList.add("activeDayShow");
    let isselectedDay6 = day6.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay6",isselectedDay6);

    day4.classList.remove("activeDayShow");
    let isselectedDay4 = day4.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay4",isselectedDay4);

    day5.classList.remove("activeDayShow");
    let isselectedDay5 = day5.classList.contains("activeDayShow");
    localStorage.setItem("selectedDay5",isselectedDay5);

    dataMain.style.display = "flex";
})
let savedIsselectedDay6 = localStorage.getItem("selectedDay6");
if(savedIsselectedDay6 === "true"){
    day6.classList.add("activeDayShow");
    dataMain.style.display = "flex";
}

dataMainBox1?.addEventListener("click", ()=>{
    // dataMainBox1.classList.add("dataMainBoxActive");
    // let isselectedBox1 = dataMainBox1.classList.contains("dataMainBoxActive");
    // localStorage.setItem("selectedBox1",isselectedBox1);
    dataMainBox1.style.backgroundColor = "#53d56c"
    dataMainBox2.style.backgroundColor = ""
    dataMainBox3.style.backgroundColor = ""
})

// let savedIsselectedBox1 = localStorage.getItem("selectedBox1");
// if(savedIsselectedBox1 === "true"){
//     dataMainBox1.classList.add("dataMainBoxActive");
// }
dataMainBox2?.addEventListener("click", ()=>{
    // dataMainBox2.classList.add("dataMainBoxActive");
    // let isselectedBox2 = dataMainBox2.classList.contains("dataMainBoxActive");
    // localStorage.setItem("selectedBox2",isselectedBox2);

    dataMainBox2.style.backgroundColor = "#53d56c"
    dataMainBox1.style.backgroundColor = ""
    dataMainBox3.style.backgroundColor = ""
})
dataMainBox3?.addEventListener("click", ()=>{
    // dataMainBox3.classList.add("dataMainBoxActive");
    // let isselectedBox3 = dataMainBox3.classList.contains("dataMainBoxActive");
    // localStorage.setItem("selectedBox3",isselectedBox3);
    dataMainBox3.style.backgroundColor = "#53d56c"
    dataMainBox2.style.backgroundColor = ""
    dataMainBox1.style.backgroundColor = ""
})

nextConfirm?.addEventListener("click", (e) => {
    if (day4.className === "activeDay" && day5.className === "activeDay" && day6.className === "activeDay") {
        errorData.style.display = "flex"
        e.preventDefault()

        setTimeout(function(){
            errorData.style.display = "none"
        },3000)
        
    }else{
        nextConfirmA.setAttribute("href","confirmation.html")
    }
});

confirmBooking?.addEventListener("click", (e)=>{
    e.preventDefault()
    if(input1.value === "" && input2.value === ""){
        errConfirm.style.display = "flex"
        iconConfirm?.addEventListener("click", ()=>{
            errConfirm.style.display = ""
        })
    }
        else{
            successConfirm.style.display = "flex"
            iconSuccess?.addEventListener("click", ()=>{
                successConfirm.style.display = ""
            })
        }
    
})


backStaffBtn?.addEventListener("click", () => {
          backStaffA.setAttribute("href", "index.html");
    
});



backService?.addEventListener("click", () => {
  backServiceA.setAttribute("href", "service.html");
  log
});


backData?.addEventListener("click", ()=>{
    backDataA.setAttribute("href", "data.html")
})

// let staffLocal = JSON.parse(localStorage.getItem("staffArr"))
// let serviceLocal = JSON.parse(localStorage.getItem("service1"))
// let day4Local = JSON.parse(localStorage.getItem("day4"))
// let dataMainBox11 = JSON.parse(localStorage.getItem("dataMainBox11"))


// let staffNote = document.querySelector(".staffNote")
// let serviceNote = document.querySelector(".serviceNote")
// let dateNote = document.querySelector(".dateNote")
// let staffPrice = document.querySelector(".staffPrice")

// staffNote.innerHTML = staffLocal.name
// serviceNote.innerHTML = serviceLocal.name
// dateNote.innerHTML = day4Local.dayy1 /dataMainBox11.time
// staffNote.innerHTML = serviceNote.price