{
  "compilerOptions": {
    "noImplicitAny": true,          <== niedopuszczamy do niejawnego ANY
    "preserveConstEnums": true,     <== zeby enumy dzialaly
    "sourceMap": true,              <== zeby wiedziec w ktorym miejscu w typescripcie jest blad
    "target": "ES6",                <== jakie es celujemy
    "downlevelIteration": true,     <== zeby mozna bylo iterowac po roznych rzeczach
    "module": "CommonJS",           <== modul rozpoznawany przez node'a
    "lib": ["es6"],                 <== blblioeka tutaj es6
    "outDir": "dist",               <== katalog gdzie bedzie produkcyjna wersja aplikacji
    "experimentalDecorators": true, <== jak bedziemy korzystac z dekoratorow
    "emitDecoratorMetadata": true,  <== jak wyzej
    "moduleResolution": "Node",      <== moduly rozwiazywane po node'owemu
    "esModuleInterop": true
  }
}