/*global processedData*/
/*global salesChart*/
/*global followerData*/
/*global followersChart*/

if (typeof Controller == "undefined") {
    Controller = {};
}

Controller = function() {
    this.init();
};


Controller.prototype = {
    init: function() {

    },
    
    renderDonutGraph : function() {
        var datasource3 = new Datasource();
        datasource3.getMentionsData(null, null, this.successCallbackDonut);
    },
    
    successCallbackDonut : function(sentimentData) {
        var sentSources = sentimentData;
        
        Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Man",
            value: 586
        }, {
            label: "Woman",
            value: 988
        }],
        resize: true
    });
    },
    
    renderMentionsGraph : function() {
        var datasource2 = new Datasource();
        datasource2.getMentionsData(null, null, this.successCallbackBar);
    },
    
    successCallbackBar : function(mentionsBySource) {
      var arrSources = mentionsBySource;

      var ykeys = [];
      console.log(arrSources);
      var item = arrSources[0];
      var keys = Object.keys(item);
      
      for (var i = 1; i < keys.length; i++) {
          if (ykeys.indexOf(keys[i]) <= -1) {
                ykeys.push(keys[i]);  
        
          }
      }
      console.log(ykeys);

      
       Morris.Bar({
        element: 'morris-bar-chart',
        data: arrSources,
        xkey: 'mentionSource',
        ykeys: ykeys,
        labels: ykeys,
        hideHover: 'auto',
        resize: true
    });
    
    },
    
    
    renderTicketSaleGraph : function(startDate, endDate, data) {
        //var datasource = new Datasource();
        var callback = this.successCallbackLine;
        $("#salesForm").submit(function(e) {
            e.preventDefault();
            //controller.renderTicketSaleGraph($("#startDate").val(), $("#endDate").val());
/*
            console.log("button clicked!");
            console.log($("#startDate").val() + $("#endDate").val());
            console.log(callback);
*/
            $('#morris-line-chart').html('');
            callback($("#startDate").val(), $("#endDate").val(), data);
            //salesChart.setData(processedData);
        });
//$TODO$ need to pass valid start and end date when we have server code ready
        // if ($("#startDate").val() != null) {
            
        // } else{
            this.successCallbackLine(startDate, endDate, data);
    //    }
    },

    successCallbackLine : function(start, end, grossDataByPlay) {
        //$TODO$ validate grossDataByPlay
        var returnData = [];
        //console.log(start, end, "start and end successCallback")
        if (start == null || start == ''){
            returnData = grossDataByPlay;
        } else {
            
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
        
        var startSplit = start.split("/");
        var endSplit = end.split("/");
        for (i=0;i<grossDataByPlay.length;i++){
            var item = grossDataByPlay[i];
            var tempDate = getDateIBDB(item.weekendDate)
            var dumSplit = tempDate.split("-");
            if ((gd(dumSplit[0],dumSplit[1],dumSplit[2]) >= gd(startSplit[2], startSplit[0], startSplit[1])) && (gd(dumSplit[0],dumSplit[1],dumSplit[2]) <= gd(endSplit[2], endSplit[0], endSplit[1]))){
	            //console.log(item);
                returnData.push(item);
            } 
        }
        }
        
        
        var currentWeek = {};
        var ykeys = [];

/*
		function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
*/

        for (var i = 0; i < returnData.length; i++) {
            var item = returnData[i];
            //console.log(item);
            var formattedDate = getDateIBDB(item.weekendDate);
            if (!currentWeek[formattedDate]) {
                currentWeek[formattedDate] = {
                    period: formattedDate
                };
            }
            if (ykeys.indexOf(item.playname) <= -1) {
                ykeys.push(item.playname);
            }
            var thisDate = currentWeek[formattedDate];
            thisDate[item.playname] = item.weekGross;
        }
        ykeys = ykeys.sort();
        processedData = [];
        
        for (var date in currentWeek){
            if (currentWeek.hasOwnProperty(date)){
                processedData.push(currentWeek[date]);
            }
        }
        
/*
        console.log(currentWeek);
        console.log(processedData);
        console.log(ykeys)
*/
        
        salesChart = Morris.Line({
        element: 'morris-line-chart',
        //data: processedData,
        xkey: 'period',
        ykeys: ykeys,
        labels: ykeys,
        lineColors: ['#660066','#003399','#E3170D','#79CDCD','#ff6600','#ffcc00','#009900'],
        pointSize: 4,
        hideHover: 'auto',
        resize: true,
        gridStrokeWidth: 0.4,
        lineWidth: 3,
        pointStrokeColors: ["#efefef"],
        bezierCurve: true,
        datasetFill: true
    });
    salesChart.setData(processedData);
        
        
        
   },  renderAAIPSaleGraph : function(startDate, endDate, data) {
        var callback = this.successCallbackAAIP;
        $("#AAIPsalesForm").submit(function(e) {
            e.preventDefault();
            $('#AAIP-line-chart').html('');
            callback($("#AAIPstartDate").val(), $("#AAIPendDate").val(), data);
        });
        this.successCallbackAAIP(startDate, endDate, data);

    }, successCallbackAAIP : function(start, end, grossDataByPlay) {
        //$TODO$ validate grossDataByPlay
        var returnData = [];
        //console.log(start, end, "start and end successCallback")
        
        if (start == null || start == ''){
            returnData = grossDataByPlay;
        } else {
            
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
        
        var startSplit = start.split("/");
        var endSplit = end.split("/");
        for (i=0;i<grossDataByPlay.length;i++){
            var item = grossDataByPlay[i];
            var tempDate = getDateIBDB(item.weekendDate)
            var dumSplit = tempDate.split("-");
            if ((gd(dumSplit[0],dumSplit[1],dumSplit[2]) >= gd(startSplit[2], startSplit[0], startSplit[1])) && (gd(dumSplit[0],dumSplit[1],dumSplit[2]) <= gd(endSplit[2], endSplit[0], endSplit[1]))){
	            //console.log(item);
                returnData.push(item);
            } 
        }
        }
        
        var currentWeek = {};
        var ykeys = [];

		for (var i = 0; i < returnData.length; i++) {
            var item = returnData[i];
            console.log(String(item.playname));
            var formattedDate = getDateIBDB(item.weekendDate);
            if (String(item.playname) == "An American In Paris"){
            if (!currentWeek[formattedDate]) {
                currentWeek[formattedDate] = {
                    period: formattedDate
                };
            }
            if (ykeys.indexOf(item.playname) <= -1) {
                ykeys.push(item.playname);
            }
            var thisDate = currentWeek[formattedDate];
            thisDate[item.playname] = item.weekGross;
            }
        }
        ykeys = ykeys.sort();
        processedData = [];
        
        for (var date in currentWeek){
            if (currentWeek.hasOwnProperty(date)){
                processedData.push(currentWeek[date]);
            }
        }
         
        console.log(currentWeek);
        console.log(processedData);
        console.log(ykeys)
        
        salesChart = Morris.Line({
        element: 'AAIP-line-chart',
        xkey: 'period',
        ykeys: ykeys,
        labels: ykeys,
        lineColors: ['#003399','#E3170D','#79CDCD','#ff6600','#ffcc00','#009900'],
        pointSize: 4,
        hideHover: 'auto',
        resize: true,
        gridStrokeWidth: 0.4,
        lineWidth: 3,
        pointStrokeColors: ["#efefef"],
        bezierCurve: true,
        datasetFill: true
    });
    salesChart.setData(processedData);
        
        
        
   }, renderNewFollowers : function(startDate, endDate, igfollowers, fbFollowers, twFollowers, site) {
        //var datasource2 = new Datasource();
        var callback = this.successCallbackNewFollowers;
        //console.log("HERE!!")
        $("#followerssalesForm").submit(function(e) {
            e.preventDefault();
            $('#followers-line-chart').html('');
            callback($("#followersstartDate").val(), $("#followersendDate").val(),igfollowers, fbFollowers, twFollowers, site);
        });
        //datasource2.getFollowers(null, null, site, callback);
        this.successCallbackNewFollowers(startDate, endDate, igfollowers, fbFollowers, twFollowers, site);

    }, successCallbackNewFollowers : function(start, end, igFollowers, fbFollowers, twFollowers, site) {
        //$TODO$ validate followers
        function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
		
		groupedData = igFollowers.concat(fbFollowers.concat(twFollowers));
		returnData = [];
		
		
		function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        function getDateIBDB(date){
			var splitDate = date.split("/");
			var year = "20"+splitDate[2]
			return (year+"-"+splitDate[0]+"-"+splitDate[1])
		}
		
		if (start == null || start == ''){
            returnData = groupedData;
        } else {
        	var startSplit = start.split("/");
			var endSplit = end.split("/");
			for (i=0;i<groupedData.length;i++){
           		var item = groupedData[i];
		   		var tempDate = getDateIBDB(String(item.date));
		   		var dumSplit = tempDate.split("-");
		   		if ((gd(dumSplit[0],dumSplit[1],dumSplit[2]) >= gd(startSplit[2], startSplit[0], startSplit[1])) && (gd(dumSplit[0],dumSplit[1],dumSplit[2]) <= gd(endSplit[2], endSplit[0], endSplit[1]))){
	            	//console.log(item);
					returnData.push(item);
            	} 
        	}
        }
		
        var currentDay = {};
        var ykeys = [];

        for (var i = 0; i < returnData.length; i++) {
            var item = returnData[i];
            var properDate = getDateIBDB(item.date);
            if (site == "all" || item.name == site){
            if (!currentDay[properDate]) {
                currentDay[properDate] = {
                    period: properDate
                };
            }
            if (ykeys.indexOf(item.name) <= -1) {
                ykeys.push(item.name);
            }
            var thisDate = currentDay[properDate];
            thisDate[item.name] = item.newFollowers;
            }
        }
        ykeys = ykeys.sort();
        followerData = [];
        
        for (var date in currentDay){
            if (currentDay.hasOwnProperty(date)){
                followerData.push(currentDay[date]);
            }
        }
        
        var colors = [];
        if (site == "Instagram"){
	        colors = ['#A6631B'];
        } else if (site == "Twitter") {
	        colors = ['#00A9E0'];
        } else {
	        colors = ['#0033A0','#A6631B','#00A9E0','#ff6600','#ffcc00','#009900'];
        }

        
        followersChart = Morris.Line({
        element: 'followers-line-chart',
        xkey: 'period',
        ykeys: ykeys,
        labels: ykeys,
        goals: [0.0],
        goalStrokeWidth: 3,
        goalLineColors: ["#b30000"],
        xLabelAngle: 45,
        lineColors: colors,
        parseTime: false,
        pointSize: 4,
        hideHover: 'auto',
        resize: true,
        gridStrokeWidth: 0.4,
        lineWidth: 3,
        pointStrokeColors: ["#efefef"]
    });
    followersChart.setData(followerData);
        
        
        
   }
   
   
};

// setTimeout(function(){
// //$TODO$ nasty hack
//     $(document).ready(function() {
//         var controller = new Controller();
//         controller.renderTicketSaleGraph(null, null);
//         //controller.renderNewFollowers(null,null,"all");
//         controller.renderAAIPSaleGraph(null,null);
//         controller.renderMentionsGraph();
//         controller.renderDonutGraph();
//         console.log("BLASHHLASF");
//         // $("#salesForm").submit(function(e) {
//         //     e.preventDefault();
//         //     //controller.renderTicketSaleGraph($("#startDate").val(), $("#endDate").val());
//         //     console.log("button clicked!");
//         //     console.log($("#startDate").val() + $("#endDate").val());
//         // });
//     });

// }, 2000);



