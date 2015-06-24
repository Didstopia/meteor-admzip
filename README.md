# AdmZip

[![Build Status](https://travis-ci.org/Didstopia/meteor-admzip.svg)](https://travis-ci.org/Didstopia/meteor-admzip)

Provides easy access to AdmZip.

Create a ZIP file from a single file:
createZipFromFile("thing.txt", "something.zip");

Create ZIP file from multiple files:
createZipFromFiles([ "this.txt", "that.txt" ], "something.zip");

Extract a ZIP file (from path, to path, overwrite, callback):
extractZip("something.zip", "some/folder", true, function(error)
{
	if (error) console.log("Error extracting ZIP file: " + error);
});