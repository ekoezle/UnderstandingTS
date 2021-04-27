console.log('Start');

let logged;

function sendAnalytics(data: string): void {
    logged = true;
}

sendAnalytics('test');

