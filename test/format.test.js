"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");
const { formatFinding } = require("../src/format");

test("formats a finding for the quality workflow", () => {
  assert.equal(formatFinding("SQL injection", "high"), "[HIGH] SQL injection");
});
