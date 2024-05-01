import { Component, OnInit } from '@angular/core';
import {
  ClientData,
  ClientResponse,
  ClientsResponse,
} from '../../interfaces/clients.interface';
import { Observable, first } from 'rxjs';
import { ClientsService } from '../clients/services/clients.service';
import { TrainersResponse } from '../../interfaces/trainer.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  clients: ClientData[] = [];
  totalClients: number = 0;
  totalActiveClients: number = 0;
  percentageActiveClients: number = 0;
  percentageTotalClients: number = 100;
  trainers: any[] = [];
  unpaidClients$: Observable<ClientsResponse> =
    this.clientsService.getUnpaidClients();
  clientsAboutToExpire$: Observable<ClientsResponse> =
    this.clientsService.getClientsAboutToExpire();

  constructor(private clientsService: ClientsService) {}

  ngOnInit() {
    this.getTrainers();
    this.getClientsAboutToExpire();
  }

  getClientsAboutToExpire() {
    this.clientsService.getClientsAboutToExpire().subscribe((clients) => {
      console.log('about to expire', clients);
    });
  }

  getClients() {
    this.clientsService
      .getClients()
      .pipe(first())
      .subscribe((clients: ClientsResponse) => {
        this.clients = clients.data;
        this.calculateClientMetrics();
        this.assignClientsToTrainers();
        this.calculateTrainerMetrics();
      });
  }

  getTrainers() {
    this.clientsService
      .getTrainers()
      .pipe(first())
      .subscribe((trainers: TrainersResponse) => {
        this.trainers = trainers.data;
        this.getClients();
      });
  }

  calculateClientMetrics() {
    this.totalClients = this.clients.length;
    this.totalActiveClients = this.clients.filter(
      (client) => client.rate !== null,
    ).length;

    this.percentageActiveClients =
      (this.totalActiveClients / this.totalClients) * 100;

    this.percentageTotalClients = 100 - this.percentageActiveClients;
  }

  assignClientsToTrainers() {
    this.trainers.forEach((trainer) => (trainer.clientsWithRate = 0));

    this.clients.forEach((client) => {
      if (client.rate !== null) {
        const trainer = this.trainers.find(
          (trainer) => trainer.id === client.client.trainer?.id,
        );
        if (trainer) {
          trainer.clientsWithRate++;
        }
      }
    });
  }

  calculateTrainerMetrics() {
    this.trainers.forEach((trainer) => {
      trainer.percentageOfTotalClients =
        (trainer.clientsWithRate / this.totalClients) * 100;
    });

    this.trainers.sort((a, b) => b.clientsWithRate - a.clientsWithRate);
  }

  getDaysLeft(date: string): number {
    const endDate = new Date(Date.parse(date));
    const now = new Date();
    const diffInTime = endDate.getTime() - now.getTime();
    const diffInDays = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
    return diffInDays;
  }
}
