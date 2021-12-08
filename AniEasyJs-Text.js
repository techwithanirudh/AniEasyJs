// Add a function to get the value of a form element
// (e.g. getValue(document.forms[0].elements[0])
function getValue(el) {
  if (el.type == "checkbox") {
    return el.checked;
  } else if (el.type == "radio") {
    var radio = document.getElementsByName(el.name);
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        return radio[i].value;
      }
    }
    return null;
  } else {
    return el.value;
  }
}

// Add a function to set the value of a form element
// (e.g. setValue(document.forms[0].elements[0], 'foo'))
function setValue(el, value) {
  if (el.type == "checkbox") {
    el.checked = value;
  } else if (el.type == "radio") {
    var radio = document.getElementsByName(el.name);
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].value == value) {
        radio[i].checked = true;
      }
    }
  } else {
    el.value = value;
  }
}

// Add a function to remove all child nodes of an element
// (e.g. removeChildren(document.forms[0].elements[0]))
function removeChildren(el) {
  while (el.hasChildNodes()) {
    el.removeChild(el.firstChild);
  }
}

// Add a function to add all child nodes of an element
// (e.g. addChildren(document.forms[0].elements[0], 'foo'))
function addChildren(el, value) {
  var newNode = document.createTextNode(value);
  el.appendChild(newNode);
}

// Add a function to show an element
// (e.g. show(document.forms[0].elements[0]))
function show(el) {
  el.style.display = "block";
}

// Add a function to hide an element
// (e.g. hide(document.forms[0].elements[0]))
function hide(el) {
  el.style.display = "none";
}

// Add a function to concatenate two strings
// (e.g. concat('foo', 'bar') => 'foobar')
function concat(str1, str2) {
  return str1 + str2;
}

// Add a function to convert string to number
// (e.g. toNumber('foo') => NaN)
function toNumber(str) {
  return Number(str);
}

// Add a function to convert anything to string
// (e.g. toString(1) => '1')
function toString(obj) {
  return String(obj);
}

// Add a function to check if a string is empty
// (e.g. isEmpty('foo') => false)
function isEmpty(str) {
  return str.length === 0;
}

// Add a function to expand a date
// (e.g. expandDate(new Date(2000, 1, 1)) => '2000-02-29')
function expandDate(date) {
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}

// Add a function to get the current date
// (e.g. getCurrentDate() => '2000-02-29')
function getCurrentDate() {
  return expandDate(new Date());
}

// Add a function to get the current time
// (e.g. getCurrentTime() => '12:34:56')
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

// Add a function to replace with 24 hour
// (e.g. replaceWith24Hour('12:34:56') => '12:34:56')
function replaceWith24Hour(time) {
  return time.replace(/(\d+):(\d+):(\d+)/, "$1:$2:$3");
}

// Add a function to replace with 12 hour
// (e.g. replaceWith12Hour('12:34:56') => '12:34:56')
function replaceWith12Hour(time) {
  return time.replace(/(\d+):(\d+):(\d+)/, "$1:$2:$3");
}

// Add a function to lowercase a string
// (e.g. lowercase('Foo') => 'foo')
function lowercase(str) {
  return str.toLowerCase();
}

// Add a function to uppercase a string
// (e.g. uppercase('foo') => 'FOO')
function uppercase(str) {
  return str.toUpperCase();
}

// Add a function to get the length of a string
// (e.g. length('foo') => 3)
function length(str) {
  return str.length;
}

// Add a function to remove whitespace from the beginning of a string
// (e.g. trimLeft('  foo') => 'foo')
function trimLeft(str) {
  return str.replace(/^\s+/, "");
}

// Add a function to replace a string
// (e.g. replace('foo', 'bar') => 'bar')
function replace(str, find, replace) {
  return str.replace(find, replace);
}

// Add a function to remove whitespace from the end of a string
// (e.g. trimRight('foo  ') => 'foo')
function trimRight(str) {
  return str.replace(/\s+$/, "");
}

// Add a function to remove whitespace from the beginning and end of a string
// (e.g. trim('  foo  ') => 'foo')
function trim(str) {
  return trimRight(trimLeft(str));
}

// Add a function to split a string
// (e.g. split('foo,bar,baz', ',') => ['foo', 'bar', 'baz'])
function split(str, separator) {
  return str.split(separator);
}

// Add a function to join a string
// (e.g. join(['foo', 'bar', 'baz'], ',') => 'foo,bar,baz')
function join(arr, separator) {
  return arr.join(separator);
}

// Add a function to check the string starts with a string
// (e.g. startsWith('foo', 'f') => true)
function startsWith(str, prefix) {
  return str.indexOf(prefix) === 0;
}

// Add a function to check the string ends with a string
// (e.g. endsWith('foo', 'o') => true)
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
