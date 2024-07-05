(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

// Define the array of words to display
const words = ["Hob", "Healthy on Budget", "HobIntergrated"];

// Get the element where the word will be displayed
const wordDisplay = document.getElementById('wordDisplay');
const mediaContainer = document.getElementById('media-container');

// Function to display words one after another
function displayWords() {
    let wordIndex = 0;
    let letterIndex = 0;

    // Function to display the next letter of the current word
    function displayNextLetter() {
        // Check if all letters of the current word have been displayed
        if (letterIndex === words[wordIndex].length) {
            // Start removing letters for the current word
            setTimeout(removeLetters, 1000); // Delay before removing letters
            return;
        }

        // Display the next letter of the current word
        wordDisplay.textContent += words[wordIndex][letterIndex];
        letterIndex++;

        // Call this function recursively to display the next letter
        setTimeout(displayNextLetter, 200); // Adjust the interval (in milliseconds) to control the speed
    }

    // Function to remove letters of the current word
    function removeLetters() {
        let word = wordDisplay.textContent;
        if (word.length === 0) {
            // Move to the next word or loop back to the first word
            wordIndex = (wordIndex + 1) % words.length;
            letterIndex = 0;
            setTimeout(displayNextLetter, 1000); // Delay before displaying the next word
            return;
        }
        
        // Remove the last letter from the current word
        wordDisplay.textContent = word.slice(0, -1);
        
        // Call this function recursively to remove the next letter
        setTimeout(removeLetters, 100); // Adjust the interval (in milliseconds) to control the speed
    }

    // Start displaying the first word
    displayNextLetter();
}

// Call the function to start displaying words
displayWords();
