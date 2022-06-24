import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

declare function navigation(): any;
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
        if (section === 'one') {

          $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            }
            else {
              (document.getElementById('two') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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

          if (section === 'one') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
              }
              else {
                (document.getElementById('two') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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
          } else if (section === 'two') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('one') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
              else {
                (document.getElementById('three') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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
          } else if (section === 'three') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('two') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
              else {
                (document.getElementById('four') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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
          } else if (section === 'four') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('three') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
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
  }

}
