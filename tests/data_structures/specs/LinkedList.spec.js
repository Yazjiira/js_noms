/**
  * @venus-code ../../../data_structures/LinkedList.js
  */
describe('LinkedList', function() {
  var list,
      LIST_PROP_NAME = '_listElements';

  beforeEach(function() {
    list = new YAZ.LinkedList();
  });

  describe('init()', function() {
    it('should return a new LinkedList object', function() {
      expect(list).to.be.a('object');
    });

    it('should return a new LinkedList with an empty list', function() {
      expect(list.count()).to.be(0);
    });

    it('should not allow you to access the list directly', function() {
      expect(list[LIST_PROP_NAME]).to.be(undefined);
    });
  });

  describe('addNode()', function() {
    it('should add a new node object to the list', function() {
      var node = list.addNode();
      expect(node).to.be.an('object');
    });

    it('should increment the list count by 1', function() {
      list.addNode();
      expect(list.count()).to.greaterThan(0);
    });

    describe('new Node Object', function() {
      it('should not allow direct access to it\'s content', function() {

      });

      it('should have no content if content was not passed into addNode', function() {

      });

      it('should have content equal to what was passed into addNode', function() {

      });
    });
  });
});