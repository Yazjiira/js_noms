/* global console */
var YAZ = {};

YAZ.LinkedList = function() {
  var pubAPI,
    Node,
    self = this;

  self._listElements = [];
  self._firstNode = undefined;
  self._lastNode = undefined;

  self._hasCurrentNode = function() {
    return self._lastNode;
  };

  self._addNode = function(content) {
    var node = new Node(content);

    self._listElements.push(node);
    
    if (self._firstNode) {
      self._firstNode = node;
    }

    if (!self._hasCurrentNode) {
      self._lastNode.setNext(node);
    }

    self._lastNode = node;

    return node;
  };

  pubAPI = function() {
    return {
      count: function() {
        return self._listElements.length;
      },

      addNode: self._addNode
    };
  };

  Node = function(content) {
    var self = this;
    self._data = content || '';
    self._nextNode = undefined;

    return {
      nextNode: function() {
        return self._nextNode;
      },

      setNext: function(node) {
        self._nextNode = node;
      },

      getData: function() {
        return self._data;
      },

      update: function(data) {
        self._data = data;
      }
    };
  };

  return pubAPI();
};