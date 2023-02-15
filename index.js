/* Your Code Here */

function createEmployeeRecord(arr) {
    let obj = {}
    obj.firstName = arr[0]
    obj.familyName = arr[1]
    obj.title = arr[2]
    obj.payPerHour = arr[3]
    obj.timeInEvents = []
    obj.timeOutEvents = []
    return obj

}

function createEmployeeRecords(arrOfArrays) {
    let newArr = []
    arrOfArrays.map(arr => newArr.push(createEmployeeRecord(arr)))
    return newArr
}


function createTimeInEvent(dateStamp) {
    let newObj = {}
    let hr = dateStamp.slice(10,)
    newObj.type = 'TimeIn'
    newObj.hour = parseInt(hr)
    newObj.date = dateStamp.slice(0,10)
    this.timeInEvents.push(newObj) 
    return this
}

function createTimeOutEvent(dateStamp) {
    let newObj = {}
    let hr = dateStamp.slice(10,)
    newObj.type = 'TimeOut'
    newObj.hour = parseInt(hr)
    newObj.date = dateStamp.slice(0,10)
    this.timeOutEvents.push(newObj) 
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let x
    for(let i = 0; i < this.timeInEvents.length; i ++) {
        if (this.timeInEvents[i].date === dateStamp) {
            x = i
        }
    }
    return (this.timeOutEvents[x].hour - this.timeInEvents[x].hour)/100
}

function wagesEarnedOnDate(dateStamp) {
    return hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, first) {
    return srcArray.find(function(rec){
        return rec.firstName === first
    })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

