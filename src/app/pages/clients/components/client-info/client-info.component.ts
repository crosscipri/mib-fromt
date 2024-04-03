import { Component } from "@angular/core";
import { ClientsService } from "../../services/clients.service";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterLink, RouterModule } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";
import { ClientResponse } from "../../../../interfaces/clients.interface";

@Component({
  selector: "app-client-info",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: "./client-info.component.html",
  styleUrl: "./client-info.component.scss",
})
export class ClientInfoComponent {
  client$: Observable<ClientResponse | null> = this.route.paramMap.pipe(
    switchMap((params) => {
      const id = params.get("id");
      if (id !== null) {
        return this.clientsService.getClientById(+id);
      }
      return of(null);
    })
  );

  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute
  ) {}
}
