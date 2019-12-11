function filter_array(test_array) {
    var index = -1,
        arr_length = test_array ? test_array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = test_array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}

function getChecked() {
  var array = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  for (i = 0; i < checkboxes.length; i++) {
    array.push(Number(checkboxes[i].value));
  }
//  console.log(filter_array(array).sort())
  return filter_array(array).sort()
}

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
      row = "<label><input type='checkbox' id='" + pr + "d' disabled/><span class='display'></span></label>"
      document.getElementById("disp"+i).insertAdjacentHTML('beforeend', row);
    }

  }
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
      slarray = array.slice(Math.floor(Math.random() * (size * size)) + 1);
      soarray = slarray.sort();
  }
  soarray.forEach(element => document.getElementById(element+"d").checked = true);
//  console.log(soarray);
return soarray;
}

function displayGrid(size) {
  console.log(getChecked());
}

function displayDisp(size) {
  console.log(randomGrid(size));
}

function matchGrid(size) {
  console.log(getChecked() == randomGrid(size));
}