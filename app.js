let firstForm = document.querySelectorAll(".firstForm input")
let seconForm = document.querySelectorAll(".seconForm input")
let thirdForm = document.querySelectorAll(".thirdForm input")
let showImage = document.getElementById("showImage")
let profile = document.querySelector(".profile")
let courseSelection = document.getElementById("courseSelection")
let erros = document.getElementById("erros")



let [fullName,email,cnic,date] = firstForm
let [fname,pnumber,fcnic] = seconForm
let [address,qualification,question,uploadBtn] = thirdForm

let imgUrl;

let obj = {
    userName: fullName.value,
    userEmail: email.value,
    userCnic: cnic.value,
    userDate: date.value,
    userFName: fname.value,
    userNumber: pnumber.value,
    userFCnic: fcnic.value,
    userAddress: address.value,
    userQualification: qualification.value,
    userAnswer: question.value,
    userPic: imgUrl,
    userCourse: courseSelection.value
}

function submition(){

    event.preventDefault()
    if(fullName.value.trim() !== "" && email.value.trim() !== "" && cnic.value.trim() !== "" && fname.value.trim() !== "" && pnumber.value.trim() !==""  && fcnic.value.trim() !=="" && address.value.trim() !== "" && qualification.value.trim() !== "" && question.value.trim !== "" && uploadBtn.value.trim() !== ""){


        localStorage.setItem("userInformation", JSON.stringify(obj))

        console.log(fullName.value,email.value,cnic.value,date.value);
        console.log(fname.value,pnumber.value,fcnic.value);
        console.log(address.value,qualification.value,question.value,uploadBtn.value);


        let img = uploadBtn.files[0]
        let fileReader = new FileReader()
        fileReader.onload = () => {
            imgUrl = fileReader.result
        }
        fileReader.readAsDataURL(img)
        console.log(fileReader);

        showImage.src = imgUrl


        erros.innerText = ""

    }
    else{
        erros.innerText = "please fill input fields !!"
    }

}


let btn = document.getElementById("btn")
btn.addEventListener("click", submition)

let downloadIdCard = document.getElementById("downloadIdCard")
let error = document.getElementById("error")

function userCard(){


    if(downloadIdCard.value.trim() !== ""){
        if(downloadIdCard.value === cnic.value){
            profile.innerHTML = `
            <div class="card mt-5 mb-5" style="width: 18rem;">
          <div class="imgset mb-3 mt-3">
          <img src="${imgUrl}" class="card-img-top size mt-3" alt="...">
        </div>
          <div class="card-body">
            <h5 class="card-title">NAME : ${fullName.value}</h5>
            <p> FATHER NAME : ${fname.value} </p>
            <p> CNIC : ${cnic.value} </p>
            <p> COURSE : ${courseSelection.value} </p>
            <p> Qualification : ${qualification.value}</p>
            <p> Address : ${address.value} </p>
            *******************************
          </div>
        </div>
            `
            error.innerText = ""
        }
        else{
            error.innerText = "Incorrect Cnic"
        }
    }
    else{
        error.innerText = "Input is Empty !!"
    }
    downloadIdCard.value = ""

}

