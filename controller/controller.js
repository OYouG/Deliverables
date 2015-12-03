/**
 * Created by GessicaTan-Torres on 11/18/15.
 */
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
            label: "Positive",
            value: 60
        }, {
            label: "Neutral",
            value: 33
        }, {
            label: "Neutral",
            value: 7
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
    
    
    renderTicketSaleGraph : function() {
        var datasource = new Datasource();
//$TODO$ need to pass valid start and end date when we have server code ready
        datasource.getGrossTicketSales(null, null, this.successCallbackLine);
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
        var processedData = [];
        
        for (var date in currentWeek){
            if (currentWeek.hasOwnProperty(date)){
                processedData.push(currentWeek[date]);
            }
        }
        
        console.log(currentWeek);
        console.log(processedData);
        console.log(ykeys)
        
        Morris.Line({
        element: 'morris-line-chart',
        data: processedData,
        xkey: 'period',
        ykeys: ykeys,
        labels: ykeys,
        lineColors: ['#003399','#660066','#ff6600','#ffcc00','#009900'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
        
        
        
   }
};

setTimeout(function(){
//$TODO$ nasty hack
    $(document).ready(function() {
        var controller = new Controller();
        controller.renderTicketSaleGraph();
        controller.renderMentionsGraph();
        controller.renderDonutGraph();
    });

}, 3000);



