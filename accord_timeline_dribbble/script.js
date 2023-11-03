//-------------- Stappenplan -------------- //
// 1. verzamel alle DOM-elementen
// 2. revise working with the Date object
// 3. hoe manipuleer ik svg element
// 4. logica berekening project tijden



//-------------- Dom Elements -------------- //
let {documentElement: root} = document;
const greenColor = getComputedStyle(root).getPropertyValue('--color-green');


const check1 = document.getElementById('check1');
const check2 = document.getElementById('check2');
const check3 = document.getElementById('check3');
const check4 = document.getElementById('check4');

const evalWrappers = document.querySelectorAll('.eval-wrapper');
const timeLineBG = document.querySelector('.timeline-bg');
const timeLineFill = document.querySelector('.timeline-fill');
const evalChecks = document.querySelectorAll('.eval-check');
const evalCheckInside = document.querySelectorAll('.eval-check-inside');
const evalDates = document.querySelectorAll('.eval-date');

const timeLineWidth = timeLineBG.offsetWidth;



timeLineFill.style.width = (timeLineWidth * 0.1) + 'px';

//-------------- formatting date -------------- //

function formatDate(date){
    const options = {month: 'short', day: 'numeric'};
    return date.toLocaleDateString('en-US', options);
}

const projectStart = new Date('January 20, 2023');
const projectEnd = new Date('September 17, 2023');



if(evalDates.length >0){
    evalDates[0].textContent = formatDate(projectStart);
    evalDates[evalDates.length - 1].textContent = formatDate(projectEnd);

    const numOfMileStones = evalDates.length -1;
    const totalMilliseconds = projectEnd - projectStart;
    const intervalMilliseconds = totalMilliseconds / numOfMileStones;
    // const intervalDuration = new Date(intervalMilliseconds);

    for(let i = 1; i <evalDates.length - 1; i++){
        const previousMilestoneDate = new Date(evalDates[i - 1].textContent + ', ' + projectStart.getFullYear());
        const milestoneDate = new Date(previousMilestoneDate.getTime() + intervalMilliseconds);
        evalDates[i].textContent = formatDate(milestoneDate);
    }

    console.log('interval in time is ' + projectStart.getTime());
}

//-------------- Changing stuff -------------- //



const checksArr = [check1, check2, check3, check4];

checksArr[0].style.fill = greenColor;


console.log(greenColor);

const projectDates = new Date();


