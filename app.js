function addTask(){
    const qosora = {};
    qosora.name= document.forms['task'] ['name'].value 
    qosora.email= document.forms['task'] ['email'].value 
    qosora.password= document.forms['task'] ['password'].value 
    qosora.selector= document.forms['task'] ['selector'].value 
    console.log(qosora)
    addData(qosora)
    
}

function addData(task) {
    fetch(' http://localhost:3000/tasks', {

   method: 'POST',
   headers: {
      'Content-Type': 'application/json',
   },
   body: JSON.stringify(task)
   }).then(() => getData())

}


async function getData() {
    const sending = await fetch('http://localhost:3000/tasks')
    const geting = await sending.json()
    console.log(geting)


    for (let i = 0; i < geting.length; i++)
     {
        let mygoal = document.createElement('div')
        mygoal.innerHTML = geting[i].name
    let mystydent = document.createElement('div')
    mystydent.innerHTML = geting[i].email;
        let myjob = document.createElement('div')
        myjob.innerHTML = geting[i].password;
let myage = document.createElement('div')
    myage.innerHTML = geting[i].selector;
 let mydiv = document.createElement('div')
   mydiv.innerHTML = geting[i].name;
     document.getElementById('inpo').appendChild(mydiv)
    document.getElementById('inpo2').appendChild(myage)
    document.getElementById('inpo3').appendChild(myjob)
    document.getElementById('inpo4').appendChild(mystydent)
    document.getElementById('inpo5').appendChild(mygoal)

    }
}