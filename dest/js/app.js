"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */

	var initGettingBlock = function initGettingBlock() {
		$('.ot-getting__block-btn').on('click', function (ev) {
			var _elem = $(ev.currentTarget),
			    _elemID = _elem.data('btn-id'),
			    _contentNode = $('.ot-getting__block-content[data-content="' + _elemID + '"]');

			$('.ot-getting__block-btn').removeClass('is-active');
			_elem.addClass('is-active');

			$('.ot-getting__block-content').removeClass('is-active').hide();
			_contentNode.fadeIn(300);
		});
	};

	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// ==========================================

		// callback
		// ==========================================
		initGettingBlock();
	};
	initNative();
})();