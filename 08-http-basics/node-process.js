// node index.js
// Node Process Start


const shouldContinue = () => {
    let pendingTimersTask = [];
    let pendingIOTask =[];
    let pendingAsyncTask = []

    return pendingAsyncTask.length || pendingIOTask.length || pendingTimersTask.length
}

while(shouldContinue){            // One Tick

    // node accepts the async task result
    // prepares the response
    // triggers any async task

}


// Node Process Completed