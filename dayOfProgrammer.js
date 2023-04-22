function dayOfProgrammer(year) {
    // transition from julian to gregorian calendar
    if (year === 1918) {
        // On the on feb 1918 for russia, there were 15 days in the calendar.
        // so 256-(31 + 15 + 31 + 30 + 31 + 30 + 31 + 31) = 26.
        return '26.09.1918';
    }

    // julian or gregorian calendar  
    if (year <= 1917 || year >= 1919) {
        let leapYear;
        
        if (year <= 1917) {
            // julian: leap years divisible by 4.
            leapYear = year % 4 === 0;
        } else if (year >= 1919) {
            // gregorian: leap years divisible by 400 or (divisible by 4 and not divisible by 100)
            leapYear = (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0));
        }

        // leap year: 256-(31 + 29 + 31 + 30 + 31 + 30 + 31 + 31) = 12
        // non leap year: 256-(31 + 28 + 31 + 30 + 31 + 30 + 31 + 31) = 13
        return (leapYear) ? `12.09.${year}` : `13.09.${year}`;
    }
}