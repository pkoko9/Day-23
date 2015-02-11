var expect = chai.expect;

describe ('basic test', function(){
	it ('should work', function (){
		expect (true).to.equal(true)
	})
})

describe ('PieceModel', function(){
	it ('should have width method', function(){
		var piece = new PieceModel();
		expect (piece.width).to.exist();
	})
	it ('should have height method', function(){
		var piece = new PieceModel();
		expect (piece.height).to.exist();
	})
	it ('should have left method', function(){
		var piece = new PieceModel();
		expect (piece.left).to.exist();
	})
	it ('should have a right method', function(){
		var piece = new PieceModel();
		expect (piece.right).to.exist();
	})
	it ('should have a top method', function(){
		var piece = new PieceModel();
		expect (piece.top).to.exist();
	})
	it ('should have a bottom method', function(){
		var piece = new PieceModel();
		expect (piece.bottom).to.exist();
	})
	it ('should have an iterate matrix method', function(){
		var piece = new PieceModel();
		expect (piece.iterateMatrix).to.exist();
	})
	it ('should have a rotate method', function(){
		var piece = new PieceModel();
		expect (piece.rotate).to.exist();
	})
	it ('should have a move method', function(){
		var piece = new PieceModel();
		expect (piece.move).to.exist();
	})
	it ('should have a drop method'< function (){
		var piece = new PieceModel();
		expect (piece.move).to.exist();
	})

})

describe('PieceView', function() {

	var myPiece = new PieceModel();

	it('should require a model', function() {
		expect(function() {
			var myPieceView = new PieceView();
		}).to.throw('PieceView requires a model.');
	});

	it('should have a render method', function() {
		var myPieceView = new PieceView({model: myPiece});
		expect(myPieceView.render).to.exist();
	});

	it('should render a piece of type=0 and rotation=0 correctly', function() {
		var myPieceModel = new PieceModel({
			type: 0,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('60px');
		expect($box1.css('left')).to.equal('0px');

		var $box2 = myPieceView.$el.children().eq(1);

		expect($box2.css('top')).to.equal('60px');
		expect($box2.css('left')).to.equal('20px');
	});

	it('should render a piece of type=1 and rotation=1 correctly', function (){
		var myPieceModel = new PieceModel({
			type: 1,
			rotation: 1
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(1);

		expect($box1.css('top')).to.equal('0px');
		expect($box1.css('left')).to.equal('20px');
	});

	it('should render a piece of type=2 and rotation=2 correctly', function(){
		var myPieceModel = new PieceModel({
			type: 2,
			rotation: 2
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(0);

		expect($box1.css('top')).to.equal('20px');
		expect($box1.css('left')).to.equal('0px');
	});

	it('should render a piece of type=3 and rotation=3 correctly', function(){
		var myPieceModel = new PieceModel({
			type: 3,
			rotation: 3
		});
		var myPieceView = new PieceView({model: myPieceModel});
		myPieceView.render();

		var $box1 = myPieceView.$el.children().eq(3);

		expect($box1.css('top')).to.equal('40px');
		expect($box1.css('left')).to.equal('20px');
	});

	it('should render a piece of type=4 and rotation=0 correctly', function(){
		var myPieceModel = new PieceModel({
			type: 4,
			rotation: 0
		});
		var myPieceView = new PieceView({model: myPieceModel});

		var $box1 = myPieceView.$el.children().eq(2);

		expect($box1.css('top')).to.equal('40px');
		expect($box1.css('left')).to.equal('20px');
	});

	it('should render a piece of type=4 and rotation=0 correctly', function(){
		var myPieceModel = new PieceModel({
			type: 5,
			rotation: 3
		});
		var myPieceView = new PieceView({model: myPieceModel});

		var $box1 = myPieceView.$el.children().eq(3);

		expect($box1.css('top')).to.equal('40px');
		expect($box1.css('left')).to.equal('20px');
	});
});


