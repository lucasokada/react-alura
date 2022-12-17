var LinkedLists;
(function (LinkedLists) {
    var Node = /** @class */ (function () {
        function Node(val) {
            this.val = val;
            this.next = null;
        }
        Node.prototype.printNode = function () {
            console.log(this.val);
        };
        return Node;
    }());
    LinkedLists.Node = Node;
    var LinkeList = /** @class */ (function () {
        function LinkeList() {
            this.size = 0;
            this.head = null;
            this.tail = null;
        }
        LinkeList.prototype.printList = function () {
            var _a;
            var listNode = this.head;
            if (listNode != null) {
                while (listNode != ((_a = this.tail) === null || _a === void 0 ? void 0 : _a.next)) {
                    listNode === null || listNode === void 0 ? void 0 : listNode.printNode();
                    listNode = listNode.next;
                }
            }
        };
        LinkeList.prototype.append = function (newNode) {
            if (this.tail != null) {
                this.tail.next = newNode;
                this.tail = this.tail.next;
            }
            else {
                this.head = newNode;
                this.tail = this.head;
                this.head.next = this.tail;
            }
            this.size += 1;
            this.tail.next = null;
        };
        return LinkeList;
    }());
    LinkedLists.LinkeList = LinkeList;
})(LinkedLists || (LinkedLists = {}));
var linkedLists = new LinkedLists.LinkeList();
linkedLists.append(new LinkedLists.Node(4));
linkedLists.append(new LinkedLists.Node(6));
linkedLists.append(new LinkedLists.Node(7));
linkedLists.printList();
var Person = /** @class */ (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    Person.prototype.toString = function () {
        console.log("{name = ".concat(this.name, ", id = ").concat(this.id, "}"));
    };
    return Person;
}());
var linkedLists2 = new LinkedLists.LinkeList();
linkedLists2.append(new LinkedLists.Node(new Person('pessoa1', 1)));
linkedLists2.append(new LinkedLists.Node(new Person('pessoa2', 2)));
linkedLists2.append(new LinkedLists.Node(new Person('pessoa3', 3)));
linkedLists2.printList();
