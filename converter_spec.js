var expect = require('chai').expect,
    convert_numbers = require('./converter').numbersToWords;

describe('description', function () {
  it('Check if numbersToWords function accept empty argument', function () {
    var output = convert_numbers();
    expect(output).to.equal('zero');
    expect(output).to.not.equal(undefined);
  })
  it('Check recursion', function () {
    var output = convert_numbers('0001');
    expect(output).to.equal('one');
  })
  it('Check if numbersToWords function show the type Warning when using integer or words', function () {
    var output_integer = convert_numbers(100);
    var output_words = convert_numbers('Hello');
    expect(output_integer).to.equal('[!] WARNING: Looking for a number of type string');
    expect(output_integer).to.not.equal(undefined);
    expect(output_words).to.equal('[!] WARNING: Looking for a number of type string');
    expect(output_words).to.not.equal(undefined);
  })
  it('Check 1 digit number', function () {
    var output = convert_numbers('9');
    var output_1 = convert_numbers('0');
    expect(output).to.equal('nine');
    expect(output_1).to.equal('zero');
  })
  it('Check 2 digits number', function () {
    var output = convert_numbers('45');
    var output_1 = convert_numbers('50');
    expect(output).to.equal('forty five');
    expect(output_1).to.equal('fifty ');
  })
  it('Check 3 digits number', function () {
    var output = convert_numbers('506');
    var output_2 = convert_numbers('500');
    var output_3 = convert_numbers('550');
    expect(output).to.equal('five hundred  six');
    expect(output_2).to.equal('five hundred  ');
    expect(output_3).to.equal('five hundred fifty ');
  })
  it('Check 4 digits number', function () {
    var output = convert_numbers('4050');
    var output_1 = convert_numbers('5000');
    var output_2 = convert_numbers('4356');
    var output_3 = convert_numbers('4500');
    expect(output).to.equal('four thousand fifty ');
    expect(output_3).to.equal('four thousand five hundred  ');
    expect(output_1).to.equal('five thousand  ');
    expect(output_2).to.equal('four thousand three hundred fifty six');
  })
  it('Check Octal numbers', function () {
    var output = convert_numbers('050');
    var output_1 = convert_numbers('013');
    expect(output).to.equal('fifty ');
    expect(output_1).to.equal('thirteen');
  })
});
