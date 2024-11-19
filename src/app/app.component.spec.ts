import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('1. Deve verificar se o componente foi criado', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`2. Deve verificar se a variável title está com o valor testAngular`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TestandoChamadaFuncao');
  });

  it('3. Verifica se a variável title foi renderizada corretamente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('TestandoChamadaFuncao');
  });

  it('4. Deve chamar a função chamarFuncao ao clicar o botao', () => {
    //Arrange Cria Componente
    const fixture = TestBed.createComponent(AppComponent);
    // Arrange Acessa a instancia do component
    const componentInstance = fixture.componentInstance;
    // Act Espiona a função chamarFuncao na instancia
    spyOn (componentInstance, 'chamarFuncao');
    //Act Simula o clique do botão
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    //Assert Verifica se a função foi chamada
    expect(componentInstance.chamarFuncao).toHaveBeenCalled();
  });

  it('5. Dee verificar a cor do botão inicialmente', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); //Detecta mudanças e renderiza o componente 

    // Selieciona o botão 
    const buttonElement: HTMLButtonElement = 
    fixture.nativeElement.querySelector('button');

    //Obtém os estilos computados do botão
    const buttomStyle = window.getComputedStyle(buttonElement);

    //Verifica se a cor de fundo é azul (rgb para azul)
    expect(buttomStyle.backgroundColor).toBe('rgb(0, 0, 255)'); // azul em RGB

  });

  it('6. Deve verificar o tamanho do objeto meuObjeto', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    //Obter tamanho do objeto
    const tamanhoDoObjeto = app.obterTamanhoDoObjeto();

    //Verificar se o tamanho é 3, pois o objeto tem 3 propriedades
    expect(tamanhoDoObjeto).toBe(3);
    });

    it('7. Deve ter uma div renderizada na tela de 200px por 200px', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const divElement = fixture.nativeElement.querySelector('.tamanho-div');

      //Usa getComputedStyle para acessar os estilos calculados
      const style = window.getComputedStyle(divElement);

      expect (style.width).toBe('200px');
      expect (style.height).toBe('200px');
    });

});
