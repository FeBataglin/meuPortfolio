import { Component, OnInit } from '@angular/core';

declare function navigation(): any;
declare function addAndRemoveClassOnKeyUp(id: any): any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navigation();
    this.navigationConfigs();
    //this.navigationConfigs2();
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  navigationConfigs() {
    var button_one = document.getElementById('bt-one');
    var button_two = document.getElementById('bt-two');
    var button_three = document.getElementById('bt-three');
    var button_four = document.getElementById('bt-four');

    //quando abre a tela, posicionar na section 1
    $('section').each(function (this: HTMLButtonElement) {
      if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
        let section = $(this).attr('id');
        if (section === 'sectionOne') {

          $(button_one).removeClass('navigation-one');
          $(button_one).addClass('navigation-one-active');

          $(button_two).removeClass('navigation-two-active');
          $(button_two).addClass('navigation-two');

          $(button_three).removeClass('navigation-three-active');
          $(button_three).addClass('navigation-three');

          $(button_four).removeClass('navigation-four-active');
          $(button_four).addClass('navigation-four');
        }
      }
    })

    $(document).keydown(function (e: any) {
      
      var $activeSection = $("section.active"), $newActiveSection;

      if (e.which == 38) {
        // Cima
        $newActiveSection = $activeSection.prev("section");
        if (!$newActiveSection.length) {
          $newActiveSection = $("section").last();
        }
        addAndRemoveClassOnKeyUp($newActiveSection[0]);
      } else if (e.which == 40) {
        // Baixo
        $newActiveSection = $activeSection.next("section");
        if (!$newActiveSection.length) {
          $newActiveSection = $("section").first();
        }
        addAndRemoveClassOnKeyUp($newActiveSection[0]);
      }
      $activeSection.removeClass("active");
      $newActiveSection.addClass("active");

      $(window).scrollTop($newActiveSection.offset().top);

      e.preventDefault();
    });
  }

  /*navigationConfigs2() {
    var button_one = document.getElementById('bt-one');
    var button_two = document.getElementById('bt-two');
    var button_three = document.getElementById('bt-three');
    var button_four = document.getElementById('bt-four');

    //quando abre a tela, posicionar na section 1
    $('section').each(function (this: HTMLButtonElement) {
      if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
        let section = $(this).attr('id');
        if (section === 'sectionOne') {

          $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            }
            else {
              (document.getElementById('sectionTwo') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
          });

          $(button_one).removeClass('navigation-one');
          $(button_one).addClass('navigation-one-active');

          $(button_two).removeClass('navigation-two-active');
          $(button_two).addClass('navigation-two');

          $(button_three).removeClass('navigation-three-active');
          $(button_three).addClass('navigation-three');

          $(button_four).removeClass('navigation-four-active');
          $(button_four).addClass('navigation-four');
        }
      }
    })

    //ao dar scroll, posicionar todas as sections
    $(document).scroll(function () {
      $('section').each(function (this: HTMLButtonElement) {

        if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {

          let section = $(this).attr('id');

          if (section === 'sectionOne') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
              }
              else {
                (document.getElementById('sectionTwo') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
            });

            $(button_one).removeClass('navigation-one');
            $(button_one).addClass('navigation-one-active');

            $(button_two).removeClass('navigation-two-active');
            $(button_two).addClass('navigation-two');

            $(button_three).removeClass('navigation-three-active');
            $(button_three).addClass('navigation-three');

            $(button_four).removeClass('navigation-four-active');
            $(button_four).addClass('navigation-four');
          } else if (section === 'sectionTwo') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('sectionOne') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
              else {
                (document.getElementById('sectionThree') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
            });

            $(button_two).removeClass('navigation-two');
            $(button_two).addClass('navigation-two-active');

            $(button_one).removeClass('navigation-one-active');
            $(button_one).addClass('navigation-one');

            $(button_three).removeClass('navigation-three-active');
            $(button_three).addClass('navigation-three');

            $(button_four).removeClass('navigation-four-active');
            $(button_four).addClass('navigation-four');
          } else if (section === 'sectionThree') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('sectionTwo') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
              else {
                (document.getElementById('sectionFour') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
            });

            $(button_three).removeClass('navigation-three');
            $(button_three).addClass('navigation-three-active');

            $(button_one).removeClass('navigation-one-active');
            $(button_one).addClass('navigation-one');

            $(button_two).removeClass('navigation-two-active');
            $(button_two).addClass('navigation-two');

            $(button_four).removeClass('navigation-four-active');
            $(button_four).addClass('navigation-four');
          } else if (section === 'sectionFour') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('sectionThree') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
            });

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
      });
    });
  }*/

}
