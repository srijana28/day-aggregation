const solution = require('./solution');

function runTests() {
    const testCases = [
        {
            name: "Example 1",
            input: {
                '2020-01-01': 4,
                '2020-01-02': 4,
                '2020-01-03': 6,
                '2020-01-04': 8,
                '2020-01-05': 2,
                '2020-01-06': -6,
                '2020-01-07': 2,
                '2020-01-08': -2
            },
            expected: { 'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 }
        },
        {
            name: "Example 2 - Missing Days",
            input: {
                '2020-01-01': 6,
                '2020-01-04': 12,
                '2020-01-05': 14,
                '2020-01-06': 2,
                '2020-01-07': 4
            },
            expected: { 'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 8, 'Fri': 10, 'Sat': 12, 'Sun': 14 }
        }
    ];

    testCases.forEach(({ name, input, expected }, idx) => {
        const result = solution(input);
        const pass = JSON.stringify(result) === JSON.stringify(expected);
        console.log(`Test ${idx + 1} (${name}): ${pass ? 'PASS ' : 'FAIL '}`);
        if (!pass) {
            console.log('Expected:', expected);
            console.log('Got:', result);
        }
    });
}

runTests();
