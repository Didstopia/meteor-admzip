// TODO: Where are the files being created?
// TODO: We need to cleanup after ourselves

Tinytest.add('AdmZip - Create and Read a ZIP file', function(test)
{
	// Create a new ZIP file
	var zip = new AdmZip();
	zip.addFile("test.txt", new Buffer("AdmZip test file."));
	zip.writeZip('test.zip');

	// Read the ZIP file
	var zip = new AdmZip('test.zip');
	var zipEntries = zip.getEntries();

	// Test if the ZIP file was succesfully created/read
	test.length(zipEntries, 1, "ZIP file length was less than 1");
});

Tinytest.add('AdmZip - Extract', function (test)
{
	// Create a new ZIP file
	var zip = new AdmZip();
	zip.addFile("test.txt", new Buffer("AdmZip test file."));
	zip.writeZip('test.zip');

	// Read and extract the ZIP file
	var zip = new AdmZip('test.zip');	
	zip.extractAllTo('test/', true);

	// Test if the extracted file exists
	var fs = Npm.require('fs');
	test.equal(fs.existsSync('test/test.txt'), true, "Test file does not exist, extract failed?");
});