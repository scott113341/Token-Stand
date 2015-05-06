angular.module('storeApp', [])

  .controller('orderController', function($scope) {

  $scope.products = [
    {
      name: 'Original Token Stand',
      id: 'original',
      price: 4,
      hide: false,
      description: 'Description.',
      options: [
        {
          name: 'Color',
          options: [
            { 'name': 'White (PLA)', id: 'white-pla', price: 0 },
            { 'name': 'Black (PLA)', id: 'black-pla', price: 0 },
            //{ 'name': 'Gray (HIPS)', id: 'gray-hips', price: 1 }
          ],
          selected: {}
        },
        {
          name: 'Height',
          options: [
            { 'name': '1 cm', id: '1cm', price: 0 },
            //{ 'name': '2 cm', id: '2cm', price: 1 }
          ],
          selected: {}
        }
      ]
    },
    {
      name: 'Monitor Token Stand',
      id: 'monitor',
      price: 5,
      hide: true,
      description: 'Description.',
      options: [
        {
          name: 'Color',
          options: [
            { 'name': 'White (PLA)', id: 'white-pla', price: 0 },
            { 'name': 'Black (PLA)', id: 'black-pla', price: 0 },
            //{ 'name': 'Gray (HIPS)', id: 'gray-pla', price: 1 }
          ],
          selected: {}
        },
        {
          name: 'Monitor Type',
          options: [
            { 'name': 'Generic', id: 'generic', price: 0 },
            //{ 'name': '27" Apple Thunderbolt Display', id: 'apple', price: 2 }
          ],
          selected: {}
        }
      ]
    }
  ];

  $scope.options = [0, 1, 2, 3, 4, 5];
 
  $scope.totalPrice = function(product) {
    var price = product.price;
    product.options.forEach(function(option) {
      price += option.selected.price;
    });
    return price;
  };

  $scope.itemNumber = function(product) {
    var id = [];
    id.push(product.id);
    product.options.forEach(function(option) {
      id.push(option.selected.id);
    });
    return id.join('-');
  };
});
