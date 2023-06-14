const ul=document.querySelector('.list')
for (let numBer = 1; numBer <= 100; numBer++) {
    console.log('numBer', numBer, typeof numBer);

    if (numBer %3 ==0 && numBer %5 ==0){
        //console.log('FizzBuzz')
        const li=document.createElement('li');
        const a=document.createElement('a')
        a.href='https://www.youtube.com/watch?v=cZnLYel9stA'
        a.target='_blank'
        a.innerHTML='FizzBuzz';
        li.classList.add('fizzbuzz');
        ul.append(li);
        li.append(a);
    }
    else if (numBer %5 ==0){
        //console.log('Buzz')
        const li=document.createElement('li');
        li.innerHTML='Buzz';
        li.classList.add('buzz');
        ul.append(li);
    }
    else if (numBer %3 ==0){
        //console.log('Fizz')
        const li=document.createElement('li');
        li.innerHTML='Fizz';
        li.classList.add('fizz');
        ul.append(li);
    }
    else {
        //console.log(numBer)
        const li=document.createElement('li');
        li.innerHTML=numBer;
        li.classList.add('numbero');
        ul.append(li);
    }
}

