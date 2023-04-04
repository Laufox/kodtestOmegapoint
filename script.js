// Fetch a text file from url and return its content
const getFileContent = async (fileUrl) => {
    const file = await fetch(fileUrl)

    const content = await file.text()
    return content
}

/**
 *  
 **  TASK 01
 * 
 */

const taskOne = async () => {
    // Get all results from textfile
    const series01 = await getFileContent('https://waldemarsson.github.io/ceo-bowling-kata/series01.txt')

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Calculate sum of each person score
    const results = arrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length - 1)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum
        }
    })

    // Find winner by sorting the manipulated array after sum of each person
    const winner = results.sort((a, b) => {
        return b.sum - a.sum
    })[0]

    // Announce winner!
    console.log("The winner of task one is: ", winner.name, " with ", winner.sum, " points ")
}

taskOne()







/**
 *  
 **  TASK 02
 * 
 */

const taskTwo = async () => {
    // Get all results from textfile
    const series01 = await getFileContent('https://waldemarsson.github.io/ceo-bowling-kata/series02.txt')

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Calculate sum of each person score
    const results = arrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length - 1)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Variables to be totalt value of strikes and spares
        let sumOfStrikes = 0
        let sumOfSpares = 0

        // Index in numbers array to check from in each loop
        let index = 0
        while(index < numbers.length) {

            // If number at current index is ten, add to strike score and jump to next array index for next iteration
            if(Number(numbers[index]) === 10) {
                sumOfStrikes+=10
                index +=1
                continue
            // If number at current index and number at next index equal ten, add to spare score
            } else if (Number(numbers[index]) + Number(numbers[index + 1]) === 10) {
                sumOfSpares+=5
            }
            // Jump two index steps for next iteration
            index +=2
        }

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum: sum + sumOfStrikes + sumOfSpares
        }
    })

    // Find winner by sorting the manipulated array after sum of each person
    const winner = results.sort((a, b) => {
        return b.sum - a.sum
    })[0]

    // Announce winner!
    console.log("The winner of task two is: ", winner.name, " with ", winner.sum, " points ")
}

taskTwo()







/**
 *  
 **  TASK 03
 * 
 */

const taskThree = async () => {
    // Get all results from textfile
    const series01 = await getFileContent('https://waldemarsson.github.io/ceo-bowling-kata/series03.txt')

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Removes last row since it is empty
    const newArrayOfSeries = arrayOfSeries.slice(0, arrayOfSeries.length - 1)

    // Calculate sum of each person score
    const results = newArrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Variables to be totalt value of strikes and spares
        let sumOfStrikes = 0
        let sumOfSpares = 0

        // Variables to know amount of strikes and spares
        let numberOfStrikes = 0
        let numberOfSpares = 0

        // Index in numbers array to check from in each loop
        let index = 0
        while(index < numbers.length) {
            // If number at current index is ten, add to strike score and jump to next array index for next iteration
            if(Number(numbers[index]) === 10) {
                sumOfStrikes+=(10 + numberOfStrikes * 2)
                numberOfStrikes++
                index +=1
                continue
            // If number at current index and number at next index equal ten, add to spare score
            } else if (Number(numbers[index]) + Number(numbers[index + 1]) === 10) {
                sumOfSpares+=(5 + numberOfSpares)
                numberOfSpares++
            }
            index +=2
        }

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum: sum + sumOfStrikes + sumOfSpares
        }
    })

    // Find winner by sorting the manipulated array after sum of each person
    const winner = results.sort((a, b) => {
        return b.sum - a.sum
    })[0]

    // Announce winner!
    console.log("The winner of task three is: ", winner.name, " with ", winner.sum, " points ")
}

taskThree()







/**
 *  
 **  TASK 04
 * 
 */

const taskFour = async () => {
    // Get all results from textfile
    const series01 = await getFileContent('https://waldemarsson.github.io/ceo-bowling-kata/series04.txt')

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Removes last row since it is empty
    const newArrayOfSeries = arrayOfSeries.slice(0, arrayOfSeries.length - 1)

    // Calculate sum of each person score
    const results = newArrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Variables to be totalt value of strikes and spares
        let sumOfStrikes = 0
        let sumOfSpares = 0

        // Index in numbers array to check from in each loop
        let index = 0
        // console.log("Time for ", name)
        while(index < numbers.length) {
            // If number at current index is ten, add to strike score and jump to next array index for next iteration
            if(Number(numbers[index]) === 10) {
                // Calculate bonus points for strike by adding the next two throws. If end of numbers array is reached, add zero instead
                const bonusPoints = ( !isNaN(Number(numbers[index + 1])) ? Number(numbers[index + 1]) : 0 ) + ( !isNaN(Number(numbers[index + 2])) ? Number(numbers[index + 2]) : 0 )
                sumOfStrikes+=bonusPoints
                index +=1
                continue
            // If number at current index and number at next index equal ten, add to spare score
            } else if (Number(numbers[index]) + Number(numbers[index + 1]) === 10) {
                const bonusPoints = !isNaN(Number(numbers[index + 2])) ? Number(numbers[index + 2]) : 0
                sumOfSpares+=bonusPoints
            }
            index +=2
        }

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum: sum + sumOfStrikes + sumOfSpares
        }
    })

    // Find winner by sorting the manipulated array after sum of each person
    const winner = results.sort((a, b) => {
        return b.sum - a.sum
    })[0]

    // Announce winner!
    console.log("The winner of task four is: ", winner.name, " with ", winner.sum, " points ")
}

taskFour()







/**
 *  
 **  TASK 05
 * 
 */

 const resultsFirstRules = async (url) => {
    // Get all results from textfile
    const series01 = await getFileContent(url)

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Removes last row since it is empty
    const newArrayOfSeries = arrayOfSeries.slice(0, arrayOfSeries.length - 1)

    // Calculate sum of each person score
    const results = newArrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length - 1)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum
        }
    })

    return results
}

const resultsSecondRules = async (url) => {
    // Get all results from textfile
    const series01 = await getFileContent(url)

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Removes last row since it is empty
    const newArrayOfSeries = arrayOfSeries.slice(0, arrayOfSeries.length - 1)

    // Calculate sum of each person score
    const results = newArrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length - 1)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Variables to be totalt value of strikes and spares
        let sumOfStrikes = 0
        let sumOfSpares = 0

        // Index in numbers array to check from in each loop
        let index = 0
        while(index < numbers.length) {

            // If number at current index is ten, add to strike score and jump to next array index for next iteration
            if(Number(numbers[index]) === 10) {
                sumOfStrikes+=10
                index +=1
                continue
            // If number at current index and number at next index equal ten, add to spare score
            } else if (Number(numbers[index]) + Number(numbers[index + 1]) === 10) {
                sumOfSpares+=5
            }
            // Jump two index steps for next iteration
            index +=2
        }

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum: sum + sumOfStrikes + sumOfSpares
        }
    })

    return results
}

const resultsThirdRules = async (url) => {

    // Get all results from textfile
    const series01 = await getFileContent(url)

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Removes last row since it is empty
    const newArrayOfSeries = arrayOfSeries.slice(0, arrayOfSeries.length - 1)

    // Calculate sum of each person score
    const results = newArrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Variables to be totalt value of strikes and spares
        let sumOfStrikes = 0
        let sumOfSpares = 0

        // Variables to know amount of strikes and spares
        let numberOfStrikes = 0
        let numberOfSpares = 0

        // Index in numbers array to check from in each loop
        let index = 0
        while(index < numbers.length) {
            // If number at current index is ten, add to strike score and jump to next array index for next iteration
            if(Number(numbers[index]) === 10) {
                sumOfStrikes+=(10 + numberOfStrikes * 2)
                numberOfStrikes++
                index +=1
                continue
            // If number at current index and number at next index equal ten, add to spare score
            } else if (Number(numbers[index]) + Number(numbers[index + 1]) === 10) {
                sumOfSpares+=(5 + numberOfSpares)
                numberOfSpares++
            }
            index +=2
        }

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum: sum + sumOfStrikes + sumOfSpares
        }
    })

    return results

}

const resultsFourthRules = async (url) => {
    // Get all results from textfile
    const series01 = await getFileContent(url)

    // Create array of each row of results
    const arrayOfSeries = series01.split('\n')

    // Removes last row since it is empty
    const newArrayOfSeries = arrayOfSeries.slice(0, arrayOfSeries.length - 1)

    // Calculate sum of each person score
    const results = newArrayOfSeries.map(r => {
        // Create array by splitting row on each space
        const allSplit = r.split(' ')

        // Find first element in array that is not a number, to know which elements is part of the name
        const indexOfFirstNumber = allSplit.findIndex(p => !isNaN(Number(p)))

        // Take out name parts of array and join it to a string
        const name = allSplit.slice(0, indexOfFirstNumber).join(' ')

        // Create array with only the numbers
        const numbers = allSplit.slice(indexOfFirstNumber, allSplit.length)

        // Calculate sum of all numbers
        const sum = numbers.reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0)

        // Variables to be totalt value of strikes and spares
        let sumOfStrikes = 0
        let sumOfSpares = 0

        // Index in numbers array to check from in each loop
        let index = 0
        while(index < numbers.length) {
            // If number at current index is ten, add to strike score and jump to next array index for next iteration
            if(Number(numbers[index]) === 10) {
                // Calculate bonus points for strike by adding the next two throws. If end of numbers array is reached, add zero instead
                const bonusPoints = ( !isNaN(Number(numbers[index + 1])) ? Number(numbers[index + 1]) : 0 ) + ( !isNaN(Number(numbers[index + 2])) ? Number(numbers[index + 2]) : 0 )
                sumOfStrikes+=bonusPoints
                index +=1
                continue
            // If number at current index and number at next index equal ten, add to spare score
            } else if (Number(numbers[index]) + Number(numbers[index + 1]) === 10) {
                const bonusPoints = !isNaN(Number(numbers[index + 2])) ? Number(numbers[index + 2]) : 0
                sumOfSpares+=bonusPoints
            }
            index +=2
        }

        // Construct an object with name and sum and return that as the element
        return {
            name,
            sum: sum + sumOfStrikes + sumOfSpares
        }
    })

    return results
}

const taskFive = async () => {

    // Get result for each round

    const roundOneScore = await resultsFirstRules('https://waldemarsson.github.io/ceo-bowling-kata/series01.txt')
    const roundTwoScore = await resultsSecondRules('https://waldemarsson.github.io/ceo-bowling-kata/series02.txt')
    const roundThreeScore = await resultsThirdRules('https://waldemarsson.github.io/ceo-bowling-kata/series03.txt')
    const roundFourScore = await resultsFourthRules('https://waldemarsson.github.io/ceo-bowling-kata/series04.txt')

    // Add the sum of each round to a total
    const sumArray = roundFourScore.map((r, i) => {
        return {
            name: r.name,
            sum: r.sum + roundOneScore[i].sum + roundTwoScore[i].sum + roundThreeScore[i].sum
        }
    })

    // Find winner by sorting the manipulated array after sum of each person
    const winner = sumArray.sort((a, b) => {
        return b.sum - a.sum
    })[0]

    // Announce winner!
    console.log("The winner of task five is: ", winner.name, " with ", winner.sum, " points ")
}

taskFive()