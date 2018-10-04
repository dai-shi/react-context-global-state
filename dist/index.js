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
  var updaters = {};
  var consumers = {};
  var providers = {};
  Object.keys(initialState).forEach(function (name) {
    var context = _react2.default.createContext(initialState[name]);
    consumers[name] = context.Consumer;
    providers[name] = context.Provider;
  });
  var StateConsumer = function StateConsumer(_ref) {
    var name = _ref.name,
        children = _ref.children;

    var Consumer = consumers[name];
    return _react2.default.createElement(
      Consumer,
      null,
      function (_ref2) {
        var value = _ref2.value,
            update = _ref2.update;
        return children(value, update);
      }
    );
  };
  var StateProvider = function StateProvider(_ref3) {
    var children = _ref3.children;
    return children;
  };
  Object.keys(initialState).forEach(function (name) {
    var InnerProvider = StateProvider;
    var Provider = providers[name];
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
          return _react2.default.createElement(
            Provider,
            { value: this.state },
            _react2.default.createElement(
              InnerProvider,
              null,
              this.children
            )
          );
        }
      }]);

      return StateProvider;
    }(_react2.default.Component);
  });
  var getUpdater = function getUpdater(name) {
    return updaters[name];
  };
  return { StateProvider: StateProvider, StateConsumer: StateConsumer, getUpdater: getUpdater };
};