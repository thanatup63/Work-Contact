import { Component } from '@angular/core';

interface Worker {
  name: string;
  phone: string;
  skills: string[];
}

@Component({
  selector: 'app-work-contact',
  templateUrl: './work-contact.component.html',
  styleUrls: ['./work-contact.component.css']
})
export class WorkContactComponent {
  workers: Worker[] = [
    { name: 'John Doe', phone: '0812345678', skills: ['คนขุด', 'ฉีดยา'] },
    { name: 'Jane Smith', phone: '0823456789', skills: ['คนตัดต้น'] }
  ];
  availableSkills: string[] = ['คนขุด', 'ฉีดยา', 'คนตัดต้น'];
  searchText: string = '';
  selectedSkill: string = '';

  showModal: boolean = false;
  editMode: boolean = false;
  currentWorker: Worker = { name: '', phone: '', skills: [] };

  get filteredWorkers(): Worker[] {
    return this.workers.filter(worker =>
      (worker.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
       worker.phone.includes(this.searchText)) &&
      (this.selectedSkill === '' || worker.skills.includes(this.selectedSkill))
    );
  }

  openAddWorkerModal() {
    this.editMode = false;
    this.currentWorker = { name: '', phone: '', skills: [] };
    this.showModal = true;
  }

  editWorker(worker: Worker) {
    this.editMode = true;
    this.currentWorker = { ...worker };
    this.showModal = true;
  }

  deleteWorker(worker: Worker) {
    this.workers = this.workers.filter(w => w !== worker);
  }

  saveWorker() {
    if (this.editMode) {
      const index = this.workers.findIndex(w => w.name === this.currentWorker.name && w.phone === this.currentWorker.phone);
      if (index !== -1) {
        this.workers[index] = this.currentWorker;
      }
    } else {
      this.workers.push({ ...this.currentWorker });
    }
    this.closeModal();
  }

  closeModal(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    this.showModal = false;
  }
}
