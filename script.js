window.onload = () => {
  const rule = document.querySelector("#rules");
  const modal = document.querySelector("#modal");
  const mask = document.querySelector("#mask");
  const close = document.querySelector("#close")
  const game = document.querySelector(".game")
  const paper = document.querySelector(".pp")
  const scisser = document.querySelector(".sc")
  const rock = document.querySelector(".rk")
  const divplay = document.createElement('div');
    const your = document.createElement('div');
    const house = document.createElement('div');
    const choice = document.createElement('div');
    const title1 = document.createElement('h3');
    const title2 = document.createElement('h3');
    const circleSel = document.createElement('div');
    const machine = document.createElement('div');
    const circleAdv = document.createElement('div');
  const score = document.querySelector('.score');
  const placar = document.createElement('h2');
  placar.innerText = localStorage.getItem('placar')
  score.appendChild(placar)
  let contador = localStorage.getItem('placar')
  const transition = (element) => {
    circleSel.className = 'circle-sel';
    title1.innerText = 'YOU PICKED';
    title2.innerText = 'THE HOUSE PICKED';
    house.className = 'house';
    choice.className = 'choice';
    divplay.className = 'game-hour';
    your.className = 'your-picked';
    machine.className = 'machine-choice';
    circleAdv.className = 'circle-adv';
    element.style.width = '180px'
    element.style.height = '180px'
    element.style.position = 'relative'
    element.style.top = '20px'
    element.style.left = '20px'
    game.removeChild(document.querySelector(".game-wrap"))
    game.removeChild(document.querySelector(".triangle"))
    game.appendChild(divplay);
    divplay.appendChild(your);
    divplay.appendChild(house);
    your.appendChild(title1);
    your.appendChild(choice);
    choice.appendChild(circleSel);
    circleSel.appendChild(element);
    house.appendChild(title2);
    house.appendChild(machine);
    machine.appendChild(circleAdv);
    let num = Math.floor((Math.random() * 3) + 1);
    const againstPaper = document.createElement('div')
    const againstPaperWrap = document.createElement('div')
    const againstPaperImg = document.createElement('img')
    againstPaper.className = 'circle paperr';
    againstPaperWrap.className = 'img-wrapp pp';
    againstPaperImg.src = 'images/icon-paper.svg';
    againstPaper.appendChild(againstPaperWrap);
    againstPaperWrap.appendChild(againstPaperImg)
    const againstRock = document.createElement('div')
    const againstRockWrap = document.createElement('div')
    const againstRockImg = document.createElement('img')
    againstRock.className = 'circle rockk';
    againstRockWrap.className = 'img-wrapp rk';
    againstRockImg.src = 'images/icon-rock.svg';
    againstRock.appendChild(againstRockWrap);
    againstRockWrap.appendChild(againstRockImg)
    const againstScisser = document.createElement('div')
    const againstScisserWrap = document.createElement('div')
    const againstScisserImg = document.createElement('img')
    againstScisser.className = 'circle scissorss';
    againstScisserWrap.className = 'img-wrapp sc';
    againstScisserImg.src = 'images/icon-scissors.svg';
    againstScisser.appendChild(againstScisserWrap);
    againstScisserWrap.appendChild(againstScisserImg)
    setTimeout(() => {
      if (num === 1) {
        circleAdv.appendChild(againstPaper);
      } else if (num === 2) {
        circleAdv.appendChild(againstRock);
      } else if (num === 3){
        circleAdv.appendChild(againstScisser);
      }
    }, 1000)
  } 

  rule.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.opacity = "1";
    modal.style.transition = "all 850ms";
    mask.style.display = "block";
    modal.style.zIndex = "999";
  })
  close.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.opacity = "0";
    modal.style.transition = "all 850ms";
    mask.style.display = "none";
    modal.style.zIndex = "-11";
  })
  paper.addEventListener('click', () => {
    transition(paper)
    const status = document.createElement('div');
    const textS = document.createElement('h3');
    const again = document.createElement('a');
    setTimeout( () => {
      let your = document.querySelector('.your-picked');
    status.className = 'status';
    circleSel.style.transform = 'translateX(-100px)';
    circleAdv.style.transform = 'translateX(100px)';
    title1.style.transform = 'translateX(-100px)';
    title2.style.transform = 'translateX(100px)';
    again.innerText = 'PLAY AGAIN'
    again.className = 'againP'
    again.href = 'http://phellipecode.me/rock-paper-scissors/'
    status.appendChild(textS)
    status.appendChild(again)
      if (circleAdv.childNodes[0].classList[1] == 'rockk') {
        textS.innerText = 'YOU WIN'
        game.appendChild(status)
        contador++;
        placar.innerText = contador
      localStorage.setItem('placar', contador)
      } else if (circleAdv.childNodes[0].classList[1] == 'paperr'){
        textS.innerText = 'VOCÊ EMPATOU'
        game.appendChild(status)
      } else {
        textS.innerText = 'VOCÊ PERDEU'
        game.appendChild(status)
        contador--;
        placar.innerText = contador
      localStorage.setItem('placar', contador)
      }
    }, 1850)
  })

  scisser.addEventListener('click', () => {
    transition(scisser)
    const status = document.createElement('div');
    const textS = document.createElement('h3');
    const again = document.createElement('a');
    setTimeout(() => {
      let your = document.querySelector('.your-picked');
      circleSel.style.transform = 'translateX(-100px)';
      circleAdv.style.transform = 'translateX(100px)';
      title1.style.transform = 'translateX(-100px)';
      title2.style.transform = 'translateX(100px)';
      status.className = 'status';
      again.innerText = 'PLAY AGAIN'
      again.className = 'againP'
      again.href = 'http://phellipecode.me/rock-paper-scissors/'
      status.appendChild(textS)
      status.appendChild(again)
      if (circleAdv.childNodes[0].classList[1] == 'paperr') {
        textS.innerText = 'YOU WIN'
        game.appendChild(status)
        contador++;
        placar.innerText = contador
      localStorage.setItem('placar', contador)
      } else if (circleAdv.childNodes[0].classList[1] == 'scissorss'){
        textS.innerText = 'VOCÊ EMPATOU'
        game.appendChild(status)
      } else {
        textS.innerText = 'VOCÊ PERDEU'
        game.appendChild(status)
        contador--;
        placar.innerText = contador
      localStorage.setItem('placar', contador)
      }
    }, 1850)
  })
  rock.addEventListener('click', () => {
    transition(rock)
    const status = document.createElement('div');
    const textS = document.createElement('h3');
    const again = document.createElement('a');
    setTimeout(() => {
      let your = document.querySelector('.your-picked');
      circleSel.style.transform = 'translateX(-100px)';
      circleAdv.style.transform = 'translateX(100px)';
      title1.style.transform = 'translateX(-100px)';
      title2.style.transform = 'translateX(100px)';
      status.className = 'status';
      again.innerText = 'PLAY AGAIN'
      again.className = 'againP'
      again.href = 'http://phellipecode.me/rock-paper-scissors/'
      status.appendChild(textS)
      status.appendChild(again)
      
      if (circleAdv.childNodes[0].classList[1] == 'scissorss') {
        textS.innerText = 'YOU WIN'
        game.appendChild(status)
        contador ++;
        placar.innerText = contador
      localStorage.setItem('placar', contador)
      } else if (circleAdv.childNodes[0].classList[1] == 'rockk'){
        textS.innerText = 'VOCÊ EMPATOU'
        game.appendChild(status)
      } else {
        textS.innerText = 'VOCÊ PERDEU'
        game.appendChild(status)
        contador--;
        placar.innerText = contador
      localStorage.setItem('placar', contador)
      }
    }, 1850)
  })
}
