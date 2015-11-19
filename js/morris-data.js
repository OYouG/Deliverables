$(function() {

    Morris.Line({
        element: 'morris-line-chart',
        data: [{
            period: '2015-3-15',
            AAIP: 317917,
            Aladdin: 1320261,
            BoM: 1540949,
            LK: 1824626,
            Wicked: 1818766
        }, {
            period: '2015-3-22',
            AAIP: 737241,
            Aladdin: 1445641,
            BoM: 1547574,
            LK: 1901829,
            Wicked: 1855247
        }, {
            period: '2015-3-29',
            AAIP: 859761,
            Aladdin: 1569812,
            BoM: 1529584,
            LK: 2064202,
            Wicked: 1872149
        }, {
            period: '2015-4-5',
            AAIP: 967150,
            Aladdin: 2024667,
            BoM: 1517640,
            LK: 2633531,
            Wicked: 2358372
        }, {
            period: '2015-4-12',
            AAIP: 967150,
            Aladdin: 1768354,
            BoM: 1517969,
            LK: 2293061,
            Wicked: 2181861
        }, {
            period: '2015-4-19',
            AAIP: 1149324,
            Aladdin: 1534573,
            BoM: 1467289,
            LK: 1843463,
            Wicked: 1655748
        }, {
            period: '2015-4-26',
            AAIP: 1235247,
            Aladdin: 1492453,
            BoM: 1469646,
            LK: 1972747,
            Wicked: 1741459
        }, {
            period: '2015-5-3',
            AAIP: 1220230,
            Aladdin: 1408343,
            BoM: 1407987,
            LK: 1908299,
            Wicked: 1387456
        }, {
            period: '2015-5-10',
            AAIP: 1298817,
            Aladdin: 1422347,
            BoM: 1446130,
            LK: 1701798,
            Wicked: 1469322
        }, {
            period: '2015-5-17',
            AAIP: 1280110,
            Aladdin: 1467089,
            BoM: 1534408,
            LK: 1966567,
            Wicked: 1601725
        }],
        xkey: 'period',
        ykeys: ['AAIP', 'Aladdin', 'BoM','LK', 'Wicked'],
        labels: ['An American In Paris', 'Aladdin', 'Book of Mormon','Lion King', 'Wicked'],
        lineColors: ['#003399','#660066','#ff6600','#ffcc00','#009900'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
