setInterval(() => {
  window.location.reload();
}, 300000);
const reg = document.querySelector('#reg');
const addNumber = document.querySelector('#add-number');
const melReference = document.querySelector('#reference');
const description = document.querySelector('#description');
const restriction = document.querySelector('#restriction');
const dateOpened = document.querySelector('#open-date');
const daysNumber = document.querySelector('#days-number');
const category = document.querySelector('#category');
const requisition = document.querySelector('#request-number');
const concessionType = document.querySelector('#concession-type');
const button = document.querySelector('button');
const table = document.querySelector('table');
const time = document.querySelector('.time');
const timerr = document.querySelector('.timerr');
const date = document.querySelector('.date');
const submit = document.querySelector('.submit');
const addBtn = document.querySelector('.add-btn');
const inputField = document.querySelector('.input-field');
const tbody = document.querySelector(".tbody");
const concesion = document.querySelector('.concession');
const concBtn = document.querySelector('.con-btn');
const num = document.querySelector('#num');
const datte = document.querySelector('#date');
const close = document.querySelector('.close');
const dueDate = document.querySelector('#due-date');
const due = document.querySelector('#due');

addBtn.addEventListener('click', () => {
  inputField.classList.toggle('form');
});
document.addEventListener('DOMContentLoaded', displayItems);
/*category.addEventListener('focusout', (ev) => {
  if(ev.target.value == "CAT A" || ev.target.value == "CAT B" || ev.target.value == "CAT C" || ev.target.value == "CAT D"){
    return
  } else {
    daysNumber.replaceWith('<input type="text" class="input">')
  }
})*/

submit.addEventListener('click', handler, false);

//handler for submit btn
function handler(event) {
  event.preventDefault();
 if (!reg.value) {
    document.querySelector('.reg-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.reg-text').style.display = 'none';
  }

  if (!addNumber.value) {
    document.querySelector('.addnum-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.addnum-text').style.display = 'none';
  }

  if (!melReference.value) {
    document.querySelector('.ref-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.ref-text').style.display = 'none';
  }

  if (!description.value) {
    document.querySelector('.des-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.des-text').style.display = 'none';
  }

  if (!restriction.value) {
    document.querySelector('.res-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.res-text').style.display = 'none';
  }

  if (!dateOpened.value) {
    document.querySelector('.date-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.date-text').style.display = 'none';
  }

  if (!daysNumber.value) {
    document.querySelector('.days-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.days-text').style.display = 'none';
  }

  if (!category.value) {
    document.querySelector('.cat-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.cat-text').style.display = 'none';
  }

  if (!requisition.value) {
    document.querySelector('.req-text').style.display = 'block';
    return;
  } else {
    document.querySelector('.req-text').style.display = 'none';
  }
  // if (!tlpPage.value) {
  //   document.querySelector('.tlp-text').style.display = 'block';
  //   return;
  // } else {
  //   document.querySelector('.tlp-text').style.display = 'none';
  // }
  let obj = {
    regNumber: reg.value,
    add: addNumber.value,
    mel: melReference.value,
    defectDescription: description.value,
    opsRestriction: restriction.value,
    openDate: dateOpened.value,
    cat: category.value,
    requestNo: requisition.value,
    dateDue: dueDate.value,
    type: concessionType.value,
    dayCount: +daysNumber.value + 1
  }
  save(obj);
  displayItems();

    reg.value = '';
    addNumber.value = '';
    melReference.value = '';
    description.value = '';
    restriction.value = '';
    dateOpened.value = '';
    daysNumber.value = '';
    category.value = '';
    requisition.value = '';
    //tlpPage.value = '';
    dueDate.value = '';
    concessionType.value = '';
}
  
//handler for deleting an item from the UI and localStorage
 function remove(index){
   let arr = JSON.parse(localStorage.getItem('arr'));
   arr.sort((a,b)=>a.cat.localeCompare(b.cat))
   let close = confirm('CONFIRM YOU WANT TO CLOSE THIS ADD?');
   if(close) {
    arr.splice(index, 1);
   }
   
   localStorage.setItem('arr', JSON.stringify(arr));
   displayItems();
  //event.target.parentNode.parentNode.remove(); 
}

// handler for closing concession modal form
close.addEventListener('click', () => {
  concesion.style.display = 'none';
})

//Concession button function handler
function concession(index1) {
  //concesion.style.display = 'block';
  /*let tag = event.target;
  console.log(event.target);
  let sibling = tag.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
  let dateDue = tag.parentNode.previousElementSibling;*/
  let arr = JSON.parse(localStorage.getItem("arr"));
  arr.sort((a,b)=>a.cat.localeCompare(b.cat));
  arr.findIndex((element, index) => {
    if(index1 == index) {
      reg.value = element.regNumber;
      addNumber.value = element.add;
      melReference.value = element.mel;
      description.value = element.defectDescription;
      restriction.value = element.opsRestriction;
      dateOpened.value = element.openDate;
      category.value = element.cat;
      requisition.value = element.requestNo;
      //daysNumber.value = (element.dayCount*2);
    }  
  });
  arr.splice(index1, 1);
  localStorage.setItem('arr', JSON.stringify(arr));
  concBtn.value = "";
  num.value = "";
  due.value = "";
  concesion.style.display = "none";
  inputField.classList.remove('form');
  // concBtn.addEventListener('click', (event) => {
  //   event.preventDefault();
    
  // });
}

// function that handles initialization of an empty array
function returnArr() {
  let arr;
  if(localStorage.getItem('arr') === null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem('arr'));
  }
  return arr;
}

//function for adding item to array and saving to localStorage
function save(obj) {
  let arr = returnArr();
  arr.push(obj);
  localStorage.setItem('arr', JSON.stringify(arr));
}

// get items from local storage and display for the user
function displayItems() {
  let arr = JSON.parse(localStorage.getItem('arr'));
  arr.sort((a,b)=>a.cat.localeCompare(b.cat));
  //console.log(sorted);
  
  let html = '';

  arr.forEach((element, index) => {
    html += `<tr class="format" id="${index}">
    <td class="trow">${element.regNumber.toUpperCase()}</td>
    <td class="trow">${element.add.toUpperCase()}</td>
    <td class="trow">${element.mel.toUpperCase()}</td>
    <td class="trow">${element.defectDescription.toUpperCase()}</td>
    <td class="trow">${element.opsRestriction.toUpperCase()}</td>
    <td class="trow">${element.openDate}</td>
    <td class="trow date-count">${element.cat == 'CAT A' || element.cat == 'CAT B' || element.cat == 'CAT C' || element.cat == 'CAT D' ? timer(element.openDate, element.dayCount) : 'N/A'}</td>
    <td class="trow">${element.cat.toUpperCase()}</td>
    <td class="trow">${element.requestNo.toUpperCase()}</td>
    <td class="trow">${element.cat == 'FLIGHT HOUR' || element.cat == 'FLIGHT CYCLE' ? element.dayCount : element.dateDue}</td>
    <td class="trow">${element.type}</td>
    <td><button  class="delete btn-primary"onClick="concession(${index})">Modify</button></td>
    <td><button onClick="remove(${index})" class="delete btn-danger" title="Close this ADD">X</button></td>
    </tr>
    `
  });
  tbody.innerHTML = html;
}

//Timer function for calculating remianing days and counting down
function timer(datee, days) {
  const date1 = new Date(datee);
  let year = +date1.getFullYear();
  let month = +date1.getMonth();
  let day = +date1.getDate() + +days;
  const date2 = new Date(year, month, day);
  let gap = date2 - (new Date());
  let dayText = Math.floor(gap / (1000 * 60 * 60 * 24));
  let hourText = Math.floor(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minText = Math.floor(gap % (1000 * 60 * 60) / (1000 * 60));
  //let secText = Math.floor(gap % (1000 * 60) / 1000);
  return (`${dayText} : ${hourText} : ${minText}`);
}