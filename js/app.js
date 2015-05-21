angular.module('storeApp', [])

  .controller('orderController', function($scope, $sce) {

    $scope.cart = [];
    $scope.products = [
      {
        name: 'Original Token Stand',
        id: 'original',
        price: 5,
        hide: false,
        images: [
          'img/pics/DSC_5032.jpg',
          'img/pics/DSC_4988.jpg',
          'img/pics/DSC_4993.jpg',
        ],
        description: $sce.trustAsHtml(
          'The Original Token Stand is a pinnacle of achievement, a marvel of innovation.  When it comes to propping up a hard token stand on your desk, look no further.' +
          '<br/><br/>' +
          'The <strong>2cm</strong> tall version is great for elevating the token over the back of a tall keyboard.'
        ),
        options: [
          {
            name: 'Color',
            options: [
              { 'name': 'White (PLA)', id: 'white-pla', price: 0 },
              { 'name': 'Black (PLA)', id: 'black-pla', price: 0 },
              //{ 'name': 'White (ABS)', id: 'white-abs', price: 0 },
              //{ 'name': 'Black (ABS)', id: 'black-abs', price: 0 },
              //{ 'name': 'Wood Composite', id: 'wood', price: 5 },
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
          },
          /*
          {
            name: 'Logo',
            options: [
              { 'name': 'None', id: 'none', price: 0 },
              { 'name': 'eBay', id: 'ebay', price: 0 },
              { 'name': 'PayPal', id: 'paypal', price: 1 },
            ],
            selected: {}
          },
          */
        ]
      },
      {
        name: 'Monitor Token Stand',
        id: 'monitor',
        price: 6,
        hide: false,
        images: [
          'img/pics/DSC_5035-numbers.jpg',
          'img/pics/DSC_5036.jpg',
        ],
        description: $sce.trustAsHtml(
          'In order to design the Monitor Token Stand, we took a product you know and love, and adapted it to perfectly suit the bottom edge of monitors.  An included Command Strip enables you to mount this breathtaking token stand underneath your monitor.  And it comes in three angular varieties so you can be sure that the token is displayed at the most optimal of slants.'
        ),
        options: [
          {
            name: 'Color',
            options: [
              { 'name': 'White (PLA)', id: 'white-pla', price: 0 },
              { 'name': 'Black (PLA)', id: 'black-pla', price: 0 },
              //{ 'name': 'White (ABS)', id: 'white-abs', price: 0 },
              //{ 'name': 'Black (ABS)', id: 'black-abs', price: 0 },
              //{ 'name': 'Gray (HIPS)', id: 'gray-pla', price: 1 },
            ],
            selected: {}
          },
          {
            name: 'Angle',
            options: [
              { 'name': '60°', id: '60', price: 0 },
              { 'name': '45°', id: '45', price: 0 },
              { 'name': '30°', id: '30', price: 0 },
              //{ 'name': '55°', id: '55', price: 0 },
            ],
            selected: {}
          },
        ]
      },
    ];

    $scope.modalImages = function(product) {
      var productImage = 'img/models/' + $scope.productNumber(product) + '.jpg';
      return [productImage].concat(product.images).join(',');
    };

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
