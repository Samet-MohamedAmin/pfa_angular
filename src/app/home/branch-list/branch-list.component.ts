import { Component, OnInit } from '@angular/core';
import { BranchItemInterface } from '../branch-item/branch-item.interface';
import {BranchType, SharedService} from '../../shared/shared.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branchList: BranchItemInterface[] = [{
    code:'GL',
    name: 'Génie Logiciel (GL)',
    image: 'assets/images/computer_01.jpg',
    imageAlt: 'GL_IMAGE',
    description:"La filière Génie Logiciel a pour objectif de former des ingénieurs maîtrisant les méthodes d’analyse et de conduite de projets informatiques ainsi que les langages et les outils menant au développement de logiciels."
  },
  {
    code:'IIA',
    name: 'Informatique Industrielle & Automatique (IIA)',
    image: 'assets/images/circuit_01.jpg',
    imageAlt: 'GL_IMAGE',
    description:"La filière Informatique industrielle et Automatique a pour objectif de former des ingénieurs aptes à maîtriser les outils de production automatisées s’appuyant sur des techniques informatiques de pointe (système temps réel, contrôle, commande, robotique, etc.)"
  },
  {
    code:'IMI',
    name: 'Instrumentation et Maintenance Industrielle (IMI)',
    image: 'assets/images/maintenance_01.jpg',
    imageAlt: 'GL_IMAGE',
    description:"La filière Instrumentation et Maintenance Industrielle a pour objectif de former des ingénieurs capables d’analyser et de traiter de nombreuses mesures imposées par les technologies avancées et assurer dans les entreprises les fonctions de maintenance des installations de fabrication, des processus de production, de la qualité d’un produit et de son entretien."
  },
  {
    code:'RT',
    name: 'Réseaux Informatiques et Télécommunications (RT)',
    image: 'assets/images/network_01.jpg',
    imageAlt: 'GL_IMAGE',
    description:"La filière Réseaux Informatiques et Télécommunications a pour objectif de former des ingénieurs dans les domaines de l’informatique intégrant les moyens de communication dans les différents aspects de transmission de données et les organisations en réseau."
  },
  {
    code:'CH',
    name: 'Chimie Industrielle (CH)',
    image: 'assets/images/chemistry_01.jpg',
    imageAlt: 'GL_IMAGE',
    description:"La filière Chimie Industrielle a pour objectif la formation d’ingénieurs aptes à conduire des activités d’analyses physico-chimiques et d’élaboration de matériaux."
  },
  {
    code:'BIO',
    name: 'Biologie industrielle (BIO)',
    image: 'assets/images/microscope_01.jpg',
    imageAlt: 'GL_IMAGE',
    description:"La filière Biologie industrielle a pour objectif de former des ingénieurs aptes à maîtriser les méthodes d’analyses chimiques et biologiques, dans un secteur industriel, agroalimentaire ou pharmaceutique."
  }];

  constructor(private router:Router) { }
  
  ngOnInit(){
    this.branchList = SharedService.shuffleObject(this.branchList);
  }

  goToBranchTrainings(branchCode){
    this.router.navigate(['training/search'], {queryParams: {branchCode:branchCode}});
  }



}
