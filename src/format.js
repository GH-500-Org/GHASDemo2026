"use strict";

function formatFinding(title, severity) {
  return `[${severity.toUpperCase()}] ${title}`;
}

module.exports = { formatFinding };
