Package.describe(
{
  name: 'didstopia:admzip',
  summary: 'Provides easy access to AdmZip.',
  version: '0.0.5',
  git: 'https://github.com/Didstopia/meteor-admzip.git',
  documentation: 'README.md',
  packages:
  {
    'maxkferg:temp': '1.0.0'
  }
});

Npm.depends(
{
  'adm-zip': '0.4.7'
});

Package.onUse(function(api)
{
  api.versionsFrom('1.1.0.2');

  api.addFiles('admzip.js', 'server');
  
  api.export('createZipFromFile', 'server');
  api.export('createZipFromFiles', 'server');
  api.export('extractZip', 'server');
});

Package.onTest(function(api)
{
  api.use(['tinytest', 'maxkferg:temp', 'didstopia:admzip']);

  api.addFiles('admzip.js', 'server');
  api.addFiles('admzip-tests.js', 'server');

  api.export('createZipFromFile', 'server');
  api.export('createZipFromFiles', 'server');
  api.export('extractZip', 'server');
});
