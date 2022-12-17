namespace LinkedLists {
  type NodeChild<T> = T | null

  export class Node<T> {
    public val: NodeChild<T>
    public next: Node<NodeChild<T>> | null

    constructor(val: T) {
      this.val = val
      this.next = null
    }

    public printNode() {
      console.log(this.val)
    }
  }

  export class LinkeList<T> {
    private head: Node<NodeChild<T>> | null
    private tail: Node<NodeChild<T>> | null
    private size: number

    constructor() {
      this.size = 0
      this.head = null
      this.tail = null
    }

    public printList(): void {
      let listNode: Node<NodeChild<T>> | null = this.head
      if (listNode != null) {
        while (listNode != this.tail?.next) {
          listNode?.printNode()
          listNode = listNode!.next
        }
      }
    }

    public append(newNode: Node<NodeChild<T>>): void {
      if (this.tail != null) {
        this.tail.next = newNode
        this.tail = this.tail.next
      } else {
        this.head = newNode
        this.tail = this.head
        this.head.next = this.tail
      }

      this.size += 1
      this.tail.next = null
    }
  }
}


const linkedLists = new LinkedLists.LinkeList<number>()

linkedLists.append(new LinkedLists.Node(4))
linkedLists.append(new LinkedLists.Node(6))
linkedLists.append(new LinkedLists.Node(7))

linkedLists.printList()

class Person {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }

  public toString() {
    console.log(`{name = ${this.name}, id = ${this.id}}`)
  }
}



const linkedLists2 = new LinkedLists.LinkeList<Person>()
linkedLists2.append(new LinkedLists.Node(new Person('pessoa1', 1)))
linkedLists2.append(new LinkedLists.Node(new Person('pessoa2', 2)))
linkedLists2.append(new LinkedLists.Node(new Person('pessoa3', 3)))
linkedLists2.printList()