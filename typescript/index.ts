const num1 = document.querySelector('#num1') as HTMLInputElement;
const num2 = document.querySelector('#num2') as HTMLInputElement;
const button = document.querySelector('button')!;

const numArray:number[]=[];
const stringArray:string[]=[];

type NumOrString = number|string;
type Obj={val:number;timestamp:Date};

function add(a:NumOrString,b:NumOrString){
    if(typeof a === 'number' && typeof b === 'number')
        return a+b;
    else if(typeof a === 'string' && typeof b === 'string')
        return a+""+b;
    else
        return +a + +b;
}

function result(resultObj:Obj){
    console.log(resultObj.val);
}

button.addEventListener('click',()=>{
    const a=num1.value;
    const b=num2.value;

    const inputNumber=add(1,2);

    numArray.push(inputNumber as number);
    const inputString=add('1','2');
    stringArray.push(inputString as string);
    result({val:4,timestamp:new Date()});
    console.log(inputNumber,inputString);
})
