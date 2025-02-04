export default class Cl_mayorE {
    constructor() {
        this.contPersonas= 0;
        this.contPersonasM= 0;
        
    }
    procesarPersona(p) {
        this.contPersonas++;
        if (p.edad >= 18) {
            this.contPersonasM++;
        }
 }
     cantidadPersonas(){
        return this.contPersonas;
     }
 
 
     cantidadPersonasMayoresE() {
    return this.contPersonasM;
 }
 
     porcentajemayoresE() {
    return (this.contPersonasM / this.contPersonas)*100;
 }
}