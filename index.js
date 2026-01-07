// Solution of Problem-1

function reveredString(str) {
    return str.split("").reverse().join("")
}

reveredString("hello")


// Solution of Problem-2

function countVowels(str) {
    let vowelCount = 0;
    const vowels = "aeiouAEIOU"

    for (let i = 0; i <= str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++
        }
    }
    return vowelCount
}

countVowels("programming")


// Solution of Problem-3

function checkPalindrome(str) {
    let left = 0
    let right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }

    return true
}

checkPalindrome("madam")


// Solution of Problem-4

function findMaxNum(arr) {
    let maxNumber = arr[0]

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i]
        }
    }

    return maxNumber
}

findMaxNum([5, 1, 9, 3])


// Solution of Problem-5

function findDuplicate(arr) {
    let result = []

    for (let i = 0; i <= arr.length; i++) {
        let isDuplicate = false

        for (let x = 0; x <= result.length; x++) {
            if (arr[i] === result[x]) {
                isDuplicate = true
                break
            }
        }

        if (!isDuplicate) {
            result.push(arr[i])
        }
    }

    return result
}

findDuplicate([1, 2, 2, 3, 4, 4])


// Solution of Problem-6

function findTotal(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    return total
}

findTotal([1, 2, 3, 4])


// Solution of Problem-7

function findEvenNumbers(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

findEvenNumbers([1, 2, 3, 4, 5, 6])


// Solution of Problem-8

function capitalizeWords(str) {
    let strWords = str.split(" ")

    for (let i = 0; i < strWords.length; i++) {
        if (strWords[i].length > 0) {
            strWords[i] = strWords[i][0].toUpperCase() + strWords[i].slice(1);
        }
    }

    return strWords.join(" ")

}

capitalizeWords("hello world")


// Solution of Problem-9

function factorial(n) {
    if (n < 0) {
        return "Factorial not defined for negative numbers";
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result
}

factorial(4)


// Solution of Problem-10

function pingPong() {
    let result = [];

    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("PingPong");
        } else if (i % 3 === 0) {
            result.push("Ping");
        } else if (i % 5 === 0) {
            result.push("Pong");
        } else {
            result.push(i);
        }
    }

    return result
}

pingPong()