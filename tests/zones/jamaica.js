"use strict";

var helpers = require("../helpers/helpers");

exports["Jamaica"] = {

	"guess:by:offset" : helpers.makeTestGuess("Jamaica", { offset: true, expect: "Etc/GMT+5" }),

	"guess:by:abbr" : helpers.makeTestGuess("Jamaica", { abbr: true, expect: "EST" }),

	"1912" : helpers.makeTestYear("Jamaica", [
		["1912-02-01T05:07:09+00:00", "23:59:59", "KMT", 18430 / 60],
		["1912-02-01T05:07:10+00:00", "00:07:10", "EST", 300]
	]),

	"1974" : helpers.makeTestYear("Jamaica", [
		["1974-01-06T06:59:59+00:00", "01:59:59", "EST", 300],
		["1974-01-06T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1974-10-27T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1974-10-27T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1975" : helpers.makeTestYear("Jamaica", [
		["1975-02-23T06:59:59+00:00", "01:59:59", "EST", 300],
		["1975-02-23T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1975-10-26T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1975-10-26T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1976" : helpers.makeTestYear("Jamaica", [
		["1976-04-25T06:59:59+00:00", "01:59:59", "EST", 300],
		["1976-04-25T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1976-10-31T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1976-10-31T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1977" : helpers.makeTestYear("Jamaica", [
		["1977-04-24T06:59:59+00:00", "01:59:59", "EST", 300],
		["1977-04-24T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1977-10-30T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1977-10-30T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1978" : helpers.makeTestYear("Jamaica", [
		["1978-04-30T06:59:59+00:00", "01:59:59", "EST", 300],
		["1978-04-30T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1978-10-29T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1978-10-29T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1979" : helpers.makeTestYear("Jamaica", [
		["1979-04-29T06:59:59+00:00", "01:59:59", "EST", 300],
		["1979-04-29T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1979-10-28T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1979-10-28T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1980" : helpers.makeTestYear("Jamaica", [
		["1980-04-27T06:59:59+00:00", "01:59:59", "EST", 300],
		["1980-04-27T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1980-10-26T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1980-10-26T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1981" : helpers.makeTestYear("Jamaica", [
		["1981-04-26T06:59:59+00:00", "01:59:59", "EST", 300],
		["1981-04-26T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1981-10-25T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1981-10-25T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1982" : helpers.makeTestYear("Jamaica", [
		["1982-04-25T06:59:59+00:00", "01:59:59", "EST", 300],
		["1982-04-25T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1982-10-31T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1982-10-31T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1983" : helpers.makeTestYear("Jamaica", [
		["1983-04-24T06:59:59+00:00", "01:59:59", "EST", 300],
		["1983-04-24T07:00:00+00:00", "03:00:00", "EDT", 240],
		["1983-10-30T05:59:59+00:00", "01:59:59", "EDT", 240],
		["1983-10-30T06:00:00+00:00", "01:00:00", "EST", 300]
	])
};