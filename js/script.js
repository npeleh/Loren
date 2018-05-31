const menuItems = document.getElementsByClassName('sub_menu_parent');
const decreaseQuantity = document.getElementById('decrease_product');
const increaseQuantity = document.getElementById('increase_product');
var currentQuantity = document.getElementById('current_quantity');
const searchButton = document.getElementById('search_button');
const searchBlock = document.getElementById('search_block');
const searchCloseButton = document.getElementById('search_close_button');
const searchProductsButton = document.getElementById('search_products_button');
var boxes_category = document.getElementsByClassName('slider_block');
var category_name = document.getElementsByClassName('category_name');

for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    menuItem.addEventListener('mouseover', function () {
        menuItem.getElementsByClassName('angle')[0].style.transform = "rotate(-180deg)";
        menuItem.getElementsByClassName('angle')[0].style.transition = "500ms";
    });
    menuItem.addEventListener('mouseout', function () {
        menuItem.getElementsByClassName('angle')[0].style.transform = "rotate(0deg)";
        menuItem.getElementsByClassName('angle')[0].style.transition = "500ms";
    });
}

for (let i = 0; i < boxes_category.length; i++) {
    boxes_category[i].addEventListener('mouseover', function () {
        category_name[i].style.bottom = '0px';
        category_name[i].style.transition = '.5s';
        category_name[i].style.opacity = '1';
    })
    boxes_category[i].addEventListener('mouseout', function () {
        category_name[i].style.bottom = '-75px';
        category_name[i].style.opacity = '.85';
        category_name[i].style.transition = '.5s';
    })
}
if (decreaseQuantity) {
    decreaseQuantity.addEventListener('click', function () {
        if (+currentQuantity.innerHTML) {
            --currentQuantity.innerHTML;
        }
    });
}

if (increaseQuantity) {
    increaseQuantity.addEventListener('click', function () {
        ++currentQuantity.innerHTML;
    });
}

if (searchButton) {
    searchButton.addEventListener('click', function () {
        if (searchBlock.style.display == 'block') {
            searchBlock.style.display = 'none';
        } else {
            searchBlock.style.display = 'block';
        }
    });
}

if (searchCloseButton) {
    searchCloseButton.addEventListener('click', function () {
        document.querySelector('.search_input input').value = '';
        document.getElementsByClassName('search_product_container')[0].style.display = 'none';
    });
}

if (searchProductsButton) {
    searchProductsButton.addEventListener('click', function () {
        this.style.color = '#e11687';
        document.getElementsByClassName('search_product_container')[0].style.display = 'flex';
    });
}


var dropdown = document.getElementsByClassName("dropdown-btn");

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}


$(document).ready(function () {
    $('.header_slider').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<span class="prev"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>',
        nextArrow: '<span class="next"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>'
    });
});


function initMap() {

    var uluru = {
        lat: 49.839251,
        lng: 24.030815
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        mapTypeControl: false,
        panControl: false,
        mapTypeControl: false,
        overviewMapControl: false,
        rotateControl: false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_CENTER
        },

        fullscreenControl: true,
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT,
        },
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                }
              ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                }
              ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                }
              ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                }
              ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                }
              ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                }
              ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                }
              ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                }
              ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                }
              ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                }
              ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                }
              ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                }
              ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                }
              ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                }
              ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                }
              ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                }
              ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                }
              ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                }
              ]
            }
        ]
    });
    var imageMarker = '../img/map-marker.svg';
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: imageMarker
    });
}
