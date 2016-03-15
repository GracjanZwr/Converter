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
            var ones =  converter.ones;
            var tens = converter.tens;
            var twenys = converter.twenys;
            switch (str.length) {
              case 1:
                return str === '0' ? 'zero' : ones[str[0]];
              case 2:
                return str[0] != '1'
                  ? twenys[str[0]]+ ' ' + ones[str[1]]
                  : tens[str[1]];
              case 3:
                return str[1] != '1'
                  ? ones[str[0]] + ' hundred ' + twenys[str[1]] +' '+ ones[str[2]]
                  : ones[str[0]] + ' hundred ' + tens[str[2]];
              case 4:
              var h = ones[str[1]] != '' ? ' hundred ' : '';
              var e = ones[str[1]] != '' ? ' hundred ' : '';
                return str[2] != '1'
                  ? ones[str[0]] + ' thousand ' + ones[str[1]] + h + twenys[str[2]] + ' ' + ones[str[3]]
                  : ones[str[0]] + ' thousand ' + ones[str[1]] + h + tens[str[3]];
            }
          }()

  }
}
module.exports = converter;
var a = converter.numbersToWords('505')
console.log(a);
