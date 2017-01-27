var getAccounts = "select accountname, balance from account";
function jkeGetAccounts() {
	return MFP.Server.invokeSQLStatement({
		preparedStatement : getAccounts,
		parameters : []
	});
}

var enterCheck = "insert into check(ID,AMOUNT,DATE,ACCOUNT,DESCRIPTION,USERNAME) values (?,?,?,?,?,?)";
function jkeEnterCheck(ID,AMOUNT,DATE,ACCOUNT,DESCRIPTION,USERNAME) {
	return MFP.Server.invokeSQLStatement({
		preparedStatement : enterCheck,
		parameters : [ID,AMOUNT,DATE,ACCOUNT,DESCRIPTION,USERNAME]
	});
} 

var getAllTransactions = "select * from (select 'check' as type, check.date, check.amount, check.description, check.account from check) UNION ALL (SELECT 'payment' as type, payment.date, payment.amount, payment.payee as account, payment.acctype as description from payment) ORDER BY date ASC";

/*
var mqlight = require("mqlight");

var client = mqlight.createClient({service: 'http://mqlightprod-lookup.ng.bluemix.net/Lookup?serviceId=c0c99518-2fdc-4ece-9b33-6db58e284403&tls=true', user: '3EeqFrBVPcbq', password: 'xpSFQCZq7w(%'});
*/


function jkeGetAllTransactions() {
    /*
    client.on('started', function() {
              client.subscribe('test', function(err, pattern) {
                               if (err) {
                               console.error('Problem with subscribe request: ', err.message);
                               } else {
                               console.log('Subscribed to pattern: ', pattern);
                               console.log('Sending message : Hello World!');
                               client.send('test', 'Hello World!');
                               }
                               });
              
              client.on('message', function(data, delivery) {
                        console.log('Got message: ', data);
                        console.log('Exiting.');
                        process.exit(0);
                        });
              });
    */
    //var foo = new com.elong.javacode.MQLightTest();
    //foo.sendMessageToMQLight();
    
    return MFP.Server.invokeSQLStatement({
		preparedStatement : getAllTransactions,
		parameters : []
	});
    
    
    
}

var getPayees = "select name from payee";
function jkeGetPayees() {
    return MFP.Server.invokeSQLStatement({
        preparedStatement : getPayees,
        parameters : []
    });
}