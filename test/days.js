const fn = require('../days')
const mom = require('moment')
const test = require('tape')

function isNear(a, b) {
  if (a === b) return true
  return Math.abs(a - b) < 1.19209290e-7
}

function days(t, data) {
  var day = mom.duration(data, 'days').asDays()
  t.equal(fn({days: data}), day, `days: ${data} → day: ${day}`)
}

function hours(t, data) {
  var day = mom.duration(data, 'hours').asDays()
  var result = fn({hours: data})
  var ok = isNear(result, day)
  t.true(ok, `hours: ${data} → day: ${day}`)
}

function minutes(t, data) {
  var day = mom.duration(data, 'minutes').asDays()
  var result = fn({minutes: data})
  var ok = isNear(result, day)
  t.true(ok, `minutes: ${data} → day: ${day}`)
}

function seconds(t, data) {
  var day = mom.duration(data, 'seconds').asDays()
  var result = fn({seconds: data})
  var ok = isNear(result, day)
  t.true(ok, `seconds: ${data} → day: ${day}`)
}

function milliseconds(t, data) {
  var ms = mom.duration(data, 'milliseconds').asDays()
  t.equal(fn({milliseconds: data}), ms, `milliseconds: ${data} → ms: ${ms}`)
}

test('days single', function (t) {
  t.equal(fn({}),   0)

  // days
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
  hours(t, 12)
  hours(t, 50)
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
  minutes(t, 50)
  minutes(t, 60)
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
  seconds(t, 50)
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
  milliseconds(t, 50)
  milliseconds(t, 0.000000001)
  milliseconds(t, 0.123456789)
  milliseconds(t, 123456789)
  t.end()
})

test('days multiple', function (t) {
  var o1 = {
    days: 0.1,
    hours: 0.1,
    minutes: 0.1,
    seconds: 0.1,
    milliseconds: 0.1
  }
  var tot = mom.duration(o1.days, 'days').asDays()
    + mom.duration(o1.hours, 'hours').asDays()
    + mom.duration(o1.minutes, 'minutes').asDays()
    + mom.duration(o1.seconds, 'seconds').asDays()
    + mom.duration(o1.milliseconds, 'milliseconds').asDays()
  t.equal(fn(o1), tot, `o1 = ${tot}`)

  var o2 = {
    days: 0.112,
    hours: 0.112,
    minutes: 0.112,
    seconds: 0.112,
    milliseconds: 0.112
  }
  var tot = mom.duration(o2.days, 'days').asDays()
    + mom.duration(o2.hours, 'hours').asDays()
    + mom.duration(o2.minutes, 'minutes').asDays()
    + mom.duration(o2.seconds, 'seconds').asDays()
    + mom.duration(o2.milliseconds, 'milliseconds').asDays()
  t.equal(fn(o2), tot, `o2 = ${tot}`)
  t.end()
})

test('days wrong value', function (t) {
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
