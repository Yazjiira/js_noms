/* global console */
var YAZ = {};

YAZ.LinkedList = function() {
  var pubAPI,
    listNode,
    self = this;

  self._listElements = [];

  self._addNode = function() {
    var node = new listNode();

    self._listElements.push(node);

    return node;
  };

  pubAPI = function() {
    return {
      count: function() {
        return self._listElements.length;
      },

      addNode: self._addNode
    }
  };

  listNode = function(content) {
    var self = this;
    self._data = content;

    return {
      nextNode: function() {
        console.log('next node reference');
      },
      getData: function() {
        return self._data;
      }
    };
  };

  return pubAPI();
};