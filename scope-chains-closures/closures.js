function foo() {
  let bar = 'lols';
  quux = 'oops';

  function zip() {
    var quux;
    bar = true;
  }

  return zip;
}

