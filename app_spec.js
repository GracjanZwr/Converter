var converter =  {

  ones : [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  tens : ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
  twenys : ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],

  numbersToWords: function (str) {
    str = str ? str : '0';
    return str[0] === '0' && str.length > 1 ? (str = str.substr(1), converter.numbersToWords(str))
      :
      str[0] == undefined || isNaN(str) ? '[!] WARNING: Looking for a number of type string'
        :
        str.length > 4 ? '[!] WARNING: input number can\'t be larger than 4 digits'
          : function () {
            switch (str.length) {
              case 1:
                return str === '0' ? 'zero' : converter.ones[str[0]];
              case 2:
              var space = converter.ones[str[1]] == '' ? '' : ' ';
                return str[0] != '1'
                  ? converter.twenys[str[0]]+ space + converter.ones[str[1]]
                  : converter.tens[str[1]];
              case 3:
                var space = converter.twenys[str[1]] == '' ? ' and ' : ' ';
                converter.ones[str[2]] == '' ? space = '' : '';
                return  0 == 0
                  ? converter.ones[str[0]] + ' hundred' + converter.twenys[str[1]] + space + converter.ones[str[2]]
                  : converter.ones[str[0]] + ' hundred and ' + converter.tens[str[2]];
              case 4:
                var space_1 = converter.ones[str[1]] == '' ? 'and ' : ' hundred ';
                var space_2 = converter.twenys[str[2]] == '' ? 'and ' : '';
                return str[2] != '1'
                  ? converter.ones[str[0]] + ' thousand ' + converter.ones[str[1]] + space_1 + converter.twenys[str[2]] + space_2 + converter.ones[str[3]]
                  : converter.ones[str[0]] + ' thousand ' + converter.ones[str[1]] + ' hundred ' + converter.tens[str[3]];
            }
          }()

  }
}
module.exports = converter;
// converter.numbersToWords('505')
// console.log(a);
