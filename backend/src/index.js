"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
// Middleware to handle JSON
app.use((0, cors_1.default)());
// Simple Endpoint
app.get("/test", (_, res) => {
    res.send("Hi from backend!");
    console.log("Endpoint got hit");
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
