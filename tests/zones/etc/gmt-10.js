"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-10"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-10", { offset: true, expect: "Pacific/Port_Moresby" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-10", { abbr: true, expect: "Pacific/Port_Moresby" }),


};