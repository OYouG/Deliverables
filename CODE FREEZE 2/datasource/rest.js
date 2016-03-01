if (typeof Datasource == "undefined") {
    Datasource = {};
}

Datasource = function() {
    this.init();
};


Datasource.prototype = {
    init: function() {

    },
    
    
    getWebsiteVisitData : function (start, end, onYas) {
        var dummyData = [{
            date: "2015-11-1",
            visits: 2782
        }, {
            date: "2015-11-2",
            visits: 2967
        }, {
            date: "2015-11-3",
            visits: 3781
        }, {
            date: "2015-11-4",
            visits: 3283
        }, {
            date: "2015-11-5",
            visits: 3488
        }, {
            date: "2015-11-6",
            visits: 2915
        }, {
            date: "2015-11-7",
            visits: 3000
        }, {
            date: "2015-11-8",
            visits: 3138
        }, {
            date: "2015-11-9",
            visits: 3753
        }, {
            date: "2015-11-10",
            visits: 3223
        }, {
            date: "2015-11-11",
            visits: 3459
        }, {
            date: "2015-11-12",
            visits: 3236
        }, {
            date: "2015-11-13",
            visits: 2599
        }, {
            date: "2015-11-14",
            visits: 2676
        }, {
            date: "2015-11-15",
            visits: 2430
        }, {
            date: "2015-11-16",
            visits: 2397
        }, {
            date: "2015-11-17",
            visits: 2626
        }, {
            date: "2015-11-18",
            visits: 2559
        }, {
            date: "2015-11-19",
            visits: 2770
        }, {
            date: "2015-11-20",
            visits: 2378
        }, {
            date: "2015-11-21",
            visits: 2153
        }, {
            date: "2015-11-22",
            visits: 2265
        }, {
            date: "2015-11-23",
            visits: 2200
        }, {
            date: "2015-11-24",
            visits: 2004
        }];
        
        return onYas(dummyData);
    },
    
    getTicketSalesData : function(start, end, ifGood) {
        var dummyData = [{
            date: "2015-11-1",
            sales: 11
        }, {
            date: "2015-11-2",
            sales: 8
        }, {
            date: "2015-11-3",
            sales: 5
        }, {
            date: "2015-11-4",
            sales: 6
        }, {
            date: "2015-11-5",
            sales: 6
        }, {
            date: "2015-11-6",
            sales: 19
        }, {
            date: "2015-11-7",
            sales: 4
        }, {
            date: "2015-11-8",
            sales: 2
        }, {
            date: "2015-11-9",
            sales: 17
        }, {
            date: "2015-11-10",
            sales: 7
        }, {
            date: "2015-11-11",
            sales: 16
        }, {
            date: "2015-11-12",
            sales: 23
        }, {
            date: "2015-11-13",
            sales: 7
        }, {
            date: "2015-11-14",
            sales: 2
        }, {
            date: "2015-11-15",
            sales: 13
        }, 
        {
            date: "2015-11-16",
            sales: 21
        }, 
        {
            date: "2015-11-17",
            sales: 6
        }, 
        {
            date: "2015-11-18",
            sales: 11
        }, 
        {
            date: "2015-11-19",
            sales: 9
        }, 
        {
            date: "2015-11-20",
            sales: 9
        }, 
        {
            date: "2015-11-21",
            sales: 11
        }, 
        {
            date: "2015-11-22",
            sales: 6
        }, 
        {
            date: "2015-11-23",
            sales: 7
        }, 
        {
            date: "2015-11-24",
            sales: 6
        }
        ];
        
        return ifGood(dummyData);
    },
    
    getSentimentData : function(start, end, onGo){
        var dummyData = [{
            label: "Man",
            value: 586
        }, {
            label: "Woman",
            value: 988
        }];
        
        onGo(dummyData);
    },
    
    getMentionsData : function(start, end, onSuccess){
        var returnData = []
        var dummyData = [{
            mentionSource: "Tumblr",
            Total: 25711,
            Positive: 17143,
            negative: 1019
        }, {
            mentionSource: "Twitter",
            Total: 16752,
            Positive: 5683,
            negative: 461
        }, {
            mentionSource: "News Sources",
            Total: 4326,
            Positive: 3198,
            negative: 571
        }, {
            mentionSource: "Instagram",
            Total: 2609,
            Positive: 1111,
            negative: 184
        }, {
            mentionSource: "Wordpress",
            Total: 1921,
            Positive: 1532,
            negative: 165
        }, {
            mentionSource: "Facebook",
            Total: 1813,
            Positive: 1249,
            negative: 144
        }, {
            mentionSource: "YouTube",
            Total: 390,
            Positive: 80,
            negative: 10
        }, {
            mentionSource: "Blog",
            Total: 156,
            Positive: 100,
            negative: 22
        }, {
            mentionSource: "Google+",
            Total: 148,
            Positive: 97,
            negative: 9
        }, {
            mentionSource: "Reddit",
            Total: 57,
            Positive: 36,
            negative: 7
        }];
        
        onSuccess(dummyData);
    },

    getGrossTicketSales : function(start, end, onReady) {
        //$TODO$ to be replaced by an ajax call to the server
        var returnData = [];
        var dummyData = [{
            name: "Beautiful",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 955472

        },{
            name: "Beautiful",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 992794

        },{
            name: "Beautiful",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 979932

        },{
            name: "Beautiful",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 835956

        },{
            name: "Beautiful",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 1057901

        },{
            name: "Beautiful",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1045281

        },{
            name: "Beautiful",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1049011

        },{
            name: "Beautiful",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1033009

        },{
            name: "Beautiful",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1075886

        },{
            name: "Beautiful",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1124463

        },{
            name: "Beautiful",
            date: "2015-5-24", //$TODO$ might have to change it to date format later,
            gross: 1145564

        },{
            name: "Beautiful",
            date: "2015-5-31", //$TODO$ might have to change it to date format later,
            gross: 909617

        },{
            name: "Beautiful",
            date: "2015-6-7", //$TODO$ might have to change it to date format later,
            gross: 964024

        },{
            name: "Beautiful",
            date: "2015-6-14", //$TODO$ might have to change it to date format later,
            gross: 993724

        },{
            name: "Beautiful",
            date: "2015-6-21", //$TODO$ might have to change it to date format later,
            gross: 993120

        },{
            name: "Beautiful",
            date: "2015-6-28", //$TODO$ might have to change it to date format later,
            gross: 1054035

        },{
            name: "Beautiful",
            date: "2015-7-5", //$TODO$ might have to change it to date format later,
            gross: 860890

        },{
            name: "Beautiful",
            date: "2015-7-12", //$TODO$ might have to change it to date format later,
            gross: 918122

        },{
            name: "Beautiful",
            date: "2015-7-19", //$TODO$ might have to change it to date format later,
            gross: 1023704

        },{
            name: "Beautiful",
            date: "2015-7-26", //$TODO$ might have to change it to date format later,
            gross: 986399

        },{
            name: "Beautiful",
            date: "2015-8-2", //$TODO$ might have to change it to date format later,
            gross: 946124

        },{
            name: "Beautiful",
            date: "2015-8-9", //$TODO$ might have to change it to date format later,
            gross: 956185

        },{
            name: "Beautiful",
            date: "2015-8-16", //$TODO$ might have to change it to date format later,
            gross: 945696

        },{
            name: "Beautiful",
            date: "2015-8-23", //$TODO$ might have to change it to date format later,
            gross: 886955

        },{
            name: "Beautiful",
            date: "2015-8-30", //$TODO$ might have to change it to date format later,
            gross: 901998

        },{
            name: "Beautiful",
            date: "2015-9-6", //$TODO$ might have to change it to date format later,
            gross: 1031197

        },
        {
            name: "Aladdin",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1320261

        }, {
            name: "The Book of Mormon",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1540949

        },{
            name: "Wicked",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1818766

        },{
            name: "The Lion King",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 1824626

        },{
            name: "An American in Paris",
            date: "2015-3-15", //$TODO$ might have to change it to date format later,
            gross: 317917

        },{
            name: "Aladdin",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1445641

        },{
            name: "The Book of Mormon",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1547574

        },{
            name: "Wicked",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1855247

        },{
            name: "The Lion King",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 1901829

        },{
            name: "An American in Paris",
            date: "2015-3-22", //$TODO$ might have to change it to date format later,
            gross: 737241

        },{
            name: "Aladdin",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 1569812

        },{
            name: "The Book of Mormon",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 1529584

        },{
            name: "Wicked",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 1872149

        },{
            name: "The Lion King",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 2064202

        },{
            name: "An American in Paris",
            date: "2015-3-29", //$TODO$ might have to change it to date format later,
            gross: 859761

        },{
            name: "Aladdin",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 2024667

        },{
            name: "The Book of Mormon",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 1517640

        },{
            name: "Wicked",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 2358372

        },{
            name: "The Lion King",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 2633531

        },{
            name: "An American in Paris",
            date: "2015-4-5", //$TODO$ might have to change it to date format later,
            gross: 967150

        },{
            name: "Aladdin",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 1768354

        },{
            name: "The Book of Mormon",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 1517969

        },{
            name: "Wicked",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 2181861

        },{
            name: "The Lion King",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 2293061

        },{
            name: "An American in Paris",
            date: "2015-4-12", //$TODO$ might have to change it to date format later,
            gross: 967150

        },{
            name: "Aladdin",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1534573

        },{
            name: "The Book of Mormon",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1467289

        },{
            name: "Wicked",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1655748

        },{
            name: "The Lion King",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1843463

        },{
            name: "An American in Paris",
            date: "2015-4-19", //$TODO$ might have to change it to date format later,
            gross: 1149324

        },{
            name: "Aladdin",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1492453

        },{
            name: "The Book of Mormon",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1469646

        },{
            name: "Wicked",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1741459

        },{
            name: "The Lion King",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1972747

        },{
            name: "An American in Paris",
            date: "2015-4-26", //$TODO$ might have to change it to date format later,
            gross: 1235247

        },{
            name: "Aladdin",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1408343

        },{
            name: "The Book of Mormon",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1407987

        },{
            name: "Wicked",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1387456

        },{
            name: "The Lion King",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1908299

        },{
            name: "An American in Paris",
            date: "2015-5-3", //$TODO$ might have to change it to date format later,
            gross: 1220230

        },{
            name: "Aladdin",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1422347

        },{
            name: "The Book of Mormon",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1446130

        },{
            name: "Wicked",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1469322

        },{
            name: "The Lion King",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1701798

        },{
            name: "An American in Paris",
            date: "2015-5-10", //$TODO$ might have to change it to date format later,
            gross: 1280110

        },
        
        
        // LAUREN STARTED HERE
        {
            name: "An American in Paris",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1467289

        },{
            name: "Aladdin",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1467089

        },{
            name: "The Book of Mormon",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1534408

        },{
            name: "The Lion King",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1966567

        },{
            name: "Wicked",
            date: "2015-5-17", //$TODO$ might have to change it to date format later,
            gross: 1601725

        },
        
        //ZACH HERE
        {
            name: "An American in Paris",
            date: "2015-5-24", //$TODO$ might have to change it to date format later,
            gross: 1349932

        },{
            name: "Aladdin",
            date: "2015-5-24", //$TODO$ might have to change it to date format later,
            gross: 1516241

        },{
            name: "The Book of Mormon",
            date: "2015-5-24", //$TODO$ might have to change it to date format later,
            gross: 1551726

        },{
            name: "The Lion King",
            date: "2015-5-24", //$TODO$ might have to change it to date format later,
            gross: 2066573

        },{
            name: "Wicked",
            date: "2015-5-24", //$TODO$ might have to change it to date format later,
            gross: 1776153

        },
        {
            name: "An American in Paris",
            date: "2015-5-31", //$TODO$ might have to change it to date format later,
            gross: 1339416

        },{
            name: "Aladdin",
            date: "2015-5-31", //$TODO$ might have to change it to date format later,
            gross: 1469138

        },{
            name: "The Book of Mormon",
            date: "2015-5-31", //$TODO$ might have to change it to date format later,
            gross: 1417311

        },{
            name: "The Lion King",
            date: "2015-5-31", //$TODO$ might have to change it to date format later,
            gross: 2026910

        },{
            name: "Wicked",
            date: "2015-5-31", //$TODO$ might have to change it to date format later,
            gross: 1670922

        },{
            name: "An American in Paris",
            date: "2015-6-7", //$TODO$ might have to change it to date format later,
            gross: 1368733

        },{
            name: "Aladdin",
            date: "2015-6-7", //$TODO$ might have to change it to date format later,
            gross: 1535301

        },{
            name: "The Book of Mormon",
            date: "2015-6-7", //$TODO$ might have to change it to date format later,
            gross: 1478235

        },{
            name: "The Lion King",
            date: "2015-6-7", //$TODO$ might have to change it to date format later,
            gross: 1959636

        },{
            name: "Wicked",
            date: "2015-6-7", //$TODO$ might have to change it to date format later,
            gross: 1737141

        },
        {
            name: "An American in Paris",
            date: "2015-6-14", //$TODO$ might have to change it to date format later,
            gross: 1399818

        },{
            name: "Aladdin",
            date: "2015-6-14", //$TODO$ might have to change it to date format later,
            gross: 1592508

        },{
            name: "The Book of Mormon",
            date: "2015-6-14", //$TODO$ might have to change it to date format later,
            gross: 1494235

        },{
            name: "The Lion King",
            date: "2015-6-14", //$TODO$ might have to change it to date format later,
            gross: 2102748

        },{
            name: "Wicked",
            date: "2015-6-14", //$TODO$ might have to change it to date format later,
            gross: 1954144

        }
        ,
        {
            name: "An American in Paris",
            date: "2015-6-21", //$TODO$ might have to change it to date format later,
            gross: 1440627

        },{
            name: "Aladdin",
            date: "2015-6-21", //$TODO$ might have to change it to date format later,
            gross: 1625996

        },{
            name: "The Book of Mormon",
            date: "2015-6-21", //$TODO$ might have to change it to date format later,
            gross: 1517932

        },{
            name: "The Lion King",
            date: "2015-6-21", //$TODO$ might have to change it to date format later,
            gross: 2154719

        },{
            name: "Wicked",
            date: "2015-6-21", //$TODO$ might have to change it to date format later,
            gross: 1947674

        }
        ,
        {
            name: "An American in Paris",
            date: "2015-6-28", //$TODO$ might have to change it to date format later,
            gross: 1433432

        },{
            name: "Aladdin",
            date: "2015-6-28", //$TODO$ might have to change it to date format later,
            gross: 1644687

        },{
            name: "The Book of Mormon",
            date: "2015-6-28", //$TODO$ might have to change it to date format later,
            gross: 1524995

        },{
            name: "The Lion King",
            date: "2015-6-28", //$TODO$ might have to change it to date format later,
            gross: 2120670

        },{
            name: "Wicked",
            date: "2015-6-28", //$TODO$ might have to change it to date format later,
            gross: 2047143

        }
        ,
        {
            name: "An American in Paris",
            date: "2015-7-5", //$TODO$ might have to change it to date format later,
            gross: 1348052

        },{
            name: "Aladdin",
            date: "2015-7-5", //$TODO$ might have to change it to date format later,
            gross: 1598424

        },{
            name: "The Book of Mormon",
            date: "2015-7-5", //$TODO$ might have to change it to date format later,
            gross: 1382123

        },{
            name: "The Lion King",
            date: "2015-7-5", //$TODO$ might have to change it to date format later,
            gross: 2143344

        },{
            name: "Wicked",
            date: "2015-7-5", //$TODO$ might have to change it to date format later,
            gross: 1864235

        }
        ,
        {
            name: "An American in Paris",
            date: "2015-7-12", //$TODO$ might have to change it to date format later,
            gross: 1406874

        },{
            name: "Aladdin",
            date: "2015-7-12", //$TODO$ might have to change it to date format later,
            gross: 1787409

        },{
            name: "The Book of Mormon",
            date: "2015-7-12", //$TODO$ might have to change it to date format later,
            gross: 1450864

        },{
            name: "The Lion King",
            date: "2015-7-12", //$TODO$ might have to change it to date format later,
            gross: 2308891

        },{
            name: "Wicked",
            date: "2015-7-12", //$TODO$ might have to change it to date format later,
            gross: 1900091

        },{
            name: "Aladdin",
            date: "2015-7-19", //$TODO$ might have to change it to date format later,
            gross: 1833662

        },{
            name: "An American in Paris",
            date: "2015-7-19", //$TODO$ might have to change it to date format later,
            gross: 1439178

        },{
            name: "The Book of Mormon",
            date: "2015-7-19", //$TODO$ might have to change it to date format later,
            gross: 1654152

        },{
            name: "The Lion King",
            date: "2015-7-19", //$TODO$ might have to change it to date format later,
            gross: 2620016

        },{
            name: "Wicked",
            date: "2015-7-19", //$TODO$ might have to change it to date format later,
            gross: 2167815

        },
        {
            name: "Aladdin",
            date: "2015-7-26", //$TODO$ might have to change it to date format later,
            gross: 1831845

        },{
            name: "An American in Paris",
            date: "2015-7-26", //$TODO$ might have to change it to date format later,
            gross: 1429500

        },{
            name: "The Book of Mormon",
            date: "2015-7-26", //$TODO$ might have to change it to date format later,
            gross: 1505083

        },{
            name: "The Lion King",
            date: "2015-7-26", //$TODO$ might have to change it to date format later,
            gross: 2408501

        },{
            name: "Wicked",
            date: "2015-7-26", //$TODO$ might have to change it to date format later,
            gross: 2002631

        }
        ,{
            name: "Aladdin",
            date: "2015-8-2", //$TODO$ might have to change it to date format later,
            gross: 1854406

        },{
            name: "An American in Paris",
            date: "2015-8-2", //$TODO$ might have to change it to date format later,
            gross: 1388951

        },{
            name: "The Book of Mormon",
            date: "2015-8-2", //$TODO$ might have to change it to date format later,
            gross: 1474355

        },{
            name: "The Lion King",
            date: "2015-8-2", //$TODO$ might have to change it to date format later,
            gross: 2624288

        },{
            name: "Wicked",
            date: "2015-8-2", //$TODO$ might have to change it to date format later,
            gross: 2118401

        }
        ,{
            name: "Aladdin",
            date: "2015-8-9", //$TODO$ might have to change it to date format later,
            gross: 2078163

        },{
            name: "An American in Paris",
            date: "2015-8-9", //$TODO$ might have to change it to date format later,
            gross: 1356715

        },{
            name: "The Book of Mormon",
            date: "2015-8-9", //$TODO$ might have to change it to date format later,
            gross: 1605195

        },{
            name: "The Lion King",
            date: "2015-8-9", //$TODO$ might have to change it to date format later,
            gross: 2333537

        },{
            name: "Wicked",
            date: "2015-8-9", //$TODO$ might have to change it to date format later,
            gross: 1980056

        }
        ,{
            name: "Aladdin",
            date: "2015-8-16", //$TODO$ might have to change it to date format later,
            gross: 1778617

        },{
            name: "An American in Paris",
            date: "2015-8-16", //$TODO$ might have to change it to date format later,
            gross: 1286907

        },{
            name: "The Book of Mormon",
            date: "2015-8-16", //$TODO$ might have to change it to date format later,
            gross: 1448473

        },{
            name: "The Lion King",
            date: "2015-8-16", //$TODO$ might have to change it to date format later,
            gross: 2165067

        },{
            name: "Wicked",
            date: "2015-8-16", //$TODO$ might have to change it to date format later,
            gross: 1913037

        }
        ,{
            name: "Aladdin",
            date: "2015-8-23", //$TODO$ might have to change it to date format later,
            gross: 1720395

        },{
            name: "An American in Paris",
            date: "2015-8-23", //$TODO$ might have to change it to date format later,
            gross: 1241466

        },{
            name: "The Book of Mormon",
            date: "2015-8-23", //$TODO$ might have to change it to date format later,
            gross: 1443333

        },{
            name: "The Lion King",
            date: "2015-8-23", //$TODO$ might have to change it to date format later,
            gross: 1986190

        },{
            name: "Wicked",
            date: "2015-8-23", //$TODO$ might have to change it to date format later,
            gross: 1751974

        }
        ,{
            name: "Aladdin",
            date: "2015-8-30", //$TODO$ might have to change it to date format later,
            gross: 1582804

        },{
            name: "An American in Paris",
            date: "2015-8-30", //$TODO$ might have to change it to date format later,
            gross: 1175966

        },{
            name: "The Book of Mormon",
            date: "2015-8-30", //$TODO$ might have to change it to date format later,
            gross: 1420003

        },{
            name: "The Lion King",
            date: "2015-8-30", //$TODO$ might have to change it to date format later,
            gross: 1835217

        },{
            name: "Wicked",
            date: "2015-8-30", //$TODO$ might have to change it to date format later,
            gross: 1492152

        }
        ,{
            name: "Aladdin",
            date: "2015-9-6", //$TODO$ might have to change it to date format later,
            gross: 1530035

        },{
            name: "An American in Paris",
            date: "2015-9-6", //$TODO$ might have to change it to date format later,
            gross: 1202736

        },{
            name: "The Book of Mormon",
            date: "2015-9-6", //$TODO$ might have to change it to date format later,
            gross: 1508402

        },{
            name: "The Lion King",
            date: "2015-9-6", //$TODO$ might have to change it to date format later,
            gross: 1741459

        },{
            name: "Wicked",
            date: "2015-9-6", //$TODO$ might have to change it to date format later,
            gross: 1560536

        }
        ,{
            name: "Aladdin",
            date: "2015-9-13", //$TODO$ might have to change it to date format later,
            gross: 1386167

        },{
            name: "An American in Paris",
            date: "2015-9-13", //$TODO$ might have to change it to date format later,
            gross: 1233473

        },{
            name: "The Book of Mormon",
            date: "2015-9-13", //$TODO$ might have to change it to date format later,
            gross: 1438096

        },{
            name: "The Lion King",
            date: "2015-9-13", //$TODO$ might have to change it to date format later,
            gross: 1727320

        },{
            name: "Wicked",
            date: "2015-9-13", //$TODO$ might have to change it to date format later,
            gross: 1472235

        }
        ,{
            name: "Aladdin",
            date: "2015-9-20", //$TODO$ might have to change it to date format later,
            gross: 1450679

        },{
            name: "An American in Paris",
            date: "2015-9-20", //$TODO$ might have to change it to date format later,
            gross: 1373884

        },{
            name: "The Book of Mormon",
            date: "2015-9-20", //$TODO$ might have to change it to date format later,
            gross: 1478349

        },{
            name: "The Lion King",
            date: "2015-9-20", //$TODO$ might have to change it to date format later,
            gross: 1791791

        },{
            name: "Wicked",
            date: "2015-9-20", //$TODO$ might have to change it to date format later,
            gross: 1570534

        }
        ,{
            name: "Aladdin",
            date: "2015-9-27", //$TODO$ might have to change it to date format later,
            gross: 1347833

        },{
            name: "An American in Paris",
            date: "2015-9-27", //$TODO$ might have to change it to date format later,
            gross: 1301184

        },{
            name: "The Book of Mormon",
            date: "2015-9-27", //$TODO$ might have to change it to date format later,
            gross: 1489768

        },{
            name: "The Lion King",
            date: "2015-9-27", //$TODO$ might have to change it to date format later,
            gross: 1758556

        },{
            name: "Wicked",
            date: "2015-9-27", //$TODO$ might have to change it to date format later,
            gross: 1426155

        }
        ,{
            name: "Aladdin",
            date: "2015-10-4", //$TODO$ might have to change it to date format later,
            gross: 1365965

        },{
            name: "An American in Paris",
            date: "2015-10-4", //$TODO$ might have to change it to date format later,
            gross: 1351218

        },{
            name: "The Book of Mormon",
            date: "2015-10-4", //$TODO$ might have to change it to date format later,
            gross: 1489412

        },{
            name: "The Lion King",
            date: "2015-10-4", //$TODO$ might have to change it to date format later,
            gross: 1892393

        },{
            name: "Wicked",
            date: "2015-10-4", //$TODO$ might have to change it to date format later,
            gross: 1454569

        }
        
        ,{
            name: "Aladdin",
            date: "2015-10-11", //$TODO$ might have to change it to date format later,
            gross: 1641903

        },{
            name: "An American in Paris",
            date: "2015-10-11", //$TODO$ might have to change it to date format later,
            gross: 1423524

        },{
            name: "The Book of Mormon",
            date: "2015-10-11", //$TODO$ might have to change it to date format later,
            gross: 1576943

        },{
            name: "The Lion King",
            date: "2015-10-11", //$TODO$ might have to change it to date format later,
            gross: 2033230

        },{
            name: "Wicked",
            date: "2015-10-11", //$TODO$ might have to change it to date format later,
            gross: 1765268

        }
        
        
        
        
        // LAUREN
        ,{
            name: "An American in Paris",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            gross: 1349302

        },{
            name: "An American in Paris",
            date: "2015-12-27", //$TODO$ might have to change it to date format later,
            gross: 1282028

        },{
            name: "An American in Paris",
            date: "2015-12-20", //$TODO$ might have to change it to date format later,
            gross: 1065073

        },{
            name: "An American in Paris",
            date: "2015-12-13", //$TODO$ might have to change it to date format later,
            gross: 1274776

        },{
            name: "An American in Paris",
            date: "2015-12-6", //$TODO$ might have to change it to date format later,
            gross: 1369903

        },{
            name: "An American in Paris",
            date: "2015-11-29", //$TODO$ might have to change it to date format later,
            gross: 1305328

        },{
            name: "An American in Paris",
            date: "2015-11-22", //$TODO$ might have to change it to date format later,
            gross: 1182624

        },{
            name: "An American in Paris",
            date: "2015-11-15", //$TODO$ might have to change it to date format later,
            gross: 1284816

        }
        //ALADDIN
        ,{
            name: "Aladdin",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            gross: 2398110

        },{
            name: "Aladdin",
            date: "2015-12-27", //$TODO$ might have to change it to date format later,
            gross: 2095363

        },{
            name: "Aladdin",
            date: "2015-12-20", //$TODO$ might have to change it to date format later,
            gross: 1704819

        },{
            name: "Aladdin",
            date: "2015-12-13", //$TODO$ might have to change it to date format later,
            gross: 1586493

        },{
            name: "Aladdin",
            date: "2015-12-6", //$TODO$ might have to change it to date format later,
            gross: 1605875

        },{
            name: "Aladdin",
            date: "2015-11-29", //$TODO$ might have to change it to date format later,
            gross: 2048348

        },{
            name: "Aladdin",
            date: "2015-11-22", //$TODO$ might have to change it to date format later,
            gross: 1348846

        },{
            name: "Aladdin",
            date: "2015-11-15", //$TODO$ might have to change it to date format later,
            gross: 1467772

        }
        //WICKED
        ,{
            name: "Wicked",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            gross: 2940096

        },{
            name: "Wicked",
            date: "2015-12-27", //$TODO$ might have to change it to date format later,
            gross: 2400920

        },{
            name: "Wicked",
            date: "2015-12-20", //$TODO$ might have to change it to date format later,
            gross: 1903218

        },{
            name: "Wicked",
            date: "2015-12-13", //$TODO$ might have to change it to date format later,
            gross: 1732290

        },{
            name: "Wicked",
            date: "2015-12-6", //$TODO$ might have to change it to date format later,
            gross: 1683339

        },{
            name: "Wicked",
            date: "2015-11-29", //$TODO$ might have to change it to date format later,
            gross: 2290873

        },{
            name: "Wicked",
            date: "2015-11-22", //$TODO$ might have to change it to date format later,
            gross: 1508157

        },{
            name: "Wicked",
            date: "2015-11-15", //$TODO$ might have to change it to date format later,
            gross: 1646786

        }
        //BOOK OF MORMON
        ,{
            name: "The Book of Mormon",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            gross: 2024550

        },{
            name: "The Book of Mormon",
            date: "2015-12-27", //$TODO$ might have to change it to date format later,
            gross: 1891355

        },{
            name: "The Book of Mormon",
            date: "2015-12-20", //$TODO$ might have to change it to date format later,
            gross: 1613033

        },{
            name: "The Book of Mormon",
            date: "2015-12-13", //$TODO$ might have to change it to date format later,
            gross: 1593849

        },{
            name: "The Book of Mormon",
            date: "2015-12-6", //$TODO$ might have to change it to date format later,
            gross: 1536444

        },{
            name: "The Book of Mormon",
            date: "2015-11-29", //$TODO$ might have to change it to date format later,
            gross: 1771091

        },{
            name: "The Book of Mormon",
            date: "2015-11-22", //$TODO$ might have to change it to date format later,
            gross: 1402841

        },{
            name: "The Book of Mormon",
            date: "2015-11-15", //$TODO$ might have to change it to date format later,
            gross: 1487213

        }
        
        //LION KING
        ,{
            name: "The Lion King",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            gross: 2878505

        },{
            name: "The Lion King",
            date: "2015-12-27", //$TODO$ might have to change it to date format later,
            gross: 2588075

        },{
            name: "The Lion King",
            date: "2015-12-20", //$TODO$ might have to change it to date format later,
            gross: 2152296

        },{
            name: "The Lion King",
            date: "2015-12-13", //$TODO$ might have to change it to date format later,
            gross: 2008986

        },{
            name: "The Lion King",
            date: "2015-12-6", //$TODO$ might have to change it to date format later,
            gross: 1983820

        },{
            name: "The Lion King",
            date: "2015-11-29", //$TODO$ might have to change it to date format later,
            gross: 2436498

        },{
            name: "The Lion King",
            date: "2015-11-22", //$TODO$ might have to change it to date format later,
            gross: 1712500

        },{
            name: "The Lion King",
            date: "2015-11-15", //$TODO$ might have to change it to date format later,
            gross: 1633344

        }
        
        //new start
        ,{
            name: "Aladdin",
            date: "2015-11-8", //$TODO$ might have to change it to date format later,
            gross: 1486244

        },{
            name: "An American in Paris",
            date: "2015-11-8", //$TODO$ might have to change it to date format later,
            gross: 1300297

        },{
            name: "The Book of Mormon",
            date: "2015-11-8", //$TODO$ might have to change it to date format later,
            gross: 1500520

        },{
            name: "The Lion King",
            date: "2015-11-8", //$TODO$ might have to change it to date format later,
            gross: 1500520

        },{
            name: "Wicked",
            date: "2015-11-8", //$TODO$ might have to change it to date format later,
            gross: 1583873

        },
        //
        {
            name: "Aladdin",
            date: "2015-11-1", //$TODO$ might have to change it to date format later,
            gross: 1243825

        },{
            name: "An American in Paris",
            date: "2015-11-1", //$TODO$ might have to change it to date format later,
            gross: 1122825

        },{
            name: "The Book of Mormon",
            date: "2015-11-1", //$TODO$ might have to change it to date format later,
            gross: 1377009

        },{
            name: "The Lion King",
            date: "2015-11-1", //$TODO$ might have to change it to date format later,
            gross: 1640663

        },{
            name: "Wicked",
            date: "2015-11-1", //$TODO$ might have to change it to date format later,
            gross: 1346649

        },
        //
        {
            name: "Aladdin",
            date: "2015-10-25", //$TODO$ might have to change it to date format later,
            gross: 1500798

        },{
            name: "An American in Paris",
            date: "2015-10-25", //$TODO$ might have to change it to date format later,
            gross: 1416287

        },{
            name: "The Book of Mormon",
            date: "2015-10-25", //$TODO$ might have to change it to date format later,
            gross: 1483464

        },{
            name: "The Lion King",
            date: "2015-10-25", //$TODO$ might have to change it to date format later,
            gross: 1901907

        },{
            name: "Wicked",
            date: "2015-10-25", //$TODO$ might have to change it to date format later,
            gross: 1621056

        },
        //
        {
            name: "Aladdin",
            date: "2015-10-18", //$TODO$ might have to change it to date format later,
            gross: 1558093

        },{
            name: "An American in Paris",
            date: "2015-10-18", //$TODO$ might have to change it to date format later,
            gross: 1402823

        },{
            name: "The Book of Mormon",
            date: "2015-10-18", //$TODO$ might have to change it to date format later,
            gross: 1497672

        },{
            name: "The Lion King",
            date: "2015-10-18", //$TODO$ might have to change it to date format later,
            gross: 1932132

        },{
            name: "Wicked",
            date: "2015-10-18", //$TODO$ might have to change it to date format later,
            gross: 1720707

        },
        //FIDDLER
        {
            name: "Fiddler on the Roof",
            date: "2015-11-22", //$TODO$ might have to change it to date format later,
            gross: 490058

        },{
            name: "Fiddler on the Roof",
            date: "2015-11-29", //$TODO$ might have to change it to date format later,
            gross: 1221715	

        },{
            name: "Fiddler on the Roof",
            date: "2015-12-6", //$TODO$ might have to change it to date format later,
            gross: 1062494

        },{
            name: "Fiddler on the Roof",
            date: "2015-12-13", //$TODO$ might have to change it to date format later,
            gross: 1047622

        },{
            name: "Fiddler on the Roof",
            date: "2015-12-20", //$TODO$ might have to change it to date format later,
            gross: 837216

        },{
            name: "Fiddler on the Roof",
            date: "2015-12-27", //$TODO$ might have to change it to date format later,
            gross: 1339255

        },{
            name: "Fiddler on the Roof",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            gross: 1725263

        },
        
        //BEAUTIFUL
        {
            name: "Beautiful",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            gross: 1042634

        },{
            name: "Beautiful",
            date: "2015-12-27", //$TODO$ might have to change it to date format later,
            gross: 975638

        },{
            name: "Beautiful",
            date: "2015-12-20", //$TODO$ might have to change it to date format later,
            gross: 939618

        },{
            name: "Beautiful",
            date: "2015-12-13", //$TODO$ might have to change it to date format later,
            gross: 1137047

        },{
            name: "Beautiful",
            date: "2015-12-6", //$TODO$ might have to change it to date format later,
            gross: 1054458

        },{
            name: "Beautiful",
            date: "2015-11-29", //$TODO$ might have to change it to date format later,
            gross: 970794

        },{
            name: "Beautiful",
            date: "2015-11-22", //$TODO$ might have to change it to date format later,
            gross: 949971

        },{
            name: "Beautiful",
            date: "2015-11-15", //$TODO$ might have to change it to date format later,
            gross: 1059125

        },{
            name: "Beautiful",
            date: "2015-11-8", //$TODO$ might have to change it to date format later,
            gross: 1016469

        },{
            name: "Beautiful",
            date: "2015-11-1", //$TODO$ might have to change it to date format later,
            gross: 872132

        },{
            name: "Beautiful",
            date: "2015-10-25", //$TODO$ might have to change it to date format later,
            gross: 1075200

        },{
            name: "Beautiful",
            date: "2015-10-18", //$TODO$ might have to change it to date format later,
            gross: 1063244

        },{
            name: "Beautiful",
            date: "2015-10-11", //$TODO$ might have to change it to date format later,
            gross: 1124410

        },{
            name: "Beautiful",
            date: "2015-10-4", //$TODO$ might have to change it to date format later,
            gross: 1047531

        },{
            name: "Beautiful",
            date: "2015-9-27", //$TODO$ might have to change it to date format later,
            gross: 1042971

        },{
            name: "Beautiful",
            date: "2015-9-20", //$TODO$ might have to change it to date format later,
            gross: 1022112

        },{
            name: "Beautiful",
            date: "2015-9-13", //$TODO$ might have to change it to date format later,
            gross: 1022112

        }
        ];
        
        console.log("start: " + (start==null));
        console.log("end: " + end);
        console.log("dummyData: " + dummyData);
        
        if (start == null || start == ''){
            onReady(dummyData);
        } else {
            
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        var startSplit = start.split("/");
        var endSplit = end.split("/");
        console.log(start);
        //console.log("TEST: " + (gd(dumSplit[0],dumSplit[1],dumSplit[2]) >= gd(startSplit[2], startSplit[1], startSplit[0])) + " - END TEST: " + (gd(dumSplit[0],dumSplit[1],dumSplit[2]) <= gd(endSplit[2], endSplit[1], endSplit[0])));
        for (i=0;i<dummyData.length;i++){
            var item = dummyData[i];
            var dumSplit = item.date.split("-");
            if ((gd(dumSplit[0],dumSplit[1],dumSplit[2]) >= gd(startSplit[2], startSplit[0], startSplit[1])) && (gd(dumSplit[0],dumSplit[1],dumSplit[2]) <= gd(endSplit[2], endSplit[0], endSplit[1]))){
                returnData.push(item);
            } 
        }
        onReady(returnData);
        }
    },
        getFollowers : function(start, end, site, onReady) {
        //$TODO$ to be replaced by an ajax call to the server
        var returnData = [];
        var dummyData = [{
            name: "Twitter",
            date: "2016-1-1", //$TODO$ might have to change it to date format later,
            followers: 100

        },{
            name: "Twitter",
            date: "2016-1-2", //$TODO$ might have to change it to date format later,
            followers: 157

        },{
            name: "Twitter",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            followers: 64

        },{
            name: "Twitter",
            date: "2016-1-4", //$TODO$ might have to change it to date format later,
            followers: 22

        },{
            name: "Twitter",
            date: "2016-1-5", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Twitter",
            date: "2016-1-6", //$TODO$ might have to change it to date format later,
            followers: -15

        },{
            name: "Twitter",
            date: "2016-1-7", //$TODO$ might have to change it to date format later,
            followers: -5

        },{
            name: "Twitter",
            date: "2016-1-8", //$TODO$ might have to change it to date format later,
            followers: 16

        },{
            name: "Twitter",
            date: "2016-1-9", //$TODO$ might have to change it to date format later,
            followers: 54

        },{
            name: "Twitter",
            date: "2016-1-10", //$TODO$ might have to change it to date format later,
            followers: 227

        },{
            name: "Twitter",
            date: "2016-1-11", //$TODO$ might have to change it to date format later,
            followers: 278

        },{
            name: "Twitter",
            date: "2016-1-12", //$TODO$ might have to change it to date format later,
            followers: 250

        },{
            name: "Twitter",
            date: "2016-1-13", //$TODO$ might have to change it to date format later,
            followers: 200

        },{
            name: "Twitter",
            date: "2016-1-14", //$TODO$ might have to change it to date format later,
            followers: 140

        },{
            name: "Twitter",
            date: "2016-1-15", //$TODO$ might have to change it to date format later,
            followers: 105

        },{
            name: "Twitter",
            date: "2016-1-16", //$TODO$ might have to change it to date format later,
            followers: 60

        },{
            name: "Twitter",
            date: "2016-1-17", //$TODO$ might have to change it to date format later,
            followers: 55

        },{
            name: "Twitter",
            date: "2016-1-18", //$TODO$ might have to change it to date format later,
            followers: 27

        },{
            name: "Twitter",
            date: "2016-1-19", //$TODO$ might have to change it to date format later,
            followers: 13

        },{
            name: "Twitter",
            date: "2016-1-20", //$TODO$ might have to change it to date format later,
            followers: 15

        },{
            name: "Twitter",
            date: "2016-1-21", //$TODO$ might have to change it to date format later,
            followers: 11

        },{
            name: "Twitter",
            date: "2016-1-22", //$TODO$ might have to change it to date format later,
            followers: 12

        },{
            name: "Twitter",
            date: "2016-1-23", //$TODO$ might have to change it to date format later,
            followers: 19

        },{
            name: "Twitter",
            date: "2016-1-24", //$TODO$ might have to change it to date format later,
            followers: 24

        },{
            name: "Twitter",
            date: "2016-1-25", //$TODO$ might have to change it to date format later,
            followers: 5

        },{
            name: "Twitter",
            date: "2016-1-26", //$TODO$ might have to change it to date format later,
            followers: 44

        },{
            name: "Twitter",
            date: "2016-1-27", //$TODO$ might have to change it to date format later,
            followers: 48

        },{
            name: "Twitter",
            date: "2016-1-28", //$TODO$ might have to change it to date format later,
            followers: 57

        },{
            name: "Twitter",
            date: "2016-1-29", //$TODO$ might have to change it to date format later,
            followers: 68

        },{
            name: "Twitter",
            date: "2016-1-30", //$TODO$ might have to change it to date format later,
            followers: 71

        },{
            name: "Twitter",
            date: "2016-1-31", //$TODO$ might have to change it to date format later,
            followers: 85

        },{
            name: "Tumblr",
            date: "2016-1-1", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Tumblr",
            date: "2016-1-2", //$TODO$ might have to change it to date format later,
            followers: 15

        },{
            name: "Tumblr",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            followers: 54

        },{
            name: "Tumblr",
            date: "2016-1-4", //$TODO$ might have to change it to date format later,
            followers: 72

        },{
            name: "Tumblr",
            date: "2016-1-5", //$TODO$ might have to change it to date format later,
            followers: 80

        },{
            name: "Tumblr",
            date: "2016-1-6", //$TODO$ might have to change it to date format later,
            followers: 55

        },{
            name: "Tumblr",
            date: "2016-1-7", //$TODO$ might have to change it to date format later,
            followers: 20

        },{
            name: "Tumblr",
            date: "2016-1-8", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Tumblr",
            date: "2016-1-9", //$TODO$ might have to change it to date format later,
            followers: 5

        },{
            name: "Tumblr",
            date: "2016-1-10", //$TODO$ might have to change it to date format later,
            followers: 45

        },{
            name: "Tumblr",
            date: "2016-1-11", //$TODO$ might have to change it to date format later,
            followers: 87

        },{
            name: "Tumblr",
            date: "2016-1-12", //$TODO$ might have to change it to date format later,
            followers: 104

        },{
            name: "Tumblr",
            date: "2016-1-13", //$TODO$ might have to change it to date format later,
            followers: 156

        },{
            name: "Tumblr",
            date: "2016-1-14", //$TODO$ might have to change it to date format later,
            followers: 187

        },{
            name: "Tumblr",
            date: "2016-1-15", //$TODO$ might have to change it to date format later,
            followers: 227

        },{
            name: "Tumblr",
            date: "2016-1-16", //$TODO$ might have to change it to date format later,
            followers: 287

        },{
            name: "Tumblr",
            date: "2016-1-17", //$TODO$ might have to change it to date format later,
            followers: 210

        },{
            name: "Tumblr",
            date: "2016-1-18", //$TODO$ might have to change it to date format later,
            followers: 150

        },{
            name: "Tumblr",
            date: "2016-1-19", //$TODO$ might have to change it to date format later,
            followers: 105

        },{
            name: "Tumblr",
            date: "2016-1-20", //$TODO$ might have to change it to date format later,
            followers: 100

        },{
            name: "Tumblr",
            date: "2016-1-21", //$TODO$ might have to change it to date format later,
            followers: 75

        },{
            name: "Tumblr",
            date: "2016-1-22", //$TODO$ might have to change it to date format later,
            followers: 64

        },{
            name: "Tumblr",
            date: "2016-1-23", //$TODO$ might have to change it to date format later,
            followers: 35

        },{
            name: "Tumblr",
            date: "2016-1-24", //$TODO$ might have to change it to date format later,
            followers: 22

        },{
            name: "Tumblr",
            date: "2016-1-25", //$TODO$ might have to change it to date format later,
            followers: 27

        },{
            name: "Tumblr",
            date: "2016-1-26", //$TODO$ might have to change it to date format later,
            followers: 18

        },{
            name: "Tumblr",
            date: "2016-1-27", //$TODO$ might have to change it to date format later,
            followers: 24

        },{
            name: "Tumblr",
            date: "2016-1-28", //$TODO$ might have to change it to date format later,
            followers: 17

        },{
            name: "Tumblr",
            date: "2016-1-29", //$TODO$ might have to change it to date format later,
            followers: 26

        },{
            name: "Tumblr",
            date: "2016-1-30", //$TODO$ might have to change it to date format later,
            followers: 32

        },{
            name: "Tumblr",
            date: "2016-1-31", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Facebook",
            date: "2016-1-1", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Facebook",
            date: "2016-1-2", //$TODO$ might have to change it to date format later,
            followers: 11

        },{
            name: "Facebook",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Facebook",
            date: "2016-1-4", //$TODO$ might have to change it to date format later,
            followers: 5

        },{
            name: "Facebook",
            date: "2016-1-5", //$TODO$ might have to change it to date format later,
            followers: 7

        },{
            name: "Facebook",
            date: "2016-1-6", //$TODO$ might have to change it to date format later,
            followers: 2

        },{
            name: "Facebook",
            date: "2016-1-7", //$TODO$ might have to change it to date format later,
            followers: 6

        },{
            name: "Facebook",
            date: "2016-1-8", //$TODO$ might have to change it to date format later,
            followers: 18

        },{
            name: "Facebook",
            date: "2016-1-9", //$TODO$ might have to change it to date format later,
            followers: 17

        },{
            name: "Facebook",
            date: "2016-1-10", //$TODO$ might have to change it to date format later,
            followers: 5

        },{
            name: "Facebook",
            date: "2016-1-11", //$TODO$ might have to change it to date format later,
            followers: 1

        },{
            name: "Facebook",
            date: "2016-1-12", //$TODO$ might have to change it to date format later,
            followers: 4

        },{
            name: "Facebook",
            date: "2016-1-13", //$TODO$ might have to change it to date format later,
            followers: 7

        },{
            name: "Facebook",
            date: "2016-1-14", //$TODO$ might have to change it to date format later,
            followers: 6

        },{
            name: "Facebook",
            date: "2016-1-15", //$TODO$ might have to change it to date format later,
            followers: 17

        },{
            name: "Facebook",
            date: "2016-1-16", //$TODO$ might have to change it to date format later,
            followers: 2

        },{
            name: "Facebook",
            date: "2016-1-17", //$TODO$ might have to change it to date format later,
            followers: 5

        },{
            name: "Facebook",
            date: "2016-1-18", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Facebook",
            date: "2016-1-19", //$TODO$ might have to change it to date format later,
            followers: 11

        },{
            name: "Facebook",
            date: "2016-1-20", //$TODO$ might have to change it to date format later,
            followers: 15

        },{
            name: "Facebook",
            date: "2016-1-21", //$TODO$ might have to change it to date format later,
            followers: 11

        },{
            name: "Facebook",
            date: "2016-1-22", //$TODO$ might have to change it to date format later,
            followers: 12

        },{
            name: "Facebook",
            date: "2016-1-23", //$TODO$ might have to change it to date format later,
            followers: 19

        },{
            name: "Facebook",
            date: "2016-1-24", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Facebook",
            date: "2016-1-25", //$TODO$ might have to change it to date format later,
            followers: 5

        },{
            name: "Facebook",
            date: "2016-1-26", //$TODO$ might have to change it to date format later,
            followers: 24

        },{
            name: "Facebook",
            date: "2016-1-27", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Facebook",
            date: "2016-1-28", //$TODO$ might have to change it to date format later,
            followers: 11

        },{
            name: "Facebook",
            date: "2016-1-29", //$TODO$ might have to change it to date format later,
            followers: 7

        },{
            name: "Facebook",
            date: "2016-1-30", //$TODO$ might have to change it to date format later,
            followers: 6

        },{
            name: "Facebook",
            date: "2016-1-31", //$TODO$ might have to change it to date format later,
            followers: 3

        },{
            name: "Instagram",
            date: "2016-1-1", //$TODO$ might have to change it to date format later,
            followers: 120

        },{
            name: "Instagram",
            date: "2016-1-2", //$TODO$ might have to change it to date format later,
            followers: 187

        },{
            name: "Instagram",
            date: "2016-1-3", //$TODO$ might have to change it to date format later,
            followers: 175

        },{
            name: "Instagram",
            date: "2016-1-4", //$TODO$ might have to change it to date format later,
            followers: 154

        },{
            name: "Instagram",
            date: "2016-1-5", //$TODO$ might have to change it to date format later,
            followers: 144

        },{
            name: "Instagram",
            date: "2016-1-6", //$TODO$ might have to change it to date format later,
            followers: 55

        },{
            name: "Instagram",
            date: "2016-1-7", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Instagram",
            date: "2016-1-8", //$TODO$ might have to change it to date format later,
            followers: -17

        },{
            name: "Instagram",
            date: "2016-1-9", //$TODO$ might have to change it to date format later,
            followers: -54

        },{
            name: "Instagram",
            date: "2016-1-10", //$TODO$ might have to change it to date format later,
            followers: -44

        },{
            name: "Instagram",
            date: "2016-1-11", //$TODO$ might have to change it to date format later,
            followers: -67

        },{
            name: "Instagram",
            date: "2016-1-12", //$TODO$ might have to change it to date format later,
            followers: -75

        },{
            name: "Instagram",
            date: "2016-1-13", //$TODO$ might have to change it to date format later,
            followers: -80

        },{
            name: "Instagram",
            date: "2016-1-14", //$TODO$ might have to change it to date format later,
            followers: -55

        },{
            name: "Instagram",
            date: "2016-1-15", //$TODO$ might have to change it to date format later,
            followers: -21

        },{
            name: "Instagram",
            date: "2016-1-16", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Instagram",
            date: "2016-1-17", //$TODO$ might have to change it to date format later,
            followers: 5

        },{
            name: "Instagram",
            date: "2016-1-18", //$TODO$ might have to change it to date format later,
            followers: 4

        },{
            name: "Instagram",
            date: "2016-1-19", //$TODO$ might have to change it to date format later,
            followers: 10

        },{
            name: "Instagram",
            date: "2016-1-20", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Instagram",
            date: "2016-1-21", //$TODO$ might have to change it to date format later,
            followers: 16

        },{
            name: "Instagram",
            date: "2016-1-22", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Instagram",
            date: "2016-1-23", //$TODO$ might have to change it to date format later,
            followers: 17

        },{
            name: "Instagram",
            date: "2016-1-24", //$TODO$ might have to change it to date format later,
            followers: 27

        },{
            name: "Instagram",
            date: "2016-1-25", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Instagram",
            date: "2016-1-26", //$TODO$ might have to change it to date format later,
            followers: 24

        },{
            name: "Instagram",
            date: "2016-1-27", //$TODO$ might have to change it to date format later,
            followers: 21

        },{
            name: "Instagram",
            date: "2016-1-28", //$TODO$ might have to change it to date format later,
            followers: 14

        },{
            name: "Instagram",
            date: "2016-1-29", //$TODO$ might have to change it to date format later,
            followers: 15

        },{
            name: "Instagram",
            date: "2016-1-30", //$TODO$ might have to change it to date format later,
            followers: 11

        },{
            name: "Instagram",
            date: "2016-1-31", //$TODO$ might have to change it to date format later,
            followers: 16

        }
        ];
        
        console.log("start: " + (start==null));
        console.log("end: " + end);
        console.log("dummyData: " + dummyData);
        
        if (start == null || start == ''){
            onReady(dummyData,site);
        } else {
            
        function gd(year, month, day) {
          return new Date(year, month - 1, day).getTime();
        }
        
        var startSplit = start.split("/");
        var endSplit = end.split("/");
        console.log(start);
        //console.log("TEST: " + (gd(dumSplit[0],dumSplit[1],dumSplit[2]) >= gd(startSplit[2], startSplit[1], startSplit[0])) + " - END TEST: " + (gd(dumSplit[0],dumSplit[1],dumSplit[2]) <= gd(endSplit[2], endSplit[1], endSplit[0])));
        for (i=0;i<dummyData.length;i++){
            var item = dummyData[i];
            var dumSplit = item.date.split("-");
            if ((gd(dumSplit[0],dumSplit[1],dumSplit[2]) >= gd(startSplit[2], startSplit[0], startSplit[1])) && (gd(dumSplit[0],dumSplit[1],dumSplit[2]) <= gd(endSplit[2], endSplit[0], endSplit[1]))){
                if((site=="all") || (item.name==site)){
                    returnData.push(item);
                }
            } 
        }
        onReady(returnData,site);
        }
    }
};