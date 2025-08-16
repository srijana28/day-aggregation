function solution(D) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const orderedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    // Step 1: Aggregate sums by day
    const sums = {};
    for (const [dateStr, value] of Object.entries(D)) {
        const date = new Date(dateStr);
        const dayName = dayNames[date.getDay()];
        sums[dayName] = (sums[dayName] || 0) + value;
    }

    // Step 2: Prepare array (not object) for easy index manipulation
    const weekArr = orderedDays.map(day => (sums[day] !== undefined ? sums[day] : null));
    
  
    let i = 0;
    while (i < weekArr.length) {
        if (weekArr[i] === null) {
            // Find next non-null (right end of missing stretch)
            let j = i + 1;
            while (j < weekArr.length && weekArr[j] === null) j++;
            if (i === 0 || j === weekArr.length) break; 
            const left = weekArr[i - 1];
            const right = weekArr[j];
            const gap = j - i + 1;
            const step = (right - left) / gap;
            // Fill the missing days
            for (let k = i; k < j; k++)
                weekArr[k] = left + step * (k - i + 1);
            i = j;
        } else {
            i++;
        }
    }
    // Step 4: Build object back in correct format
    const result = {};
    orderedDays.forEach((d, idx) => result[d] = weekArr[idx]);
    return result;
}

module.exports = solution;
