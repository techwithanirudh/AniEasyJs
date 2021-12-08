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

// Add a function that is multiple ifs dynamically
// (e.g. If( Condition1, ThenResult1 [, Condition2, ThenResult2, ... [ , DefaultResult ] ] ) => Result )
function Ifs(condition, thenResult) {
    var args = Array.prototype.slice.call(arguments, 2);
    var result = thenResult;
    for (var i = 0; i < args.length; i += 2) {
        if (args[i] === condition) {
            result = args[i + 1];
            break;
        }
    }
    return result;
}

// Add a function that is multiple ifs statically
// (e.g. If( Condition1, ThenResult1 [, Condition2, ThenResult2, ... [ , DefaultResult ] ] ) => Result )
function If(condition, thenResult, elseResult) {
    return Ifs(condition, thenResult, elseResult);
}

// Add a function to check if a string is a number
// (e.g. isNumber('foo') => false)
function isNumber(str) {
    return !isNaN(str);
}

// Add a function to get local storage
// (e.g. getLocalStorage('foo') => 'bar')
function getLocalStorage(key) {
    return localStorage.getItem(key);
}

// Add a function to set local storage
// (e.g. setLocalStorage('foo', 'bar') => 'bar')
function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

// Add a function to remove local storage
// (e.g. removeLocalStorage('foo') => null)
function removeLocalStorage(key) {
    localStorage.removeItem(key);
}

// Add a function to get session storage
// (e.g. getSessionStorage('foo') => 'bar')
function getSessionStorage(key) {
    return sessionStorage.getItem(key);
}

// Add a function to set session storage
// (e.g. setSessionStorage('foo', 'bar') => 'bar')
function setSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}

// Add a function to remove session storage
// (e.g. removeSessionStorage('foo') => null)
function removeSessionStorage(key) {
    sessionStorage.removeItem(key);
}

// Add a function to get the current url
// (e.g. getUrl() => 'http://www.google.com')
function getUrl() {
    return window.location.href;
}

// Add a function to get the current host
// (e.g. getHost() => 'www.google.com')
function getHost() {
    return window.location.host;
}

// Add a function to get the current protocol
// (e.g. getProtocol() => 'http')
function getProtocol() {
    return window.location.protocol;
}

// Add a function to get the current path
// (e.g. getPath() => '/foo/bar')
function getPath() {
    return window.location.pathname;
}

// Add a function to get the current search
// (e.g. getSearch() => '?foo=bar')
function getSearch() {
    return window.location.search;
}

// Add a function to get the current hash
// (e.g. getHash() => '#foo')
function getHash() {
    return window.location.hash;
}

// Add a function to get the current port
// (e.g. getPort() => '80')
function getPort() {
    return window.location.port;
}

// Add a function to get the position of text
// (e.g. getPosition('foo', 'bar') => 3)
function getPosition(str, find) {
    return str.indexOf(find);
}

// Add a function to get the substring of text
// (e.g. getSubstring('foo', 1, 3) => 'oo')
function getSubstring(str, start, end) {
    return str.substring(start, end);
}

// Add a function to get the sum of numbers dynamically
// (e.g. sum(1, 2, 3) => 6)
function sum(num1, num2, num3) {
    var args = Array.prototype.slice.call(arguments);
    return args.reduce(function(a, b) {
        return a + b;
    });
}

// Add a function to create a collection
// (e.g. createCollection('foo', 'bar', 'baz') => ['foo', 'bar', 'baz'])
function createCollection(item1, item2, item3) {
    var args = Array.prototype.slice.call(arguments);
    return args;
}

// Add a function to create a range
// (e.g. createRange(1, 3) => [1, 2, 3])
function createRange(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

// Add a function to create a random number
// (e.g. createRandomNumber(1, 3) => 2)
function createRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add a function to create a random string
// (e.g. createRandomString(5) => '5f5f5f5f')
function createRandomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

// Add a function to create a random hexadecimal color
// (e.g. createRandomHexColor() => '#f5f5f5')
function createRandomHexColor() {
    var chars = '0123456789abcdef';
    var result = '#';
    for (var i = 6; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

// Add a function to create a random color
// (e.g. createRandomColor() => 'rgb(255, 255, 255)')
function createRandomColor() {
    var r = createRandomNumber(0, 255);
    var g = createRandomNumber(0, 255);
    var b = createRandomNumber(0, 255);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

// Add a function to search text
// (e.g. searchText('foo', 'bar') => 'bar')
function searchText(str, find) {
    return str.search(find);
}

// Add a function to get the length of text
// (e.g. getLength('foo') => 3)
function getLength(str) {
    return str.length;
}

// Add a function to get the character at a position
// (e.g. getCharAt('foo', 1) => 'o')
function getCharAt(str, pos) {
    return str.charAt(pos);
}

// Add a function to make an or operation
// (e.g. or(true, false) => true)
function or(bool1, bool2) {
    return bool1 || bool2;
}

// Add a function to make an and operation
// (e.g. and(true, false) => false)
function and(bool1, bool2) {
    return bool1 && bool2;
}

// Add a function to make an xor operation
// (e.g. xor(true, false) => true)
function xor(bool1, bool2) {
    return bool1 !== bool2;
}

// Add a function to make an not operation
// (e.g. not(true) => false)
function not(bool) {
    return !bool;
}

// Add a function to make an equal operation    
// (e.g. equal(1, 1) => true)
function equal(num1, num2) {
    return num1 === num2;
}

// Add a function to make an not equal operation
// (e.g. notEqual(1, 1) => false)
function notEqual(num1, num2) {
    return num1 !== num2;
}

// Add a function to make an greater than operation
// (e.g. greaterThan(1, 0) => true)
function greaterThan(num1, num2) {
    return num1 > num2;
}

// Add a function to make an greater than or equal operation
// (e.g. greaterThanOrEqual(1, 1) => true)
function greaterThanOrEqual(num1, num2) {
    return num1 >= num2;
}

// Add a function to make an less than operation
// (e.g. lessThan(0, 1) => true)
function lessThan(num1, num2) {
    return num1 < num2;
}

// Add a function to make an less than or equal operation
// (e.g. lessThanOrEqual(1, 1) => true)
function lessThanOrEqual(num1, num2) {
    return num1 <= num2;
}

// Add a function to make an in operation
// (e.g. in(1, [1, 2, 3]) => true)
function In(num, arr) {
    return arr.indexOf(num) !== -1;
}

// Add a function to make an not in operation
// (e.g. notIn(1, [1, 2, 3]) => false)
function notIn(num, arr) {
    return arr.indexOf(num) === -1;
}

// Add a function to make an is operation
// (e.g. is(null, null) => true)
function is(obj1, obj2) {
    return obj1 === obj2;
}

// Add a function to make an is not operation
// (e.g. isNot(null, null) => false)
function isNot(obj1, obj2) {
    return obj1 !== obj2;
}

// Add a function to make an instanceof operation
// (e.g. instanceOf(new Date(), Date) => true)
function instanceOf(obj, type) {
    return obj instanceof type;
}

// Add a function to make an typeof operation
// (e.g. typeOf(new Date(), 'object') => true)
function typeOf(obj, type) {
    return typeof obj === type;
}

// Add a function to make an if error operation
// (e.g. ifError(new Error('foo'), 'foo') => 'foo')
function ifError(obj, str) {
    if (obj instanceof Error) {
        return str;
    }
}

// Add a function to make an if not error operation
// (e.g. ifNotError(new Error('foo'), 'foo') => null)
function ifNotError(obj, str) {
    if (!(obj instanceof Error)) {
        return str;
    }
}

