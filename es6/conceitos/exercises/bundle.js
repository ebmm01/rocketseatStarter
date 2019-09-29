"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Exercise 1
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.email = email;
    _this.senha = senha;
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()); // false

console.log(Adm1.isAdmin()); // true
// Exercise 2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; // 2.1 

var idades = usuarios.map(function (elem) {
  return elem.idade;
});
console.log("Exercício 2.1:", idades); // 2.2

var filtro = usuarios.filter(function (elem) {
  return elem.idade > 18 && elem.empresa === 'Rocketseat';
});
console.log("Exercício 2.2:", filtro); // 2.3 

var findGoogle = usuarios.find(function (elem) {
  return elem.empresa === "Google";
});
console.log("Exercício 2.3:", findGoogle); // 2.4 

var newArr = usuarios.map(function (elem) {
  elem.idade = elem.idade * 2;
  return elem;
}).filter(function (elem) {
  return elem.idade < 50;
});
console.log("Exercício 2.4: ", newArr); // 3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
console.log("Exercício 3.1: ", arr.map(function (item) {
  return item + 10;
})); // 3.2

var usuario = {
  nome: 'Diego',
  idade: 23
}; // function mostraIdade(usuario) {
//     return usuario.idade;
// };

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log(mostraIdade(usuario)); // 3.3

var nome = "Diego";
var idade = 23; // function mostraUsuario(nome = 'Diego', idade = 18) {
//     return { nome, idade };
// }

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Elias';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 22;
  return {
    nome: nome,
    idade: idade
  };
};

console.log("Exercicio 3.3: ", mostraUsuario(nome, idade));
console.log("Exercicio 3.3: ", mostraUsuario(nome)); // 3.4
// const promise = function() {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log("Exercicio 3.4: ", promise()); // 4.1

var empresa = {
  nome2: 'Rocketseat',
  endereco: {
    cidade2: 'Rio do Sul',
    estado2: 'SC'
  }
};
var nome2 = empresa.nome2,
    _empresa$endereco = empresa.endereco,
    cidade2 = _empresa$endereco.cidade2,
    estado2 = _empresa$endereco.estado2;
console.log("Exercício 4.1: ", nome2, cidade2, estado2); // 4.2 

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log("Exercício 4.2: ", mostraInfo({
  nome: 'Elias',
  idade: 22
})); // 5.1 

var arrNum = [1, 2, 3, 4, 5, 6];
var x = arrNum[0],
    y = arrNum.slice(1);
console.log(x);
console.log(y);

var soma = function soma() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (num, prox) {
    return num + prox;
  });
};

console.log(soma(1, 2, 3)); // 5.2

var usuario3 = {
  nome3: 'Diego',
  idade3: 23,
  endereco3: {
    cidade3: 'Rio do Sul',
    uf3: 'SC',
    pais3: 'Brasil'
  }
};

var usuario_2 = _objectSpread({}, usuario3, {
  nome3: "Não é diego"
});

var usuario_3 = _objectSpread({}, usuario3, {
  endereco3: _objectSpread({}, usuario3.endereco3, {
    cidade3: 'DF'
  })
});

console.log("Exercício 5.2:", usuario_2, usuario_3); // 6

var usuario_tl = 'Diego';
var idade_tl = 23;
console.log("Exerc\xEDcio 6: O usu\xE1rio ".concat(usuario_tl, " possui ").concat(idade_tl, " anos")); // 7 

var nome_oss = 'Diego';
var idade_oss = 23;
var usuario_oss = {
  nome_oss: nome_oss,
  idade_oss: idade_oss,
  cidade: 'Rio do Sul'
};
console.log("Exercício 7:", usuario_oss);
