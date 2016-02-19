if (typeof flotController == "undefined") {
    flotController = {};
}

flotController = function() {
    this.init();
};


flotController.prototype = {
    init: function() {

    },
        
    renderCoreGraph : function(start, end, webVisits, ticketSales){
	    var callback = this.successCallbackWVTS;
	     $("#WVTSForm").submit(function(e) {
            e.preventDefault();
            callback($("#WVTSstartDate").val(), $("#WVTSendDate").val(), webVisits,ticketSales);
        });

	    this.successCallbackWVTS(start, end, webVisits, ticketSales);
    },
    
    successCallbackWVTS : function(start, end, data, ticketSales) {
        
       
		var returnData = [];
        var processedTickets = [];


        for(var i=0; i<data.length; i++){
	        item = data[i];
	        var newDate = getDate(item.date);
	        var dateArray = [newDate, parseInt(item.websiteVisits)];
	        returnData.push(dateArray);
        }
        
        for(var i=0; i<ticketSales.length; i++){
	        item = ticketSales[i];
	        var newDate = getDate(item.dateToday);
	        var dateArray = [newDate, parseInt(item.todayGross)];
	        processedTickets.push(dateArray);
        }
        
        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0; 
            } else {
                return (a[0] < b[0]) ? -1 : 1;
            }
                
        }
        function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
        
        processedTickets.sort(sortFunction);
        
        var finalVisits = [];
        var finalTickets = [];
        

        if (start == null || start == ''){
            finalVisits = returnData ;
            finalTickets = processedTickets;
        } else {
			var startSplit = start.split("/");
			var endSplit = end.split("/");
			for (i=0;i<returnData.length;i++){
           		var item = returnData[i];
		   		var tempDate = item[0];
		   		if ((tempDate >= gd(startSplit[2], startSplit[0], startSplit[1])) && (tempDate <= gd(endSplit[2], endSplit[0], endSplit[1]))){
                	finalVisits.push(item);
            	}
            } 
            for (i=0; i<processedTickets.length; i++){
	            var item = processedTickets[i];
		   		var tempDate = item[0];
		   		if ((tempDate >= gd(startSplit[2], startSplit[0], startSplit[1])) && (tempDate <= gd(endSplit[2], endSplit[0], endSplit[1]))){
                	finalTickets.push(item);
            	}
            }
        }

        
        
        function getDate(date) {
			var splitDate = date.split("/");
			var year = "20"+splitDate[2];
			return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
         
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        var ticketTicks = [];
        for (var i = 0; i<finalTickets.length; i++){
	        tick = finalTickets[i][0];
	        ticketTicks.push(tick);
        }
        
        var data = [{
            label: "Website Visits",
            data: finalVisits,
            yaxis: 2,
            bars: {
                show: true,
                align: "center",
                'barWidth': 24*60*60*100
            }
        },{
            label: "Ticket Gross",
            data: finalTickets,
            
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        
        var options = {
	        	axisLabels: {
		        	show: true
	        	},
                xaxis: {
                    align: "center",
                    mode: "time",
                    timeformat: "%m-%d-%y",
                    ticks: ticketTicks
                },
                xaxes: [
                	{axisLabel: "Date"}
	                ],
                yaxes: [
                    {position:"left",
	                 axisLabel:"Ticket Gross (in $)"
                    },
                    {position:"right",
	                 axisLabel:"Website Visits"
                    }
                    ],
                grid:{
                  hoverable: true,
                    backgroundColor: "#ffffff"
                },
              tooltip: true,
              tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                     if (label == "Website Visits"){
                    	var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Website Visits: ' + y.toLocaleString() + '</li></ul>';
                    } else {
	                    var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Gross Income: $' + y.toLocaleString() + '</li></ul>';
                    }
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
 
        var plot = $.plot($("#visits-sales #flotcontainer"), data, options);  
    }, 
    
    //RENDER WEB VISITS/TICKET SALES/COMMERCIAL SPEND
    renderWVTSMS : function(start, end, webVisits, ticketSales, comSpend){
	    var callback = this.successCallbackWVTSMS;
	     $("#WVTSMSForm").submit(function(e) {
            e.preventDefault();
            console.log($("#WVTSMSstartDate").val(), $("#WVTSMSendDate").val());
           // $('#visits-sales').html('');
            callback($("#WVTSMSstartDate").val(), $("#WVTSMSendDate").val(), webVisits,ticketSales, comSpend);
        });

	    this.successCallbackWVTSMS(start, end, webVisits, ticketSales, comSpend);
    },
    
    successCallbackWVTSMS : function(start, end, webVisits, ticketSales, comSpend) {

		var returnData = [];
        var processedTickets = [];

		
        for(var i=0; i<webVisits.length; i++){
	        item = webVisits[i];
	        var newDate = getDate(item.date);
	        var dateArray = [newDate, parseInt(item.websiteVisits)];
	        returnData.push(dateArray);
        }
        
        for(var i=0; i<ticketSales.length; i++){
	        item = ticketSales[i];
	        var newDate = getDate(item.dateToday);
	        var dateArray = [newDate, parseInt(item.todayGross)];
	        processedTickets.push(dateArray);
        }
        
        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0; 
            } else {
                return (a[0] < b[0]) ? -1 : 1;
            }
                
        }
        function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
        
        processedTickets.sort(sortFunction);
        
        function getDates( d1, d2 ){
			var oneDay = 24*3600*1000;
			for (var d=[],ms=d1*1,last=d2*1;ms<last;ms+=oneDay){
				d.push( new Date(ms) );
  			}
  			d.push(d2);
  			return d;
		}
        
        var spend = [];
        var trackSpend = [];
        var dateList = [];
        
        var lastEndDate = comSpend[0].endDate;
        for (var i = 0; i < comSpend.length; i++){
	        var item = comSpend[i];
	        trackSpend.push([getDates(new Date(getDateIBDB(item.startDate)), new Date(getDateIBDB(item.endDate))), item.name, item.total]);
	        
        }
        
        for (var i = 0; i < trackSpend.length; i++){
	        var item = trackSpend[i];
	        var dateArray = item[0];
	        var dailySpend = parseInt(item[2]/dateArray.length);
	        for (var j = 0; j < dateArray.length; j++){
		        spend.push([dateArray[j],dailySpend]);
		        dateList.push(dateArray[j]);
	        }
        }
        
        dateList.sort(sortFunction);
        
        var finalVisits = [];
        var finalTickets = [];
        var finalSpend = [];

        if (start == null || start == ''){
            finalVisits = returnData ;
            finalTickets = processedTickets;
            finalSpend = spend;
        } else {
			var startSplit = start.split("/");
			var endSplit = end.split("/");
			for (i=0;i<returnData.length;i++){
           		var item = returnData[i];
		   		var tempDate = item[0];
		   		if ((tempDate >= gd(startSplit[2], startSplit[0], startSplit[1])) && (tempDate <= gd(endSplit[2], endSplit[0], endSplit[1]))){
	            //console.log(item);
                	finalVisits.push(item);
            	}
            } 
            for (i=0; i<processedTickets.length; i++){
	            var item = processedTickets[i];
		   		var tempDate = item[0];
		   		if ((tempDate >= gd(startSplit[2], startSplit[0], startSplit[1])) && (tempDate <= gd(endSplit[2], endSplit[0], endSplit[1]))){

                	finalTickets.push(item);
            	}
            }
			for (i=0; i<spend.length; i++){
	            var item = spend[i];
		   		var tempDate = item[0];
		   		if ((tempDate >= gd(startSplit[2], startSplit[0], startSplit[1])) && (tempDate <= gd(endSplit[2], endSplit[0], endSplit[1]))){

                	finalSpend.push(item);
            	}
            }
        }
		
		finalSpend.sort(sortFunction)
        
        
        function getDate(date) {
			var splitDate = date.split("/");
			var year = "20"+splitDate[2];
			return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
         
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        var ticketTicks = [];
        for (var i = 0; i<finalTickets.length; i++){
	        tick = finalTickets[i][0];
	        ticketTicks.push(tick);
        }
 
        function gd(year, month, day) {
           return new Date(year, month - 1, day).getTime();
        }
        
        var data = [{
            label: "Website Visits",
            data: finalVisits,
            yaxis:2,
            bars: {
                show: true,
                align: "center",
                'barWidth': 24*60*60*100
            }
        },{
            label: "Ticket Sales",
            data: finalTickets,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        },{
            label: "Media Spend",
            data: finalSpend,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true,
                radius:4
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
                axisLabels: {
	                show: true
                },
                xaxis: {
                    align: "center",
                    mode: "time",
                    timeformat: "%m-%d-%y",
                    ticks: ticketTicks
                },
                xaxes: [
                	{axisLabel: "Date"}
	                ],
                yaxes: [
                    {position:"left",
	                 axisLabel:"Ticket Gross/Media Spend (in $)"
                    },
                    {position:"right",
	                 axisLabel:"Website Visits"
                    }
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    if (label == "Website Visits"){
                    	var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Website Visits: ' + y.toLocaleString() + '</li></ul>';
                    } else if (label == "Media Spend"){
	                    if (dateList.indexOf(date)){
		                    for (var i = 0; i<trackSpend.length;i++){
			                	if(trackSpend[i][0].indexOf(date) && (parseInt(trackSpend[i][2]/trackSpend[i][0].length)==parseInt(y))){
				                	var realLabel = trackSpend[i][1];
			                	}    
			                }
			                var tooltip = '<h3>' + realLabel + '</h3><ul>';
							tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
							tooltip += '<li>Dollars Spent: $' + y.toLocaleString() + '</li></ul>'; 
		                } else {
			                var tooltip = '<h3>' + label + '</h3><ul>';
							tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
							tooltip += '<li>Dollars Spent: $' + y.toLocaleString() + '</li></ul>'; 
		                }
/*
	                    var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Dollars Spent: $' + parseInt(y) + '</li></ul>';   
*/
                    } else {
	                    var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Gross Income: $' + y.toLocaleString() + '</li></ul>';
                    }
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
 
        var plot = $.plot($("#sales-visits-commercials #flotcontainerSales"), data, options);  
    },
    
    //RENDER WEB VISITS/TICKET SALES/COMMERCIAL SPEND
    renderTSMS : function(start, end, ticketSales, comSpend){
	    var callback = this.successCallbackTSMS;
	     $("#TSMSForm").submit(function(e) {
            e.preventDefault();
            console.log("made it into button clicked");
           // $('#visits-sales').html('');
            callback($("#TSMSstartDate").val(), $("#TSMSendDate").val(), ticketSales, comSpend);
        });

	    this.successCallbackTSMS(start, end, ticketSales, comSpend);
    },
    
    successCallbackTSMS : function(start, end, ticketSales, comSpend) {
        console.log("SUCCESS CALLBACK TSMS");
        console.log(ticketSales);
        console.log(comSpend);
        var processedTickets = [];
        
        for(var i=0; i<ticketSales.length; i++){
	        item = ticketSales[i];
	        var newDate = getDate(item.dateToday);
	        var dateArray = [newDate, parseInt(item.todayGross)];
	        processedTickets.push(dateArray);
        }
        
        function sortFunction(a, b) {
            if (a[0] === b[0]) {
                return 0; 
            } else {
                return (a[0] < b[0]) ? -1 : 1;
            }
                
        }
        function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
        
        processedTickets.sort(sortFunction);
        
        var spend = []
        for (var i=0;i<comSpend.length;i++){
	        var item = comSpend[i];
	        if (String(item.quarter) == "Q1"){
		        var month = 1;
		        var day = 1;
		        var year = 2016;
		        var dailySpend = parseInt(item.weeklyTotal)/7;
		        while(!((month == 2) && (day == 13))){
			        spend.push([gd(year, month, day), dailySpend])
			        if((day == 31) && (month == 1)){
				        day = 1;
				        month = 2;
			        }
			        else if ((day == 28) && (month == 2)){
				        day = 1;
				        month = 3;
			        } else {
				        day = day + 1;
			        }
		        }
	        }
        }
        
        console.log(spend);
        
        var finalTickets = [];
        var finalSpend = [];

        if (start == null || start == ''){
            finalTickets = processedTickets;
            finalSpend = spend;
        } else {
			var startSplit = start.split("/");
			var endSplit = end.split("/");
            for (i=0; i<processedTickets.length; i++){
	            var item = processedTickets[i];
		   		var tempDate = item[0];
		   		if ((tempDate >= gd(startSplit[2], startSplit[0], startSplit[1])) && (tempDate <= gd(endSplit[2], endSplit[0], endSplit[1]))){
	            	console.log(item);
                	finalTickets.push(item);
            	}
            }
			for (i=0; i<spend.length; i++){
	            var item = spend[i];
		   		var tempDate = item[0];
		   		if ((tempDate >= gd(startSplit[2], startSplit[0], startSplit[1])) && (tempDate <= gd(endSplit[2], endSplit[0], endSplit[1]))){
	            	console.log(item);
                	finalSpend.push(item);
            	}
            }
        }

        
        
        function getDate(date) {
			var splitDate = date.split("/");
			var year = "20"+splitDate[2];
			return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
         
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        var ticketTicks = [];
        for (var i = 0; i<finalTickets.length; i++){
	        tick = finalTickets[i][0];
	        ticketTicks.push(tick);
        }
    
 
        function gd(year, month, day) {
           return new Date(year, month - 1, day).getTime();
        }
        
        var data = [{},{
            label: "Ticket Sales",
            data: finalTickets,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        },{
            label: "Media Spend",
            data: finalSpend,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
	        	axisLabels: {
		        	show:true
	        	},
                xaxis: {
                    align: "center",
                    labelAngle: 45,
                  // min: gd(2015,11,1),
                  // max: gd(2015,11,13),
                   // alignTicksWithAxis: 1,
                    mode: "time",
                    //tickSize: [1, 'day'],
                    //tickLength: 0,
                    timeformat: "%m-%d-%y",
                    //minTickSize: 240,
                    //timezone: 'browser'
                    ticks: ticketTicks
                },
                xaxes:[
	                {axisLabel: "Date"}
                ],
                yaxes: [
                    {position:"left",
	                    axisLabel:"Ticket Gross/Media Spend (in $)"
                    },
                    {position:"right"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    if (label == "Website Visits"){
                    	var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Website Visits: ' + y.toLocaleString() + '</li></ul>';
                    } else if (label == "Media Spend"){
	                    var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Dollars Spent: $' + y.toLocaleString() + '</li></ul>';   
                    } else {
	                    var tooltip = '<h3>' + label + '</h3><ul>';
						tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
						tooltip += '<li>Gross Income: $' + y.toLocaleString() + '</li></ul>';
                    }
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        }; 
        var plot = $.plot($("#sales-adspend-commercials #flotcontainerAds"), data, options);  
    },
    
    renderCoreGraphWV : function() {
        var visits = [
        [gd(2015,12,14), 2782], [gd(2015,12,15), 2967], [gd(2015,12,16), 3781],
        [gd(2015,12,17), 3283], [gd(2015,12,18), 3488], [gd(2015,12,19), 2915],
        [gd(2015,12,20), 3000], [gd(2015,12,21), 3138], [gd(2015,12,22), 3753],
        [gd(2015,12,23), 3223], [gd(2015,12,24), 3459], [gd(2015,12,25), 3236],
        [gd(2015,12,26), 2599], [gd(2015,12,27), 2676], [gd(2015,12,28), 2430],
        [gd(2015,12,29), 2397], [gd(2015,12,30), 2626], [gd(2015,12,31), 2559],
        [gd(2016,1,1), 2770], [gd(2016,1,2), 2378], [gd(2016,1,3), 2153],
        [gd(2016,1,4), 2265], [gd(2016,1,5), 2200], [gd(2016,1,6), 2004]
        ];
        
        
        var coms = [
        [gd(2016,1,1), 6], [gd(2016,1,2), 6], [gd(2016,1,3), 7],
        [gd(2016,1,4), 12], [gd(2016,1,5), 7], [gd(2016,1,6), 15]
        ];
 
        function gd(year, month, day) {
           return new Date(year, month - 1, day).getTime();
        }
        
        var data = [{
            label: "Visits",
            data: visits,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
                xaxis: {
                    align: "center",
                   // min: gd(2015,11,1),
                   // max: gd(2015,11,13),
                    alignTicksWithAxis: 1,
                    mode: "time",
                    tickSize: [1, 'day'],
                    tickLength: 0,
                    timeformat: "%d %b",
                    minTickSize: 240,
                    //timezone: 'browser'
                },
                yaxes: [
                    {position:"left"},
                    {position:"right"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date is ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Total Count: ' + y + '</li></ul>';
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
 
        var plot = $.plot($("#visits #flotcontainerSales"), data, options);  
    },
    
    
    renderCoreGraphCI : function() {
        var clicks = [
        [gd(2016,1,9), 232213], [gd(2016,1,10), 271017], [gd(2016,1,11), 364593], 
        [gd(2016,1,12), 282677], [gd(2016,1,13), 261659], [gd(2016,1,14), 285099], 
        [gd(2016,1,15), 255535], [gd(2016,1,16), 217735], [gd(2016,1,17), 220294], 
        [gd(2016,1,18), 260417], [gd(2016,1,19), 295306], [gd(2016,1,20), 271669], 
        [gd(2016,1,21), 264780], [gd(2016,1,22), 288287], [gd(2016,1,23), 300451], 
        [gd(2016,1,24), 274284], [gd(2016,1,25), 244154], [gd(2016,1,26), 349708], 
        [gd(2016,1,27), 404991], [gd(2016,1,28), 608671], [gd(2016,1,29), 674751], 
        [gd(2016,1,30), 662220], [gd(2016,1,31), 705391], [gd(2016,2,1), 875865], 
        [gd(2016,2,2), 79635], [gd(2016,2,3), 738614], [gd(2016,2,4), 755616], 
        [gd(2016,2,5), 703125], [gd(2016,2,6), 596933], 
        ];
    
        
        var impressions = [
        [gd(2016,1,9), 881], [gd(2016,1,10), 969], [gd(2016,1,11), 1131], 
        [gd(2016,1,12), 848], [gd(2016,1,13), 870], [gd(2016,1,14), 867], 
        [gd(2016,1,15), 832], [gd(2016,1,16), 841], [gd(2016,1,17), 926], 
        [gd(2016,1,18), 891], [gd(2016,1,19), 950], [gd(2016,1,20), 734], 
        [gd(2016,1,21), 827], [gd(2016,1,22), 833], [gd(2016,1,23), 1032], 
        [gd(2016,1,24), 995], [gd(2016,1,25), 687], [gd(2016,1,26), 640], 
        [gd(2016,1,27), 896], [gd(2016,1,28), 970], [gd(2016,1,29), 944], 
        [gd(2016,1,30), 1051], [gd(2016,1,31), 1256], [gd(2016,2,1), 1280], 
        [gd(2016,2,2), 955], [gd(2016,2,3), 887], [gd(2016,2,4), 981], 
        [gd(2016,2,5), 829], [gd(2016,2,6), 773], 
        ];
        
        
        var coms = [
        [gd(2016,1,1), 6], [gd(2016,1,2), 6], [gd(2016,1,3), 7],
        [gd(2016,1,4), 12], [gd(2016,1,5), 7], [gd(2016,1,6), 15]
        ];
 
        function gd(year, month, day) {
           return new Date(year, month - 1, day).getTime();
        }
        
        var data = [{
            label: "Clicks",
            data: clicks,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        },{
            label: "Impressions",
            data: impressions,
            yaxis: 2,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
                xaxis: {
                    align: "center",
                   // min: gd(2015,11,1),
                   // max: gd(2015,11,13),
                    alignTicksWithAxis: 1,
                    mode: "time",
                    tickSize: [1, 'day'],
                    tickLength: 0,
                    timeformat: "%d %b",
                    minTickSize: 240,
                    //timezone: 'browser'
                },
                yaxes: [
                    {position:"left"},
                    {position:"right"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date is ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Total Count: ' + y + '</li></ul>';
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
 
        var plot = $.plot($("#impressions-clicks #flotcontainerSales"), data, options);  
    },
    
    

    
    renderShowGraph : function() {
    var tickSold = [
        [date(2016,1,7), 569], [date(2016,1,8), 721], [date(2016,1,9), 1657],
        [date(2016,1,10), 654], [date(2016,1,12), 347],
        [date(2016,1,13), 615], [date(2016,1,14), 354],
        [date(2016,1,15), 481], [date(2016,1,16), 1550],
        [date(2016,1,17), 758], [date(2016,1,19), 270],
        [date(2016,1,20), 392], [date(2016,1,21), 246],
        [date(2016,1,22), 306], [date(2016,1,23), 923],
        [date(2016,1,24), 506], [date(2016,1,26), 193], [date(2016,1,27), 302],
        [date(2016,1,28), 246]
        ];
 
    var netCap = [
        [date(2016,1,7), 1695], [date(2016,1,8), 1695], [date(2016,1,9), 3390],
        [date(2016,1,10), 1695], [date(2016,1,12), 1695],
        [date(2016,1,13), 3390], [date(2016,1,14), 1695],
        [date(2016,1,15), 1695], [date(2016,1,16), 3390],
        [date(2016,1,17), 1695], [date(2016,1,19), 1695],
        [date(2016,1,20), 3390], [date(2016,1,21), 1695],
        [date(2016,1,22), 1695], [date(2016,1,23), 3390],
        [date(2016,1,24), 1695], [date(2016,1,26), 1695], [date(2016,1,27), 3390],
        [date(2016,1,28), 1695]
        ];
    
    
    function date(year, month, day) {
        var date = new Date(year, month - 1, day);
        return date.getTime();
    }
 
    var data = [{
        label: "Net Capacity",
        data: netCap,
        bars: {
            show: true,
            barWidth: 30 * 60 * 60 * 300
        }
    },{
        label: "Tickets Sold",
        data: tickSold,
        bars: {
            show: true,
            barWidth: 30 * 60 * 60 * 300
        }
    }];
 
    var options = {
            xaxis: {
                mode:"time",
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 10
                //alignTicksWithAxis: 1
                
            },
            yaxis: {
                alignTicksWithAxis: 1
            },
            grid:{
                hoverable:true,
                //backgroundColor: { colors: ["#969696", "#5C5C5C"] }
            },
            tooltip: true,
            tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Amount: ' + y + '</li></ul>';
                    return tooltip;
                    
                },
                shifts: {
                    x: 10,
                    y: -70
                    
                }
                
            }
    };
 
    var plot = $.plot($("#sold-per-show #flotcontainerShows"), data, options);  
        
    },
    
    renderWVGraph : function(start, end, data) {
        //var datasource = new Datasource();
        var callback = this.successCallbackWVLine;
        $("#WVForm").submit(function(e) {
            e.preventDefault();
            callback($("#WVstartDate").val(), $("#WVendDate").val(), data);
        });
        this.successCallbackWVLine(start, end, data);
    },

    successCallbackWVLine : function(start, end, wvData) {
        //$TODO$ validate grossDataByPlay
        var thisData = [];
        thisData = wvData;
        var returnData = [];
        //console.log(start, end, "start and end successCallback")
        function gd(date) {
            var splitDate = date.split("/");
            var year = splitDate[2];
            if(year.length == 2){
                var year = "20"+splitDate[2];
            }
            return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
        function parseDate(start, end, data, parsedData){
            for(var i = 0; i < data.length; i++){
                var item = data[i];
                var date = item[0];
                if ((date >= gd(start)) && (date <= gd(end))){
                    parsedData.push(item);
                }
            }
        }
        for(var i = 0; i < thisData.length; i++){
            returnData[i] = [gd(thisData[i].date), thisData[i].websiteVisits];
        }
        
        var finalData = [];
        
        if (start == null || start == ''){
            finalData = returnData;
        } else {
            parseDate(start, end, returnData, finalData);
// 			for (i=0;i<returnData.length;i++){
//           		var item = returnData[i];
// 		   		var tempDate = item[0];
// 			    if ((tempDate >= gd(start)) && (tempDate <= gd(end))){
//                 	finalData.push(item);
//             	}
//             }
        }
        
        var data = [{
            label: "Visits",
            data: finalData,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
				axisLabels: {show: true},
                xaxis: {
                    align: "center",
                   // min: gd(2015,11,1),
                   // max: gd(2015,11,13),
                    alignTicksWithAxis: 1,
                    mode: "time",
                    tickSize: [1, 'day'],
                    tickLength: 0,
                    timeformat: "%d %b",
                    minTickSize: 240,
                    //timezone: 'browser'
                },
				xaxes: [{axisLabel: "Date"}],
                yaxes: [
                    {axisLabel: "Website Visits"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date is ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Total Count: ' + y + '</li></ul>';
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
        
        var plot = $.plot($("#visits #flotcontainerSales"), data, options); 
   },
   
   renderCIAdsGraph : function(start, end, data) {
        //var datasource = new Datasource();
        var callback = this.successCallbackCIAdsLine;
        $("#CIForm").submit(function(e) {
            e.preventDefault();
            callback($("#CIstartDate").val(), $("#CIendDate").val(), data);
        });
        this.successCallbackCIAdsLine(start, end, data);
    },

    successCallbackCIAdsLine : function(start, end, ciData) {
        //$TODO$ validate grossDataByPlay
        var thisData = [];
        thisData = ciData;
        var clickData = [];
        var impressionData = [];
        //console.log(start, end, "start and end successCallback")
        function gd(date) {
            var splitDate = date.split("/");
            var year = splitDate[2];
            if(year.length == 2){
                var year = "20"+splitDate[2];
            }
          return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
        function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                } else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
        }
        for(var i = 0; i < thisData.length; i++){
            clickData[i] = [gd(thisData[i].date), thisData[i].clicks];
        }
        for(var i = 0; i < thisData.length; i++){

            impressionData[i] = [gd(thisData[i].date), thisData[i].impressions];

        }
        
        clickData.sort(sortFunction);
        impressionData.sort(sortFunction);
        
        var finalClick = [];
        var finalImpression = [];
        
        if (start == null || start == ''){
            finalClick = clickData;
            finalImpression = impressionData;
        } else {
            parseDate(start, end, clickData, finalClick);
            parseDate(start, end, impressionData, finalImpression);
        }
        
        function parseDate(start, end, data, parsedData){
            for(var i = 0; i < data.length; i++){
                var item = data[i];
                var date = item[0];
                if ((date >= gd(start)) && (date <= gd(end))){
                    parsedData.push(item);
                }
            }
        }
        
        var data = [{
            label: "Clicks",
            data: finalClick,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        },{
            label: "Impressions",
            data: finalImpression,
            yaxis: 2,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
				axisLabels: {show: true},
                xaxis: {
                    align: "center",
                   // min: gd(2015,11,1),
                   // max: gd(2015,11,13),
                    alignTicksWithAxis: 1,
                    mode: "time",
                    tickSize: [1, 'day'],
                    tickLength: 0,
                    timeformat: "%d %b",
                    minTickSize: 240,
                    //timezone: 'browser'
                },
				xaxes: [{axisLabel: "Date"}],
                yaxes: [
                    {position:"left",
					 axisLabel: "Clicks"},
                    {position:"left",
					 axisLabel: "Impressions"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date is ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Total Count: ' + y + '</li></ul>';
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
        
        var plot = $.plot($("#ads-impressions-clicks #flotcontainerSales"), data, options); 
   },
   
   renderChannelGraph : function(start, end, data) {
        //var datasource = new Datasource();
        // var callback = this.successCallbackLine;
        // this.successCallbackGraphLine(null, null, data);
        var callback = this.successCallbackChannel;
        $("#ChannelForm").submit(function(e) {
            e.preventDefault();
            callback($("#channelStartDate").val(), $("#channelEndDate").val(), data);
        });
        this.successCallbackChannel(start, end, data);
    },

    successCallbackChannel : function(start, end, scData) {
        //$TODO$ validate grossDataByPlay
        var agentAssisted = [];
        var autoPhone = [];
        var boxOffice = [];
        var internet = [];
        var mobile = [];
        var otherTM = [];
        var ticketOutlet = [];
        
        var channel1 = [];
        var channel2 = [];
        var channel3 = [];
        var channel4 = [];
        var channel5 = [];
        var channel6 = [];
        var channel7 = [];
        
        
        for(var i = 0; i < scData.length; i++){
            var item = scData[i];
            var date = gd(item.endDate);

            if(item.salesChannel == "Agent Assisted Phone"){
                agentAssisted.push([date, item.totalFace]);
            } else if (item.salesChannel == "Automated Phone") {
                autoPhone.push([date, item.totalFace]);
            } else if (item.salesChannel == "Box Office") {
                boxOffice.push([date, item.totalFace]);
            } else if (item.salesChannel == "Internet") {
                internet.push([date, item.totalFace]);
            } else if (item.salesChannel == "Mobile") {
                mobile.push([date, item.totalFace]);
            } else if (item.salesChannel == "Other TM") {
                otherTM.push([date, item.totalFace]);
            } else if (item.salesChannel == "Ticket Outlet") {
                ticketOutlet.push([date, item.totalFace]);
            } 
            
        }
        function gd(date) {
            var splitDate = date.split("/");
            var year = splitDate[2];
            if(year.length == 2){
                var year = "20"+splitDate[2];
            }
          return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
        function parseDate(start, end, data, parsedData){
            for(var i = 0; i < data.length; i++){
                var item = data[i];
                var date = item[0];
                if ((date >= gd(start)) && (date <= gd(end))){
                    parsedData.push(item);
                }
            }
        }
        function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                } else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
        }
        // for(var i = 0; i < thisData.length; i++){
        //     clickData[i] = [gd(thisData[i].date), thisData[i].clicks];
        // }
        // for(var i = 0; i < thisData.length; i++){

        //     impressionData[i] = [gd(thisData[i].date), thisData[i].impressions];

        // }
        
        // clickData.sort(sortFunction);
        // impressionData.sort(sortFunction);
        
        if (start == null || start == ''){
            channel1 = agentAssisted;
            channel2 = autoPhone;
            channel3 = boxOffice;
            channel4 = internet;
            channel5 = mobile;
            channel6 = otherTM;
            channel7 = ticketOutlet;

        } else {
            parseDate(start, end, agentAssisted, channel1);
            parseDate(start, end, autoPhone, channel2);
            parseDate(start, end, boxOffice, channel3);
            parseDate(start, end, internet, channel4);
            parseDate(start, end, mobile, channel5);
            parseDate(start, end, otherTM, channel6);
            parseDate(start, end, ticketOutlet, channel7);
            
        }
        
        var newTicks = [];
        for(var i = 0; i < channel1.length; i++){
            newTicks.push(channel1[i][0]);
        }
        
        var data = [{
            label: "Agent Assisted Phone",
            data: channel1
        },{
            label: "Automated Phone",
            data: channel2
        },{
            label: "Box Office",
            data: channel3
        },{
            label: "Internet",
            data: channel4
        },{
            label: "Mobile",
            data: channel5
        },{
            label: "Other TM",
            data: channel6
        },{
            label: "Ticket Outlet",
            data: channel7
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
			axisLabels: {show: true},
            series: {stack: 0,
                lines: {show: true, 
                        steps: false,
                        fill: true},
                points: {show:true,
                radius:4
                
                }
                // bars: {show: true, barWidth: 30 * 60 * 60 * 300, align: 'center'}
                },
                legend: {noColumns: 4},
                xaxis: {
                    align: "center",
                   // min: gd(2015,11,1),
                   // max: gd(2015,11,13),
                    // alignTicksWithAxis: 1,
                    mode: "time",
                    // tickSize: [2, 'day'],
                    // tickLength: 0,
                    timeformat: "%d %b",
                    // minTickSize: 240,
                    //timezone: 'browser'
                    ticks: newTicks
                },
				xaxes: [{axisLabel: "Date"}],
                yaxes: [
                    {position:"left",
					 axisLabel: "Ticket Gross"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date is ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Tickets Sold in $: $' + y + '</li></ul>';
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
        
        var plot = $.plot($("#sales-channel #flotcontainerSales"), data, options); 
   },
   
   renderTPSGraph : function(start, end, data) {
        //var datasource = new Datasource();
        // var callback = this.successCallbackLine;
        // this.successCallbackTPSGraph(null, null, data);
        var callback = this.successCallbackTPSGraph;
        $("#TicketForm").submit(function(e) {
            e.preventDefault();
            callback($("#ticketStartDate").val(), $("#ticketEndDate").val(), data);
        });
        this.successCallbackTPSGraph(start, end, data);
        
    },

    successCallbackTPSGraph : function(start, end, data) {
        //$TODO$ validate grossDataByPlay
        var ticketsSold = [];
        var netCap = [];
        var finalTickets = [];
        var finalCap = [];
        
        for(var i = 0; i < data.length; i++){
            var item = data[i];
            var time = data[i].eventTime;
            var hourTime = time.substring(1, 2);
            var date = gdHour(item.eventDate, time);
            ticketsSold[i] = [date, item.toDateSold];
            netCap[i] = [date, item.netCap];
            }
        function gdHour(date, time) {
            var splitDate = date.split("/");
		    var year = "20"+splitDate[2];
            return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1]), parseInt(time)+12).getTime();
        }
        function gd(date) {
            var splitDate = date.split("/");
            var year = splitDate[2];
            if(year.length == 2){
                var year = "20"+splitDate[2];
            }
            return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
        function parseDate(start, end, data, parsedData){
            for(var i = 0; i < data.length; i++){
                var item = data[i];
                var date = item[0];
                if ((date >= gd(start)) && (date <= gd(end))){
                    parsedData.push(item);
                }
            }
        }
        function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                } else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
        }
        
        if (start == null || start == ''){
            finalTickets = ticketsSold;
            finalCap = netCap;
        } else {
            parseDate(start, end, ticketsSold, finalTickets);
            parseDate(start, end, netCap, finalCap);
        }
        
        var newTicks = [];
        for(var i = 0; i < finalCap.length; i++){
            newTicks.push(finalCap[i][0]);
        }
        console.log(newTicks);

        var data = [{
            label: "Net Capacity",
            data: finalCap,
            bars: {
            show: true,
            barWidth: 30 * 60 * 60 * 300
            }
        },{
            label: "Tickets Sold",
            data: finalTickets,
            //yaxis: 2,
            bars: {
            show: true,
            barWidth: 30 * 60 * 60 * 300
            }
        }];
        var DATE_FORMAT = "%Y-%m-%d-%h";
        var options = {
				axisLabels: {show: true},
                xaxis: {
                    align: "center",
                   // min: gd(2015,11,1),
                   // max: gd(2015,11,13),
                    // alignTicksWithAxis: 1,
                    mode: "time",
                    // tickSize: [1, 'day'],
                    // tickLength: 0,
                    timeformat: "%d %b",
                    // minTickSize: 240,
                    //timezone: 'browser'
                    ticks: newTicks
                },
				xaxes: [{axisLabel: "Date"}],
                yaxes: [
                    {position:"left",
					 axisLabel: "Tickets Sold"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date is ' + date.toLocaleDateString() + ", " + date.toLocaleTimeString() + '</li>';
                    tooltip += '<li>Total Count: ' + y + '</li></ul>';
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
        
        var plot = $.plot($("#sold-per-show #flotcontainerShows"), data, options); 
   },
   
   renderSeatingGraph : function(start, end, data) {
        //var datasource = new Datasource();
        // var callback = this.successCallbackLine;
        // this.successCallbackSeating(null, null, data);
        
        var callback = this.successCallbackSeating;
        $("#SeatForm").submit(function(e) {
            e.preventDefault();
            callback($("#seatStartDate").val(), $("#seatEndDate").val(), data);
        });
        this.successCallbackSeating(start, end, data);
    },

    successCallbackSeating : function(start, end, scData) {
        //$TODO$ validate grossDataByPlay
        var orch1 = [];
        var orch2 = [];
        var orch3 = [];
        var pmezz4 = [];
        var fmezz5 = [];
        var mzbox6 = [];
        var fmh7 = [];
        var rmkp8 = [];
        var jo9 = [];
        var balc10 = [];
        var blbx11 = [];
        var sroo12 = [];
        var srom13 = [];
        var srob14 = [];
        
        var priceLevel1 = [];
        var priceLevel2 = [];
        var priceLevel3 = [];
        var priceLevel4 = [];
        var priceLevel5 = [];
        var priceLevel6 = [];
        var priceLevel7 = [];
        var priceLevel8 = [];
        var priceLevel9 = [];
        var priceLevel10 = [];
        var priceLevel11 = [];
        var priceLevel12 = [];
        var priceLevel13 = [];
        var priceLevel14 = [];
        
        for(var i = 0; i < scData.length; i++){
            var item = scData[i];
            var time = scData[i].eptime;
            var hourTime = time.substring(1, 2);
            var date = gdHour(item.EventDate, hourTime);
            orch1.push([date, item.ORCH1Gross]);
            orch2.push([date, item.ORCH2Gross]);
            orch3.push([date, item.ORCH3Gross]);
            pmezz4.push([date, item.PMEZZ4Gross]);
            fmezz5.push([date, item.FMEZZ5Gross]);
            mzbox6.push([date, item.MZBOX6Gross]);
            fmh7.push([date, item.FMH7Gross]);
            rmkp8.push([date, item.RMKP8Gross]);
            jo9.push([date, item.JO9Gross]);
            balc10.push([date, item.BALC10Gross]);
            blbx11.push([date, item.BLBX11Gross]);
            sroo12.push([date, item.SROO12Gross]);
            srom13.push([date, item.SROM13Gross]);
            srob14.push([date, item.SROB14Gross]);
        }
        function gdHour(date, time) {
            var splitDate = date.split("/");
		    var year = "20"+splitDate[2];
            return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1]), time).getTime();
        }
        function gd(date) {
            var splitDate = date.split("/");
            var year = splitDate[2];
            if(year.length == 2){
                var year = "20"+splitDate[2];
            }
            return new Date(parseInt(year), parseInt(splitDate[0]) - 1, parseInt(splitDate[1])).getTime();
        }
        function sortFunction(a, b) {
                if (a[0] === b[0]) {
                    return 0;
                } else {
                    return (a[0] < b[0]) ? -1 : 1;
                }
        }
        function parseDate(start, end, data, parsedData){
            for(var i = 0; i < data.length; i++){
                var item = data[i];
                var date = item[0];
                if ((date >= gd(start)) && (date <= gd(end))){
                    parsedData.push(item);
                }
            }
        }
        // for(var i = 0; i < thisData.length; i++){
        //     clickData[i] = [gd(thisData[i].date), thisData[i].clicks];
        // }
        // for(var i = 0; i < thisData.length; i++){

        //     impressionData[i] = [gd(thisData[i].date), thisData[i].impressions];

        // }
        
        // clickData.sort(sortFunction);
        // impressionData.sort(sortFunction);
        
        if (start == null || start == ''){
            priceLevel1 = orch1;
            priceLevel2 = orch2;
            priceLevel3 = orch3;
            priceLevel4 = pmezz4;
            priceLevel5 = fmezz5;
            priceLevel6 = mzbox6;
            priceLevel7 = fmh7;
            priceLevel8 = rmkp8;
            priceLevel9 = jo9;
            priceLevel10 = balc10;
            priceLevel11 = blbx11;
            priceLevel12 = sroo12;
            priceLevel13 = srom13;
            priceLevel14 = srob14;
        } else {
            parseDate(start, end, orch1, priceLevel1);
            parseDate(start, end, orch2, priceLevel2);
            parseDate(start, end, orch3, priceLevel3);
            parseDate(start, end, pmezz4, priceLevel4);
            parseDate(start, end, fmezz5, priceLevel5);
            parseDate(start, end, mzbox6, priceLevel6);
            parseDate(start, end, fmh7, priceLevel7);
            parseDate(start, end, rmkp8, priceLevel8);
            parseDate(start, end, jo9, priceLevel9);
            parseDate(start, end, balc10, priceLevel10);
            parseDate(start, end, blbx11, priceLevel11);
            parseDate(start, end, sroo12, priceLevel12);
            parseDate(start, end, srom13, priceLevel13);
            parseDate(start, end, srob14, priceLevel14);
        }
        
        var newTicks = [];
        for(var i = 0; i < priceLevel1.length; i++){
            newTicks.push(priceLevel1[i][0]);
        }
        console.log(newTicks);
        var data = [{
            label: "ORCH1",
            data: priceLevel1
        },{
            label: "ORCH2",
            data: priceLevel2
        },{
            label: "ORCH3",
            data: priceLevel3
        },{
            label: "PMEZZ4",
            data: priceLevel4
        },{
            label: "FMEZZ5",
            data: priceLevel5
        },{
            label: "MZBOX6",
            data: priceLevel6
        },{
            label: "FMH7",
            data: priceLevel7
        },{
            label: "RMKP8",
            data: priceLevel8
        },{
            label: "JO9",
            data: priceLevel9
        },{
            label: "BALC10",
            data: priceLevel10
        },{
            label: "BLBX11",
            data: priceLevel11
        },{
            label: "SROO12",
            data: priceLevel12
        },{
            label: "SROM13",
            data: priceLevel13
        },{
            label: "SROB14",
            data: priceLevel14
        }];
        var DATE_FORMAT = "%Y-%m-%d";
        var options = {
			axisLabels: {show: true},
            series: {stack: 0,
                lines: {show: false, 
                        steps: false,
                        fill: false},
                bars: {show: true, 
                       barWidth: 30 * 60 * 60 * 300, 
                       align: 'center'}
                },
                legend: {
                    //position: "nw",
                    noColumns: 7
                },
                xaxis: {
                    align: "center",
                   // min: gd(2015,11,1),
                   // max: gd(2015,11,13),
                    // alignTicksWithAxis: 1,
                    mode: "time",
                    // tickSize: [2, 'day'],
                    // tickLength: 0,
                    timeformat: "%d %b",
                    // minTickSize: 240,
                    //timezone: 'browser'
                    ticks: newTicks
                },
				xaxes: [{axisLabel: "Date"}],
                yaxes: [
                    {position:"left",
					 axisLabel: "Ticket Gross"}
                    ],
                grid:{
                   hoverable: true,
                    backgroundColor: "#ffffff"
                },
               tooltip: true,
               tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date is ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Tickets Sold in $: $' + y + '</li></ul>';
                    return tooltip;
                },
                shifts: {
                    x: 10,
                    y: -70
                }
            }
        };
        
        var plot = $.plot($("#seating #flotcontainerSales"), data, options); 
   },
    
    renderSeatGraph : function() {
    var tickSold = [
        [0, 112], [1, 65], [2, 201], [3, 38], 
        [4, 48], [5, 8], [6, 53], [7, 131], 
        [8, 4], [9, 108], [10, 0], [11, 0], 
        [12, 0], [13, 0]
        ];
 
    var netCap = [
        [0, 322], [1, 196], [2, 263], [3, 149], 
        [4, 174], [5, 8], [6, 62], [7, 154], 
        [8, 29], [9, 304], [10, 12], [11, 10], 
        [12, 4], [13, 8]
        ];
    
    var ticks = [
        [0, "1ORCH"], [1, "2ORCH"], [2, "3ORCH"], [3, "4PMEZZ"], 
        [4, "5FMEZZ"], [5, "6MZBOX"], [6, "7FMH"], [7, "8RMK-P"], 
        [8, "9J-O"], [9, "10BALC"], [10, "11BLBX"], [11, "SRO-O"], 
        [12, "SRO-M"], [13, "SRO-B"]
        ];
    
    function date(year, month, day) {
        var date = new Date(year, month - 1, day);
        return date.getTime();
    }
 
    var data = [{
        label: "Net Capacity",
        data: netCap,
        bars: {
            show: true,
            barWidth: 0.5
        }
    },{
        label: "Tickets Sold",
        data: tickSold,
        bars: {
            show: true,
            barWidth: 0.5
        }
    }];
 
    var options = {
            xaxis: {
                ticks:ticks
                
            },
            yaxis: {
                alignTicksWithAxis: 1
            },
            grid:{
                hoverable:true,
                //backgroundColor: { colors: ["#969696", "#5C5C5C"] }
            },
            tooltip: true,
            tooltipOpts: {
                content:function (label, x, y) {
                    var date = new Date(+x);
                    var tooltip = '<h3>' + label + '</h3><ul>';
                    tooltip += '<li>Date: ' + date.toLocaleDateString() + '</li>';
                    tooltip += '<li>Amount: ' + y + '</li></ul>';
                    return tooltip;
                    
                },
                shifts: {
                    x: 10,
                    y: -70
                    
                }
                
            }
    };
 
    var plot = $.plot($("#seating #flotcontainerShows"), data, options);  
        
    }
    
}



