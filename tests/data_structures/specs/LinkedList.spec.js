/**
  * @venus-code ../../../data_structures/LinkedList.js
  */
describe('LinkedList', function() {
  var list,
      node,
      LIST_PROP_NAME = '_listElements',
      NODE_CONTENT_PROP = '_data';

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
    var node;

    beforeEach(function() {
      node = list.addNode();
    });

    it('should add a new node object to the list', function() {
      expect(node).to.be.an('object');
    });

    it('should increment the list count by 1', function() {
      expect(list.count()).to.greaterThan(0);
    });

    describe('new Node Object', function() {
      it('should not allow direct access to it\'s content', function() {
        expect(node[NODE_CONTENT_PROP]).to.be(undefined);
      });

      it('should return an empty string if content was not passed into addNode', function() {
        expect(node.getData()).to.be('');
      });

      it('should have content equal to what was passed into addNode', function() {
        var test = 'test data';
        node = list.addNode(test);
        expect(node.getData()).to.be(test);
      });

      describe('Node\'s update content method', function() {
        it('should have be a publicly available function', function() {
          expect(node['update']).to.be.a('function');
        });

        it('should allow me to alter the node\'s content', function() {
          var test = 'test data',
              override = 'boom shakalaka';

          node = list.addNode(test);
          node.update(override);
          expect(node.getData()).to.be(override);
        });
      });
    });
  });
});