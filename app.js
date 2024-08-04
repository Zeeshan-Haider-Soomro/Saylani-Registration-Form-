let firstForm = document.querySelectorAll(".firstForm input")
let seconForm = document.querySelectorAll(".seconForm input")
let thirdForm = document.querySelectorAll(".thirdForm input")
let getset = document.getElementById("getset")



let [fullName,email,cnic,date] = firstForm
let [fname,pnumber,fcnic] = seconForm
let [address,qualification,question] = thirdForm



function submition(){

    event.preventDefault()
    if(fullName.value.trim() !== "" && email.value.trim() !== "" && cnic.value.trim() !== "" && fname.value.trim() !== "" && pnumber.value.trim() !==""  && fcnic.value.trim() !=="" && address.value.trim() !== "" && qualification.value.trim() !== "" && question.value.trim !== ""){

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
            userAnswer: question.value
        }

        localStorage.setItem("userInformation", JSON.stringify(obj))

        console.log(fullName.value,email.value,cnic.value,date.value);
        console.log(fname.value,pnumber.value,fcnic.value);
        console.log(address.value,qualification.value,question.value);

        getset.innerText = `Hello Mr.${fullName.value}`

    }
    else{
        alert("babu ander 😅")
    }

}


let btn = document.getElementById("btn")
btn.addEventListener("click", submition)
