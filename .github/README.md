# GitHub Actions Configuration

This directory contains CI/CD workflows for automated testing and reporting.

## Workflows

### 1. `playwright-tests.yml` - Main CI/CD Pipeline

**Triggers:**
- Push to `main` branch  
- Pull requests to `main` branch
- Manual dispatch

**Jobs:**
- **Test Execution**: Runs all test scenarios using Microsoft Docker image
- **GitHub Pages**: Publishes HTML reports to GitHub Pages

**Docker Image:** `mcr.microsoft.com/playwright:v1.46.1-noble`

### 2. `mixed-projects-demo.yml` - Mixed Projects Demo

**Triggers:**
- Manual dispatch only

**Purpose:** 
Focused workflow for demonstrating mixed projects scenario similar to client's setup.

## Setup Instructions

### 1. Repository Secrets

Add the following secret in your repository settings:

- `TESTOMATIO` - Your Testomat.io API key

### 2. GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Set source to **GitHub Actions**
3. Reports will be available at: `https://{username}.github.io/{repository}/`

### 3. Environment Variables

Both workflows support these environment variables:

- `TESTOMATIO` - API key for Testomat.io reporting (required)
- `GITHUB_TOKEN` - Automatically provided by GitHub Actions

## Report Access

After workflow completion:

- **GitHub Pages**: `https://{username}.github.io/{repository}/`
- **Workflow Artifacts**: Download from Actions tab
- **Testomat.io**: View live reports in your Testomat.io project

## Docker Benefits

Using Microsoft Docker image ensures:
- ✅ Consistent browser versions
- ✅ All dependencies pre-installed  
- ✅ Fast execution
- ✅ No browser installation needed