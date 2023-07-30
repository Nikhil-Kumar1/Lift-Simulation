let params = new URLSearchParams(window.location.search);
let lifts = parseInt(params.get('lifts'));
let floors = parseInt(params.get('floors'));

console.log({lifts, floors});

let form = document.getElementById('form');
let rendered = document.getElementById('rendered');

let floorContainer = document.getElementById('floors');
let liftsContainer = document.getElementById('lifts');

const generateFloors = (count) => {
  let html='';
  for(let i=count; i>=1; i--){
    html+=`<div class="floor d-flex" id="Floor${i}"><div class="buttons" id="${i}">`
    if(i==count){
      html+="<button class='btn down' onclick='floorUpdator(this)'>Down</button></div></div>"
    } else if(i== 1) {
      html+="<button class='btn up' onclick='floorUpdator(this)'>Up</button></div></div>"
    } else {
      html+="<button class='btn up' onclick='floorUpdator(this)'>Up</button><br><button class='btn down' onclick='floorUpdator(this)'>Down</button></div></div>"
    }
    html+=`<div class="floorBase d-fex">
            <div class="line"></div>
            <div class="floorNumber">Floor ${i}</div>
          </div>`;
  }
  floorContainer.innerHTML=html;
}

if(!lifts && !floors){
  rendered.classList.add('hide');
  form.classList.remove('hide');
} else {
  form.classList.add('hide');
  rendered.classList.remove('hide');
  generateFloors(floors)
}

