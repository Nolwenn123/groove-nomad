import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-festival-form',
  templateUrl: './festival-form.component.html',
  styleUrls: ['./festival-form.component.css']
})
export class FestivalFormComponent {
  festivalForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.festivalForm = this.fb.group({
      nom: [''],
      dates: [''],
      genre: [''],
      ville: [''],
      pays: [''],
      lieu: [''],
      capacite: [''],
      siteWeb: [''],
      prixBillet: [''],
      hebergement: [''],
      aeroportProche: [''],
      ambiance: [''],
      remarques: [''],
      typeBillet: [''],
      devise: ['EUR'],
      prixPalier1: [''],
      prixPalier2: [''],
      prixPalier3: [''],
      dateCreation: [''],
    });
  }

  onSubmit() {
    if (this.festivalForm.valid) {
      const formData = this.festivalForm.value;
      
      const makeWebhookUrl = 'https://hook.eu2.make.com/f3splxnnffsnz390mo4knli9v8rvoyli';

      this.http.post(makeWebhookUrl, formData, { responseType: 'text' }).subscribe({
        next: () => {
          alert('Festival ajouté avec succès !');
          this.festivalForm.reset();
        },
        error: (err) => {
          console.error('Erreur lors de l’envoi à Make', err);
          alert('Erreur lors de l’envoi du formulaire.');
        }
      });
    } else {
      alert('Veuillez remplir correctement le formulaire avant de l’envoyer.');
    }
    console.log('FormData envoyé :', this.festivalForm.value);
  }
}
