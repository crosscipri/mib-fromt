const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://207.180.235.56:8081",
        secure: true,
        logLevel: "debug",
        changeOrigin: true
    }
];

module.exports = PROXY_CONFIG;