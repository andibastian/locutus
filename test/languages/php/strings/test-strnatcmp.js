XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strnatcmp = require('/Users/kvz/code/phpjs/src/php/strings/strnatcmp.js')

describe('php.strings.strnatcmp.js', function () {
  it('should pass example 1', function (done) {
    strnatcmp('Price 12.9', 'Price 12.15')
    var expected = 1
    var result = strnatcmp('Price 12.9', 'Price 12.15')
    expect(result).to.deep.equal(expected)
    done()
  })
  it.skip('should pass example 2', function (done) {
    strnatcmp('Price 12.09', 'Price 12.15')
    var expected = -1
    var result = strnatcmp('Price 12.09', 'Price 12.15')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    strnatcmp('Price 12.90', 'Price 12.15')
    var expected = 1
    var result = strnatcmp('Price 12.90', 'Price 12.15')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    strnatcmp('Version 12.9', 'Version 12.15', true)
    var expected = -6
    var result = strnatcmp('Version 12.9', 'Version 12.15', true)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    strnatcmp('Version 12.15', 'Version 12.9', true)
    var expected = 6
    var result = strnatcmp('Version 12.15', 'Version 12.9', true)
    expect(result).to.deep.equal(expected)
    done()
  })
})