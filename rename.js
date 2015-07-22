var fs = require('fs');
require('fs').readFile('/');

/*fs.rename('C://Users/baranidharan/projects/fuzzy/a.html', 'C:/Users/baranidharan/projects/fuzzy/b.html', function (err) {
  if (err) throw err;
  console.log('renamed complete');
});*/

/*fs.readFile('C://Users/baranidharan/projects/fuzzy/b.html', function (err, data) {
	  if (err) throw err;
	  console.log(data);
	});
*/

fs.writeFile('message.txt', 'Hello Node', function (err) {
	  if (err) throw err;
	  console.log('It\'s saved!');
	});