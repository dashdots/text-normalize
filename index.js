'use strict';

module.exports = function textNormalize(text) {
  return text
  	.replace(/[\uFF01-\uFF5E]/g, function(it) { return String.fromCharCode(it.charCodeAt(0) - 0xFEE0); })
  	.replace(/\u3000/g, '\u0020')
  	.replace(/\u3002/g, '\u002e')
  	.replace(/[\u201c-\u201d\u3003\u301d-\u301e]/g, '\u0022')
  	.replace(/[\u2018-\u2019]/g, '\u0027');
};