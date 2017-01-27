/*
 *    Licensed Materials - Property of IBM
 *    5725-I43 (C) Copyright IBM Corp. 2015. All Rights Reserved.
 *    US Government Users Restricted Rights - Use, duplication or
 *    disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

package com.elong.javacode;;

import com.ibm.mqlight.api.ClientException;
import com.ibm.mqlight.api.ClientOptions;
import com.ibm.mqlight.api.ClientOptions.ClientOptionsBuilder;
import com.ibm.mqlight.api.CompletionListener;
import com.ibm.mqlight.api.NonBlockingClient;
import com.ibm.mqlight.api.NonBlockingClientAdapter;
import com.ibm.mqlight.api.QOS;
import com.ibm.mqlight.api.SendOptions;
import com.ibm.mqlight.api.SendOptions.SendOptionsBuilder;

public class MQLightTest {
    
    ClientOptions opts = ClientOptions.builder().setId("nativeios_sqldb_adapter").setCredentials("3EeqFrBVPcbq", "xpSFQCZq7w(%").build();
    
    public void sendMessageToMQLight(){
        NonBlockingClient.create("amqps://mqlightprod-ag-00008b.services.dal.bluemix.net:2884", opts , new NonBlockingClientAdapter<Void>() {
            public void onStarted(NonBlockingClient client, Void context) {
                client.send("test", "sent from NativeiosAdapterSQLDB", null);
            }
        }, null);
    }
}
