"use strict";$(".popup-navigation").hide(),$(".overlay").hide(),$(".navigation__button").on("click",function(){$(".popup-navigation").show("slow"),$(".overlay").show("slow"),768<$(window).width()&&$(".buy-now").hide()}),$(".navigation__menu--close").on("click",function(){$(".popup-navigation").hide("slow"),$(".overlay").hide("slow"),768<$(window).width()&&$(".buy-now").show()}),$(".popup-navigation a").on("click",function(){$(".popup-navigation").hide(),$(".overlay").hide(),768<$(window).width()&&$(".buy-now").show()}),$(".btn-group").on("click",".btn-group__btn",function(){var i=$(this).index();$(".btn-group").find(".btn-group__btn--active").first().removeClass("btn-group__btn--active"),$(this).addClass("btn-group__btn--active"),$(".slider__list").find(".active-slide").first().removeClass("active-slide"),$(".slider__list").find("li:eq("+i+")").addClass("active-slide")}),$(function(){var i=$(".slider__list"),n=i.find("li"),t=1,o=n.length;function e(){o<++t&&(t=1),$(".btn-group").find(".btn-group__btn--active").first().removeClass("btn-group__btn--active"),$(".slider__list").find(".active-slide").first().removeClass("active-slide"),n.filter(":nth-child("+t+")").addClass("active-slide").fadeIn(3e3),$(".btn-group").find("li").filter(":nth-child("+t+")").addClass("btn-group__btn--active")}var a=setInterval(e,3e3);i.mouseover(function(){clearInterval(a)}),i.mouseout(function(){a=setInterval(e,3e3)})});