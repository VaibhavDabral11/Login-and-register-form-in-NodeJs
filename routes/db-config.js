var dotenv = require("dotenv").config();
var PrismaClient = require('@prisma/client').PrismaClient;
var prisma = new PrismaClient();
var express = require('express');
var mysql = require('mysql');
var app = express()
app.use(express.json())


const con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.PORT,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})
module.exports = con