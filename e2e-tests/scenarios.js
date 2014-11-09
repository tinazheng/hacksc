'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /camera when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/camera");
  });


  describe('camera', function() {

    beforeEach(function() {
      browser.get('index.html#/camera');
    });


    it('should render camera when user navigates to /camera', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('display', function() {

    beforeEach(function() {
      browser.get('index.html#/display');
    });


    it('should render display when user navigates to /display', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
