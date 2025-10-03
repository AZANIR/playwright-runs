# Playwright Tests with TESTOMATIO Reporter

This repository demonstrates **mixed project runs** for testing Testomatio Reporter with parallel execution scenarios.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run different test scenarios
npm run test:e2e-examples          # E2E tests with local server
npm run test:smoke-examples        # Smoke tests
npm run test:parallel-examples     # Parallel workers + browsers  
npm run test:mixed-projects        # Mixed projects (like client)
```

## 📊 Test Scenarios

### 🎯 Mixed Projects (Client Scenario)
Simulates client's situation with **2 separate projects** in one run:
- `setup-core` → `core-api` tests (Business logic)
- `setup-clinic` → `clinic-api` tests (Medical operations)

### ⚡ Parallel Examples  
Tests with parallel workers and multiple browsers:
- 4 workers running simultaneously
- Chromium + Firefox browsers
- Different test timing for parallel demonstration

## 🔧 GitHub Actions

### Workflows:
- **Playwright Tests** - Full test suite with GitHub Pages deployment
- **Mixed Projects Demo** - Focused mixed projects testing

### Setup:
1. Add `TESTOMATIO` secret in repository settings
2. Enable GitHub Pages in repository settings
3. Workflows run automatically on push/PR

## 📈 Reports

- **Live Reports**: Available on GitHub Pages after workflow completion
- **Local Reports**: `npx playwright show-report [report-folder]`
- **Testomatio Integration**: Reports sent to Testomat.io with API key

## 🏗️ Structure

```
e2e-examples/
├── mixed-tests/           # Parallel workers tests
├── mixed-projects/        # Separate projects tests
│   ├── core-api/         # Core business logic
│   ├── clinic-api/       # Medical operations  
│   └── setups/           # Project setup tests
├── e2e-tests/            # Original E2E tests
└── smoke-tests/          # Smoke tests
```