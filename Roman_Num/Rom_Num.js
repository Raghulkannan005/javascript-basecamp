const input = document.querySelector('#number');
const output = document.querySelector('#output');

function roman(){

        if(input.value === ''){
            output.textContent = 'Please enter a valid number';
        }
        else if(input.value<1){
            output.textContent = 'Please enter a number greater than or equal to 1';
        }
        else if(input.value>3999){
            output.textContent = 'Please enter a number less than or equal to 3999';
        }
        else{
            let num = input.value;
            let rom = '';
            let i = 0;
            do{
                if(num>=1000){
                    rom+='M'
                    i++;
                    num-=1000;
                }
                else if(num>=900){
                    rom+='CM'
                    i++;
                    num-=900;
                }
                else if(num>=500){
                    rom+='D'
                    i++;
                    num-=500;
                }
                else if(num>=400){
                    rom+='CD'
                    i++;
                    num-=400;
                }
                else if(num>=100){
                    rom+='C'
                    i++;
                    num-=100;
                }
                else if(num>=90){
                    rom+='XC'
                    i++;
                    num-=90;
                }
                else if(num>=50){
                    rom+='L'
                    i++;
                    num-=50;
                }
                else if(num>=40){
                    rom+='XL'
                    i++;
                    num-=40;
                }
                else if(num>=10){
                    rom+='X'
                    i++;
                    num-=10;
                }
                else if(num>=9){
                    rom+='IX'
                    i++;
                    num-=9;
                }
                else if(num>=5){
                    rom+='V'
                    i++;
                    num-=5;
                }
                else if(num>=4){
                    rom+='IV'
                    i++;
                    num-=4;
                }
                else if(num>=1){
                    rom+='I'
                    i++;
                    num-=1;
                }
            }while(i=num);
            output.textContent = rom;
        }
    }
