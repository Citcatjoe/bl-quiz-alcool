(function($){

    var optionsBitcoin = {
        series: [
        {
          name: "Open",
          data: [29278.31, 29230.87, 29704.15, 29161.81, 29174.38, 29075.39, 29043.7, 29038.51, 29180.02, 29766.7, 29563.97, 29424.9, 29399.79, 29416.59, 29283.26, 29408.05, 29169.07, 28699.8, 26636.08, 26047.83, 26096.86, 26188.69, 26130.75, 26040.47, 26431.52, 26163.68, 26047.23, 26008.24, 26089.62, 26102.49, 27726.08, 27301.93, 25934.02, 25800.91, 25869.47, 25968.17, 25814.96, 25783.93, 25748.31, 26245.21, 25905.43, 25895.21, 25831.71, 25160.66, 25837.55, 26228.28, 26533.82, 26606.2, 26568.39]
        },
        {
          name: "High",
          data: [  29489.87,  29675.73,  29987.99,  29375.71,  29302.08,  29102.46,  29160.82,  29244.28,  30176.80,  30093.44,  29688.56,  29517.77,  29465.11,  29441.43,  29660.25,  29439.12,  29221.98,  28745.95,  26808.20,  26249.45,  26260.68,  26220.20,  26135.51,  26786.90,  26554.91,  26248.10,  26107.38,  26165.37,  26198.58,  28089.34,  27760.16,  27456.08,  26125.87,  25970.29,  26087.15,  26081.53,  25858.38,  25953.02,  26409.30,  26414.01,  25921.98,  25978.13,  25883.95,  26451.94,  26376.11,  26774.62,  26840.50,  26754.77,  26568.39]

        },
        {
          name: "Low",
          data: [
            29131.58,
            28657.02,
            28946.51,
            28959.49,
            28885.34,
            28957.80,
            28963.83,
            28724.14,
            29113.81,
            29376.80,
            29354.45,
            29253.52,
            29357.59,
            29265.81,
            29124.11,
            29088.85,
            28701.78,
            25409.11,
            25668.92,
            25802.41,
            26004.31,
            25846.09,
            25520.73,
            25804.99,
            25914.93,
            25786.81,
            25983.88,
            25965.10,
            25880.60,
            25912.63,
            27069.21,
            25752.93,
            25362.61,
            25753.09,
            25817.03,
            25657.03,
            25590.99,
            25404.36,
            25608.20,
            25677.48,
            25810.49,
            25640.26,
            24930.30,
            25133.08,
            25781.12,
            26171.45,
            26240.70,
            26473.89,
            26452.37
          ]
        },
        {
          name: "Close",
          data: [
  29230.11,
  29675.73,
  29151.96,
  29178.68,
  29074.09,
  29042.13,
  29041.86,
  29180.58,
  29765.49,
  29561.49,
  29429.59,
  29397.71,
  29415.96,
  29282.91,
  29408.44,
  29170.35,
  28701.78,
  26664.55,
  26049.56,
  26096.21,
  26189.58,
  26124.14,
  26031.66,
  26431.64,
  26162.37,
  26047.67,
  26008.46,
  26089.69,
  26106.15,
  27727.39,
  27297.27,
  25931.47,
  25800.72,
  25868.80,
  25969.57,
  25812.42,
  25779.98,
  25753.24,
  26240.20,
  25905.65,
  25895.68,
  25832.23,
  25162.65,
  25833.34,
  26228.32,
  26539.67,
  26608.69,
  26568.28,
  26558.09
]
        }
      ],
        chart: {
          height: '100%',
          type: 'line',
          animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 1000,
              animateGradually: {
                  enabled: true,
                  delay: 150
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 350
              }
          },
          dropShadow: {
            enabled: false,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
          show: false,
          tools: {
            download: true,
            selection: false,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          }
        }
      },
      colors: ['#FDDD93', '#64913E', '#913E5F', '#9397FD'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: 'Bitcoin (août - sept 2023)',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val
          }
        }
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      xaxis: {
        tickAmount: 4,
        categories: [
            "31.07",
            "01.08",
            "02.08",
            "03.08",
            "04.08",
            "05.08",
            "06.08",
            "07.08",
            "08.08",
            "09.08",
            "10.08",
            "11.08",
            "12.08",
            "13.08",
            "14.08",
            "15.08",
            "16.08",
            "17.08",
            "18.08",
            "19.08",
            "20.08",
            "21.08",
            "22.08",
            "23.08",
            "24.08",
            "25.08",
            "26.08",
            "27.08",
            "28.08",
            "29.08",
            "30.08",
            "31.08",
            "01.09",
            "02.09",
            "03.09",
            "04.09",
            "05.09",
            "06.09",
            "07.09",
            "08.09",
            "09.09",
            "10.09",
            "11.09",
            "12.09",
            "13.09",
            "14.09",
            "15.09",
            "16.09",
            "17.09"
          ]
        // title: {
        //   text: 'Month'
        // }
      },
      yaxis: {
        decimalsInFloat: 0,
        title: {
          text: 'Valeur en CHF'
        },
          min: 24000,
          max: 30400
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -35,
        offsetX: -5
      }
    };

    var chartBitcoin = new ApexCharts(document.querySelector("#chart-bitcoin"), optionsBitcoin);

    var optionsNikola = {
        series: [
        {
          name: "Open",
          data: [  2.44,  3.23,  3.09,  2.97,  2.99,  2.74,  2.22,  2.18,  1.98,  1.92,  1.6,  1.9,  1.83,  1.98,  1.74,  1.69,  1.48,  1.43,  1.3,  1.23,  1.35,  1.23,  1.28,  1.28,  1.18,  1.08,  1.16,  1.06,  1.03,  0.92,  0.89,  0.91,  0.87,  1.33]

        },
        {
          name: "High",
          data: [  2.80,  3.28,  3.10,  3.71,  3.20,  2.75,  2.34,  2.20,  2.17,  1.99,  1.85,  1.91,  2.07,  2.03,  1.99,  1.78,  1.54,  1.43,  1.32,  1.41,  1.35,  1.34,  1.32,  1.29,  1.23,  1.20,  1.17,  1.07,  1.03,  0.93,  0.91,  0.91,  1.19,  1.38]


        },
        {
          name: "Low",
          data: [  2.34,  2.95,  2.80,  2.86,  2.50,  2.07,  2.10,  1.90,  1.90,  1.80,  1.57,  1.78,  1.80,  1.87,  1.71,  1.47,  1.34,  1.31,  1.18,  1.22,  1.17,  1.20,  1.21,  1.15,  1.15,  1.06,  1.10,  1.01,  0.88,  0.81,  0.83,  0.85,  0.86,  1.15]

        },
        {
          name: "Close",
          data: [  2.67,  3.12,  3.02,  3.40,  2.50,  2.39,  2.21,  1.94,  1.96,  1.95,  1.82,  1.91,  1.94,  1.87,  1.96,  1.51,  1.42,  1.32,  1.23,  1.31,  1.24,  1.30,  1.27,  1.18,  1.18,  1.17,  1.11,  1.04,  0.88,  0.91,  0.91,  0.87,  1.15,  1.19]

        }
      ],
        chart: {
          height: '100%',
          type: 'line',
          animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 1000,
              animateGradually: {
                  enabled: true,
                  delay: 150
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 350
              }
          },
          dropShadow: {
            enabled: false,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
          show: false,
          tools: {
            download: true,
            selection: false,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          }
        }
      },
      colors: ['#FDDD93', '#64913E', '#913E5F', '#9397FD'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: 'Nikola (août - sept 2023)',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val
          }
        }
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      xaxis: {
        tickAmount: 4,
        categories: [
          "31.07",
          "01.08",
          "02.08",
          "03.08",
          "04.08",
          "07.08",
          "08.08",
          "09.08",
          "10.08",
          "11.08",
          "14.08",
          "15.08",
          "16.08",
          "17.08",
          "18.08",
          "21.08",
          "22.08",
          "23.08",
          "24.08",
          "25.08",
          "28.08",
          "29.08",
          "30.08",
          "31.08",
          "01.09",
          "05.09",
          "06.09",
          "07.09",
          "08.09",
          "11.09",
          "12.09",
          "13.09",
          "14.09",
          "15.09"
        ]
        // title: {
        //   text: 'Month'
        // }
      },
      yaxis: {
        decimalsInFloat: 0,
        title: {
          text: 'Valeur en CHF'
        }
          // min: 1,
          // max: 5
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -35,
        offsetX: -5
      }
    };

    var chartNikola = new ApexCharts(document.querySelector("#chart-nikola"), optionsNikola);

    var optionsDocmorris = {
      series: [
      {
        name: "Open",
        data: [  51.75,  53.80,  48.80,  49.20,  49.58,  49.00,  49.88,  49.34,  49.40,  48.96,  50.80,  51.45,  49.40,  53.85,  62.05,  64.65,  62.95,  63.25,  65.85,  65.70,  65.00,  66.50]


      },
      {
        name: "High",
        data: [53.80, 55.10, 50.00, 50.60, 51.20, 50.40, 52.15, 50.80, 49.56, 51.40, 51.85, 51.75, 55.00, 61.70, 64.60, 68.15, 63.95, 65.75, 66.40, 66.85, 66.70, 67.20]


      },
      {
        name: "Low",
        data: [51.75, 48.54, 47.04, 49.14, 49.40, 49.00, 49.00, 49.02, 47.70, 48.96, 50.40, 50.20, 47.98, 53.75, 60.95, 61.10, 62.20, 63.25, 64.70, 65.05, 64.85, 64.95]

      },
      {
        name: "Close",
        data: [53.30, 49.00, 49.60, 50.25, 49.74, 49.78, 49.00, 49.46, 49.24, 51.00, 51.50, 50.35, 54.30, 60.25, 63.50, 62.80, 63.05, 65.00, 65.95, 65.05, 66.05, 66.45]

      }
    ],
      chart: {
        height: '100%',
        type: 'line',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        dropShadow: {
          enabled: false,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
      },
      toolbar: {
        show: false,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        }
      }
    },
    colors: ['#FDDD93', '#64913E', '#913E5F', '#9397FD'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: 'DocMorris (août 2023)',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val
        }
      }
    },
    markers: {
      hover: {
        sizeOffset: 5
      }
    },
    xaxis: {
      tickAmount: 4,
      categories: [
        "31.07.2023",
        "02.08.2023",
        "03.08.2023",
        "04.08.2023",
        "07.08.2023",
        "08.08.2023",
        "09.08.2023",
        "10.08.2023",
        "11.08.2023",
        "14.08.2023",
        "15.08.2023",
        "16.08.2023",
        "17.08.2023",
        "18.08.2023",
        "21.08.2023",
        "22.08.2023",
        "23.08.2023",
        "24.08.2023",
        "25.08.2023",
        "28.08.2023",
        "29.08.2023",
        "30.08.2023"
      ]
      
      // title: {
      //   text: 'Month'
      // }
    },
    yaxis: {
      decimalsInFloat: 0,
      title: {
        text: 'Valeur en CHF'
      }
        // min: 1,
        // max: 5
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -35,
      offsetX: -5
    }
  };

  var chartDocmorris = new ApexCharts(document.querySelector("#chart-docmorris"), optionsDocmorris);
      

    $( "p" ).on( "click", function() {
      
      chartBitcoin.render();
      chartDocmorris.render();
      // chart.hideSeries('Open');
      //chart.hideSeries('Low');
      // chart.hideSeries('High');
      // chart.hideSeries('Close');
      // setTimeout(function() { 
      //   chart.hideSeries('Low');
      //   chart.hideSeries('High');
      //   chart.hideSeries('Close');
      // }, 2000);
    } );


  
})(jQuery);