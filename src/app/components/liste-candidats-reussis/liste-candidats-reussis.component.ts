import { Component, OnInit } from '@angular/core';
import { CandidatInfo } from 'src/app/models/CandidatInfo';
import { Concours } from 'src/app/models/Concours';
import { User } from 'src/app/models/User';
import { CandidatServiceService } from 'src/app/services/candidat-service.service';
import { ConcoursService } from 'src/app/services/concours.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-liste-candidats-reussis',
  templateUrl: './liste-candidats-reussis.component.html',
  styleUrls: ['./liste-candidats-reussis.component.css']
})
export class ListeCandidatsReussisComponent  implements OnInit {

  successfulCandidates: CandidatInfo[] = [];
  selectedConcoursId: number;
  users:User[]
  concours:Concours[]
  constructor(private candidatService: CandidatServiceService,
    private us:UserServiceService, private concoursService: ConcoursService
    ) { }

  ngOnInit() {
    this.candidatService.getSuccessfulCandidat()
      .subscribe(candidates => {
        this.successfulCandidates = candidates;
        this.us.getUsers().subscribe((users)=>{this.users=users})

      });
      this.concoursService.getAllConcours().subscribe(concours=>{this.concours=concours})
      
  }



}
