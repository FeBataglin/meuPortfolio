function navigationWithClick() {
    var button_one = document.getElementById('bt-one');
    var button_two = document.getElementById('bt-two');
    var button_three = document.getElementById('bt-three');
    var button_four = document.getElementById('bt-four');

    button_one.onclick = function (e) {
        button_one.classList.remove('navigation-one');
        button_one.classList.add('navigation-one-active');

        button_two.classList.remove('navigation-two-active');
        button_two.classList.add('navigation-two');

        button_three.classList.remove('navigation-three-active');
        button_three.classList.add('navigation-three');

        button_four.classList.remove('navigation-four-active');
        button_four.classList.add('navigation-four');
    }

    button_two.onclick = function (e) {
        button_two.classList.remove('navigation-two');
        button_two.classList.add('navigation-two-active');

        button_one.classList.remove('navigation-one-active');
        button_one.classList.add('navigation-one');

        button_three.classList.remove('navigation-three-active');
        button_three.classList.add('navigation-three');

        button_four.classList.remove('navigation-four-active');
        button_four.classList.add('navigation-four');
    }

    button_three.onclick = function (e) {
        button_three.classList.remove('navigation-three');
        button_three.classList.add('navigation-three-active');

        button_two.classList.remove('navigation-two-active');
        button_two.classList.add('navigation-two');

        button_one.classList.remove('navigation-one-active');
        button_one.classList.add('navigation-one');

        button_four.classList.remove('navigation-four-active');
        button_four.classList.add('navigation-four');
    }

    button_four.onclick = function (e) {
        button_four.classList.remove('navigation-four');
        button_four.classList.add('navigation-four-active');

        button_two.classList.remove('navigation-two-active');
        button_two.classList.add('navigation-two');

        button_three.classList.remove('navigation-three-active');
        button_three.classList.add('navigation-three');

        button_one.classList.remove('navigation-one-active');
        button_one.classList.add('navigation-one');
    }
}

function addAndRemoveClassOnKeyUp(element, section) {

    var button_one = document.getElementById('bt-one');
    var button_two = document.getElementById('bt-two');
    var button_three = document.getElementById('bt-three');
    var button_four = document.getElementById('bt-four');

    if (element.id === 'sectionOne' || section === 'sectionOne') {

        $(button_one).removeClass('navigation-one');
        $(button_one).addClass('navigation-one-active');

        $(button_two).removeClass('navigation-two-active');
        $(button_two).addClass('navigation-two');

        $(button_three).removeClass('navigation-three-active');
        $(button_three).addClass('navigation-three');

        $(button_four).removeClass('navigation-four-active');
        $(button_four).addClass('navigation-four');
    } else if (element.id === 'sectionTwo' || section === 'sectionTwo') {

        $(button_two).removeClass('navigation-two');
        $(button_two).addClass('navigation-two-active');

        $(button_one).removeClass('navigation-one-active');
        $(button_one).addClass('navigation-one');

        $(button_three).removeClass('navigation-three-active');
        $(button_three).addClass('navigation-three');

        $(button_four).removeClass('navigation-four-active');
        $(button_four).addClass('navigation-four');
    } else if (element.id === 'sectionThree' || section === 'sectionThree') {

        $(button_three).removeClass('navigation-three');
        $(button_three).addClass('navigation-three-active');

        $(button_one).removeClass('navigation-one-active');
        $(button_one).addClass('navigation-one');

        $(button_two).removeClass('navigation-two-active');
        $(button_two).addClass('navigation-two');

        $(button_four).removeClass('navigation-four-active');
        $(button_four).addClass('navigation-four');
    } else if (element.id === 'sectionFour' || section === 'sectionFour') {

        $(button_four).removeClass('navigation-four');
        $(button_four).addClass('navigation-four-active');

        $(button_one).removeClass('navigation-one-active');
        $(button_one).addClass('navigation-one');

        $(button_two).removeClass('navigation-two-active');
        $(button_two).addClass('navigation-two');

        $(button_three).removeClass('navigation-three-active');
        $(button_three).addClass('navigation-three');
    }
}



