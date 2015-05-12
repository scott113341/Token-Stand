angular.module('storeApp', [])

  .controller('orderController', function($scope) {

    $scope.cart = [];
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
              { 'name': 'White (ABS)', id: 'white-abs', price: 0 },
              { 'name': 'Black (ABS)', id: 'black-abs', price: 0 },
              //{ 'name': 'Gray (HIPS)', id: 'gray-hips', price: 1 },
            ],
            selected: {}
          },
          {
            name: 'Height',
            options: [
              { 'name': '1 cm', id: '1cm', price: 0 },
              { 'name': '2 cm', id: '2cm', price: 1 },
            ],
            selected: {}
          }
        ]
      },
      {
        name: 'Monitor Token Stand',
        id: 'monitor',
        price: 5,
        hide: false,
        description: 'Description.',
        options: [
          {
            name: 'Color',
            options: [
              { 'name': 'White (PLA)', id: 'white-pla', price: 0 },
              { 'name': 'Black (PLA)', id: 'black-pla', price: 0 },
              { 'name': 'White (ABS)', id: 'white-abs', price: 0 },
              { 'name': 'Black (ABS)', id: 'black-abs', price: 0 },
              //{ 'name': 'Gray (HIPS)', id: 'gray-pla', price: 1 },
            ],
            selected: {}
          },
          {
            name: 'Angle',
            options: [
              { 'name': '35°', id: '35', price: 0 },
              { 'name': '45°', id: '45', price: 0 },
              { 'name': '55°', id: '55', price: 0 },
            ],
            selected: {}
          }
        ]
      }
    ];

    $scope.totalPrice = function(product) {
      var price = product.price;
      product.options.forEach(function(option) {
        price += option.selected.price;
      });
      return price;
    };

    $scope.productNumber = function(product) {
      var id = [];
      id.push(product.id);
      product.options.forEach(function(option) {
        id.push(option.selected.id);
      });
      return id.join('-');
    };

    $scope.addToCart = function(product) {
      var productCopy = angular.copy(product, {});
      $scope.cart.push(productCopy);
    };

    $scope.removeFromCart = function(index) {
      $scope.cart.splice(index, 1);
    };

    $scope.cartPrice = function() {
      var total = 0;
      $scope.cart.forEach(function(product) {
        total += $scope.totalPrice(product);
      });
      return total;
    };

    $scope.cartOptions = function(product) {
      var options = [];
      product.options.forEach(function(option) {
        options.push(option.selected.name);
      });
      return options.join(' • ');
    };

    // save cart
    $scope.$watch('cart.length', function(a, b) {
      var cart = $scope.cart.map($scope.productNumber).join(',');
      localStorage.setItem('cart', cart);
    });

    // load cart
    var loadCart = function() {
      var cart = localStorage.getItem('cart');
      if (cart) {
        cart.split(',').forEach(function(id) {
        });
      }
    };
    loadCart();

  });
