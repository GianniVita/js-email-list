
/*  **Descrizione**
 
 Attraverso l'apposita API di Boolean
 https://flynn.boolean.careers/exercises/api/random/mail
 generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
 
 **Bonus**
 
 - Abbellire con CSS o Bootstrap
 - Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
 */
const emailList = document.getElementById("emailList")
const btn = document.getElementById("emailList")
function generateEmails() {
    emailList.innerHTML = '';
for (let i = 0; i < 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(response => {
    
        const email = response.data.response;
        //console.log(email);
       // console.log(response.data.response);
        
        const li = document.createElement ('li')
        //console.log(ul);
        
        li.textContent = email;
        emailList.append(li);
        //console.log(li);
        
}
)}



}


btn.addEventlistener('click', generateEmails)



