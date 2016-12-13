const fn = require('../timestamp')
const test = require('tape')

test('timestamp 03/02/2001 04:05:06.007', function (t) {
  // 3 jan 2001 04:05:06.007
  var d = new Date(2001, 1, 3, 4, 5, 6, 7)
  // year
  t.equal(fn('Y', d), '2001')
  t.equal(fn('y', d), '01')
  t.equal(fn('z', d), ' 1')
  // month
  t.equal(fn('O', d), '02')
  t.equal(fn('o', d), '2')
  t.equal(fn('p', d), ' 2')
  // day
  t.equal(fn('D', d), '03')
  t.equal(fn('d', d), '3')
  t.equal(fn('e', d), ' 3')
  // hour
  t.equal(fn('H', d), '04')
  t.equal(fn('h', d), '4')
  t.equal(fn('i', d), ' 4')
  // minute
  t.equal(fn('M', d), '05')
  t.equal(fn('m', d), '5')
  t.equal(fn('n', d), ' 5')
  // second
  t.equal(fn('S', d), '06')
  t.equal(fn('s', d), '6')
  t.equal(fn('t', d), ' 6')
  // millisecond
  t.equal(fn('L', d), '007')
  t.equal(fn('l', d), '0')
  t.end()
})

test('timestamp 30/12/2010 10:11:12.345', function (t) {
  // 30 dec 2010 10:11:12.345
  var d = new Date(2010, 11, 30, 10, 11, 12, 345)
  // year
  t.equal(fn('Y', d), '2010')
  t.equal(fn('y', d), '10')
  t.equal(fn('z', d), '10')
  // month
  t.equal(fn('O', d), '12')
  t.equal(fn('o', d), '12')
  t.equal(fn('p', d), '12')
  // day
  t.equal(fn('D', d), '30')
  t.equal(fn('d', d), '30')
  t.equal(fn('e', d), '30')
  // hour
  t.equal(fn('H', d), '10')
  t.equal(fn('h', d), '10')
  t.equal(fn('i', d), '10')
  // minute
  t.equal(fn('M', d), '11')
  t.equal(fn('m', d), '11')
  t.equal(fn('n', d), '11')
  // second
  t.equal(fn('S', d), '12')
  t.equal(fn('s', d), '12')
  t.equal(fn('t', d), '12')
  // millisecond
  t.equal(fn('L', d), '345')
  t.equal(fn('l', d), '3')
  t.end()
})

test('timestamp 09/11/2014 09:27:01.002', function (t) {
  // 09 nov 2014 09:27:01.002
  var d = new Date(2014, 10, 9, 9, 27, 1, 20)
  // year
  t.equal(fn('[Y-O-D]', d), '[2014-11-09]')
  t.equal(fn('D/O/Y', d),   '09/11/2014')
  t.equal(fn('H:M:S', d),   '09:27:01')
  t.equal(fn('H:M:S.L', d), '09:27:01.020')
  t.equal(fn('M:S.l', d),   '27:01.0')
  t.equal(fn(undefined, d), '09:27:01.020')
  t.equal(fn('', d),        '09:27:01.020')
  t.equal(fn('  ', d),      '09:27:01.020')
  t.end()
})

test('timestamp no date (now)', function (t) {
  // now
  var now = new Date()
  var y = now.getFullYear()
  var m = '' + (now.getMonth() + 1)
  if (m.length == 1) m = '0' + m
  var d = '' + now.getDate()
  if (d.length == 1) d = '0' + d
  t.equal(fn('[Y-O-D]'), `[${y}-${m}-${d}]`)
  t.end()
})
