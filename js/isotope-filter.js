/*!
 * Isotope Filter v1.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 * http://traviseugeneclar.com
 */
 
$(document).ready(function($) {
  	
	var $container;
	var filters = {};

	$(function(){
		$container = $('#filter-container');
		var $filterDisplay = $('#filter-display');
		$container.imagesLoaded( function(){
			$container.isotope({
				resizable: false, // disable normal resizing
				masonry: { columnWidth: $container.width() / 3 },
				cellsByRow: { columnWidth: 120, rowHeight: 120 },
				itemSelector : '.item',
				sortBy : 'random'
			});
		});
		
		// update columnWidth on window resize
		$(window).smartresize(function(){
			$container.isotope({
				// update columnWidth to a percentage of container width
				masonry: { columnWidth: $container.width() / 3 }
			});
		});
		
		// toggle variable sizes of all elements
		$('#toggle').find('a').click(function(){
        $container
          .toggleClass('quickview')
          .isotope('reLayout');
        return false;
      });
		
		var numItemsDisp = $('img.item:not(.isotope-hidden)').length;
		$filterDisplay.append( '<span class="filter-label data-counter pull-right">'+numItemsDisp+'&nbsp;Restaurants</span>' );
		var group = '';
	  	// filter on click
	    $('.filter a').click(function(){
	    	// we can gtfo directly if filter disabled
	    	if ($(this).hasClass('disabled') ){
	    		return false;
	    	}
	    	var $this = $(this);
	    	var $optionSet = $(this).parents('.option-set');
			group = $optionSet.attr('data-filter-group');
			// store filter value in object
			var filterGroup = filters[ group ];
  			if ( !filterGroup ) {
				filterGroup = filters[ group ] = [];
			}
		    var isAll = $this.hasClass('all');
			// reset filter group
			if ( isAll ) {
				Array.prototype.remove = function(from, to) {
					var rest = this.slice((to || from) + 1 || this.length);
					this.length = from < 0 ? this.length + from : from;
					return this.push.apply(this, rest);
				};
				filters[ group ].remove(0,-1)
			}
	  		var index = $.inArray($this.attr('data-filter-value'), filterGroup );
	  		if ( !isAll && index === -1 ) {
		      	// push filter to group
	      		filters[ group ].push($this.attr('data-filter-value') );
		    }
		    else if ( !isAll ) {
			    // remove filter from group
			    filters[ group ].splice( index, 1 );
			}
			// class toggling
			if ($this.hasClass('active') ) {
				$this.removeClass('active');
			}
			else {
				$this.addClass('active');
			}
			// let's do some filtering :>
			var comboFilter = getComboFilter( filters );
		    $container.isotope({ filter: comboFilter });
		    // gotta check and set those disabled filters:
			var $that = $(this);
			// cuisine
			$('a.cuisine:not(.clone)').each(function() {
				var $this = $(this);
				var getVal = $this.attr('data-filter-value');
				var numItems = $('img'+getVal+':not(.isotope-hidden)').length;
				if(!$(this).hasClass('active') && !$that.hasClass('cuisine') ){
					if(numItems == 0){
						$this.addClass('disabled');
					}
					else {
						$this.removeClass('disabled');
					}
				}
				else if( $this.hasClass('active') && $this.hasClass('disabled') ){
					$this.removeClass('disabled');
				}
				else if(!$(this).hasClass('active') ) {
					if(numItems > 0){
						$this.removeClass('disabled');
					}
				}
			});
			// types
			$('a.types:not(.clone)').each(function() {
				var $this = $(this);
				var getVal = $this.attr('data-filter-value');
				var numItems = $('img'+getVal+':not(.isotope-hidden)').length;
				if(!$(this).hasClass('active') && !$that.hasClass('types') ){
					if(numItems == 0){
						$this.addClass('disabled');
					}
					else {
						$this.removeClass('disabled');
					}
				}
				else if( $this.hasClass('active') && $this.hasClass('disabled') ){
					$this.removeClass('disabled');
				}
				else if(!$(this).hasClass('active') ) {
					if(numItems > 0){
						$this.removeClass('disabled');
					}
				}
			});
			// deliver
			$('a.deliver:not(.clone)').each(function() {
				var $this = $(this);
				var getVal = $this.attr('data-filter-value');
				var numItems = $('img'+getVal+':not(.isotope-hidden)').length;
				if(!$(this).hasClass('active') && !$that.hasClass('deliver') ){
					if(numItems == 0){
						$this.addClass('disabled');
					}
					else {
						$this.removeClass('disabled');
					}
				}
				else if( $this.hasClass('active') && $this.hasClass('disabled') ){
					$this.removeClass('disabled');
				}
				else if(!$(this).hasClass('active') ) {
					if(numItems > 0){
						$this.removeClass('disabled');
					}
				}
			});
			// meals
			$('a.meals:not(.clone)').each(function() {
				var $this = $(this);
				var getVal = $this.attr('data-filter-value');
				var numItems = $('img'+getVal+':not(.isotope-hidden)').length;
				if(!$(this).hasClass('active') && !$that.hasClass('meals') ){
					if(numItems == 0){
						$this.addClass('disabled');
					}
					else {
						$this.removeClass('disabled');
					}
				}
				else if( $this.hasClass('active') && $this.hasClass('disabled') ){
					$this.removeClass('disabled');
				}
				else if(!$(this).hasClass('active') ) {
					if(numItems > 0){
						$this.removeClass('disabled');
					}
				}
			});
			// day
			$('a.day:not(.clone)').each(function() {
				var $this = $(this);
				var getVal = $this.attr('data-filter-value');
				var numItems = $('img'+getVal+':not(.isotope-hidden)').length;
				if(!$(this).hasClass('active') && !$that.hasClass('day') ){
					if(numItems == 0){
						$this.addClass('disabled');
					}
					else {
						$this.removeClass('disabled');
					}
				}
				else if( $this.hasClass('active') && $this.hasClass('disabled') ){
					$this.removeClass('disabled');
				}
				else if(!$(this).hasClass('active') ) {
					if(numItems > 0){
						$this.removeClass('disabled');
					}
				}
			});
			// price
			$('a.price:not(.clone)').each(function() {
				var $this = $(this);
				var getVal = $this.attr('data-filter-value');
				var numItems = $('img'+getVal+':not(.isotope-hidden)').length;
				if(!$(this).hasClass('active') && !$that.hasClass('price') ){
					if(numItems == 0){
						$this.addClass('disabled');
					}
					else {
						$this.removeClass('disabled');
					}
				}
				else if( $this.hasClass('active') && $this.hasClass('disabled') ){
					$this.removeClass('disabled');
				}
				else if(!$(this).hasClass('active') ) {
					if(numItems > 0){
						$this.removeClass('disabled');
					}
				}
			});
			// editors
			$('a.editors:not(.clone)').each(function() {
				var $this = $(this);
				var getVal = $this.attr('data-filter-value');
				var numItems = $('img'+getVal+':not(.isotope-hidden)').length;
				if(!$(this).hasClass('active') && !$that.hasClass('editors') ){
					if(numItems == 0){
						$this.addClass('disabled');
					}
					else {
						$this.removeClass('disabled');
					}
				}
				else if( $this.hasClass('active') && $this.hasClass('disabled') ){
					$this.removeClass('disabled');
				}
				else if(!$(this).hasClass('active') ) {
					if(numItems > 0){
						$this.removeClass('disabled');
					}
				}
			});
			// update filter display
		    var arrLbl = [];
		    arrLbl = comboFilter.split('.');
		    // before iterating we empty previous display vals
		    $filterDisplay.empty();
			// clone method for filter display
			var clone = 'clone';
			var cloneId = 0; // because cloning an id attr just wrong :>
			$('a.active').each(function() {
				cloneId++;
				$(this).clone().appendTo($filterDisplay).attr('id',clone+cloneId).addClass('clone');
			});
			$('a.active.clone').each(function() {
				$(this).append('  <span class="glyphicon glyphicon-remove"></span>');
			});
			$('a.clone').on('click', function() {
				var that = $(this);
				var parent = that.attr('data-filter-value');
				$('ul.filter').find(parent).each(function() {
					$(this).trigger('click');
				});
			});
			// resolves any outstanding issues with disableds
			// TODO: Find a way around using indexOf this way. Lots of unneccesary overhead.
			if ( comboFilter.indexOf('types') == -1 
				&& comboFilter.indexOf('deliver') == -1 
				&& comboFilter.indexOf('meals') == -1 
				&& comboFilter.indexOf('day') == -1 
				&& comboFilter.indexOf('price') == -1 
				&& comboFilter.indexOf('editors') == -1 
				&& comboFilter.indexOf('cuisine') > 0 ){
	   				$('a.cuisine:not(.clone)').removeClass('disabled');
	   		}
			if ( comboFilter.indexOf('cuisine') == -1 
				&& comboFilter.indexOf('deliver') == -1 
				&& comboFilter.indexOf('meals') == -1 
				&& comboFilter.indexOf('day') == -1 
				&& comboFilter.indexOf('price') == -1 
				&& comboFilter.indexOf('editors') == -1 
				&& comboFilter.indexOf('types') > 0 ){
	   				$('a.types:not(.clone)').removeClass('disabled');
	   		}
			if ( comboFilter.indexOf('cuisine') == -1 
				&& comboFilter.indexOf('types') == -1 
				&& comboFilter.indexOf('meals') == -1 
				&& comboFilter.indexOf('day') == -1 
				&& comboFilter.indexOf('price') == -1 
				&& comboFilter.indexOf('editors') == -1 
				&& comboFilter.indexOf('deliver') > 0 ){
	   				$('a.deliver:not(.clone)').removeClass('disabled');
	   		}
			if ( comboFilter.indexOf('cuisine') == -1 
				&& comboFilter.indexOf('types') == -1 
				&& comboFilter.indexOf('deliver') == -1 
				&& comboFilter.indexOf('day') == -1 
				&& comboFilter.indexOf('price') == -1 
				&& comboFilter.indexOf('editors') == -1 
				&& comboFilter.indexOf('meals') > 0 ){
	   				$('a.meals:not(.clone)').removeClass('disabled');
	   		}
	   		if ( comboFilter.indexOf('cuisine') == -1 
				&& comboFilter.indexOf('types') == -1 
				&& comboFilter.indexOf('meals') == -1 
				&& comboFilter.indexOf('deliver') == -1 
				&& comboFilter.indexOf('price') == -1 
				&& comboFilter.indexOf('editors') == -1 
				&& comboFilter.indexOf('day') > 0 ){
	   				$('a.day:not(.clone)').removeClass('disabled');
	   		}
	   		if ( comboFilter.indexOf('cuisine') == -1 
				&& comboFilter.indexOf('types') == -1 
				&& comboFilter.indexOf('meals') == -1 
				&& comboFilter.indexOf('deliver') == -1 
				&& comboFilter.indexOf('day') == -1 
				&& comboFilter.indexOf('editors') == -1 
				&& comboFilter.indexOf('price') > 0 ){
	   				$('a.price:not(.clone)').removeClass('disabled');
	   		}
			// filter display count
			var numItemsHidden = $('img.item.isotope-hidden').length;
			var numItemsDisp = $('img.item:not(.isotope-hidden)').length;
			var numItemsVisible = $('img.item:not(.isotope-hidden)').length;
			var activeCheck = $('a.active').size();
			if(numItemsHidden != 0 && numItemsDisp != 1) {
				// clear filter
				$filterDisplay.append( '<a onclick="clearAll();" id="reset-filters" class="btn btn-danger btn-sm pull-right filter-btn">Clear All</a>' );
				$filterDisplay.append( '<span class="filter-label data-counter pull-right">'+numItemsDisp+'&nbsp;Restaurants&nbsp;&nbsp;</span>' );
			}
			else if (numItemsHidden != 0 && numItemsDisp === 1) {
				$filterDisplay.append( '<a onclick="clearAll();" id="reset-filters" class="btn btn-danger btn-sm pull-right filter-btn">Clear All</a>' );
				$filterDisplay.append( '<span class="filter-label data-counter pull-right">'+numItemsDisp+'&nbsp;Restaurants&nbsp;&nbsp;</span>' );
			}
			else if (numItemsHidden === 0 && activeCheck > 0) {
				$filterDisplay.append( '<a onclick="clearAll();" id="reset-filters" class="btn btn-danger btn-sm pull-right filter-btn">Clear All</a>' );
				$filterDisplay.append( '<span class="filter-label data-counter pull-right">All Restaurants ('+numItemsDisp+')&nbsp;&nbsp;</span>' );
			}
			else if (numItemsHidden === 0 && activeCheck === 0) {
				$filterDisplay.append( '<span class="filter-label data-counter pull-right">All&nbsp;'+numItemsDisp+'&nbsp;Restaurants</span>' );
			}
			else{ // strictly fall-back - this should never get triggered 
				$filterDisplay.append( '<a onclick="clearAll();" id="reset-filters" class="btn btn-danger btn-sm pull-right filter-btn">Clear All</a>' );
				$filterDisplay.append( '<span class="filter-label data-counter pull-right">'+numItemsDisp+'&nbsp;Restaurants&nbsp;&nbsp;</span>' );
				//console.log("else was triggered"); // <-- uncomment for debugging
			}
	   });
	});
	function getComboFilter( filters ) {
		var i = 0;
		var comboFilters = [];
		var message = [];
		for ( var prop in filters ) {
			message.push( filters[ prop ].join(' ') );
	    	var filterGroup = filters[ prop ];
	    	// skip to next filter group if it doesn't have any values
	    	if ( !filterGroup.length ) {
	      		continue;
	    	}
		    if ( i === 0 ) {
		    	// copy to new array
		      	comboFilters = filterGroup.slice(0);
		    } 
		    else {
				var filterSelectors = [];
		      	// copy to fresh array
				var groupCombo = comboFilters.slice(0); // [ A, B ]
				// merge filter Groups
				for (var k=0, len3 = filterGroup.length; k < len3; k++) {
					for (var j=0, len2 = groupCombo.length; j < len2; j++) {
						filterSelectors.push( groupCombo[j] + filterGroup[k] ); // [ 1, 2 ]
					}
				}
				// apply filter selectors to combo filters for next group
				comboFilters = filterSelectors;
		    }
			i++;
		}
		comboFilters.sort();
	  	var comboFilter = comboFilters.join(', ');
		return comboFilter;
	}
	
});

function clearAll(){
	$('a.active').trigger('click');
	$('#filter-display').empty();
	var numItemsDisp = $('img.item:not(.isotope-hidden)').length;
	$('#filter-display').append( '<span class="filter-label data-counter pull-right">'+numItemsDisp+'&nbsp;Restaurants</span>' );
}