(function() {
var w = window,
d = document,
protocol =/https/i.test(w.location.protocol) ? 'https:' : 'http:',
aml = typeof admixerML !== 'undefined' ? admixerML : { };
aml.fn = aml.fn || [];
aml.invPath = aml.invPath || (protocol + '//inv-nets.admixer.net/');
aml.cdnPath = aml.cdnPath || (protocol + '//cdn.admixer.net/');
if (!w.admixerML){
var lodash = document.createElement('script');
lodash.id = 'amlScript';
lodash.async = true;
lodash.type = 'text/javascript';
lodash.src = aml.cdnPath + 'scripts3/loader2.js';
var node = d.getElementsByTagName('script')[0];
node.parentNode.insertBefore(lodash, node);
w.admixerML = aml;}})();
