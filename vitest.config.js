"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true,
        environment: 'node',
        include: ['src/test/**/*.test.ts'],
        coverage: {
            reporter: ['text', 'json', 'html'],
            threshold: {
                global: {
                    branches: 80,
                    functions: 80,
                    lines: 80,
                    statements: 80
                }
            }
        }
    }
});
//# sourceMappingURL=vitest.config.js.map