if (typeof flotController == "undefined") {
    flotController = {};
}

flotController = function() {
    this.init();
};


flotController.prototype = {
    init: function() {

    },
    
    // renderFlotLineChart : function() {
    //     console.log("document ready");
    //     var offset = 0;
    //     plot();

    // function plot() {
    //     var sin = [],
    //         cos = [];
    //     for (var i = 0; i < 12; i += 0.2) {
    //         sin.push([i, Math.sin(i + offset)]);
    //         cos.push([i, Math.cos(i + offset)]);
    //     }

    //     var options = {
    //         series: {
    //             lines: {
    //                 show: true
    //             },
    //             points: {
    //                 show: true
    //             }
    //         },
    //         grid: {
    //             hoverable: true //IMPORTANT! this is needed for tooltip to work
    //         },
    //         yaxis: {
    //             min: -1.2,
    //             max: 1.2
    //         },
    //         tooltip: true,
    //         tooltipOpts: {
    //             content: "'%s' of %x.1 is %y.4",
    //             shifts: {
    //                 x: -60,
    //                 y: 25
    //             }
    //         }
    //     };

    //     var plotObj = $.plot($("#flot-line-chart"), [{
    //             data: sin,
    //             label: "sin(x)"
    //         }, {
    //             data: cos,
    //             label: "cos(x)"
    //         }],
    //         options);
    //     }
    // },

    // successCallbackSales : function(ticketSales) {
    //     var arrSales = ticketSales;
        
    //     function gd(year, month, day) {
    //       return new Date(year, month - 1, day).getTime();
    //     }
        
    //     for (var i = 0; i < arrSales.length; i++) {
    //         var oldDate = arrSales[i];
    //         var date = oldDate.date.toString();
    //         var arrDate = date.split("-");
    //         arrSales[i].date = gd(arrDate[0],arrDate[1],arrDate[2]);
    //     }
        
    //     return arrSales;
    // },
    
    // successCallbackVisits : function(visitsData) {
    //     var visits = visitsData;
        
    //     function gd(year, month, day) {
    //       return new Date(year, month - 1, day).getTime();
    //     }
        
    //     for (var i = 0; i < visits.length; i++) {
    //         var oldDate = visits[i];
    //         var date = oldDate.date.toString();
    //         var arrDate = date.split("-");
    //         visits[i].date = gd(arrDate[0],arrDate[1],arrDate[2]);
    //     }
    //     return visits;
    // },

    // renderCoreGraph2 : function() {
    //     var datasource = new Datasource();
    //     var salesArr = datasource.getTicketSalesData(null, null, this.successCallbackSales);
    //     var visitsArr = datasource.getWebsiteVisitData(null, null, this.successCallbackVisits);
    //     console.log(visitsArr);
    //     var data = [{
    //         label: "Ticket Sales",
    //         data: salesArr,
    //         yaxis: 2,
    //         bars: {
    //             show: true,
    //             align: "center",
    //             'barWidth': 24*60*60*100
    //         }
    //     },{
    //         label: "Website Visits",
    //         data: visitsArr,
    //         lines: {
    //             show: true,
    //             align: "center"
    //         },
    //         points:{
    //             show:true
    //         }
    //     }];
    //     var DATE_FORMAT = "%Y-%m-%d";
    //     var options = {
    //             xaxis: {
    //                 align: "center",
    //                 alignTicksWithAxis: 1,
    //                 mode: "time",
    //                 tickSize: [1, 'day'],
    //                 tickLength: 0,
    //                 timeformat: "%d %b",
    //                 minTickSize: 240,
    //             },
    //             yaxes: [
    //                 {position:"left"},
    //                 {position:"right"}
    //                 ],
    //             grid:{
    //               hoverable: true,
    //                 backgroundColor: "#ffffff"
    //             },
    //           tooltip: true,
    //           tooltipOpts: {
    //             content:function (label, x, y) {
    //                 var date = new Date(+x);
    //                 var tooltip = '<h3>' + label + '</h3><ul>';
    //                 tooltip += '<li>Date is ' + date.toLocaleDateString() + '</li>';
    //                 tooltip += '<li>Total Count: ' + y + '</li></ul>';
    //                 return tooltip;
    //             },
    //             shifts: {
    //                 x: 10,
    //                 y: -70
    //             }
    //         }
    //     };
 
    //     var plot = $.plot($("#testChart2 #flotcontainer2"), data, options);  
    // },
    
    
    renderCoreGraph : function() {
        var webVisits = [
        [gd(2015,12,14), 2782], [gd(2015,12,15), 2967], [gd(2015,12,16), 3781],
        [gd(2015,12,17), 3283], [gd(2015,12,18), 3488], [gd(2015,12,19), 2915],
        [gd(2015,12,20), 3000], [gd(2015,12,21), 3138], [gd(2015,12,22), 3753],
        [gd(2015,12,23), 3223], [gd(2015,12,24), 3459], [gd(2015,12,25), 3236],
        [gd(2015,12,26), 2599], [gd(2015,12,27), 2676], [gd(2015,12,28), 2430],
        [gd(2015,12,29), 2397], [gd(2015,12,30), 2626], [gd(2015,12,31), 2559],
        [gd(2016,1,1), 2770], [gd(2016,1,2), 2378], [gd(2016,1,3), 2153],
        [gd(2016,1,4), 2265], [gd(2016,1,5), 2200], [gd(2016,1,6), 2004]
        ];
    
        var ticketSales = [
        [gd(2015,12,14), 11], [gd(2015,12,15), 8], [gd(2015,12,16), 5],
        [gd(2015,12,17), 6], [gd(2015,12,18), 6], [gd(2015,12,19), 19],
        [gd(2015,12,20), 4], [gd(2015,12,21), 2], [gd(2015,12,22), 17],
        [gd(2015,12,23), 7], [gd(2015,12,24), 16], [gd(2015,12,25), 23],
        [gd(2015,12,26), 7], [gd(2015,12,27), 2], [gd(2015,12,28), 13],
        [gd(2015,12,29), 21], [gd(2015,12,30), 17], [gd(2015,12,31), 11],
        [gd(2016,1,1), 9], [gd(2016,1,2), 9], [gd(2016,1,3), 11],
        [gd(2016,1,4), 6], [gd(2016,1,5), 6], [gd(2016,1,6), 6]
        ];
 
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        var data = [{
            label: "Website Visits",
            data: webVisits,
            bars: {
                show: true,
                align: "center",
                'barWidth': 24*60*60*100
            }
        },{
            label: "Ticket Sales",
            data: ticketSales,
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
 
        var plot = $.plot($("#visits-sales #flotcontainer"), data, options);  
    }, 
    
    renderCoreGraphSVC : function() {
        // [gd(2015,11,1), 2782], [gd(2015,11,2), 2967], [gd(2015,11,3), 3781],
        // [gd(2015,11,4), 3283], [gd(2015,11,5), 3488], [gd(2015,11,6), 2915],
        // [gd(2015,11,7), 3000], [gd(2015,11,8), 3138], [gd(2015,11,9), 3753],
        // [gd(2015,11,10), 3223], [gd(2015,11,11), 3459], [gd(2015,11,12), 3236],
        // [gd(2015,11,13), 2599], [gd(2015,11,14), 2676], [gd(2015,11,15), 2430],
        // [gd(2015,11,16), 2397], [gd(2015,11,17), 2626], [gd(2015,11,18), 2559],
        // [gd(2015,11,19), 2770], [gd(2015,11,20), 2378], [gd(2015,11,21), 2153],
        // [gd(2015,11,22), 2265], [gd(2015,11,23), 2200], [gd(2015,11,24), 2004]
        // ];
    
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
    
        
        var sales = [
        [gd(2015,12,14), 11], [gd(2015,12,15), 8], [gd(2015,12,16), 5],
        [gd(2015,12,17), 6], [gd(2015,12,18), 6], [gd(2015,12,19), 19],
        [gd(2015,12,20), 4], [gd(2015,12,21), 2], [gd(2015,12,22), 17],
        [gd(2015,12,23), 7], [gd(2015,12,24), 16], [gd(2015,12,25), 23],
        [gd(2015,12,26), 7], [gd(2015,12,27), 2], [gd(2015,12,28), 13],
        [gd(2015,12,29), 21], [gd(2015,12,30), 17], [gd(2015,12,31), 11],
        [gd(2016,1,1), 9], [gd(2016,1,2), 9], [gd(2016,1,3), 11],
        [gd(2016,1,4), 6], [gd(2016,1,5), 6], [gd(2016,1,6), 6]
        ];
        
        
        var coms = [
        [gd(2016,1,1), 6], [gd(2016,1,2), 6], [gd(2016,1,3), 7],
        [gd(2016,1,4), 12], [gd(2016,1,5), 7], [gd(2016,1,6), 15]
        ];
 
        function gd(year, month, day) {
           return new Date(year, month - 1, day).getTime();
        }
        
        var data = [{
            label: "Website Visits",
            data: visits,
            bars: {
                show: true,
                align: "center",
                'barWidth': 24*60*60*100
            }
        },{
            label: "Ticket Sales",
            data: sales,
            yaxis: 2,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        },{
            label: "Commercials Shown",
            data: coms,
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
 
        var plot = $.plot($("#sales-visits-commercials #flotcontainerSales"), data, options);  
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
    
    
    renderCoreGraphSAC : function() {
        var adSpend = [
        [gd(2015,12,14), 1000], [gd(2015,12,15), 1000], [gd(2015,12,16), 1000],
        [gd(2015,12,17), 1000], [gd(2015,12,18), 1000], [gd(2015,12,19), 1000],
        [gd(2015,12,20), 1000], [gd(2015,12,21), 1430], [gd(2015,12,22), 1430],
        [gd(2015,12,23), 1430], [gd(2015,12,24), 1430], [gd(2015,12,25), 1430],
        [gd(2015,12,26), 1430], [gd(2015,12,27), 1430], [gd(2015,12,28), 1200],
        [gd(2015,12,29), 1200], [gd(2015,12,30), 1200], [gd(2015,12,31), 1200],
        [gd(2016,1,1), 3320], [gd(2016,1,2), 3320], [gd(2016,1,3), 3320],
        [gd(2016,1,4), 3320], [gd(2016,1,5), 3320], [gd(2016,1,6), 3320]
        ];
    
        var dollarSales = [
        [gd(2015,12,14), 496], [gd(2015,12,15), 792], [gd(2015,12,16), 1612],
        [gd(2015,12,17), 1282], [gd(2015,12,18), 1964], [gd(2015,12,19), 1872],
        [gd(2015,12,20), 316], [gd(2015,12,21), 194], [gd(2015,12,22), 1094],
        [gd(2015,12,23), 898], [gd(2015,12,24), 1129], [gd(2015,12,25), 423],
        [gd(2015,12,26), 410], [gd(2015,12,27), 1416], [gd(2015,12,28), 1440],
        [gd(2015,12,29), 0], [gd(2015,12,30), 2324], [gd(2015,12,31), 1798],
        [gd(2016,1,1), 2547], [gd(2016,1,2), 3492], [gd(2016,1,3), 4392],
        [gd(2016,1,4), 4508], [gd(2016,1,5), 3826], [gd(2016,1,6), 3526]
        ];
        
        var coms = [
        [gd(2016,1,1), 1], [gd(2016,1,2), 6], [gd(2016,1,3), 7],
        [gd(2016,1,4), 12], [gd(2016,1,5), 7], [gd(2016,1,6), 15]
        ];
 
        function gd(year, month, day) {
           return new Date(year, month - 1, day).getTime();
        }
        
        var data = [{
            label: "Commercials Shown",
            data: coms,
            bars: {
                show: true,
                align: "center",
                'barWidth': 24*60*60*100
            }
        },{
            label: "Ticket Sales",
            data: dollarSales,
            yaxis: 2,
            lines: {
                show: true,
                align: "center"
            },
            points:{
                show:true
            }
        },{
            label: "Advertisement Spending",
            data: adSpend,
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
 
        var plot = $.plot($("#sales-adspend-commercials #flotcontainerAds"), data, options);  
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

// setTimeout(function(){
// //$TODO$ nasty hack
//     $(document).ready(function() {
//         var controller = new flotController();
//       // controller.renderFlotLineChart();
//         controller.renderCoreGraphSVC();
//         controller.renderCoreGraph();
//         controller.renderCoreGraphSAC();
//         controller.renderShowGraph();
//         controller.renderCoreGraphCI();
//     });

// }, 3000);



