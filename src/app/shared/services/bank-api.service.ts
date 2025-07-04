import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class BankApiService {

  private bankApiUrl = environment.shellApiUrl;

  constructor(private http: HttpClient) {}

  getAlloperations(): Observable<any> {
    return this.http.get(`${this.bankApiUrl}/Banque/operations`);
  }


  getFilteredOperations(statut: string | null, station: string | null): Observable<any> {
    let params: any = {};
  
    if (statut) params.statut = statut;
    if (station) params.station = station;
  
    return this.http.get(`${this.bankApiUrl}/Banque/banques/filter`, { params });
  }

  addOperation(shell: any): Observable<any> {
    return this.http.post(`${this.bankApiUrl}/Banque/addOperation`, shell);
  }


  updateStatut(id: number) {
    return this.http.put(`${this.bankApiUrl}/Banque/statut/${id}`, {});
  }
  


}
