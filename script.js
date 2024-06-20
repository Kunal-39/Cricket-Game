let score = {
      Won:0,
      Lost:0,
      Tie:0,
      displayscore: function () {
        return `Won: ${ score.Won }, Lost: ${ score.Lost }, Tie: ${ score.Tie }`;
      }
    };

    function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
      

      if (randomNumber <= 1) {
        return 'Bat';
      }

      else if (randomNumber <= 2) {
        return 'Ball';
      }

      else {
        return 'Stump'
      }
    }

    function getResult (UserMove , ComputerMove) {
    if (UserMove==='Bat')  {
     if (ComputerMove === 'Ball') {
      score.Won++;
        return 'User Won';
      }

      else if (ComputerMove === 'Bat') {
        score.Tie++;
        return  `It's a Tie`;
      }

      else if (ComputerMove === 'Stump') {
        score.Lost++;
        return 'Computer has Won';
      }
    }
  
  
    else if(UserMove==='Ball') {
      if (ComputerMove === 'Ball') {
         score.Tie++;
       return `It's a Tie`;
      }

      else if (ComputerMove === 'Bat') {
         score.Lost++;
        return 'Computer has Won';
      }

      else if (ComputerMove === 'Stump') {
        score.Won++;
        return 'User Won';
      }
    }
    


    else  {
       if (ComputerMove === 'Ball') {
         score.Lost++;
        return 'Computer has Won';
      }

      else if (ComputerMove === 'Bat') {
        score.Won++;
        return 'User Won';
      }

      else if (ComputerMove === 'Stump') {
         score.Tie++;
        return `It's a Tie`;
      }
    }

    }

    function showResult(UserMove, ComputerMove, Result) {
      alert(` You have chosen ${UserMove}. Computer Choice is ${ComputerMove} 

       ${Result}

       ${score.displayscore()} `)
    }
    