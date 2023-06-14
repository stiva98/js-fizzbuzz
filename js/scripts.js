const ul=document.querySelector('.list')
for (let numBer = 1; numBer <= 100; numBer++) {
    console.log('numBer', numBer, typeof numBer);

    if (numBer %3 ==0 && numBer %5 ==0){
        //console.log('FizzBuzz')
        const li=document.createElement('li');
        li.innerHTML='FizzBuzz'
        ul.append(li);
    }
    else if (numBer %5 ==0){
        //console.log('Buzz')
        const li=document.createElement('li');
        li.innerHTML='Buzz'
        ul.append(li);
    }
    else if (numBer %3 ==0){
        //console.log('Fizz')
        const li=document.createElement('li');
        li.innerHTML='Fizz'
        ul.append(li);
    }
    else {
        //console.log(numBer)
        const li=document.createElement('li');
        li.innerHTML=numBer
        ul.append(li);
    }
}

