'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGlobalState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isFunction = function isFunction(fn) {
  return typeof fn === 'function';
};

var createGlobalState = exports.createGlobalState = function createGlobalState(initialState) {
  var consumers = {};
  var updaters = {};
  var StateProvider = function StateProvider(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      children
    );
  };
  Object.keys(initialState).forEach(function (name) {
    var _React$createContext = _react2.default.createContext(initialState[name]),
        Provider = _React$createContext.Provider,
        Consumer = _React$createContext.Consumer;

    consumers[name] = Consumer;
    var InnerProvider = StateProvider;
    StateProvider = function (_React$Component) {
      _inherits(StateProvider, _React$Component);

      function StateProvider() {
        _classCallCheck(this, StateProvider);

        var _this = _possibleConstructorReturn(this, (StateProvider.__proto__ || Object.getPrototypeOf(StateProvider)).call(this));

        updaters[name] = function (func) {
          if (isFunction(func)) {
            _this.setState(function (state) {
              return Object.assign(state, { value: func(state.value) });
            });
          } else {
            _this.setState({ value: func });
          }
        };
        _this.state = { value: initialState[name], update: updaters[name] };
        return _this;
      }

      _createClass(StateProvider, [{
        key: 'render',
        value: function render() {
          var children = this.props.children;

          return _react2.default.createElement(
            Provider,
            { value: this.state },
            _react2.default.createElement(
              InnerProvider,
              null,
              children
            )
          );
        }
      }]);

      return StateProvider;
    }(_react2.default.Component);
  });
  var StateConsumer = function StateConsumer(_ref2) {
    var name = _ref2.name,
        children = _ref2.children;

    var Consumer = consumers[name];
    return _react2.default.createElement(
      Consumer,
      null,
      function (_ref3) {
        var value = _ref3.value,
            update = _ref3.update;
        return children(value, update);
      }
    );
  };
  var getUpdater = function getUpdater(name) {
    return updaters[name];
  };
  return { StateProvider: StateProvider, StateConsumer: StateConsumer, getUpdater: getUpdater };
};