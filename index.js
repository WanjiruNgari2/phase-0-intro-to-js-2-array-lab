//describe function cats
const cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });


  //appendcat
  function  destructivelyAppendCat (Ralph) {
    cats.push("Ralph");
  }


  //prependcat
  function destructivelyPrependCat (Bob) {
    cats.unshift("Bob");
  }
  
    
//removelastcat
   function destructivelyRemoveLastCat () {
    cats.pop("Garfield");
   }


//destructivelyRemoveFirstCat()
   function destructivelyRemoveFirstCat () {
    cats.shift("Milo");
   }


//appendCat(name)
   function appendCat (Broom) {
    return [...cats, "Broom"];
   }


// prependCat(name)
   function  prependCat (Arnold) {
    return ["Arnold", ...cats];
   }

//removeLastCat()
   function removeLastCat (Garfield) {
      return cats.slice(0, -1);
   }


//removefistcat
  function  removeFirstCat (Milo)  {
    return cats.slice(1);
  }