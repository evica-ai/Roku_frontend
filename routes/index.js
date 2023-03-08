const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const router = express.Router();

// by default, you cant access URLs that are different than your own (different origin points)  - this is a security feature (CORS)built into the Web. However, you CAN use an intermediary to "break into" or get access to other domains and do things like data retrieval, etc - think of this as a virtual "wipe card" that allows access. htp-proxy-middleware is the wipe card- its configured to allow access to an endpoint and let you use that domain. The target in this case is our back end Roku service (the database with all teh users) - we can retrieve them and show them in our UI with the middleware's access configured correctly.

router.use("/", createProxyMiddleware({
    target: 'http://localhost:5050',
    headers: {
        accept: "application/json, application/x-www-form-urlencoded"
    },
    changeOrigin: true
}))

module.exports = router;