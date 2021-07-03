import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private Url: string = 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    //console.log("12", res);

    let body = res;
    
    //console.log("13")
    return body || {};
    ;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)

    };
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIOS CRUL 
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

  // Método para crear mercancia

  async crearMercancia(Datos): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/mercancia", Datos, httpOptions).toPromise()
    });
  }

  // Método para modificar mercancia

  async updateMercancia(datos): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")

 
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/mercancia", datos, httpOptions).toPromise()
    });
  }

   // Método Listar mercancia 
   getListarMercancia(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/mercancia", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  // Método Listar marcas para el select
  getListarMarcas(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/mercancia/marcas", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  // Método listar tipo de  vehiculo para el select
  getListarTipoVeh(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipoVeh", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  // Método listar marca de  vehiculo para el select
  getListarMarcaVeh(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/marcaVeh", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  // Método listar colores para el select
  getListarColores(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/color", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  // Método Listar conductor para el select
  getListarCon(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/conductor", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  // Método Listar tipo documento para el select
  getListarTipDoc(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipdocu", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  //filtrar mercancia
  getFiltrarMercancia(id): Observable<any> {
    
    return this.http.get(this.Url + "/mercancia" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //filtrar mercancia2
  getFiltrarMercancia2(id): Observable<any> {
    
    return this.http.get(this.Url + "/mercancia2" + id, httpOptions).pipe(
      map(this.extractData));
  }

// metodo paracrear vehiculo
  async crearVehiculo(DatosV): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/vehiculo", DatosV, httpOptions).toPromise()
    });
  }

  async updateVehiculo(datos): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")

 
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/vehiculo", datos, httpOptions).toPromise()
    });
  }

  //filtrar Vehiculo
  getFiltrarVehiculo(id): Observable<any> {
    
    return this.http.get(this.Url + "/vehiculo" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //filtrar Vehiculo2
  getFiltrarVehiculo2(id): Observable<any> {
    
    return this.http.get(this.Url + "/vehiculo2" + id, httpOptions).pipe(
      map(this.extractData));
  }
  
  // Método Listar Vehiculo
  getListarVehiculo(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/vehiculo", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  // metodo paracrear conductor
  async crearConductor(DatosC): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/conductor", DatosC, httpOptions).toPromise()
    });
  }

  //filtrar conductor
  getFiltrarConductor(id): Observable<any> {
    
    return this.http.get(this.Url + "/conductor" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //filtrar conductor2
  getFiltrarConductor2(id): Observable<any> {
    
    return this.http.get(this.Url + "/conductor2" + id, httpOptions).pipe(
      map(this.extractData));
  }

  // Método Listar conductor
  getListarConductor(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/conductor", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  

  async updateConductor(datos): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")

 
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/conductor", datos, httpOptions).toPromise()
    });
  }

  // metodo paracrear envio
  async crearEnvio(DatosE): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/envio", DatosE, httpOptions).toPromise()
    });
  }

  // Método Listar Envio
  getListarEnvio(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/envio", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  async updateEnvio(datos): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")

 
    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/envio", datos, httpOptions).toPromise()
    });
  }

  //filtrar envio

  getFiltrarEnvio(id): Observable<any> {
    
    return this.http.get(this.Url + "/envio" + id, httpOptions).pipe(
      map(this.extractData));
  }

  //filtrar envio para el front end

  getFiltrarEnvio2(id): Observable<any> {
    
    return this.http.get(this.Url + "/envio2" + id, httpOptions).pipe(
      map(this.extractData));
  }

  // Método Listar destino
  getListarDestino(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/destinos", httpOptions).pipe(
      map(this.extractData)      
    );
  }

  //filtrar destino

  getFiltrarDestino(destino): Observable<any> {
    
    return this.http.get(this.Url + "/destinos" + destino, httpOptions).pipe(
      map(this.extractData));
  }

 //informe mercancia

 getInformeMer(d1,d2,d3): Observable<any> {
    
  return this.http.get(this.Url + "/infomercancia" + d1+"/"+d2+"/"+d3, httpOptions).pipe(
    map(this.extractData));
}
  
 //informe vehiculo

 getInformeVeh (d11,d22,d33): Observable<any> {
    
  return this.http.get(this.Url + "/infovehiculo" + d11+"/"+d22+"/"+d33, httpOptions).pipe(
    map(this.extractData));
}


}
