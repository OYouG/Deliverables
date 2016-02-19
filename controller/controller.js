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
    
    
    renderTicketSaleGraph : function(startDate, endDate) {
        var datasource = new Datasource();
        var callback = this.successCallbackLine;
        $("#salesForm").submit(function(e) {
            e.preventDefault();
            //controller.renderTicketSaleGraph($("#startDate").val(), $("#endDate").val());
            console.log("button clicked!");
            console.log($("#startDate").val() + $("#endDate").val());
            console.log(callback);
            $('#morris-line-chart').html('');
            datasource.getGrossTicketSales($("#startDate").val(), $("#endDate").val(), callback);
            //salesChart.setData(processedData);
        });
//$TODO$ need to pass valid start and end date when we have server code ready
        // if ($("#startDate").val() != null) {
            
        // } else{
            datasource.getGrossTicketSales(null, null, callback);
    //    }
    },

    successCallbackLine : function(grossDataByPlay) {
        //$TODO$ validate grossDataByPlay
        var currentWeek = {};
        var ykeys = [];

        for (var i = 0; i < grossDataByPlay.length; i++) {
            var item = grossDataByPlay[i];
            if (!currentWeek[item.date]) {
                currentWeek[item.date] = {
                    period: item.date
                };
            }
            if (ykeys.indexOf(item.name) <= -1) {
                ykeys.push(item.name);
            }
            var thisDate = currentWeek[item.date];
            thisDate[item.name] = item.gross;
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
        
        
        
   },  renderAAIPSaleGraph : function(startDate, endDate) {
        var datasource = new Datasource();
        var callback = this.successCallbackAAIP;
        $("#AAIPsalesForm").submit(function(e) {
            e.preventDefault();
            //controller.renderTicketSaleGraph($("#startDate").val(), $("#endDate").val());
            console.log("button clicked!");
            console.log($("#AAIPstartDate").val() + $("#AAIPendDate").val());
            console.log(callback);
            $('#AAIP-line-chart').html('');
            datasource.getGrossTicketSales($("#AAIPstartDate").val(), $("#AAIPendDate").val(), callback);
            //salesChart.setData(processedData);
        });
        datasource.getGrossTicketSales(null, null, callback);

    }, successCallbackAAIP : function(grossDataByPlay) {
        //$TODO$ validate grossDataByPlay
        var currentWeek = {};
        var ykeys = [];

        for (var i = 0; i < grossDataByPlay.length; i++) {
            var item = grossDataByPlay[i];
            if (item.name == "An American in Paris"){
            if (!currentWeek[item.date]) {
                currentWeek[item.date] = {
                    period: item.date
                };
            }
            if (ykeys.indexOf(item.name) <= -1) {
                ykeys.push(item.name);
            }
            var thisDate = currentWeek[item.date];
            thisDate[item.name] = item.gross;
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
        
        
        
   }, renderNewFollowers : function(startDate, endDate, site) {
        var datasource2 = new Datasource();
        var callback = this.successCallbackNewFollowers;
        console.log("HERE!!")
        $("#followerssalesForm").submit(function(e) {
            e.preventDefault();
            //controller.renderTicketSaleGraph($("#startDate").val(), $("#endDate").val());
            console.log("button clicked!");
            console.log($("#followersstartDate").val() + $("#followersendDate").val());
            console.log(callback);
            $('#followers-line-chart').html('');
            datasource2.getFollowers($("#followersstartDate").val(), $("#followersendDate").val(), site, callback);
            //salesChart.setData(processedData);
        });
        datasource2.getFollowers(null, null, site, callback);

    }, successCallbackNewFollowers : function(followers, site) {
        //$TODO$ validate followers
        var currentDay = {};
        var ykeys = [];

        for (var i = 0; i < followers.length; i++) {
            var item = followers[i];
            if (site == "all" || item.name == site){
            if (!currentDay[item.date]) {
                currentDay[item.date] = {
                    period: item.date
                };
            }
            if (ykeys.indexOf(item.name) <= -1) {
                ykeys.push(item.name);
            }
            var thisDate = currentDay[item.date];
            thisDate[item.name] = item.followers;
            }
        }
        ykeys = ykeys.sort();
        followerData = [];
        
        for (var date in currentDay){
            if (currentDay.hasOwnProperty(date)){
                followerData.push(currentDay[date]);
            }
        }
        
        console.log(currentDay);
        console.log(followerData);
        console.log(ykeys)
        
        followersChart = Morris.Line({
        element: 'followers-line-chart',
        xkey: 'period',
        ykeys: ykeys,
        labels: ykeys,
        goals: [0.0],
        goalStrokeWidth: 3,
        goalLineColors: ["#b30000"],
        lineColors: ['#3385ff','#996433','#000066','#79CDCD','#ff6600','#ffcc00','#009900'],
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



