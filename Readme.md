# Day Aggregation

A small Node.js utility that aggregates values by day of the week from a set of dated inputs, and fills in missing days using **linear interpolation**.  

## 📌 Features
- Aggregates values into weekday buckets (`Mon` → `Sun`).
- Handles multiple dates per weekday (sums them up).
- Fills missing weekdays with interpolated values between known ones.
- Includes test cases for validation.

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
npm install
```
## Running Tests 
```bash
npm test
```

Example output:
```bash
Test 1 (Example 1): PASS 
Test 2 (Example 2 - Missing Days): PASS
```

## 📂 Project Structure
```bash
├── solution.js   # Core aggregation + interpolation logic
├── test.js       # Test runner with sample cases
├── package.json  # Project metadata & scripts
```

## ⚖️ License

This project is licensed under the ISC License.
