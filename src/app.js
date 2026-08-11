"use strict";

const { exec } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const express = require("express");
const mysql = require("mysql2");

const app = express();
const db = mysql.createConnection({
  host: "localhost",
  user: "demo",
  password: "training-only-password",
  database: "ghas_demo"
});

// These routes are intentionally unsafe so CodeQL has clear data-flow findings.
app.get("/hello", (req, res) => {
  res.send(`<h1>Hello ${req.query.name}</h1>`);
});

app.get("/users", (req, res) => {
  const query = `SELECT id, name FROM users WHERE name = '${req.query.name}'`;
  db.query(query, (error, rows) => {
    if (error) {
      res.status(500).send(error.message);
      return;
    }
    res.json(rows);
  });
});

app.get("/diagnostics", (req, res) => {
  exec(`nslookup ${req.query.host}`, (error, stdout) => {
    if (error) {
      res.status(500).send(error.message);
      return;
    }
    res.type("text/plain").send(stdout);
  });
});

app.get("/files", (req, res) => {
  const requestedPath = path.join(__dirname, "public", req.query.name);
  fs.readFile(requestedPath, "utf8", (error, contents) => {
    if (error) {
      res.status(404).send("File not found");
      return;
    }
    res.type("text/plain").send(contents);
  });
});

app.get("/continue", (req, res) => {
  res.redirect(req.query.url);
});

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Intentionally vulnerable GHAS demo listening on port 3000");
  });
}

module.exports = app;
