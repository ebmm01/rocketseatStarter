"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  // Método que é sempre instanciado quando o objeto é criado
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    // Chamar o constructor da classe pai
    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Elias Bernardo';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var Minhalista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  Minhalista.add('Novo todo');
};

Minhalista.mostraUsuario(); //
// Operações com arrays
//

var arr = [1, 2, 3, 4, 5, 8, 9]; // Map: passo e executo uma função por todo os itens da array

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // Reduce:

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // Filter:

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // Find:

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //
// Arrow Functions & valores padrões
//

var newArr2 = arr.map(function (item) {
  return item + 2;
});
console.log(newArr2);

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
}; // 
// Desestruturação
//


var usuario = {
  nome: 'Elias Bernardo',
  idade: 22,
  endereco: {
    cidade: 'Brasília',
    estado: 'DF'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

;
mostraNome(usuario); //
// Rest & spread
//
// Rest
// Exemplo 1

var usuario2 = {
  nome2: 'Elias Bernardo',
  idade: 22,
  empresa: 'Empresa'
};

var nome2 = usuario2.nome2,
    resto = _objectWithoutProperties(usuario2, ["nome2"]);

console.log(nome2);
console.log(resto); // Rest
// Exemplo 2

var arr3 = [1, 2, 3, 4, 5];
var a = arr3[0],
    b = arr3[1],
    c = arr3.slice(2);
console.log(a, b, c); // Rest
// Exemplo 3

function soma_rest() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma_rest(1, 3, 5)); // Spread
// Exemplo 1

var arr_spread = [1, 2, 3];
var arr_spread2 = [4, 5, 6];
var arr_spread3 = [].concat(arr_spread, arr_spread2);
console.log(arr_spread3); // Spread
// Exemplo 2

var usuario_spread = {
  nome: 'Elias Bernardo',
  idade: 22,
  empresa: "EB"
};

var usuario_spread2 = _objectSpread({}, usuario_spread, {
  nome: 'Elias Bernardo Marques Magalhães'
});

console.log(usuario_spread2); //
// Template Literals
//

var nome_template_literals = "Elias Bernardo";
var idade_template_literals = 22; //console.log('Meu nome é '+ nome_template_literals + ' e tenho ' + idade + ' anos.')

console.log(" Meu nome \xE9 ".concat(nome_template_literals, " e tenho ").concat(idade_template_literals, " anos.")); //
// Object Short Syntax
//

var nome_oss = "Elias Bernardo";
var idade_oss = 22;
var usuario_oss = {
  nome_oss: nome_oss,
  // nome_oss: nome_oss,
  idade_oss: idade_oss,
  // idade_oss: idade_oss,
  empresa: "EB"
};
