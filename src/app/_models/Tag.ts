export class Tag{
    forEach(arg0: (filterTag: any) => void) {
      throw new Error('Method not implemented.');
    }
   
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly REACT = new Tag('React', 'blue');
    static readonly SPRINGBOOT = new Tag('Springboot', 'green');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}