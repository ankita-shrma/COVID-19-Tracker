cov19app.controller('homeCont',function($scope,getSummary,getCountries)
           { 
               $scope.showLoader=true;
               $scope.showContent=false;
              getSummary.getAllSummary().then(function(data)
                                              { $scope.showLoader=false;
                                                $scope.showContent=true;
                                                console.log(data.data);
                                                $scope.global=data.data.Global;
                                                $scope.date=data.data.Date;
                                                $scope.countriesDataSummary=data.data.Countries;
                                            getCountries.getAllCountries().then(function(data)
                                              {
                                                console.log(data.data);
                                                $scope.countries=data.data;
                                                 $scope.selectedCountry=$scope.countries[0];
                                                 $scope.countriesDataSummary.forEach(function(elem,index)
                                                    {
                                                        if(elem.Country==$scope.selectedCountry.Country)
                                                            {
                                                                $scope.country=elem;
                                                            }
                                                    });
                                              });
   
                                              });
              
            $scope.showCountryCases=function()
            {
                console.log($scope.selectedCountry.Country);
                $scope.countriesDataSummary.forEach(function(elem,index)
                                                    {
                                                        if(elem.Country==$scope.selectedCountry.Country)
                                                            {
                                                                $scope.country=elem;
                                                            }
                                                    });
            }
                 
           });