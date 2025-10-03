# Playwright examples

This directory contains examples for Playwright. Run them with the following command:

### e2e tests only

```sh
npm run test:e2e-examples
yarn test:e2e-examples
```

### smoke tests only

```sh
npm run test:smoke-examples
yarn test:smoke-examples
```

### parallel/mixed tests (NEW)

```sh
npm run test:parallel-examples
yarn test:parallel-examples

# Alternative command
npm run test:mixed
yarn test:mixed
```

### all available tests

```sh
npm run test:e2e
yarn test:e2e
```

## Parallel Testing Configuration

The `playwright-parallel.config.ts` configuration enables:
- **Parallel execution** with 4 workers
- **Multi-browser testing** (Chromium and Firefox)
- **Enhanced reporting** with HTML reports and Testomatio integration
- **Retry logic** for flaky test handling
- **Local server integration** for comprehensive testing

### Test Structure

- `e2e-tests/` - Original E2E tests (sequential)
- `smoke-tests/` - Smoke tests (sequential)  
- `mixed-tests/` - NEW: Parallel test suite including:
  - `parallel-fast.spec.ts` - Quick tests for fast feedback
  - `parallel-slow.spec.ts` - Tests with delays to verify parallel execution
  - `parallel-browser.spec.ts` - Cross-browser compatibility tests
  - `parallel-local.spec.ts` - Tests using local server

### Reports

Parallel test runs generate separate HTML reports in `playwright-report-parallel/` directory.