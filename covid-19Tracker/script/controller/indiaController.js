cov19app.controller('indiaCont',function($scope,getIndiaSummary)
                    {
                        $scope.showLoader=true;
                        $scope.showContent=false;
                       getIndiaSummary.getAllIndiaSummary().then(function(data)
                                                       {  
                                                        $scope.showLoader=false;
                                                        $scope.showContent=true;
                                                          console.log(data.data);
                                                          
                                                          $scope.indiaCases=data.data.statewise[0];
                                                          $scope.statesCases=data.data.statewise;
                                                          $scope.statesCases.splice(0,1);
                                                          getIndiaSummary.getAllDistrictsSummary().then(function(data)
                                                          {
                                                              console.log(data.data);
                                                              $scope.districtsCases=data.data;
                                                          });
                                                         
                                                       });
                      $scope.showDistrictsCases=function(state)
                      {
                          $scope.districtsCases.forEach(function(elem,index)
                                                    {
                                                        if(elem.state==state)
                                                            {
                                                                $scope.stateName=elem.state;
                                                                $scope.districts=elem.districtData;
                                                            }
                                                    });
                      }
          
                       
                    });
                   