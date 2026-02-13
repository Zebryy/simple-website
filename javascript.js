const buttonContinue = document.getElementById("continue");
const text =  document.getElementById("text")
const image = document.getElementById("image")

let clickCount = 0;
let clickCounta = 0;
let clickCountb = 0;


function continueClick(){
    clickCount++


    switch(clickCount){
        case 1:
            text.textContent = "I made this website just for you, Mel."
            text.classList.add('greeting');
            image.src = "Gifs/peach-goma-chair-wiggle.gif";
            image.style.height = "200px";
            image.style.width = "auto";
            break;
        case 2:
        text.textContent = "Just to tell you..."
        image.src = "Gifs/mochi-mochimochi.gif";
        break;
        case 3:
        text.textContent = "...";
        image.src = "Gifs/peach-shy.gif"
        break;
        case 4:
        text.textContent = "Will you be my Valentine?"
        image.src = "Gifs/peach flowers.gif";
        break;
        case 5:
        text.remove()
        buttonContinue.remove()


        const yesbutton = document.createElement('button');
        yesbutton.innerText = 'Yes';
        yesbutton.addEventListener('click', function() {
        clickCounta++
        
        switch(clickCounta){
            case 1:
                yesbutton.remove()
                nobutton.remove()
                 const textA = document.createElement('text');
                 textA.textContent = "YIPPEE KNEW YOU WOULD SAY YES.";
                 document.body.appendChild(textA)
                 textA.classList.add('greeting-a')
                image.src = "Gifs/peach-goma.gif";
                image.style.height ="300px"
                break;

        }
        });
        document.body.appendChild(yesbutton);
        
        // STYLE BRO
        yesbutton.classList.add('yes-button')


        const nobutton = document.createElement('button');
        nobutton.innerText = 'No';
        nobutton.addEventListener('click', function() {
        clickCountb++

        switch(clickCountb){
        case 1:
        image.src = "Gifs/okay-mochi.webp"
        nobutton.innerText = "Mel...?"
        nobutton.style.fontSize = "10px"
        break;
        
        case 2:
        nobutton.innerText = "You surely must be kidding me Mel..."
        nobutton.style.width = "120px"
        nobutton.style.top = "35%"
        nobutton.style.left = "60%"
        nobutton.style.fontSize = "10px"
        yesbutton.style.fontSize = "20px"
        yesbutton.style.top = "35%"
        yesbutton.style.left = "43%"
        image.src = "Gifs/mochi-mochimochi.webp"
        break;

        case 3:
            nobutton.innerText = "WHY??"
            nobutton.style.width = "auto";
            nobutton.style.fontSize = "35px"
            yesbutton.style.fontSize = "12px"
            image.src = "Gifs/peach-goma.webp"
            break;

            case 4:
            nobutton.innerText = "You're breaking my heart Mel.."
            nobutton.style.fontSize = "10px";
            nobutton.style.width = "120px"
            yesbutton.style.fontSize = "30px"
            image.src ="Gifs/goma-phone.webp"
            break;

            case 5:
            nobutton.innerText = "You know what?"
            nobutton.style.fontSize = "14px"
            yesbutton.style.fontSize = "12px"
            image.src="Gifs/peachcat-and-goma-peachcat.webp"
            break;

            case 6:
                nobutton.style.transition = "font-size 0.50s"
                nobutton.style.width = "auto";
                nobutton.style.fontSize = "35px"
                nobutton.innerText = "I won't let you."
                image.src = "Gifs/peach-goma (1).gif"
                break;

            case 7:
                yesbutton.style.transition = "font-size 2s"
                yesbutton.style.fontSize = "200px"
                nobutton.remove()
                break;
        }

        

        });
        document.body.appendChild(nobutton);

        // STYLE BRO
        nobutton.classList.add('no-button')
        break;
    }
}