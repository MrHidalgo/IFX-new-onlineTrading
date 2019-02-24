/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */

	const initGettingBlock = () => {
		$('.ot-getting__block-btn').on('click', (ev) => {
			const _elem = $(ev.currentTarget),
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
	const initNative = () => {
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
