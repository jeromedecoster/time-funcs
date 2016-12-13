const fn = require('../milliseconds')
const mom = require('moment')
const test = require('tape')

// a mix of
// https://github.com/sindresorhus/float-equal/blob/master/index.js
// https://github.com/scijs/almost-equal/blob/master/almost_equal.js
function isNear(a, b) {
  if (a === b) return true
  return Math.abs(a - b) < 1.19209290e-7
}

// a mix of
// https://github.com/sindresorhus/float-equal/blob/master/index.js
// https://github.com/hnakamur/nearlyEqual.js/blob/master/nearlyEqual.js
// https://github.com/scijs/almost-equal/blob/master/almost_equal.js
function isNear2(a, b) {
  if (a === b) return true
  var diff = Math.abs(a - b)
  var t1 = diff < 1.19209290e-7
  var diff2 = diff / (Math.abs(a) + Math.abs(b))
  var t2 = diff2 < 1.19209290e-7
  return t1 || t2
}

function days(t, data) {
  // moment.js round too much with extreme values
  // (like 0.000000001 days to ms)
  // but, done in 2 steps is ok
  // (like 0.000000001 days to minutes to ms)
  var min = mom.duration(data, 'days').asMinutes()
  var ms = mom.duration(min, 'minutes').asMilliseconds()
  var result = fn({days: data})
  var ok = isNear(result, ms)
  t.true(ok, `days: ${data} → ms: ${ms} ${result}`)
}

function hours(t, data) {
  var ms = mom.duration(data, 'hours').asMilliseconds()
  var result = fn({hours: data})
  var ok = isNear(result, ms)
  t.true(ok, `hours: ${data} → ms: ${ms}`)
}

function minutes(t, data) {
  var ms = mom.duration(data, 'minutes').asMilliseconds()
  var result = fn({minutes: data})
  var ok = isNear(result, ms)
  t.true(ok, `minutes: ${data} → ms: ${ms}`)
}

function seconds(t, data) {
  var ms = mom.duration(data, 'seconds').asMilliseconds()
  var result = fn({seconds: data})
  var ok = isNear(result, ms)
  t.true(ok, `seconds: ${data} → ms: ${ms}`)
}

function milliseconds(t, data) {
  var ms = mom.duration(data, 'milliseconds').asMilliseconds()
  t.equal(fn({milliseconds: data}), ms, `milliseconds: ${data} → ms: ${ms}`)
}

test('milliseconds single', function (t) {
  t.equal(fn({}),   0, '{}')
  // days
  t.equal(fn({days: -0.1}),  0, 'days -0.1')
  days(t, 0)
  days(t, 0.1)
  days(t, 0.11)
  days(t, 0.111)
  days(t, 0.1111)
  days(t, 0.11111)
  days(t, 0.111111)
  days(t, 0.1111111)
  days(t, 0.11111111)
  days(t, 0.111111111)
  days(t, 0.112)
  days(t, 1)
  days(t, 1.111)
  days(t, 1.9)
  days(t, 2)
  days(t, 2.1)
  days(t, 50)
  days(t, 999)
  days(t, 0.000000001)
  days(t, 0.123456789)
  days(t, 123456789)

  // hours
  hours(t, 0)
  hours(t, 0.1)
  hours(t, 0.11)
  hours(t, 0.111)
  hours(t, 0.1111)
  hours(t, 0.11111)
  hours(t, 0.111111)
  hours(t, 0.1111111)
  hours(t, 0.11111111)
  hours(t, 0.111111111)
  hours(t, 0.112)
  hours(t, 1)
  hours(t, 1.1)
  hours(t, 1.11)
  hours(t, 1.111)
  hours(t, 1.9)
  hours(t, 2)
  hours(t, 2.1)
  hours(t, 23)
  hours(t, 24)
  hours(t, 25)
  hours(t, 0.000000001)
  hours(t, 0.123456789)
  hours(t, 123456789)

  // minutes
  minutes(t, 0)
  minutes(t, 0.1)
  minutes(t, 0.11)
  minutes(t, 0.111)
  minutes(t, 0.1111)
  minutes(t, 0.11111)
  minutes(t, 0.111111)
  minutes(t, 0.1111111)
  minutes(t, 0.11111111)
  minutes(t, 0.111111111)
  minutes(t, 0.112)
  minutes(t, 1)
  minutes(t, 1.1)
  minutes(t, 1.11)
  minutes(t, 1.111)
  minutes(t, 1.9)
  minutes(t, 2)
  minutes(t, 2.1)
  minutes(t, 59)
  minutes(t, 60)
  minutes(t, 61)
  minutes(t, 0.000000001)
  minutes(t, 0.123456789)
  minutes(t, 123456789)

  // seconds
  seconds(t, 0)
  seconds(t, 0.1)
  seconds(t, 0.11)
  seconds(t, 0.111)
  seconds(t, 0.1111)
  seconds(t, 0.11111)
  seconds(t, 0.111111)
  seconds(t, 0.1111111)
  seconds(t, 0.11111111)
  seconds(t, 0.111111111)
  seconds(t, 0.112)
  seconds(t, 1)
  seconds(t, 1.1)
  seconds(t, 1.11)
  seconds(t, 1.111)
  seconds(t, 1.9)
  seconds(t, 2)
  seconds(t, 999)
  seconds(t, 1000)
  seconds(t, 0.000000001)
  seconds(t, 0.123456789)
  seconds(t, 123456789)

  // milliseconds
  milliseconds(t, 0)
  milliseconds(t, 0.1)
  milliseconds(t, 0.11)
  milliseconds(t, 0.111)
  milliseconds(t, 0.1111)
  milliseconds(t, 0.11111)
  milliseconds(t, 0.111111)
  milliseconds(t, 0.1111111)
  milliseconds(t, 0.11111111)
  milliseconds(t, 0.111111111)
  milliseconds(t, 0.112)
  milliseconds(t, 1)
  milliseconds(t, 1.1)
  milliseconds(t, 1.11)
  milliseconds(t, 1.111)
  milliseconds(t, 1.9)
  milliseconds(t, 2)
  milliseconds(t, 2.1)
  milliseconds(t, 59)
  milliseconds(t, 60)
  milliseconds(t, 61)
  milliseconds(t, 0.000000001)
  milliseconds(t, 0.123456789)
  milliseconds(t, 123456789)
  t.end()
})

test('milliseconds multiple', function (t) {
  var o1 = {
    days: 0.1,
    hours: 0.1,
    minutes: 0.1,
    seconds: 0.1,
    milliseconds: 0.1
  }

  var tot = mom.duration(o1.days, 'days').asMilliseconds()
    + mom.duration(o1.hours, 'hours').asMilliseconds()
    + mom.duration(o1.minutes, 'minutes').asMilliseconds()
    + mom.duration(o1.seconds, 'seconds').asMilliseconds()
    + mom.duration(o1.milliseconds, 'milliseconds').asMilliseconds()
  t.equal(fn(o1), tot, `o1 = ${tot}`)

  var o2 = {
    days: 0.112,
    hours: 0.112,
    minutes: 0.112,
    seconds: 0.112,
    milliseconds: 0.112
  }

  var tot = mom.duration(o2.days, 'days').asMilliseconds()
    + mom.duration(o2.hours, 'hours').asMilliseconds()
    + mom.duration(o2.minutes, 'minutes').asMilliseconds()
    + mom.duration(o2.seconds, 'seconds').asMilliseconds()
    + mom.duration(o2.milliseconds, 'milliseconds').asMilliseconds()
  t.equal(fn(o2), tot, `o2 = ${tot}`)
  t.end()
})

test('milliseconds wrong value', function (t) {
  t.equal(fn(),          undefined)
  t.equal(fn('a'),       undefined)
  t.equal(fn(/./),       undefined)
  t.equal(fn(123),       undefined)
  t.equal(fn(true),      undefined)
  t.equal(fn(false),     undefined)
  t.equal(fn(null),      undefined)
  t.equal(fn(undefined), undefined)
  t.equal(fn(NaN),       undefined)
  t.equal(fn(Math),      undefined)
  t.equal(fn({days: 'a'}),       0)
  t.equal(fn({days: /./}),       0)
  t.equal(fn({days: true}),      0)
  t.equal(fn({days: false}),     0)
  t.equal(fn({days: null}),      0)
  t.equal(fn({days: undefined}), 0)
  t.equal(fn({days: NaN}),       0)
  t.equal(fn({days: Math}),      0)
  t.end()
})
