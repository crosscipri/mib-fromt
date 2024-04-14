import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import {
  ClientResponse,
  PayRate,
} from '../../../../interfaces/clients.interface';
import { ClientsService } from '../../services/clients.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PayRateModalComponent } from '../../components/pay-rate-modal/pay-rate-modal.component';
import { AssignRateModalComponent } from '../../components/assign-rate-modal/assign-rate-modal.component';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss',
})
export class ClientInfoComponent {
  client$: Observable<ClientResponse | null> = this.route.paramMap.pipe(
    switchMap((params): Observable<ClientResponse | null> => {
      const id = params.get('id');
      if (id !== null) {
        return this.clientsService.getClientById(+id);
      }
      return of(null);
    }),
  );

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
  ) {}

  openAddingRateModal(clientId: number | undefined) {
    if (!clientId) {
      return;
    }

    const modalRef = this.modalService.open(AssignRateModalComponent);
    modalRef.componentInstance.clientId = clientId;
    modalRef.dismissed.subscribe(() => {
      this.client$ = this.clientsService.getClientById(clientId);
      this.cdr.detectChanges();
    });
  }
}
