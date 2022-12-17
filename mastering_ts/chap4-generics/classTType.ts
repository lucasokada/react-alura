class ClassA { }
class ClassB { }

function createClassInstance<T>(arg1: { new(): T }): T { // <-- aqui
  return new arg1()
}

let classInstance = createClassInstance(ClassA)