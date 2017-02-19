$(document).ready(function(){
	var selectors = new Selector_Cache(),
		players = [],
		field = $(window),
		xBoundary = null,
		yBoundary = null;

	window.addEventListener("mousemove",function(){
		movePlayers();
	},false);


	startGame();
	
	/*sets the players in random starting positions*/
	function startGame(){
		(".player").each(function(i){
			players[i] = new Player(this);
			placeRandomly($player);
			$player.show();

		});
	};

	/*stores jquery selectors*/
	function Selector_Cache(){
		var collection = {};//the set of selectors

		function getFromCache(selector){
			if (!collection[selector]){
				collection[selector] = $(selector);
			}
			return collection[selector];
		}

		return {get: getFromCache}

	}

	function Player(player){
		location : player.offset(),
		left : this.location.left,
		right : this.left + player.width(),
		top : this.location.top,
		top : this.location.top + player.height(),
		x : (this.left + player.width()/2),
		y : (this.top + player.width()/2),
		leftInbounds : 
		inBounds() {
			if(playerLocation.left > 0 && playerLocation.top > 0)
		}
	}

	function placeRandomly(item){
		xBoundary =  (field.width() - item.width());
		yBoundary = (field.height() - item.height());
		xCoord = 1+ Math.floor(Math.random() * xBoundary),
		yCoord = 1+  Math.floor(Math.random() * yBoundary);
		$(item).css({"top":yCoord, "left":xCoord});
	}

	function movePlayers(){
		var cursorX = event.pageX;
		var cursorY = event.pageY;
		$(".X").text(cursorX);
		$(".Y").text(cursorY);

		//check how far you are from the mouse - faster if closer
		//divide the screen into quadrants around yourself
		//compare with mouse, move opposite direction
		//away from a wall
		players.each(function(){
			var player = $(this),
				playerLocation = player.offset(),
				playerX = (playerLocation.left + player.width()/2),
				playerY = (playerLocation.top + player.width()/2),
				xDiff = playerX - cursorX,
				yDiff = playerY - cursorY,
				distance = Math.sqrt(Math.pow(xDiff,2)+Math.pow(yDiff,2));


			if(inBounds()){
				console.log("hi");
			}


			function inBounds(){
				return true;
			};

			//console.log(xBoundary);
		});
	}





});