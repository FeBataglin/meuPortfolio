import { Component, OnInit } from '@angular/core';

declare function navigationWithClick(): any;
declare function addAndRemoveClassOnKeyUp(id: any, section: any): any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    navigationWithClick();
    this.navigationWithArrows();
    this.navigationWithScroll();
  }

  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  navigationWithArrows() {

    //quando abre a tela, posicionar na section 1
    $('section').each(function (this: HTMLButtonElement) {
      if ($(this).position().top <= $(document).scrollTop() && ($(this).position().top + $(this).outerHeight()) > $(document).scrollTop()) {
        let section = $(this).attr('id');
        if (section === 'sectionOne') {

          addAndRemoveClassOnKeyUp('', section);

        }
      }
    })

    //trocar section ao navegar com as setas do teclado
    $(document).keydown(function (e: any) {

      var $activeSection = $("section.active"), $newActiveSection;

      if (e.which == 38) {
        // Cima
        $newActiveSection = $activeSection.prev("section");
        if (!$newActiveSection.length) {
          $newActiveSection = $("section").last();
        }
        addAndRemoveClassOnKeyUp($newActiveSection[0], '');
      } else if (e.which == 40) {
        // Baixo
        $newActiveSection = $activeSection.next("section");
        if (!$newActiveSection.length) {
          $newActiveSection = $("section").first();
        }
        addAndRemoveClassOnKeyUp($newActiveSection[0], '');
      }
      $activeSection.removeClass("active");
      $newActiveSection.addClass("active");

      $(window).scrollTop($newActiveSection.offset().top);

      e.preventDefault();
    });
  }

  navigationWithScroll() {

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

          addAndRemoveClassOnKeyUp('', section);

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

            addAndRemoveClassOnKeyUp('', section);

          } else if (section === 'sectionTwo') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('sectionOne') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
              else {
                (document.getElementById('sectionThree') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
            });

            addAndRemoveClassOnKeyUp('', section);

          } else if (section === 'sectionThree') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('sectionTwo') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
              else {
                (document.getElementById('sectionFour') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
            });

            addAndRemoveClassOnKeyUp('', section);

          } else if (section === 'sectionFour') {

            $(window).bind('mousewheel DOMMouseScroll', function (event: any) {
              if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                (document.getElementById('sectionThree') as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
              }
            });

            addAndRemoveClassOnKeyUp('', section);

          }
        }
      });
    });
  }

}
