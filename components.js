/**
 * PARA CREAR NUESTROS CUSTOM ELEMENTS:
 * TRABAJAREMOS CON CLASES Y APROVECHAMOS LA API DEL DOM
 * Muy importante poner siempre en el constructor super() para que funcione y no dé errores
 */

class SaludoBasicoElement extends HTMLElement {

    constructor() {
        super();

        this.saludo = 'Hola, como estás';
        this.pintado = false;
    }

    /**
     * lista de eventos más comunes que se pueden usar
     */

    /**
     * con connectedCallback() nos indica cuando se monta o conecta un componente
     */
    connectedCallback() {
        this.pintado = true;
        this.innerHTML = this.saludo;
    }

    /**
     * con disconnectedCallback() nos indica cuando se deja de pintar
     */
    disconnectedCallback() {
        this.pintado = false;
    }

    /**
     * con attributeChangedCallback() nos indica cuando cambia de valor el atributio de un componente
     * que es muy importante declarar el atributo con el static get observedAttributes()
     */
    attributeChangedCallback(nombre, viejoValor, nuevoValor ) {
        if (nombre === 'nombre'){
            this.saludo = `Hola, ${nuevoValor}`;
        }
        if (this.pintado) {
            this.innerHTML = this.saludo;
        }
    }

    /**
     * Aquí declaramos el atributo de nuestro componente que queremos que se observe
     */
    static get observedAttributes(){
        return ['nombre'];
    }
        
}   

/**
 * Es muy importante que usemos este metodo para definir nuestro custom element 
 * necesita dos parametros:
 * el primero es la etiqueta con el nombre con el que queremos llamar a nuestro componente:
 * IMPORTANTE: El nombre de las etiquetas siempre tiene que ser de al menos dos palabras separadas por un guión
 * y el segundo es el nombre de la clase que va actuar a modo de componente
 */

window.customElements.define("saludo-basico", SaludoBasicoElement);