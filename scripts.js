// function filter_array(test_array) {
//     var index = -1,
//         arr_length = test_array ? test_array.length : 0,
//         resIndex = -1,
//         result = [];

//     while (++index < arr_length) {
//         var value = test_array[index];

//         if (value) {
//             result[++resIndex] = value;
//         }
//     }

//     return result;
// }

function populateGrid(size, section) {
  for (var i = 1; i <= (size); i++) {
      btngroup = "<div class='float_center'><div class='child'><div class='btngroup' id='grid" + i + "'></div></div><div class='clear'></div></div><div class='clear'></div>"
    document.getElementById(section).insertAdjacentHTML('beforeend', btngroup);
    for (var r = 1; r <= (size); r++) {
      var pr = (size * i) - size + r
      row = "<label><input type='checkbox' class='grid' id='" + pr + "g' value='" + pr + "'/><span class='button'></span></label>"
      document.getElementById("grid"+i).insertAdjacentHTML('beforeend', row);
    }

  }
}

function populateDisplay(size, section) {
  for (var i = 1; i <= (size); i++) {
    btngroup = "<div class='float_center'><div class='child'><div class='btngroup' id='disp" + i + "'></div></div><div class='clear'></div></div><div class='clear'></div>"
    document.getElementById(section).insertAdjacentHTML('beforeend', btngroup);
    for (var r = 1; r <= (size); r++) {
      var pr = (size * i) - size + r
      row = "<label><input type='checkbox'  class='disp' id='" + pr + "d' value='" + pr + "' disabled/><span class='display'></span></label>"
      document.getElementById("disp"+i).insertAdjacentHTML('beforeend', row);
    }

  }
}

function getCheckedGrid() {
  var array = []
  var checkboxes = document.querySelectorAll('input.grid[type=checkbox]:checked');
  for (i = 0; i < checkboxes.length; i++) {
    array.push(Number(checkboxes[i].value));
  }
//  console.log("getCheckedGrid V");
//  console.log(array.sort())
  return array.sort()
}

function getCheckedDisplay() {
  var array = []
  var checkboxes = document.querySelectorAll('input.disp[type=checkbox]:checked');
  for (i = 0; i < checkboxes.length; i++) {
    array.push(Number(checkboxes[i].value));
  }
//  console.log("getCheckedDisplay V");
//  console.log(array.sort());
  return array.sort();
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomGrid(size) {
var array = [];
  for (var i = 1; i <= (size*size); i++) {
      document.getElementById(i+"d").checked = false;
      array.push(i);
      shuffle(array);
      slarray = array.slice(Math.floor(Math.random() * ((size * size) + 1)));
      soarray = slarray.sort();
  }
  soarray.forEach(element => document.getElementById(element+"d").checked = true);
//  console.log("randomGrid V");
//  console.log(soarray);
return soarray;
}

function arraysEqual(a,b) {
    if (a instanceof Array && b instanceof Array) {
        if (a.length!=b.length)  // assert same length
            return false;
        for(var i=0; i<a.length; i++)  // assert each element equal
            if (!arraysEqual(a[i],b[i]))
                return false;
        return true;
    } else {
        return a==b;  // if not both arrays, should be the same
    }
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// function randomLoop(size) {
//   let i = 0
//   while (arraysEqual(getCheckedDisplay(), getCheckedGrid()) != true) {
//     randomGrid(size);
//     getCheckedDisplay();
//     getCheckedGrid();
//     if (arraysEqual(getCheckedDisplay(), getCheckedGrid())) {
//       document.getElementById('title2').innerText = 'Found a match after ' + i + ' iterations!'
//       console.log(i)
//     } else {
//       sleep(100);
//       document.getElementById('title2').innerText = i
//       console.log(i)

//     }
//   i++;
//   if (i == 1000000) {break;}
//   }
//   if (i == 0) {document.getElementById('title2').innerText = 'Found a match after ' + i + ' iterations!'}
// }

function randomLoop(size, delay, max) {
  var i = 0
  var iID = setInterval(function() {
    //Found it!
    if (arraysEqual(getCheckedDisplay(), getCheckedGrid())) {
      document.getElementById('title2').innerText = 'Found a match after ' + i + ' iterations!'
      console.log(i);
      clearInterval(iID);
    } else {
      //Still looking...
      randomGrid(size);
      document.getElementById('title2').innerText = i;
      console.log(i);
    }
    if (++i >= max) {
      document.getElementById('title2').innerText = 'Hit the ' + max + ' iteration limit... Try again!'
      clearInterval(iID);
    }
  },
    delay);
  }