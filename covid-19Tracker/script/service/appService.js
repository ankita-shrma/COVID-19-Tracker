cov19app.factory("getSummary",function($http)
              { var summaryFactory={};
               summaryFactory.getAllSummary=function()
               {
                   return $http.get('https://api.covid19api.com/summary');
               };
               return summaryFactory;
             });
cov19app.factory("getCountries",function($http)
              { var countryFactory={};
               countryFactory.getAllCountries=function()
               {
                   return $http.get('https://api.covid19api.com/countries');
               };
               return countryFactory;
             });
cov19app.factory("getIndiaSummary",function($http)
              { var indiaSummaryFactory={};
               indiaSummaryFactory.getAllIndiaSummary=function()
               {
                   return $http.get('https://api.covid19india.org/data.json');
               };
               indiaSummaryFactory.getAllDistrictsSummary=function()
               {
                   return $http.get('https://api.covid19india.org/v2/state_district_wise.json');
               };
               return indiaSummaryFactory;
             });