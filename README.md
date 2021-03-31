# Wibbitz

This is the test project for the Wibbitz app.
The user story: As a user, I want to watch created clips, so I open wibbitz platform,
selecting the first clip and click play.

I decided to write login explicitly in the test, however, usually I use the "before" or "beforeSuite" hooks. 
Also the credentials are stored in the way they are for this test task only.
Wibbitz url is included in the wdio config file as baseUrl.

The spec file can be found under /webdriverio-test/test/specs dir.

To run the test, please, use these commands:

cd ./webdriverio-test

npx wdio wdio.conf.js --spec ./test/specs/wibbitz.spec.js
