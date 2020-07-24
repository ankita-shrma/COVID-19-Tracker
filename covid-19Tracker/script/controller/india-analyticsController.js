cov19app.controller('india-analyticsCont',function($scope,getIndiaSummary)
                    {  
                      $scope.showLoader=true;
                      $scope.showContent=false;
                       getIndiaSummary.getAllIndiaSummary().then(function(data)
                                                       {
                                                        $scope.showLoader=false;
                                                        $scope.showContent=true;
                                                          console.log(data.data);
                                                           $scope.dates=data.data.cases_time_series;
                                                          $scope.indiaCases=data.data.statewise[0];
                                                         
                                                        
        $scope.indiaChart = {
                labels: ["Confirmed", "Active", "Recovered","Deaths"],
                data: [],
                color: ["#FF4500", "#1E90FF", "#008000","#FF0000"]
            };
            $scope.indiaChart.data.push($scope.indiaCases.confirmed);
              $scope.indiaChart.data.push($scope.indiaCases.active);
              $scope.indiaChart.data.push($scope.indiaCases.recovered);
               $scope.indiaChart.data.push($scope.indiaCases.deaths);
            var piechart = document.getElementById("pie-chart").getContext('2d');
            var myChart = new Chart(piechart, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: $scope.indiaChart.data,
                        backgroundColor: $scope.indiaChart.color
                    }],
                    labels: $scope.indiaChart.labels
                },
                options: {
                           responsive: false,
                            legend:{
                                    display:true,
                                    labels:{
                                            fontColor:'#000000'
                                           }
                                    }
                           }
            });
            $scope.labels=[];
            $scope.data=[[],[],[]];
              $scope.dates.forEach(function(elem,index)
                   {
                        $scope.labels.push(elem.date);  
                         $scope.data[0].push(elem.totalconfirmed);
                          $scope.data[1].push(elem.totalrecovered);
                          $scope.data[2].push(elem.totaldeceased);
                   });
                          

            var linechart = document.getElementById("line-chart").getContext('2d');
            var myChart = new Chart(linechart, {
                type: 'line',
                data: {
                    datasets: [{
                        data:$scope.data[0],
                        label:"Confirmed",
                        borderColor:"#FF4500",
                        backgroundColor:"#FF4500",
                        pointBackgroundColor:"#FF4500",
                        pointBorderColor:"#FFFFFF",
                        fill:false
                      },
                      {
                        data:$scope.data[1],
                        label:"Recovered",
                        borderColor:"#008000",
                        backgroundColor:"#008000",
                        pointBackgroundColor:"#008000",
                        pointBorderColor:"#FFFFFF",
                        fill:false
                      },
                      {
                        data:$scope.data[2],
                        label:"Deaths",
                        borderColor:"#FF0000",
                        backgroundColor:"#FF0000",
                        pointBackgroundColor:"#FF0000",
                        pointBorderColor:"#FFFFFF",
                        fill:false
                      }
                  ],
                    labels:$scope.labels
                },
                options: {
                  responsive:true,
                  legend:{
                          display:true,
                          labels:{
                                  fontColor:'#000000'
                                  
                                 }
                          },
                          scales:{
                            xAxes:[{
                              ticks:{
                                fontColor:'#000000'
                              }
                            }],
                            yAxes:[{
                              ticks:{
                                fontColor:'#000000'
                              }
                            }]
                          }
                        }
            });
          });
        });