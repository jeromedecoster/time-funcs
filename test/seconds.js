const fn = require('../seconds')
const mom = require('moment')
const test = require('tape')

function isNear(a, b) {
  if (a === b) return true
  return Math.abs(a - b) < 1.19209290e-7
}

function days(t, data) {
  var sec = mom.duration(data, 'days').asSeconds()
  t.equal(fn({days: data}), sec, `days: ${data} → sec: ${sec}`)
}

function hours(t, data) {
  var sec = mom.duration(data, 'hours').asSeconds()
  var result = fn({hours: data})
  var ok = isNear(result, sec)
  t.true(ok, `hours: ${data} → sec: ${sec}`)
}

function minutes(t, data) {
  var sec = mom.duration(data, 'minutes').asSeconds()
  var result = fn({minutes: data})
  var ok = isNear(result, sec)
  t.true(ok, `minutes: ${data} → sec: ${sec}`)
}

function seconds(t, data) {
  var sec = mom.duration(data, 'seconds').asSeconds()
  var result = fn({seconds: data})
  var ok = isNear(result, sec)
  t.true(ok, `seconds: ${data} → sec: ${sec}`)
}

function milliseconds(t, data) {
  var sec = mom.duration(data, 'milliseconds').asSeconds()
  var result = fn({milliseconds: data})
  var ok = isNear(result, sec)
  t.true(ok, `milliseconds: ${data} → sec: ${sec}`)
}

test('seconds single', function (t) {
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
  days(t, 1.1)
  days(t, 1.11)
  days(t, 1.111)
  days(t, 1.9)
  days(t, 2)
  days(t, 2.1)
  days(t, 50)
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
  seconds(t, 2.1)
  seconds(t, 59)
  seconds(t, 60)
  seconds(t, 61)
  seconds(t, 999)
  seconds(t, 1000)
  seconds(t, 1999)
  seconds(t, 2000)
  seconds(t, 60000000)
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
  milliseconds(t, 999)
  milliseconds(t, 500)
  milliseconds(t, 1000)
  milliseconds(t, 1999)
  milliseconds(t, 2000)
  milliseconds(t, 60000000)
  milliseconds(t, 0.000000001)
  milliseconds(t, 0.123456789)
  milliseconds(t, 123456789)
  t.end()
})

test('seconds multiple', function (t) {
  var o1 = {
    days: 0.1,
    hours: 0.1,
    minutes: 0.1,
    seconds: 0.1,
    milliseconds: 0.1
  }
  var tot = mom.duration(o1.days, 'days').asSeconds()
    + mom.duration(o1.hours, 'hours').asSeconds()
    + mom.duration(o1.minutes, 'minutes').asSeconds()
    + mom.duration(o1.seconds, 'seconds').asSeconds()
    + mom.duration(o1.milliseconds, 'milliseconds').asSeconds()
  t.equal(fn(o1), tot, `o1 = ${tot}`)

  var o2 = {
    days: 0.112,
    hours: 0.112,
    minutes: 0.112,
    seconds: 0.112,
    milliseconds: 0.112
  }
  var tot = mom.duration(o2.days, 'days').asSeconds()
    + mom.duration(o2.hours, 'hours').asSeconds()
    + mom.duration(o2.minutes, 'minutes').asSeconds()
    + mom.duration(o2.seconds, 'seconds').asSeconds()
    + mom.duration(o2.milliseconds, 'milliseconds').asSeconds()
  t.equal(fn(o2), tot, `o2 = ${tot}`)
  t.end()
})

test('seconds wrong value', function (t) {
  t.equal(fn(),          undefined, '()')
  t.equal(fn('a'),       undefined, 'a')
  t.equal(fn(/./),       undefined, '/./')
  t.equal(fn([]),        undefined, '[]')
  t.equal(fn(123),       undefined, '123')
  t.equal(fn(true),      undefined, 'true')
  t.equal(fn(false),     undefined, 'false')
  t.equal(fn(null),      undefined, 'null')
  t.equal(fn(undefined), undefined, 'undefined')
  t.equal(fn(NaN),       undefined, 'NaN')
  t.equal(fn(Math),      undefined, 'Math')
  t.equal(fn({}),        0,         '{}')
  t.equal(fn({days: 'a'}),       0, '{days:a}')
  t.equal(fn({days: /./}),       0, '{days:/./}')
  t.equal(fn({days: []}),        0, '{days:[]}')
  t.equal(fn({days: {}}),        0, '{days:{}}')
  t.equal(fn({days: true}),      0, '{days:true}')
  t.equal(fn({days: false}),     0, '{days:false}')
  t.equal(fn({days: null}),      0, '{days:null}')
  t.equal(fn({days: undefined}), 0, '{days:undefined}')
  t.equal(fn({days: NaN}),       0, '{days:NaN}')
  t.equal(fn({days: Math}),      0, '{days:Math}')
  t.equal(fn({days: -1}),        0, '{days:-1}')
  t.end()
})
